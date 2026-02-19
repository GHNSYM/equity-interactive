import React, { useState } from 'react';

export default function Screen2({ businessMetrics,  onChooseLoan, onChoosePartnership, onBack }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOutcome, setShowOutcome] = useState(null);

  const requiredInvestment = businessMetrics.requiredInvestment;
  const currentIncome = businessMetrics.initialIncome;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOutcome(option);
  };
  

  const handleProceed = () => {
    if (selectedOption === 'loan') {
      onChooseLoan();
    } else if (selectedOption === 'partnership') {
      onChoosePartnership();
    }
  };

  return (
    <div className="px-4 py-6 h-full flex flex-col">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          आपको ₹{(requiredInvestment / 100000).toFixed(0)},00,000 की जरूरत है
        </h2>
        <p className="text-sm text-gray-600">You need ₹{requiredInvestment.toLocaleString('en-IN')} to expand</p>
        <p className="text-sm text-gray-600 mt-1">(Current Income: ₹{currentIncome.toLocaleString('en-IN')}/month)</p>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">
            Here are two ways to get there. One costs you every month. One grows with you.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-5 mb-4">
        {/* Option A - Loan */}
        <div
          onClick={() => handleOptionSelect('loan')}
          className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
            selectedOption === 'loan' ? 'border-red-500 bg-red-50 shadow-lg' : 'border-gray-300 bg-white hover:border-red-400'
          }`}
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl">🏦</span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">Loan</h3>
              <p className="text-xs text-gray-600">From a bank</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-gray-800">₹{(requiredInvestment / 100000).toFixed(0)},00,000 available</p>
            <p className="text-gray-700">
              <span className="font-medium">Fixed EMI every month</span> — whether business is good or bad.
            </p>
            {selectedOption === 'loan' && (
              <p className="text-gray-600 pt-2">Tap to see EMI calculator →</p>
            )}
          </div>
        </div>

        {/* Option B - Partnership */}
        <div
          onClick={() => handleOptionSelect('partnership')}
          className={`border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 transform ${
            selectedOption === 'partnership' 
              ? 'border-green-600 bg-green-50 shadow-lg scale-105' 
              : 'border-green-300 bg-white hover:border-green-500 scale-100'
          }`}
        >
          {/* Recommended Badge */}
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl">🤝</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-800">Partnership with Quiver</h3>
                {selectedOption !== 'partnership' && (
                  <span className="text-xs font-semibold bg-green-200 text-green-800 px-2 py-1 rounded">✓ Better for you</span>
                )}
              </div>
              <p className="text-xs text-gray-600">Mentored growth</p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-800">₹2,00,000 investment</p>
              <div className="bg-green-100 border border-green-400 p-3 rounded-lg mt-2">
                <p className="text-gray-800 font-semibold text-sm">No fixed EMI. Your partner earns only when you earn.</p>
              </div>
            </div>
            
            {selectedOption === 'partnership' && (
              <div className="bg-white p-3 rounded-lg border border-green-200 space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Quiver connects you with the right partner</span> — and stays with you as your mentor throughout.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="bg-blue-50 border border-blue-300 p-3 rounded-lg text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="text-xs font-semibold text-gray-800">Capital to expand</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-300 p-3 rounded-lg text-center">
                    <div className="text-2xl mb-2">🎓</div>
                    <p className="text-xs font-semibold text-gray-800">Expert mentorship</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-300 p-3 rounded-lg text-center">
                    <div className="text-2xl mb-2">🌐</div>
                    <p className="text-xs font-semibold text-gray-800">Market linkage</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Buttons - Only show when selection is made */}
      {selectedOption && (
        <div className="flex gap-3">
          <button
            onClick={() => {
              setSelectedOption(null);
              setShowOutcome(null);
            }}
            className="flex-1 bg-white text-gray-700 font-semibold py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
          >
            Change Mind
          </button>
          <button
            onClick={handleProceed}
            className={`flex-1 text-white font-semibold py-3 rounded-lg transition-all ${
              selectedOption === 'loan'
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {selectedOption === 'loan' ? 'See EMI Details →' : 'Continue →'}
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        <div>
          <br></br>
        </div>
    </div>
  );
}
