import React from 'react';
import { fmt } from '../components/helpers';
import { PillBadge } from '../components/helpers';

// ─── SCREEN 2 ────────────────────────────────────────────────────────────────
export default function Screen2({ businessMetrics, onChooseLoan, onChoosePartnership, t }) {
  const inv = businessMetrics.requiredInvestment;
  const income = businessMetrics.initialIncome;

  return (
    <div className="px-4 py-6 space-y-5">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-3">
          <span className="text-blue-600 text-sm font-semibold">Step 2 of 5</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900">{t.s2Title(fmt(inv))}</h2>
        <p className="text-sm text-gray-500 mt-1">{t.s2Sub}</p>
        <p className="text-xs text-emerald-600 font-semibold mt-2 bg-emerald-50 rounded-full px-3 py-1 inline-block">{t.s2Income(fmt(income))}</p>
      </div>

      {/* Side-by-side comparison */}
      <div className="grid grid-cols-2 gap-3">
        {/* Bank Loan */}
        <div className="rounded-2xl border-2 border-red-200 bg-white p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-lg">🏦</div>
              <div>
                <h3 className="font-black text-gray-900 text-sm">{t.s2Loan}</h3>
                <p className="text-[11px] text-gray-500">{t.s2LoanSub}</p>
              </div>
            </div>
            <p className="text-[11px] text-gray-500 font-semibold mb-1">How it works:</p>
            <ul className="space-y-1.5 text-[11px] text-gray-600">
              <li>• {t.s2LoanDesc}</li>
              <li>• Fixed EMI every month from your profit</li>
              <li>• Bank gets paid even in slow months</li>
            </ul>
          </div>
          <button
            onClick={onChooseLoan}
            className="mt-3 w-full py-2.5 rounded-xl font-black text-white bg-red-500 hover:bg-red-600 shadow-md shadow-red-200 text-xs transition-all"
          >
            {t.s2SeeEMI}
          </button>
        </div>

        {/* Quiver Partnership */}
        <div className="rounded-2xl border-2 border-emerald-300 bg-white p-4 relative flex flex-col justify-between">
          <div>
            <div className="absolute -top-3 left-3">
              <PillBadge label={`✓ ${t.s2PartnerBadge}`} color="green" />
            </div>
            <div className="flex items-center gap-2 mb-2 mt-1">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-lg">🤝</div>
              <div>
                <h3 className="font-black text-gray-900 text-sm">{t.s2Partner}</h3>
                <p className="text-[11px] text-gray-500">{t.s2PartnerSub}</p>
              </div>
            </div>
            <p className="text-[11px] text-gray-500 font-semibold mb-1">How it works:</p>
            <ul className="space-y-1.5 text-[11px] text-gray-600">
              <li>• {t.s2PartnerDesc}</li>
              <li>• No fixed EMI, partner earns when you earn</li>
              <li>• Support with capital, mentor & markets</li>
            </ul>
          </div>
          <button
            onClick={onChoosePartnership}
            className="mt-3 w-full py-2.5 rounded-xl font-black text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-200 text-xs transition-all"
          >
            {t.s2Continue}
          </button>
        </div>
      </div>
      <div className="h-4" />
    </div>
  );
}
