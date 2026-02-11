import React, { useState } from 'react';

export default function Screen2({ onChooseLoan, onChoosePartnership }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOutcome, setShowOutcome] = useState(null);

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
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          आपको ₹5,00,000 की जरूरत है
        </h2>
        <p className="text-sm text-gray-600">You need ₹5,00,000 to expand</p>
        <p className="text-lg font-semibold text-gray-800 mt-2">
          Choose Your Path:
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-4 mb-4">
        {/* Option A - Loan */}
        <div
          onClick={() => handleOptionSelect('loan')}
          className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
            selectedOption === 'loan'
              ? 'border-red-600 bg-red-50 shadow-lg'
              : 'border-gray-300 bg-white hover:border-red-400'
          }`}
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl">🏦</span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">Option A: Loan</h3>
              <p className="text-xs text-gray-600">कर्ज लें</p>
            </div>
          </div>

          {/* Default view */}
          {showOutcome !== 'loan' && (
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-2">Bank gives you ₹5,00,000</p>
              <p className="text-gray-600">
                But you must pay back with interest...
              </p>
            </div>
          )}

          {/* Outcome animation */}
          {showOutcome === 'loan' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="bg-white p-2 rounded border border-red-200">
                <p className="text-sm font-semibold text-red-700">📅 Every Month:</p>
                <p className="text-lg font-bold text-red-600">EMI: ₹15,000</p>
                <p className="text-xs text-gray-600">Must pay even in slow months</p>
              </div>

              <div className="bg-red-100 p-3 rounded border-l-4 border-red-600">
                <p className="text-sm font-semibold">❌ Problem Scenario:</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>🌧️ Rainy season (slow sales):</span>
                    <span className="font-bold">Sales down 30%</span>
                  </div>
                  <div className="flex justify-between text-red-700 font-bold">
                    <span>But EMI due:</span>
                    <span>₹15,000</span>
                  </div>
                  <p className="text-xs text-gray-700 mt-2">😰 Owner stressed & worried</p>
                </div>
              </div>

              <p className="text-sm italic text-red-700 font-semibold">
                Loan = Pressure (must pay regardless)
              </p>
            </div>
          )}
        </div>

        {/* Option B - Partnership */}
        <div
          onClick={() => handleOptionSelect('partnership')}
          className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
            selectedOption === 'partnership'
              ? 'border-green-600 bg-green-50 shadow-lg'
              : 'border-gray-300 bg-white hover:border-green-400'
          }`}
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl">🤝</span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">
                Option B: Partnership
              </h3>
              <p className="text-xs text-gray-600">साझेदार खोजें</p>
            </div>
          </div>

          {/* Default view */}
          {showOutcome !== 'partnership' && (
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-2">Partner invests ₹5,00,000</p>
              <p className="text-gray-600">
                You grow together, earn together...
              </p>
            </div>
          )}

          {/* Outcome animation */}
          {showOutcome === 'partnership' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="bg-white p-2 rounded border border-green-200">
                <p className="text-sm font-semibold text-green-700">✨ No Fixed EMI</p>
                <p className="text-xs text-gray-600">Partner earns when YOU earn</p>
              </div>

              <div className="bg-green-100 p-3 rounded border-l-4 border-green-600">
                <p className="text-sm font-semibold">✅ Benefits:</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>📈 Good season (high sales):</span>
                    <span className="font-bold text-green-700">You earn more</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🌧️ Rainy season (slow sales):</span>
                    <span className="font-bold text-green-700">No pressure</span>
                  </div>
                  <p className="text-xs text-gray-700 mt-2">😊 Owner grows steadily</p>
                </div>
              </div>

              <p className="text-sm italic text-green-700 font-semibold">
                Partnership = Support (grow together)
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        {selectedOption === 'partnership' && (
          <button
            onClick={handleProceed}
            className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Continue →
          </button>
        )}
        {selectedOption === 'loan' && (
          <button
            disabled
            className="flex-1 bg-gray-400 text-white font-bold py-3 rounded-lg cursor-not-allowed opacity-60"
          >
            ❌ Loan Not Recommended
          </button>
        )}
      </div>

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
