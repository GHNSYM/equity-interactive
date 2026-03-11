import React, { useState } from 'react';
import { fmt } from '../components/helpers';
import { PillBadge } from '../components/helpers';

// ─── SCREEN 2 ────────────────────────────────────────────────────────────────
export default function Screen2({ businessMetrics, onChooseLoan, onChoosePartnership, t }) {
  const [selected, setSelected] = useState(null);
  const inv = businessMetrics.requiredInvestment;
  const income = businessMetrics.initialIncome;

  const proceed = () => {
    if (selected === "loan") onChooseLoan();
    else if (selected === "partner") onChoosePartnership();
  };

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

      {/* Loan Option */}
      <div onClick={() => setSelected("loan")}
        className={`relative rounded-2xl border-2 p-5 cursor-pointer transition-all duration-200 ${selected === "loan" ? "border-red-400 bg-red-50 shadow-md" : "border-gray-200 bg-white hover:border-red-300"}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-xl">🏦</div>
          <div>
            <h3 className="font-black text-gray-900">{t.s2Loan}</h3>
            <p className="text-xs text-gray-500">{t.s2LoanSub}</p>
          </div>
          <div className="ml-auto">
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selected === "loan" ? "border-red-500 bg-red-500" : "border-gray-300"}`}>
              {selected === "loan" && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600">{t.s2LoanDesc}</p>
      </div>

      {/* Partnership Option */}
      <div onClick={() => setSelected("partner")}
        className={`relative rounded-2xl border-2 p-5 cursor-pointer transition-all duration-200 ${selected === "partner" ? "border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-100" : "border-emerald-200 bg-white hover:border-emerald-400"}`}>
        {selected !== "partner" && (
          <div className="absolute -top-3 left-4">
            <PillBadge label={`✓ ${t.s2PartnerBadge}`} color="green" />
          </div>
        )}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">🤝</div>
          <div>
            <h3 className="font-black text-gray-900">{t.s2Partner}</h3>
            <p className="text-xs text-gray-500">{t.s2PartnerSub}</p>
          </div>
          <div className="ml-auto">
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selected === "partner" ? "border-emerald-500 bg-emerald-500" : "border-gray-300"}`}>
              {selected === "partner" && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
          </div>
        </div>
        <div className="bg-emerald-100 border border-emerald-300 rounded-xl px-4 py-2 mb-3">
          <p className="text-sm font-bold text-emerald-800">{t.s2PartnerDesc}</p>
        </div>
        {selected === "partner" && (
          <div className="grid grid-cols-3 gap-2 mt-3">
            {[["💰","Capital"],["🎓","Mentor"],["🌐","Market"]].map(([icon, label]) => (
              <div key={label} className="bg-white rounded-xl p-2 text-center border border-emerald-100">
                <div className="text-xl mb-1">{icon}</div>
                <p className="text-xs font-bold text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div className="flex gap-3">
          <button onClick={() => setSelected(null)}
            className="px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-all">
            {t.s2Change}
          </button>
          <button onClick={proceed}
            className={`flex-1 py-3 rounded-xl font-black text-white transition-all shadow-lg ${selected === "loan" ? "bg-red-500 hover:bg-red-600 shadow-red-200" : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200"}`}>
            {selected === "loan" ? t.s2SeeEMI : t.s2Continue}
          </button>
        </div>
      )}
      <div className="h-4" />
    </div>
  );
}
