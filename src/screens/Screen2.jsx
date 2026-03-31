import React from 'react';
import { fmt } from '../components/helpers';

// ─── SCREEN 2 ────────────────────────────────────────────────────────────────
export default function Screen2({ businessMetrics, onChooseLoan, onChoosePartnership, t }) {
  const inv = businessMetrics.requiredInvestment;
  const income = businessMetrics.initialIncome;

  return (
    <div className="px-4 py-6 space-y-5">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-3">
          <span className="text-blue-600 text-sm font-semibold">Step 2 of 4</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900">{t.s2Title(fmt(inv))}</h2>
        <p className="text-sm text-gray-500 mt-1">{t.s2Sub}</p>
        <p className="text-xs text-emerald-600 font-semibold mt-2 bg-emerald-50 rounded-full px-3 py-1 inline-block">{t.s2Income(fmt(income))}</p>
      </div>

      {/* Table comparison */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-50 to-emerald-50 border-b border-gray-200">
          <div className="grid grid-cols-3 items-center">
            <div className="px-3 py-2 text-xs font-bold text-gray-600 uppercase tracking-wider border-r border-gray-200">
              {/* Topic */}
            </div>
            <div className="px-3 py-2 text-center text-xs font-black text-red-600 uppercase tracking-wider border-r border-gray-200">
              {t.s2Loan}
            </div>
            <div className="px-3 py-2 text-center text-xs font-black text-emerald-600 uppercase tracking-wider">
              {t.s2Partner}
            </div>
          </div>
        </div>

        <div>
          {[
            { key: "capital", label: t.s2TblCapital, loan: true, partner: true },
            { key: "collateral", label: t.s2TblCollateral, loan: true, partner: false },
            { key: "fixedEmi", label: t.s2TblFixedEmi, loan: true, partner: false },
            { key: "mentorship", label: t.s2TblMentorship, loan: false, partner: true },
            { key: "educationTools", label: t.s2TblEducationTools, loan: false, partner: true },
            { key: "marketLinkage", label: t.s2TblMarketLinkage, loan: false, partner: true },
          ].map((r) => (
            <div key={r.key} className="grid grid-cols-3 items-center border-b border-gray-200">
              <div className="px-3 py-2 text-sm font-semibold text-gray-800 border-r border-gray-200">
                {r.label}
              </div>
              <div className={`px-3 py-2 text-center font-black border-r border-gray-200 ${r.loan ? "text-emerald-600" : "text-red-500"}`}>
                {r.loan ? "✓" : "✕"}
              </div>
              <div className={`px-3 py-2 text-center font-black ${r.partner ? "text-emerald-600" : "text-red-500"}`}>
                {r.partner ? "✓" : "✕"}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={onChooseLoan}
          className="w-full py-3 rounded-xl font-black text-white bg-red-500 hover:bg-red-600 shadow-md shadow-red-200 text-xs transition-all"
        >
          {t.s2SeeEMI}
        </button>
        <button
          onClick={onChoosePartnership}
          className="w-full py-3 rounded-xl font-black text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-200 text-xs transition-all"
        >
          {t.s2Continue}
        </button>
      </div>
      <div className="h-4" />
    </div>
  );
}
