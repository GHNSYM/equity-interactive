import React, { useState } from 'react';
import { Card } from '../components/helpers';
import { fmt } from '../components/helpers';

// ─── SCREEN 4 ────────────────────────────────────────────────────────────────
export default function Screen4({ businessMetrics, onNext, t }) {
  const [showDetail, setShowDetail] = useState(false);
  const royaltyPct = 3;
  const monthlySales = businessMetrics.currentSales;
  const monthlyRevenue = businessMetrics.expandedIncome;
  const royalty = Math.round((monthlySales * royaltyPct) / 100);
  const ownerEarns = monthlyRevenue - royalty;

  const PieChart = ({ you, partner, size = 100 }) => {
    const r = 38;
    const circ = 2 * Math.PI * r;
    const youDash = (you / 100) * circ;
    const partnerDash = (partner / 100) * circ;
    return (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <circle cx="50" cy="50" r={r} fill="none" stroke="#10B981" strokeWidth="13"
          strokeDasharray={`${youDash} ${circ}`} transform="rotate(-90 50 50)" />
        {partner > 0 && (
          <circle cx="50" cy="50" r={r} fill="none" stroke="#3B82F6" strokeWidth="13"
            strokeDasharray={`${partnerDash} ${circ}`} strokeDashoffset={-youDash}
            transform="rotate(-90 50 50)" />
        )}
        <text x="50" y="54" textAnchor="middle" fontSize="16" fontWeight="900" fill="#1F2937">
          {you}%
        </text>
      </svg>
    );
  };

  return (
    <div className="px-4 py-6 space-y-5">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-3">
          <span className="text-purple-600 text-sm font-semibold">Step 4 of 5</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900">{t.s4Title}</h2>
      </div>

      {/* Pie charts */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t.s4Before}</p>
          <div className="flex justify-center mb-3"><PieChart you={100} partner={0} /></div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1.5">
            <p className="text-sm font-black text-emerald-700">{t.s4YouBefore}</p>
          </div>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t.s4After}</p>
          <div className="flex justify-center mb-3"><PieChart you={85} partner={15} /></div>
          <div className="space-y-1">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1">
              <p className="text-xs font-black text-emerald-700">{t.s4YouAfter}</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-3 py-1">
              <p className="text-xs font-black text-blue-700">{t.s4Partner}</p>
            </div>
          </div>
        </Card>
      </div>

      <p className="text-xs text-center text-gray-500 px-2">{t.s4Clarify(royaltyPct)}</p>

      {/* Key Insight */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 rounded-2xl p-4">
        <p className="font-black text-gray-800 text-sm mb-1">✨ {t.s4Key}</p>
        <p className="text-sm text-gray-700 font-semibold leading-relaxed">
          {t.s4KeyDesc(royaltyPct).split("SALES").map((part, i, arr) =>
            i < arr.length - 1 ? <span key={i}>{part}<span className="text-orange-600 font-black">SALES</span></span> : part
          )}
        </p>
        <p className="text-xs text-gray-500 mt-2 italic">{t.s4KeySub}</p>
      </div>

      {/* Earnings breakdown */}
      <Card className="overflow-hidden">
        <div className="px-4 pt-4 pb-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{t.s4Sales}</span>
            <span className="font-bold text-gray-800">₹{fmt(monthlySales)}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-500">{t.s4Revenue}</span>
            <span className="font-bold text-gray-800">₹{fmt(monthlyRevenue)}</span>
          </div>
        </div>
        <div className="h-px bg-gray-100 mx-4" />
        <div className="p-4 space-y-3">
          <div onClick={() => setShowDetail(!showDetail)}
            className="flex justify-between items-center bg-emerald-50 border border-emerald-200 rounded-xl p-3 cursor-pointer hover:bg-emerald-100 transition-all">
            <div className="flex items-center gap-2">
              <span className="text-xl">👨‍💼</span>
              <span className="text-sm font-bold text-gray-700">{t.s4YouKeep}</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-emerald-700">₹{fmt(ownerEarns)}</p>
              <p className="text-xs text-emerald-500">tap for details</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-blue-50 border border-blue-200 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤝</span>
              <span className="text-sm font-bold text-gray-700">{t.s4PartnerGets}</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-blue-700">₹{fmt(royalty)}</p>
              <p className="text-xs text-blue-500">{t.s4Royalty}</p>
            </div>
          </div>
          {showDetail && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 space-y-1 text-xs text-gray-600">
              <p>Partner royalty = {royaltyPct}% × ₹{fmt(monthlySales)} (sales) = ₹{fmt(royalty)}</p>
              <p>You earn = ₹{fmt(monthlyRevenue)} (profit) − ₹{fmt(royalty)} (royalty) = ₹{fmt(ownerEarns)}</p>
              <p className="text-emerald-600 font-bold">✓ You kept ₹{fmt(ownerEarns)} while growing 80%!</p>
            </div>
          )}
        </div>
      </Card>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-4 text-center">
        <p className="text-sm italic text-purple-800 font-semibold">{t.s4Quote}</p>
      </div>

      <button onClick={onNext}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black py-4 rounded-2xl text-base hover:opacity-90 transition-all shadow-lg shadow-purple-200">
        {t.s4CTA}
      </button>
      <div className="h-4" />
    </div>
  );
}

