import React from 'react';

export default function Landing({ onStart, t }) {
  return (
    <div className="h-full px-4 pt-6 pb-4 flex flex-col overflow-hidden relative">
      {/* Soft floating background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-100/70 rounded-full blur-3xl" />
        <div className="absolute top-24 -left-10 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-10 w-64 h-64 bg-purple-100/60 rounded-full blur-3xl" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex-1 py-16 flex flex-col items-center justify-center text-center">
        <h2 className="mt-2 p-4 text-4xl sm:text-5xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-green-600">
          {t.landingTitle}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-[18rem] mx-auto">
          {t.landingSub}
        </p>  

        {/* Feature cards */}
        <div className="mt-8 flex gap-3 w-full">
          {/* Funding */}
          <div className="flex-1 bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-3 flex flex-col items-center gap-2 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md shadow-emerald-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v2m0 8v2M9 9.5A2.5 2.5 0 0 1 12 7a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 3-2.5" />
              </svg>
            </div>
            <span className="text-xs font-bold text-gray-700">Funding</span>
          </div>

          {/* Guidance */}
          <div className="flex-1 bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-3 flex flex-col items-center gap-2 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 1 7 7c0 4-3.5 7-7 10C8.5 16 5 13 5 9a7 7 0 0 1 7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <span className="text-xs font-bold text-gray-700">Guidance</span>
          </div>

          {/* Tools */}
          <div className="flex-1 bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-3 flex flex-col items-center gap-2 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-md shadow-purple-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3L2 7l10 4 10-4-10-4z" />
                <path d="M2 17l10 4 10-4" />
                <path d="M2 12l10 4 10-4" />
              </svg>
            </div>
            <span className="text-xs font-bold text-gray-700">Tools</span>
          </div>
        </div>
      </div>

      {/* Bottom-pinned Continue button */}
      <button
        onClick={onStart}
        className="relative z-10 w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-black py-4 rounded-2xl text-base hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 shadow-lg shadow-emerald-200 active:scale-98 shrink-0 mt-10"
      >
        {t.landingCTA}
      </button>
    </div>
  );
}