
'use client';

import React, { useState, useEffect } from 'react';

export function Generator() {
    const [username, setUsername] = useState('oregand');
    const [theme, setTheme] = useState('classic');
    const [copied, setCopied] = useState(false);
    const [origin, setOrigin] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setOrigin(window.location.origin);
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const embedUrl = `${origin}/api/calendar?username=${username}&theme=${theme}`;
    const markdownCode = `![GitLab Activity](${embedUrl})`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(markdownCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const themes = [
        { id: 'classic', name: 'GitLab Green', colors: ['bg-[#161b22]', 'bg-[#104d2c]', 'bg-[#1b7d41]', 'bg-[#28a745]', 'bg-[#39d353]'] },
        { id: 'dark', name: 'GitLab Dark', colors: ['bg-[#161b22]', 'bg-[#104d2c]', 'bg-[#1b7d41]', 'bg-[#28a745]', 'bg-[#39d353]'] },
        { id: 'blue', name: 'Sky Blue', colors: ['bg-[#161b22]', 'bg-[#2a4481]', 'bg-[#456db1]', 'bg-[#6293d6]', 'bg-[#a5d0ff]'] },
        { id: 'orange', name: 'Warm Orange', colors: ['bg-[#161b22]', 'bg-[#5c2d1b]', 'bg-[#92400e]', 'bg-[#f97316]', 'bg-[#fde047]'] },
    ];

    return (
        <div className="w-full space-y-12">
            {/* Configuration Section: Vertical Stack */}
            <div className="max-w-4xl mx-auto space-y-10">
                {/* 1. Username input (Full Width) */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">GitLab Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-black/40 border border-gray-800 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-xl text-emerald-100 placeholder:text-gray-700"
                        placeholder="e.g. oregand"
                    />
                </div>

                {/* 2. Theme selector (4 in a row) */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Select Theme</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id)}
                                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all ${theme === t.id ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.1)] scale-[1.02]' : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'
                                    }`}
                            >
                                <span className="text-[10px] font-bold uppercase tracking-widest">{t.name}</span>
                                <div className="flex gap-1.5">
                                    {t.colors.map((c, i) => (
                                        <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
                                    ))}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3. Embed Code (Redesigned to avoid overlap) */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Markdown Link</label>
                    <div className="flex flex-col md:flex-row gap-4">
                        <pre className="flex-grow bg-black/60 border border-gray-800 rounded-2xl p-6 font-mono text-[11px] text-emerald-200/60 whitespace-pre-wrap break-all leading-relaxed">
                            {markdownCode}
                        </pre>
                        <button
                            onClick={copyToClipboard}
                            className="shrink-0 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 active:scale-95 text-black font-bold py-4 px-8 rounded-2xl text-sm transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20"
                        >
                            {copied ? (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M5 13l4 4L19 7" /></svg>
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                                    Copy Link
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Preview Section - Bottom */}
            <div className="space-y-6 pt-12 border-t border-gray-800/50">
                <h3 className="text-[11px] font-bold text-gray-500 text-center uppercase tracking-[0.4em]">Live Preview</h3>
                <div className="bg-[#0b0e14] border border-gray-800/30 rounded-3xl p-10 overflow-x-auto flex flex-col items-center min-h-[260px] shadow-2xl">
                    <div className="w-full max-w-full overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                        <div className="min-w-fit mx-auto">
                            <img
                                src={embedUrl}
                                alt="GitLab Contribution Calendar"
                                className="max-w-none filter drop-shadow-[0_0_50px_rgba(16,185,129,0.08)]"
                                key={`${username}-${theme}`}
                                style={{ imageRendering: 'crisp-edges' }}
                            />
                        </div>
                    </div>
                    <p className="mt-8 text-[10px] text-gray-700 font-mono tracking-[0.3em] font-medium">REAL-TIME DATA • FETCHED FROM GITLAB</p>
                </div>
            </div>
        </div>
    );
}
