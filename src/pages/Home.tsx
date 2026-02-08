
import React from 'react';
import { Link } from 'react-router-dom';
import { zhCN } from '../locales/zh-CN';

export const Home: React.FC = () => {
    return (
        <div className="modern-home">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <section className="hero-section">
                    <div className="hero-card" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <img src="/logo.svg" alt="Chrocy Logo" className="hero-logo" />
                        <header>
                            <h1 className="title" style={{
                                marginBottom: '2rem',
                                fontWeight: '800',
                                background: 'linear-gradient(to right, #4fcaef, #fff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-2px'
                            }}>
                                Markdown 教程
                            </h1>
                            <h2 className="subtitle" style={{
                                color: 'var(--text-muted)',
                                fontWeight: '400'
                            }}>
                                基于 <span style={{ color: '#4fcaef', fontWeight: 'bold' }}>CommonMark</span> 标准
                                <br />
                                {zhCN.ui_home_subtitle}
                            </h2>
                        </header>

                        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <Link to="/tutorial/1-1" className="button btn-modern btn-start-lesson">
                                {zhCN.ui_start_lesson}
                            </Link>
                        </div>

                        <div className="chrocy-badge">
                            {zhCN.ui_translated_by}
                        </div>
                    </div>

                    {/* Syntax Reference Section */}
                    <section className="reference-section" style={{ paddingBottom: '8rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                            <h3 style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '2px', color: '#4fcaef' }}>{zhCN.ui_reference}</h3>
                            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                        </div>

                        <div className="reference-grid" style={{
                            background: 'var(--glass-bg)',
                            borderRadius: '24px',
                            border: '1px solid var(--glass-border)',
                            overflow: 'hidden'
                        }}>
                            <table className="u-full-width" style={{ margin: 0, color: 'var(--text-main)', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--glass-border)' }}>
                                        <th style={{ padding: '1.5rem 2rem' }}>输入</th>
                                        <th style={{ padding: '1.5rem 2rem' }}>渲染结果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { input: '_斜体_ 或 *斜体*', output: <em>斜体</em> },
                                        { input: '__加粗__ 或 **加粗**', output: <strong>加粗</strong> },
                                        { input: '# 一级标题', output: <h1 style={{ fontSize: '2rem', margin: 0 }}>标题</h1> },
                                        { input: '[链接](http://...)', output: <a href="#" style={{ color: '#4fcaef' }}>链接</a> },
                                        { input: '![图片](...)', output: <span style={{ color: 'var(--text-muted)' }}>🖼️ 图片</span> },
                                        { input: '> 引用块', output: <blockquote style={{ margin: 0, borderColor: '#4fcaef' }}>引用</blockquote> },
                                        { input: '- 列表项', output: <ul style={{ margin: 0 }}><li>列表项目</li></ul> },
                                        { input: '`行内代码`', output: <code>行内代码</code> },
                                        { input: '---', output: <hr style={{ margin: '1rem 0' }} /> },
                                    ].map((row, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                            <td style={{ padding: '1.2rem 2rem', fontFamily: 'monospace', color: '#ffd700' }}>{row.input}</td>
                                            <td style={{ padding: '1.2rem 2rem' }}>{row.output}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.6 }}>
                            <h3>{zhCN.ui_what_is_markdown}</h3>
                            <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>{zhCN.ui_markdown_desc}</p>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};
