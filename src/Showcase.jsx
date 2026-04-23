import React, { useState } from 'react';
import './Showcase.css';

/* ── Tab Data ─────────────────────────────────── */
const tabs = [
    { key: 'education',   label: 'Education',   icon: '📜'},
    { key: 'skills',      label: 'Skills',       icon: '🛠️' },
    { key: 'certificate', label: 'Certificate',  icon: '🏆' },
    { key: 'project',     label: 'Project',      icon: '🚀' },
];

const skills = [
    { name: 'Html',               level: 95, icon: <i class="fa-brands fa-html5"></i> , tag: 'Frontend' },
    { name: 'CSS & Animations',   level: 85, icon: '✨',  tag: 'Frontend' },
    { name: 'React & JavaScript', level: 90, icon: '⚛️',  tag: 'Frontend' },
    { name: 'UI/UX Design',       level: 80, icon: '🎨',  tag: 'Design'   },
    { name: 'Postgresql',         level: 65, icon: '🍃',  tag: 'Database' },
];

const certificates = [
    { title: 'React Developer Certification', org: 'Meta',         year: '2024', color: '#61dafb' },
];

const projects = [
    {
        title: 'Portfolio Website',
        desc: 'Animated personal site with dark-mode toggle and glassmorphism design system.(This site)',
        tech: ['React'],
        icon: '🌐',
        status: 'Live',
    },
    {
        title: 'QR Payment System',
        desc: 'Generate & verify Bakong KHQR codes in the browser using the official SDK.',
        tech: ['React', 'Express', 'khqr-sdk'],
        icon: '📲',
        status: 'In Progress',
    },
];

const statusColor = {
    Live:        '#4ade80',
    'In Progress': '#facc15',
    Planning:    '#94a3b8',
};

/* ── Component ────────────────────────────────── */
const Showcase = () => {
    const [activeTab, setActiveTab] = useState('skills');

    return (
        <div className="showcase-page">
            {/* Hero */}
            <div className="showcase-hero">
                <h1 className="showcase-title">What I Bring to the Table</h1>
                <p className="showcase-subtitle">
                    A curated look at my skills, earned certifications, and projects I'm proud of.
                </p>
            </div>

            {/* Tab Bar */}
            <div className="showcase-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        id={`tab-${tab.key}`}
                        className={`stab-btn ${activeTab === tab.key ? 'stab-btn--active' : ''}`}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        <span className="stab-icon">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="showcase-content" key={activeTab}>

                {/* ── SKILLS TAB ── */}
                {activeTab === 'skills' && (
                    <div className="skills-wrapper">
                        {skills.map((skill, i) => (
                            <div
                                className="skill-row"
                                key={i}
                                style={{ animationDelay: `${i * 0.07}s` }}
                            >
                                <div className="skill-left">
                                    <span className="skill-emoji">{skill.icon}</span>
                                    <div>
                                        <p className="skill-name">{skill.name}</p>
                                        <span className="skill-tag">{skill.tag}</span>
                                    </div>
                                </div>
                                <div className="skill-right">
                                    <div className="sbar-track">
                                        <div
                                            className="sbar-fill"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                    <span className="skill-pct">{skill.level}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ── CERTIFICATE TAB ── */}
                {activeTab === 'certificate' && (
                    <div className="cert-wrapper">
                        {certificates.map((cert, i) => (
                            <div
                                className="cert-card"
                                key={i}
                                style={{
                                    animationDelay: `${i * 0.07}s`,
                                    '--cert-color': cert.color,
                                }}
                            >
                                <div className="cert-ribbon" />
                                <div className="cert-body">
                                    <div className="cert-badge">📜</div>
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <p className="cert-org">{cert.org}</p>
                                    <span className="cert-year">{cert.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ── PROJECT TAB ── */}
                {activeTab === 'project' && (
                    <div className="proj-wrapper">
                        {projects.map((proj, i) => (
                            <div
                                className="proj-card"
                                key={i}
                                style={{ animationDelay: `${i * 0.07}s` }}
                            >
                                <div className="proj-top">
                                    <span className="proj-icon">{proj.icon}</span>
                                    <span
                                        className="proj-status"
                                        style={{ color: statusColor[proj.status] }}
                                    >
                                        ● {proj.status}
                                    </span>
                                </div>
                                <h3 className="proj-title">{proj.title}</h3>
                                <p className="proj-desc">{proj.desc}</p>
                                <div className="proj-tech">
                                    {proj.tech.map((t, j) => (
                                        <span className="tech-pill" key={j}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'education' && (
                        <div className='edu-wrapper'>
                            <div className='edu-container con1'>
                                <img src="sovannaphumi.png" alt="sovannaphumi" style={{width: 70}} />
                                <p>I completed my primary and secondary education from Grade 1 to Grade 12 at <a href="https://www.sovannaphumi.edu.kh/"><b>Sovannaphumi School.</b></a></p>
                            </div>
                            
                            <div className='edu-container con2'>
                                <img src="setecimg.png" alt="Setec" style={{width: 80}} />
                                <p>Studying in major MIS at <a href="https://setecu.com"><b>Setec</b></a> Institude "Currently at year 1"</p>

                                

                            </div>
                            


                        </div>
                    )
                    }
            </div>
        </div>
    );
};

export default Showcase;
