import React from 'react';

export default function Screen5({ businessMetrics, onRestart, t }) {
  return (
    <div className="px-4 py-6 flex flex-col gap-5">

      {/* Hero */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-3">
          <span className="text-purple-600 text-sm font-semibold">Final Step</span>
        </div>
        <h2 className="text-3xl font-black text-gray-900 leading-tight tracking-tight mt-4">
          {t.s5JourneyTitle}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
            {t.s5JourneyHighlight}
          </span>
        </h2>
        <p className="text-sm text-gray-500 mt-6 max-w-[18rem] mx-auto">
          {t.s5JourneySub}
        </p>
      </div>

      {/* Two main CTAs */}
      <div className="space-y-3 pt-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.s5GetStarted}</p>

        {/* Primary — Onboarding */}
        <a
          href="https://app.quiver.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl p-4 shadow-lg shadow-emerald-200 active:scale-98 transition-all"
        >
          <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <p className="font-black text-sm">{t.s5ApplyTitle}</p>
            <p className="text-emerald-100 text-xs mt-0.5">{t.s5ApplySub}</p>
          </div>
          <svg className="w-4 h-4 text-emerald-200 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Secondary — Website */}
        <a
          href="https://www.quiver.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm active:scale-98 transition-all"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <p className="font-black text-sm text-gray-800">{t.s5LearnTitle}</p>
            <p className="text-gray-400 text-xs mt-0.5">{t.s5LearnSub}</p>
          </div>
          <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-300 font-semibold">{t.s5Or}</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Restart */}
      <button
        onClick={onRestart}
        className="w-full py-3.5 rounded-2xl text-sm font-bold text-gray-400 border border-gray-100 hover:bg-gray-50 transition-all"
      >
        {t.s5Restart}
      </button>

      <div className="h-4" />
    </div>
  );
}