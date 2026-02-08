
import React, { useEffect, useState } from 'react';
import { renderMarkdown } from '../utils/markdown';
import classNames from 'classnames';

interface MarkdownEditorProps {
    initialValue: string;
    onContentChange: (content: string, html: string) => void;
    className?: string; // Add className prop
}

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
    initialValue,
    onContentChange,
    className
}) => {
    const [content, setContent] = useState(initialValue);
    const [html, setHtml] = useState('');

    // Update effect when initialValue changes (e.g. reset/next lesson)
    useEffect(() => {
        setContent(initialValue);
        const rendered = renderMarkdown(initialValue);
        setHtml(rendered);
        onContentChange(initialValue, rendered);
    }, [initialValue]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newContent = e.target.value;
        setContent(newContent);
        const newHtml = renderMarkdown(newContent);
        setHtml(newHtml);
        onContentChange(newContent, newHtml);
    };

    return (
        <div className={classNames("row editor-preview-container", className)} style={{ gap: '20px', display: 'flex' }}>
            {/* Editor Pane */}
            <div className="six columns" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    background: 'rgba(255,255,255,0.08)',
                    padding: '8px 15px',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    border: '1px solid var(--glass-border)',
                    borderBottom: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#4fcaef',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    编辑区 (Markdown)
                </div>
                <textarea
                    className="editor u-full-width"
                    value={content}
                    onChange={handleChange}
                    style={{
                        minHeight: '200px',
                        fontFamily: 'Roboto Mono, monospace',
                        background: 'rgba(0,0,0,0.3)',
                        color: '#ffd700',
                        border: '1px solid var(--glass-border)',
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px',
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        padding: '15px',
                        lineHeight: '1.6',
                        resize: 'vertical'
                    }}
                />
            </div>

            {/* Preview Pane */}
            <div className="six columns" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    background: 'rgba(255,255,255,0.08)',
                    padding: '8px 15px',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    border: '1px solid var(--glass-border)',
                    borderBottom: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#4fcaef',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    预览区 (Result)
                </div>
                <div
                    className="render-pad"
                    style={{
                        minHeight: '200px',
                        fontFamily: 'Roboto Mono, monospace',
                        background: 'var(--glass-bg)',
                        color: 'var(--text-main)',
                        border: '1px solid var(--glass-border)',
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px',
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        padding: '15px',
                        overflowY: 'auto'
                    }}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
};
