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
          साझेदारी का फायदा
        </h2>
        <p className="text-sm text-gray-600">Partnership Benefits</p>
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
          <p className="text-xs text-green-700 font-semibold mt-2">With Quiver's network and guidance</p>
        </div>
      </div>

      {/* Growth Elements */}
      {animateGrowth && (
        <div className="bg-white rounded-lg p-4 mb-6 animate-slideUp border border-blue-200">
          <p className="text-sm font-semibold text-gray-800 mb-3">
            💼 What Your Partner Brings:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="font-semibold text-gray-800">Mentorship</p>
                <p className="text-xs text-gray-600 mt-1">A Quiver mentor who has built businesses before — guiding you on decisions, not just giving money.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-600">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="font-semibold text-gray-800">Market Linkage</p>
                <p className="text-xs text-gray-600 mt-1">Connections to buyers, distributors, and markets you can't reach alone.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-600">
              <span className="text-2xl">💰</span>
              <div>
                <p className="font-semibold text-gray-800">Investment</p>
                <p className="text-xs text-gray-600 mt-1">₹{businessMetrics.requiredInvestment.toLocaleString('en-IN')} to buy equipment, hire staff, and serve every customer — no loan EMI.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Income Growth Chart
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

        </div>
      )} */}

      {/* User Emotion */}
      <div className="text-center mb-4">
        <p className="text-lg italic text-blue-700 font-semibold">
          "With Quiver, I didn't just get money — I got a partner who knew the way."
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        समझें - इक्विटी क्या है?
        <br />
        See How Equity Works →
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
