import React, { useState } from 'react';

export default function ScreenEMI({ businessMetrics, onBack, onContinueWithLoan, onChoosePartnership }) {
  const [loanDuration, setLoanDuration] = useState(36);
  const requiredInvestment = businessMetrics.requiredInvestment;
  const currentIncome = businessMetrics.initialIncome;
  
  // EMI calculation: P * R * (1+R)^N / ((1+R)^N - 1)
  // Assuming ~12% annual interest rate
  const annualInterestRate = 0.12;
  const monthlyInterestRate = annualInterestRate / 12;
  const numerator = requiredInvestment * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanDuration);
  const denominator = Math.pow(1 + monthlyInterestRate, loanDuration) - 1;
  const monthlyEMI = Math.ceil(numerator / denominator);
  const totalPayment = monthlyEMI * loanDuration;
  const totalInterest = totalPayment - requiredInvestment;
  const stressLevel = Math.round((monthlyEMI / currentIncome) * 100);

  return (
    <div className="px-4 py-6 h-full flex flex-col justify-between">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          कर्ज की गणना करें
        </h2>
        <p className="text-sm text-gray-600">Loan EMI Calculator</p>
      </div>

      {/* Loan Duration Selector */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-4">
        <p className="font-semibold text-gray-800 mb-3">Loan Duration:</p>
        <div className="flex items-center gap-4 mb-3">
          <input
            type="range"
            min="12"
            max="84"
            step="12"
            value={loanDuration}
            onChange={(e) => setLoanDuration(parseInt(e.target.value))}
            className="flex-1"
          />
          <span className="text-2xl font-bold text-gray-800 min-w-fit">
            {loanDuration} months
          </span>
        </div>
        <p className="text-xs text-gray-600">{Math.round(loanDuration / 12)} years</p>
      </div>

      {/* EMI Breakdown */}
      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-4 mb-4 space-y-3">
        <div className="flex justify-between items-center pb-3 border-b-2 border-red-200">
          <span className="text-sm font-semibold text-gray-700">Loan Amount:</span>
          <span className="text-xl font-bold text-gray-800">₹{requiredInvestment.toLocaleString('en-IN')}</span>
        </div>

        <div className="flex justify-between items-center pb-3 border-b-2 border-red-200">
          <span className="text-sm font-semibold text-gray-700">Interest Rate (Annual):</span>
          <span className="text-lg font-bold text-red-600">12%</span>
        </div>

        <div className="bg-red-100 p-3 rounded-lg border-2 border-red-600">
          <p className="text-xs text-gray-600 mb-1">📅 Monthly EMI:</p>
          <p className="text-3xl font-bold text-red-600">₹{monthlyEMI.toLocaleString('en-IN')}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-white p-2 rounded">
            <p className="text-xs text-gray-600">Total Interest</p>
            <p className="font-bold text-red-600">₹{totalInterest.toLocaleString('en-IN')}</p>
          </div>
          <div className="bg-white p-2 rounded">
            <p className="text-xs text-gray-600">Total Payment</p>
            <p className="font-bold text-gray-800">₹{totalPayment.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      {/* Stress Analysis */}
      <div className={`rounded-xl p-4 mb-4 border-2 ${
        stressLevel > 100 ? 'bg-red-100 border-red-600' : 
        stressLevel > 50 ? 'bg-yellow-100 border-yellow-600' : 
        'bg-orange-100 border-orange-600'
      }`}>
        <p className="font-semibold text-gray-800 mb-2">
          {stressLevel > 100 ? '⚠️ HIGH STRESS' : stressLevel > 50 ? '⚠️ MEDIUM STRESS' : '⚠️ PRESSURE'}
        </p>
        <div className="w-full bg-gray-300 rounded-full h-3 mb-2">
          <div
            className={`h-3 rounded-full transition-all ${
              stressLevel > 100 ? 'bg-red-600' : stressLevel > 50 ? 'bg-yellow-600' : 'bg-orange-600'
            }`}
            style={{ width: `${Math.min(stressLevel, 150)}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-700">
          EMI is <span className="font-bold">{stressLevel}%</span> of your current income (₹{currentIncome.toLocaleString('en-IN')})
        </p>
        {stressLevel > 100 && (
          <p className="text-xs text-red-700 mt-2 font-semibold">
            ❌ EMI exceeds your current income! Very risky during slow seasons.
          </p>
        )}
        {stressLevel > 50 && stressLevel <= 100 && (
          <p className="text-xs text-orange-700 mt-2">
            ⚠️ Significant burden on cash flow. Risk during low-income months.
          </p>
        )}
      </div>

      {/* Problem Scenario */}
      <div className="bg-red-100 border-l-4 border-red-600 rounded-lg p-3 mb-4">
        <p className="text-sm font-semibold text-red-800 mb-2">❌ What if Sales Drop?</p>
        <div className="text-xs text-gray-700 space-y-1">
          <p>If rainy season reduces sales by 30%:</p>
          <p className="font-bold text-red-700">Income: ₹{Math.round(currentIncome * 0.7).toLocaleString('en-IN')}</p>
          <p className="font-bold text-red-700">EMI Still Due: ₹{monthlyEMI.toLocaleString('en-IN')}</p>
          <p className="text-red-700">😰 You're in DEFICIT!</p>
        </div>
      </div>

      {/* Decision Buttons */}
      <div className="flex gap-2 flex-col mb-4">
        <button
          onClick={onContinueWithLoan}
          className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all"
        >
          Accept Loan Risk
        </button>
        <button
          onClick={onChoosePartnership}
          className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-all"
        >
          Switch to Partnership ✨
        </button>
        <button
          onClick={onBack}
          className="w-full bg-gray-400 text-white font-bold py-3 rounded-lg hover:bg-gray-500 transition-all"
        >
          ← Back to Options
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
      <div>
        <br></br>
      </div>
    </div>
  );
}
