import React, { useState, useEffect } from 'react';

export default function Screen3({ chosenPath, businessMetrics, onNext, onBack }) {
  const [animateGrowth, setAnimateGrowth] = useState(false);
  const [currentIncome, setCurrentIncome] = useState(businessMetrics.initialIncome);

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setAnimateGrowth(true), 300);

    // Animate income counter
    if (animateGrowth) {
      const interval = setInterval(() => {
        setCurrentIncome((prev) => {
          const target = businessMetrics.expandedIncome;
          if (prev < target) {
            return Math.min(prev + 3000, target);
          }
          return prev;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [animateGrowth, businessMetrics.expandedIncome]);

  return (
    <div className="px-4 py-6 h-full flex flex-col justify-between">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          व्यवसाय का विस्तार
        </h2>
        <p className="text-sm text-gray-600">Business Expansion</p>
      </div>

      {/* Before & After Comparison */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Before */}
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-600 font-semibold mb-2">BEFORE</p>
          <div className="text-4xl mb-2">🏪</div>
          <div className="bg-yellow-100 text-yellow-900 rounded p-2">
            <p className="text-xs font-bold">Small Shop</p>
            <p className="text-2xl font-bold">₹{businessMetrics.initialIncome.toLocaleString('en-IN')}/mo</p>
          </div>
        </div>

        {/* After */}
        <div
          className={`bg-green-100 rounded-lg p-4 text-center transform transition-all duration-700 ${
            animateGrowth ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
        >
          <p className="text-xs text-green-700 font-semibold mb-2">AFTER</p>
          <div className="text-4xl mb-2">🏬</div>
          <div className="bg-green-200 text-green-900 rounded p-2">
            <p className="text-xs font-bold">Bigger Shop</p>
            <p className="text-2xl font-bold">₹{Math.floor(currentIncome).toLocaleString('en-IN')}/mo</p>
          </div>
        </div>
      </div>

      {/* Growth Elements */}
      {animateGrowth && (
        <div className="bg-white rounded-lg p-4 mb-6 animate-slideUp">
          <p className="text-sm font-semibold text-gray-800 mb-3">
            ✨ Business Upgrades:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
              <span className="text-xl">⚙️</span>
              <span className="text-sm text-gray-700">New Machines Added</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
              <span className="text-xl">👥</span>
              <span className="text-sm text-gray-700">+3 New Workers Hired</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
              <span className="text-xl">👨‍👩‍👧‍👦</span>
              <span className="text-sm text-gray-700">More Customers Served</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
              <span className="text-xl">🌾</span>
              <span className="text-sm text-gray-700">Village Economy Boost</span>
            </div>
          </div>
        </div>
      )}

      {/* Income Growth Chart */}
      {animateGrowth && (
        <div className="bg-white rounded-lg p-4 mb-6 animate-slideUp">
          <p className="font-semibold text-gray-800 mb-3">Income Growth:</p>
          <div className="space-y-2">
            <div>
              <p className="text-xs text-gray-600 mb-1">Before: ₹{businessMetrics.initialIncome.toLocaleString('en-IN')}</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">After: ₹{businessMetrics.expandedIncome.toLocaleString('en-IN')}</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full transition-all duration-1000"
                  style={{
                    width: `${(currentIncome / businessMetrics.expandedIncome) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <p className="text-lg font-bold text-green-700 text-center mt-3">
            📈 {Math.round(((businessMetrics.expandedIncome - businessMetrics.initialIncome) / businessMetrics.initialIncome) * 100)}% Growth!
          </p>
        </div>
      )}

      {/* User Emotion */}
      <div className="text-center mb-4">
        <p className="text-lg italic text-green-700 font-semibold">
          "My business is growing!"
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        समझें - इक्विटी क्या है?
        <br />
        Continue →
      </button>

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
