import React, { useState } from 'react';
import { Card } from '../components/helpers';
import { fmt } from '../components/helpers';

// ─── SCREEN 1 ────────────────────────────────────────────────────────────────
export default function Screen1({ onNext, onUpdateMetrics, businessMetrics, t }) {
  const [sales, setSales] = useState(businessMetrics.currentSales.toString());
  const [margin, setMargin] = useState(businessMetrics.profitMargin.toString());
  const [investment, setInvestment] = useState(businessMetrics.requiredInvestment.toString());

  const s = parseInt(sales) || 0;
  const m = parseInt(margin) || 0;
  const inv = parseInt(investment) || 0;
  const monthlyProfit = Math.round((s * m) / 100);
  const months = monthlyProfit > 0 ? Math.ceil(inv / monthlyProfit) : 0;
  const years = Math.round(months / 12);

  const problems = [];
  if (m > 0 && m < 25) problems.push(t.s1Problem1(m));
  if (years > 1 && inv > 0) problems.push(t.s1Problem2(years));
  problems.push(t.s1Problem3());

  const handleProceed = () => {
    const profit = Math.round((s * m) / 100);
    onUpdateMetrics({
      currentSales: s || 50000,
      profitMargin: m || 20,
      requiredInvestment: inv || 500000,
      initialIncome: profit || 10000,
      expandedIncome: Math.round((profit || 10000) * 1.8),
    });
    setTimeout(onNext, 150);
  };

  return (
    <div className="px-4 py-6 space-y-5">
      {/* Hero */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-3">
          <span className="text-emerald-600 text-sm font-semibold">Step 1 of 5</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 leading-tight">{t.s1Title}</h2>
        <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">{t.s1Sub}</p>
      </div>

      {/* Input Card */}
      <Card className="p-5 space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.s1Sales}</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 font-bold">₹</span>
            <input type="number" value={sales} onChange={e => setSales(e.target.value)}
              className="w-full pl-8 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 font-semibold transition-all"
              placeholder="50000" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.s1Margin}</label>
          <div className="relative">
            <input type="number" value={margin} onChange={e => setMargin(e.target.value)}
              className="w-full pl-4 pr-8 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 font-semibold transition-all"
              placeholder="20" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">{t.s1MarginHint}</p>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.s1Investment}</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 font-bold">₹</span>
            <input type="number" value={investment} onChange={e => setInvestment(e.target.value)}
              className="w-full pl-8 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 font-semibold transition-all"
              placeholder="500000" />
          </div>
        </div>
      </Card>

      {/* Live Result Card */}
      {monthlyProfit > 0 && (
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-5 py-3">
            <p className="text-emerald-100 text-xs font-semibold uppercase tracking-wider">{t.s1Profit}</p>
            <p className="text-white text-3xl font-black">₹{fmt(monthlyProfit)}</p>
          </div>
          <div className="p-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{t.s1Challenges}</p>
            <div className="space-y-2">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{p}</p>
                </div>
              ))}
            </div>
            {months > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <p className="text-sm font-bold text-amber-700">{t.s1Insight(months, fmt(inv))}</p>
                <p className="text-xs text-gray-400 mt-1">{t.s1InsightSub(years)}</p>
              </div>
            )}
          </div>
        </Card>
      )}

      <button onClick={handleProceed}
        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-black py-4 rounded-2xl text-base hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 shadow-lg shadow-emerald-200 active:scale-98">
        {t.s1CTA}
      </button>
      <div className="h-4" />
    </div>
  );
}