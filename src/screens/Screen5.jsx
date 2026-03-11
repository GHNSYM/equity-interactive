import React, { useState, useEffect } from 'react';
import { Card, fmt, PillBadge } from '../components/helpers';

// ─── SCREEN 5 ────────────────────────────────────────────────────────────────
export default function Screen5({ businessMetrics, onRestart, t }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 400); }, []);

  const growth = Math.round(((businessMetrics.expandedIncome - businessMetrics.initialIncome) / businessMetrics.initialIncome) * 100);

  const shareText = `🎊 मैंने अपना व्यवसाय बढ़ाया / I grew my business!\n\n• Income: ₹${fmt(businessMetrics.initialIncome)} → ₹${fmt(businessMetrics.expandedIncome)}/month\n• Growth: ${growth}%\n\nLearn how Quiver equity partnerships help rural entrepreneurs grow!\n#RuralEntrepreneur #Quiver #BusinessGrowth`;

  const shareWA = () => window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
  const copyText = () => { navigator.clipboard.writeText(shareText); setCopied(true); setTimeout(() => setCopied(false), 2500); };

  return (
    <div className="px-4 py-6 space-y-5">
      {/* Celebration Hero */}
      <div className="bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 rounded-3xl p-6 text-center text-white shadow-xl shadow-orange-200">
        <div className="text-6xl mb-2" style={{ animation: "bounce 1s infinite" }}>🎉</div>
        <h2 className="text-2xl font-black">{t.s5Complete}</h2>
        <p className="text-orange-100 text-sm mt-1">{t.s5Sub}</p>
      </div>

      {/* Impact Cards */}
      {show && (
        <div className="space-y-3">
          <Card className="p-4 border-l-4 border-emerald-500">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📈</span>
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{t.s5Growth}</p>
                <p className="font-black text-gray-900 text-base">₹{fmt(businessMetrics.initialIncome)} → ₹{fmt(businessMetrics.expandedIncome)}/mo</p>
                <PillBadge label={`+${growth}% Growth`} color="green" />
              </div>
            </div>
          </Card>
          <Card className="p-4 border-l-4 border-blue-500">
            <div className="flex items-center gap-3">
              <span className="text-3xl">👥</span>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{t.s5Jobs}</p>
                <p className="font-black text-gray-900">{t.s5JobsVal}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Brand Quote */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-700 rounded-2xl p-5 text-center shadow-lg">
        <p className="text-white font-black text-base leading-relaxed">{t.s5Brand}</p>
      </div>

      {/* Share */}
      <div className="text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{t.s5Share}</p>
        <div className="flex gap-2 justify-center">
          <button onClick={shareWA}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-600 transition-all shadow-md">
            📤 {t.s5WhatsApp}
          </button>
          <button onClick={copyText}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md">
            {copied ? `✓ ${t.s5Copied}` : `📋 ${t.s5Copy}`}
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-base italic text-emerald-700 font-black">{t.s5Quote}</p>
      </div>

      <button onClick={onRestart}
        className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-black py-4 rounded-2xl hover:opacity-90 transition-all">
        🔁 {t.s5Restart}
      </button>
      <div className="h-4" />
    </div>
  );
}