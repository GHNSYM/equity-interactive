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

  return (
    <div className="px-4 py-6 h-full flex flex-col justify-between">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Loan Options
        </h2>
        <p className="text-sm text-gray-600">Flexible repayment plans for your business</p>
      </div>

      {/* Loan Duration Selector */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-5">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-gray-800">Repayment Duration</p>
          <span className="text-2xl font-bold text-blue-600 min-w-fit">
            {Math.round(loanDuration / 12)} yrs
          </span>
        </div>
        <input
          type="range"
          min="12"
          max="84"
          step="12"
          value={loanDuration}
          onChange={(e) => setLoanDuration(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>1 year</span>
          <span>7 years</span>
        </div>
      </div>

      {/* EMI Breakdown */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-5 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-3 border border-gray-100">
            <p className="text-xs text-gray-600 mb-1">Loan Amount</p>
            <p className="text-lg font-bold text-gray-900">₹{requiredInvestment.toLocaleString('en-IN')}</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-100">
            <p className="text-xs text-gray-600 mb-1">Interest Rate</p>
            <p className="text-lg font-bold text-gray-900">12% p.a.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
          <p className="text-xs text-gray-600 mb-1">Monthly EMI</p>
          <p className="text-4xl font-bold text-blue-600">₹{monthlyEMI.toLocaleString('en-IN')}</p>
          <p className="text-xs text-gray-500 mt-2">{loanDuration} months</p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-blue-100">
          <div>
            <p className="text-xs text-gray-600 mb-1">Total Interest</p>
            <p className="text-lg font-bold text-gray-800">₹{totalInterest.toLocaleString('en-IN')}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Total Amount</p>
            <p className="text-lg font-bold text-gray-800">₹{totalPayment.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      {/* Affordability Info */}
      <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 mb-5">
        <p className="text-sm font-semibold text-gray-800 mb-3">Loan Details</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Monthly Income</span>
            <span className="font-semibold text-gray-800">₹{currentIncome.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Monthly EMI</span>
            <span className="font-semibold text-gray-800">₹{monthlyEMI.toLocaleString('en-IN')}</span>
          </div>
          <div className="border-t border-gray-300 pt-2 mt-2 flex justify-between">
            <span className="text-gray-600">After EMI Balance</span>
            <span className="font-semibold text-blue-600">₹{(currentIncome - monthlyEMI).toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Decision Buttons */}
      <div className="flex gap-2 flex-col">
        <button
          onClick={onChoosePartnership}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-sm"
        >
          Explore Partnership Option
        </button>
        <button
          onClick={onContinueWithLoan}
          className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
        >
          Continue with Loan
        </button>
      </div>

      <div>
        <br></br>
      </div>
    </div>
  );
}
