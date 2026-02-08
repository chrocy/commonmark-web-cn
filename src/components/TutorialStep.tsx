
import React, { useState, useEffect } from 'react';
import { MarkdownEditor } from './MarkdownEditor';
import { TutorialStep as StepType } from '../data/tutorialData';
import { normalizeAnswer, normalizeMarkdown, renderMarkdown } from '../utils/markdown';
import confetti from 'canvas-confetti';
import { zhCN } from '../locales/zh-CN';

// Helper to get text from locale key
const getLocaleText = (key: string) => {
    return (zhCN as any)[key] || key;
}

interface TutorialStepProps {
    step: StepType;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export const TutorialStep: React.FC<TutorialStepProps> = ({ step, onNext, onPrev, isFirst, isLast }) => {
    const [isSuccess, setIsSuccess] = useState(false);
    // Key to force re-render of editor when step changes to reset state
    // Or we can rely on MarkdownEditor's useEffect

    // Current editor content
    const [currentContent, setCurrentContent] = useState(step.initialText);

    // Reset success state when step changes
    useEffect(() => {
        setIsSuccess(false);
        setCurrentContent(step.initialText);
    }, [step]);

    const handleContentChange = (content: string, html: string) => {
        setCurrentContent(content);

        // Primary check: Exact or normalized Markdown match
        const userMarkdown = normalizeMarkdown(content);
        const targetMarkdown = normalizeMarkdown(step.correctMarkdown);

        // Secondary check: Rendered HTML match (for flexibility)
        // We now render the target HTML from correctMarkdown instead of hardcoding it in locales
        const targetHtml = normalizeAnswer(renderMarkdown(step.correctMarkdown));
        const userHtml = normalizeAnswer(html);

        if (!isSuccess && (userMarkdown === targetMarkdown || userHtml === targetHtml)) {
            setIsSuccess(true);
            triggerSuccess();
        }
    };

    const triggerSuccess = () => {
        const messages = [
            getLocaleText('success_generic'),
            getLocaleText('success_random_1'),
            getLocaleText('success_random_2'),
            getLocaleText('success_random_3')
        ];
        const message = messages[Math.floor(Math.random() * messages.length)];

        // Create animation overlay
        const container = document.createElement('div');
        container.className = 'success-animation-container';

        // Background glow
        const glow = document.createElement('div');
        glow.className = 'success-glow';
        container.appendChild(glow);

        const textWrapper = document.createElement('div');
        textWrapper.className = 'success-burst-text';

        // Split text into individual letters for shattering
        message.split('').forEach((char: string, i: number) => {
            const span = document.createElement('span');
            span.className = 'success-letter';
            span.innerText = char === ' ' ? '\u00A0' : char;
            span.style.setProperty('--index', i.toString());

            // Random explosion vectors
            const tx = (Math.random() * 800 - 400);
            const ty = (Math.random() * 400 + 200); // Positive because it will fall
            const rot = (Math.random() * 1080 - 540);

            span.style.setProperty('--tx', `${tx}px`);
            span.style.setProperty('--ty', `${ty}px`);
            span.style.setProperty('--rot', `${rot}deg`);

            textWrapper.appendChild(span);
        });

        container.appendChild(textWrapper);
        document.body.appendChild(container);

        // Trigger shattering after the rise animation completes
        setTimeout(() => {
            const letters = container.querySelectorAll('.success-letter');
            letters.forEach(l => l.classList.add('shatter'));

            // Mix in some colorful particles for better decomposition feel
            confetti({
                particleCount: 50,
                spread: 80,
                origin: { y: 0.5 },
                colors: ['#6366f1', '#a855f7', '#4fcaef', '#ffd700'],
                gravity: 0.8,
                scalar: 0.7
            });
        }, 1000);

        // Cleanup DOM after animation ends
        setTimeout(() => {
            container.remove();
        }, 3500);
    };

    const handleShowHint = () => {
        setCurrentContent(step.correctMarkdown);
    };

    const handleReset = () => {
        setCurrentContent(step.initialText);
    };

    return (
        <div className="section tutorial-step">
            <div className="container" style={{ marginBottom: '2rem' }}>

                {/* Instruction Area */}
                <div className="row exercise-instructions" style={{ marginBottom: '2rem' }}>
                    <div className="twelve columns">
                        <div style={{
                            background: 'rgba(79, 202, 239, 0.05)',
                            borderLeft: '4px solid #4fcaef',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            color: 'var(--text-main)',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            lineHeight: '1.4'
                        }}>
                            {getLocaleText(step.instructionKey)}
                        </div>
                    </div>
                </div>

                {/* Editor Area */}
                <MarkdownEditor
                    initialValue={currentContent}
                    onContentChange={handleContentChange}
                />

                <div className="row tutorial-buttons-container" style={{ marginTop: '2rem', display: 'flex', gap: '20px' }}>
                    {/* Left Column - Tools */}
                    <div className="six columns" style={{ flex: 1 }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="button btn-outline btn-hint" onClick={handleShowHint} style={{ flex: 1, height: '50px' }}>
                                {getLocaleText('ui_show_hint')}
                            </button>
                            <button className="button btn-outline btn-reset" onClick={handleReset} style={{ flex: 1, height: '50px' }}>
                                {getLocaleText('ui_reset')}
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Navigation */}
                    <div className="six columns" style={{ flex: 1 }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                className="button btn-outline"
                                onClick={onPrev}
                                style={{ flex: 1, height: '50px' }}
                            >
                                {isFirst ? getLocaleText('ui_home') : getLocaleText('ui_previous_lesson')}
                            </button>

                            <button
                                className={`button btn-modern ${isSuccess ? 'button-urgent' : ''}`}
                                onClick={onNext}
                                style={{ flex: 1, height: '50px' }}
                            >
                                {isLast ? getLocaleText('ui_home') : getLocaleText('ui_next_lesson')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
