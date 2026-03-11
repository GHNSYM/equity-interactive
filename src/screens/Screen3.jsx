import React, { useState, useEffect } from 'react';
import { Card } from '../components/helpers';
import { fmt } from '../components/helpers';


// ─── SCREEN 3 ────────────────────────────────────────────────────────────────
export default function Screen3({ businessMetrics, onNext, t }) {
  const [show, setShow] = useState(false);
  const [income, setIncome] = useState(businessMetrics.initialIncome);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (!show) return;
    const target = businessMetrics.expandedIncome;
    const step = Math.ceil((target - businessMetrics.initialIncome) / 20);
    const iv = setInterval(() => {
      setIncome(prev => {
        if (prev >= target) { clearInterval(iv); return target; }
        return Math.min(prev + step, target);
      });
    }, 50);
    return () => clearInterval(iv);
  }, [show]);

  const benefits = [
    { icon: "🎓", label: t.s3Mentor, desc: t.s3MentorDesc, color: "purple" },
    { icon: "🌐", label: t.s3Market, desc: t.s3MarketDesc, color: "blue" },
    { icon: "💰", label: t.s3Capital, desc: t.s3CapitalDesc(fmt(businessMetrics.requiredInvestment)), color: "emerald" },
  ];
  const colorMap = { purple: "border-purple-500 bg-purple-50", blue: "border-blue-500 bg-blue-50", emerald: "border-emerald-500 bg-emerald-50" };

  return (
    <div className="px-4 py-6 space-y-5">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-3">
          <span className="text-emerald-600 text-sm font-semibold">Step 3 of 5</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900">{t.s3Title}</h2>
      </div>

      {/* Before / After */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t.s3Before}</p>
          <div className="text-4xl mb-2">🏪</div>
          <p className="text-xs font-semibold text-gray-600 mb-1">{t.s3Small}</p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
            <p className="text-lg font-black text-amber-700">₹{fmt(businessMetrics.initialIncome)}</p>
            <p className="text-xs text-amber-600">/month</p>
          </div>
        </Card>
        <div className={`rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-4 text-center transition-all duration-700 ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">{t.s3After}</p>
          <div className="text-4xl mb-2">🏬</div>
          <p className="text-xs font-semibold text-gray-600 mb-1">{t.s3Big}</p>
          <div className="bg-emerald-200 border border-emerald-300 rounded-xl px-3 py-2">
            <p className="text-lg font-black text-emerald-800">₹{fmt(Math.floor(income))}</p>
            <p className="text-xs text-emerald-700">/month</p>
          </div>
          <p className="text-xs text-emerald-600 font-semibold mt-2">{t.s3WithQuiver}</p>
        </div>
      </div>

      {/* Benefits */}
      {show && (
        <Card className="p-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">💼 {t.s3Brings}</p>
          <div className="space-y-3">
            {benefits.map(b => (
              <div key={b.label} className={`flex items-start gap-3 p-3 rounded-xl border-l-4 ${colorMap[b.color]}`}>
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{b.label}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Quote */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 text-center">
        <p className="text-sm italic text-blue-800 font-semibold leading-relaxed">{t.s3Quote}</p>
      </div>

      <button onClick={onNext}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black py-4 rounded-2xl text-base hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-200">
        {t.s3CTA}
      </button>
      <div className="h-4" />
    </div>
  );
}