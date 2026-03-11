import React, { useState } from 'react';
import {Card, fmt} from './helpers';

// ─── SCREEN EMI ───────────────────────────────────────────────────────────────
export default function ScreenEMI({ businessMetrics, onContinueWithLoan, onChoosePartnership, t }) {
  const [duration, setDuration] = useState(36);
  const { requiredInvestment: loan, initialIncome: income } = businessMetrics;
  const r = 0.12 / 12;
  const n = duration;
  const emi = Math.ceil((loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  const total = emi * n;
  const interest = total - loan;
  const balance = income - emi;

  return (
    <div className="px-4 py-6 space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-black text-gray-900">{t.sEMITitle}</h2>
        <p className="text-sm text-gray-500 mt-1">{t.sEMISub}</p>
      </div>

      {/* Slider */}
      <Card className="p-5">
        <div className="flex justify-between items-center mb-3">
          <p className="font-bold text-gray-700 text-sm">{t.sEMIDuration}</p>
          <span className="text-2xl font-black text-blue-600">{Math.round(duration / 12)} {t.sEMIYrs}</span>
        </div>
        <input type="range" min="12" max="84" step="12" value={duration}
          onChange={e => setDuration(parseInt(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-600 bg-gray-200" />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>1 yr</span><span>7 yrs</span>
        </div>
      </Card>

      {/* EMI Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white text-center shadow-xl shadow-blue-200">
        <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">{t.sEMIMonthly}</p>
        <p className="text-5xl font-black">₹{fmt(emi)}</p>
        <p className="text-blue-200 text-sm mt-1">{duration} months</p>
      </div>

      {/* Details */}
      <Card className="p-5">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-0.5">{t.sEMILoan}</p>
            <p className="font-black text-gray-800">₹{fmt(loan)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-0.5">{t.sEMIRate}</p>
            <p className="font-black text-gray-800">12% p.a.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-0.5">{t.sEMIInterest}</p>
            <p className="font-black text-gray-800">₹{fmt(interest)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-0.5">{t.sEMITotal}</p>
            <p className="font-black text-gray-800">₹{fmt(total)}</p>
          </div>
        </div>
        <div className={`flex justify-between items-center py-3 px-4 rounded-xl ${balance < 0 ? "bg-red-50 border border-red-200" : "bg-emerald-50 border border-emerald-200"}`}>
          <span className="text-sm font-semibold text-gray-700">{t.sEMIAfter}</span>
          <span className={`font-black ${balance < 0 ? "text-red-600" : "text-emerald-600"}`}>₹{fmt(balance)}</span>
        </div>
      </Card>

      <div className="space-y-2">
        <button onClick={onChoosePartnership}
          className="w-full bg-emerald-600 text-white font-black py-3.5 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
          {t.sEMIPartner}
        </button>
        <button onClick={onContinueWithLoan}
          className="w-full bg-white text-blue-600 font-bold py-3.5 rounded-xl border-2 border-blue-500 hover:bg-blue-50 transition-all">
          {t.sEMIContinue}
        </button>
      </div>
      <div className="h-4" />
    </div>
  );
}
