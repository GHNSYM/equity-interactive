import React from 'react';
import { Card, fmt } from '../components/helpers';

// ─── LOAN PREP ────────────────────────────────────────────────────────────────
export default function LoanPrep({ onRestart, t }) {
  const tips = [
    { icon: "📊", label: t.lp1Title, desc: t.lp1Desc, color: "blue" },
    { icon: "💳", label: t.lp2Title, desc: t.lp2Desc, color: "green" },
    { icon: "📄", label: t.lp3Title, desc: t.lp3Desc, color: "purple" },
    { icon: "🏦", label: t.lp4Title, desc: t.lp4Desc, color: "amber" },
  ];
  const borderColors = { blue: "border-blue-400", green: "border-emerald-400", purple: "border-purple-400", amber: "border-amber-400" };
  const bgColors = { blue: "bg-blue-50", green: "bg-emerald-50", purple: "bg-purple-50", amber: "bg-amber-50" };

  return (
    <div className="px-4 py-6 space-y-5">
      <div className="text-center">
        <div className="text-5xl mb-3">📋</div>
        <h2 className="text-2xl font-black text-gray-900">{t.lpTitle}</h2>
        <p className="text-sm text-gray-500 mt-1">{t.lpSub}</p>
      </div>

      <Card className="p-5 space-y-4">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.lpWhat}</p>
        {tips.map(tip => (
          <div key={tip.label} className={`flex gap-3 p-3 rounded-xl border-l-4 ${borderColors[tip.color]} ${bgColors[tip.color]}`}>
            <span className="text-2xl">{tip.icon}</span>
            <div>
              <p className="font-bold text-gray-800 text-sm">{tip.label}</p>
              <p className="text-xs text-gray-600 mt-0.5">{tip.desc}</p>
            </div>
          </div>
        ))}
      </Card>

      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4">
        <p className="text-sm text-gray-800"><span className="font-black">💡 </span>{t.lpTip}</p>
      </div>

      <button onClick={onRestart}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black py-4 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-blue-200">
        🔁 {t.lpRestart}
      </button>
      <div className="h-4" />
    </div>
  );
}