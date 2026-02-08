
import React from 'react';
import { Link } from 'react-router-dom';
// We will import CSS in the main App or index.css, so classes are globally available 

export const Header: React.FC = () => {
    return (
        <header className="main-header" style={{ padding: '1.5rem 0', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--glass-border)', position: 'sticky', top: 0, zIndex: 100 }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1000px' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '12px' }}>
                    <img src="/logo.svg" alt="Logo" style={{ width: '32px', height: '32px' }} />
                    <span style={{
                        fontSize: '1.4rem',
                        fontWeight: '800',
                        background: 'linear-gradient(to right, #4fcaef, #fff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.5px'
                    }}>
                        Chrocy
                    </span>
                </Link>
            </div>
        </header>
    );
};
