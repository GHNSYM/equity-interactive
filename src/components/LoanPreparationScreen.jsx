import React from 'react';

export default function LoanPrep({ onContinueEquity, t }) {
  const schemes = [
    { name: t.lpScheme1Name, desc: t.lpScheme1Desc, url: "https://www.jansamarth.in",        color: "emerald" },
    { name: t.lpScheme2Name, desc: t.lpScheme2Desc, url: "https://udyamregistration.gov.in", color: "blue"    },
    { name: t.lpScheme3Name, desc: t.lpScheme3Desc, url: "https://www.startupindia.gov.in",  color: "purple"  },
  ];

  const colorMap = {
    emerald: { card: "bg-emerald-50 border-emerald-200", icon: "bg-emerald-500", text: "text-emerald-700" },
    blue:    { card: "bg-blue-50 border-blue-200",       icon: "bg-blue-500",    text: "text-blue-700"    },
    purple:  { card: "bg-purple-50 border-purple-200",   icon: "bg-purple-500",  text: "text-purple-700"  },
  };

  return (
    <div className="px-4 py-6 space-y-5">

      {/* Hero */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-3">
          <span className="text-blue-600 text-sm font-semibold">Goverment Portals</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 leading-tight">{t.lpExploreTitle}</h2>
        <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">{t.lpExploreSub}</p>
      </div>

      {/* Links */}
      <div className="space-y-3">
        {schemes.map(({ name, desc, url, color }) => {
          const c = colorMap[color];
          return (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 border rounded-2xl p-4 ${c.card} active:scale-98 transition-all`}
            >
              <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center shrink-0`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-black text-sm ${c.text}`}>{name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
              </div>
              <svg className={`w-4 h-4 shrink-0 ${c.text}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          );
        })}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 text-center px-2">{t.lpDisclaimer}</p>

      {/* Equity CTA */}
      <button
        onClick={onContinueEquity}
        className="w-full py-4 rounded-2xl text-base font-black border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all duration-200 active:scale-98"
      >
        {t.lpContinueEquity}
      </button>

      <div className="h-4" />
    </div>
  );
}