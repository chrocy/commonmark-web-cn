
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TutorialStep } from '../components/TutorialStep';
import { tutorialData } from '../data/tutorialData';
import { zhCN } from '../locales/zh-CN';

// Helper to get all step IDs in order
// We assume the keys in tutorialData are sorted or we define an explicit order
// For now, let's explicit sort or list them. The keys "1-1", "1-2" etc sort naturally string-wise mostly.
const stepIds = Object.keys(tutorialData).sort();

export const Tutorial: React.FC = () => {
    const { stepId } = useParams<{ stepId: string }>();
    const navigate = useNavigate();

    // Redirect to first step if no ID
    React.useEffect(() => {
        if (!stepId) {
            navigate(`/tutorial/${stepIds[0]}`);
        }
    }, [stepId, navigate]);

    if (!stepId || !tutorialData[stepId]) {
        return <div>Step not found</div>;
    }

    const currentStepIndex = stepIds.indexOf(stepId);
    const currentStep = tutorialData[stepId];

    const handleNext = () => {
        if (currentStepIndex < stepIds.length - 1) {
            navigate(`/tutorial/${stepIds[currentStepIndex + 1]}`);
        } else {
            // Finished
            navigate('/');
        }
    };

    const handlePrev = () => {
        if (currentStepIndex > 0) {
            navigate(`/tutorial/${stepIds[currentStepIndex - 1]}`);
        } else {
            navigate('/');
        }
    };

    // Extract lesson number for Title (e.g. "1-2" -> Lesson 1)
    const lessonNum = stepId.split('-')[0];
    const lessonTitleKey = `lesson_${lessonNum}_title` as keyof typeof zhCN;
    const lessonDescKey = `lesson_${lessonNum}_desc` as keyof typeof zhCN;

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    // Type safe locale getter
    const getLocale = (key: string) => (zhCN as any)[key] || key;

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <div className={`modern-home ${mobileMenuOpen ? 'nav-is-visible' : ''}`} style={{ minHeight: '100vh', paddingBottom: '4rem', position: 'relative' }}>

            {/* Mobile Nav Trigger */}
            <a className={`cd-nav-trigger ${mobileMenuOpen ? 'menu-is-open' : ''}`} onClick={toggleMenu}>
                <span></span>
            </a>

            {/* Sidebar Navigation (Desktop Dots + Mobile Overlay) */}
            {/* Sidebar Navigation (Desktop Dots + Mobile Overlay) */}
            <aside className={`tutorial-sidebar ${mobileMenuOpen ? 'mobile-visible' : ''}`}>
                <div className="sidebar-scroll-container">
                    {/* Navigation Items */}
                    <div className="sidebar-item" onClick={() => navigate('/')}>
                        <div className="dot" style={{ borderColor: 'var(--accent-color)' }} />
                        <span className="label" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
                            {zhCN.ui_home}
                        </span>
                    </div>

                    <div style={{ height: '1px', background: 'var(--glass-border)', margin: '1rem 0 1rem 1rem' }} />

                    {stepIds.map((id, index) => {
                        const isActive = id === stepId;
                        const lNum = id.split('-')[0];
                        const lTitleKey = `lesson_${lNum}_title`;
                        return (
                            <div
                                key={id}
                                className={`sidebar-item ${isActive ? 'active' : ''}`}
                                onClick={() => {
                                    navigate(`/tutorial/${id}`);
                                    setMobileMenuOpen(false);
                                }}
                            >
                                <div className="dot" />
                                <span className="label">
                                    {getLocale(lTitleKey)} - {getLocale(`ex_${id.replace('-', '_')}_sub`)}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </aside>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="row noselect">
                    <div className="twelve columns tutorial-header" style={{ textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: '4rem',
                            marginBottom: '1rem',
                            background: 'linear-gradient(to right, #4fcaef, #fff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: '800',
                            letterSpacing: '-1px'
                        }}>
                            {getLocale(lessonTitleKey)} - {getLocale(`ex_${stepId.replace('-', '_')}_sub`)}
                        </h1>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '1.4rem',
                            fontWeight: '400',
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            {getLocale(lessonDescKey)}
                        </p>
                    </div>
                </div>
            </div>

            <TutorialStep
                step={currentStep}
                onNext={handleNext}
                onPrev={handlePrev}
                isFirst={currentStepIndex === 0}
                isLast={currentStepIndex === stepIds.length - 1}
            />
        </div>
    );
};
