import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../components/helpers';
import { fmt } from '../components/helpers';

export default function Screen1({ onNext, onUpdateMetrics, businessMetrics, t }) {
  const hasVisited = businessMetrics?.screen1Visited;

  const [sales, setSales] = useState(() =>
    hasVisited && Number.isFinite(businessMetrics?.currentSales) && businessMetrics.currentSales > 0
      ? String(businessMetrics.currentSales) : ""
  );
  const [margin, setMargin] = useState(() =>
    hasVisited && Number.isFinite(businessMetrics?.profitMargin) && businessMetrics.profitMargin > 0
      ? String(businessMetrics.profitMargin) : ""
  );
  const [investment, setInvestment] = useState(() =>
    hasVisited && Number.isFinite(businessMetrics?.requiredInvestment) && businessMetrics.requiredInvestment > 0
      ? String(businessMetrics.requiredInvestment) : ""
  );

  const salesRef = useRef(null);
  const marginRef = useRef(null);
  const investmentRef = useRef(null);

  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();
    const refs = [salesRef, marginRef, investmentRef];
    refs.forEach(ref => {
      ref.current?.addEventListener('wheel', preventScroll, { passive: false });
    });
    return () => {
      refs.forEach(ref => {
        ref.current?.removeEventListener('wheel', preventScroll);
      });
    };
  }, []);

  useEffect(() => {
    const s = sales.trim() ? parseInt(sales, 10) : NaN;
    const m = margin.trim() ? parseInt(margin, 10) : NaN;
    const inv = investment.trim() ? parseInt(investment, 10) : NaN;

    onUpdateMetrics({
      screen1Visited: true,
      currentSales: Number.isFinite(s) ? s : undefined,
      profitMargin: Number.isFinite(m) ? m : undefined,
      requiredInvestment: Number.isFinite(inv) ? inv : undefined,
    });
  }, [sales, margin, investment]);

  const s = sales.trim() ? parseInt(sales, 10) : NaN;
  const m = margin.trim() ? parseInt(margin, 10) : NaN;
  const inv = investment.trim() ? parseInt(investment, 10) : NaN;

  const baseFilled = Number.isFinite(s) && s > 0 && Number.isFinite(m) && m > 0 && Number.isFinite(inv) && inv > 0;
  const computedProfit = baseFilled ? Math.round((s * m) / 100) : 0;
  const allFilled = baseFilled && computedProfit > 0;

  const monthlyProfit = computedProfit;
  const months = monthlyProfit > 0 ? Math.ceil(inv / monthlyProfit) : 0;

  const handleProceed = () => {
    if (!allFilled) return;
    const profit = Math.round((s * m) / 100);
    onUpdateMetrics({
      screen1Visited: true,
      currentSales: s,
      profitMargin: m,
      requiredInvestment: inv,
      initialIncome: profit,
      expandedIncome: Math.round(profit * 1.8),
    });
    setTimeout(onNext, 150);
  };

  return (
    <div className="px-4 py-6 space-y-5">
      <style>{`
        .no-spinners::-webkit-outer-spin-button,
        .no-spinners::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        .no-spinners { -moz-appearance: textfield; }
      `}</style>

      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-3">
          <span className="text-emerald-600 text-sm font-semibold">Step 1 of 4</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 leading-tight">{t.s1Title}</h2>
        <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">{t.s1Sub}</p>
      </div>

      <Card className="p-5 space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.s1Sales}</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 font-bold">₹</span>
            <input ref={salesRef} type="number" value={sales} onChange={e => setSales(e.target.value)}
              className="no-spinners w-full pl-8 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 font-semibold transition-all"
              placeholder="50000" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.s1Margin}</label>
          <div className="relative">
            <input ref={marginRef} type="number" value={margin} onChange={e => setMargin(e.target.value)}
              className="no-spinners w-full pl-4 pr-8 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 font-semibold transition-all"
              placeholder="20" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">{t.s1MarginHint}</p>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.s1Investment}</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 font-bold">₹</span>
            <input ref={investmentRef} type="number" value={investment} onChange={e => setInvestment(e.target.value)}
              className="no-spinners w-full pl-8 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 font-semibold transition-all"
              placeholder="500000" />
          </div>
        </div>
      </Card>

      {allFilled && monthlyProfit > 0 && (
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-5 py-3">
            <p className="text-emerald-100 text-xs font-semibold uppercase tracking-wider">{t.s1Profit}</p>
            <p className="text-white text-3xl font-black">₹{fmt(monthlyProfit)}</p>
          </div>
          <div className="p-4">
            {months > 0 && (
              <div className="text-center">
                <p className="text-sm font-bold text-amber-700">
                  {months < 4 ? t.s2Insight(months, fmt(inv)) : t.s1Insight(months, fmt(inv))}
                </p>
              </div>
            )}
          </div>
        </Card>
      )}

      <button onClick={handleProceed} disabled={!allFilled}
        className={`w-full py-4 rounded-2xl text-base font-black transition-all duration-200 shadow-lg active:scale-98
          ${allFilled ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-emerald-200" : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"}`}>
        {t.s1CTA}
      </button>
      <div className="h-4" />
    </div>
  );
}