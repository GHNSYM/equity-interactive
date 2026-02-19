import React, { useState } from 'react';

export default function Screen4({ businessMetrics, onNext, onBack }) {
  const [showPayoutDetails, setShowPayoutDetails] = useState(false);

  // Calculate based on user inputs
  const monthlyRevenue = businessMetrics.expandedIncome;
  const profitMargin = businessMetrics.profitMargin;
  const monthlySales = Math.round((monthlyRevenue * 100) / (profitMargin || 100)); // Back-calculate sales from revenue
  const royaltyPercentage = 3;
  const royaltyAmount = Math.round((monthlySales * royaltyPercentage) / 100); // 3% of SALES
  const ownerEarnings = monthlyRevenue - royaltyAmount;

  return (
    <div className="px-4 py-6 h-full flex flex-col justify-between">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          इक्विटी क्या है?
        </h2>
        <p className="text-sm text-gray-600">What is Equity?</p>
      </div>

      {/* Ownership Visual - Pie Charts */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Before - 100% ownership */}
        <div className="text-center">
          <p className="text-xs text-gray-600 font-semibold mb-2">BEFORE</p>
          <div className="relative w-32 h-32 mx-auto mb-2">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* You: 100% - Green slice */}
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#10B981"
                strokeWidth="14"
                strokeDasharray="220 220y"
                strokeLinecap="round"
                transform="rotate(-95 50 50)"
              />
              <text x="50" y="56" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1F2937">
                100%
              </text>
            </svg>
          </div>
            <div className="bg-green-100 rounded p-5">
              <p className="text-sm font-bold text-green-900">You: 100%</p>
            </div>
        </div>

        {/* After - 85% ownership with 3% royalty */}
        <div className="text-center">
          <p className="text-xs text-gray-600 font-semibold mb-2">AFTER</p>
          <div className="relative w-32 h-32 mx-auto mb-2">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* You: 85% - Green slice */}
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#10B981"
                strokeWidth="14"
                strokeDasharray="188.4 282"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              {/* Partner: 15% (3% royalty) - Blue slice */}
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="14"
                strokeDasharray="53.1 282"
                strokeDashoffset="-188.4"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              <text x="50" y="56" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1F2937">
                85%
              </text>
            </svg>
          </div>
          <div className="space-y-2">
            <div className="bg-green-100 rounded p-1">
              <p className="text-sm font-bold text-green-900">You: 85%</p>
            </div>
            <div className="bg-blue-100 rounded p-1">
              <p className="text-sm font-bold text-blue-900">Partner: 15%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clarifier: Equity vs Royalty */}
      <div className="text-center mb-4 px-2">
        <p className="text-xs text-gray-700 leading-relaxed">
          Your partner owns <span className="font-semibold">15% equity stake</span> in the business, but only takes <span className="font-semibold">3% of your monthly sales</span> as income.
        </p>
      </div>

      {/* Key Learning - Hero Element */}
      <div className="bg-gradient-to-br from-green-100 via-green-50 to-green-100 border-2 border-green-500 rounded-xl p-6 mb-6 shadow-md">
        <p className="text-center text-gray-800 font-bold text-lg mb-3">
          ✨ Key Insight:
        </p>
        <p className="text-center text-gray-800 text-sm font-semibold leading-relaxed mb-3">
          Partner takes 3% as royalty from your <span className="font-bold text-orange-600 text-base">SALES</span>, not from your profit. You keep more!
        </p>
        <p className="text-center text-gray-700 text-xs italic">
          Even in a bad month, you never pay more than 3% of what you actually sold.
        </p>
      </div>

      {/* Income Breakdown */}
      <div className="bg-white border-2 border-gray-300 rounded-lg p-4 mb-6">
        <p className="font-semibold text-gray-800 mb-2">Monthly Sales: ₹{monthlySales.toLocaleString('en-IN')}</p>
        <p className="text-xs text-gray-600 mb-3">(Your Revenue/Profit: ₹{monthlyRevenue.toLocaleString('en-IN')} after costs)</p>

        <div className="space-y-3">
          {/* You earn */}
          <div
            onClick={() => setShowPayoutDetails(!showPayoutDetails)}
            className="cursor-pointer bg-green-100 rounded-lg p-3 hover:bg-green-200 transition-all"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-700">
                  <span className="text-2xl me-2">👨‍💼</span>You Keep:
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-700">
                  ₹{Math.floor(ownerEarnings).toLocaleString('en-IN')}
                </p>
                {/* <p className="text-xs text-green-600">Revenue - Royalty</p> */}
              </div>
            </div>
          </div>

          {/* Partner earns */}
          <div className="bg-blue-100 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-700">
                  <span className="text-2xl me-2">🤝</span>Partner Gets:
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-700">
                  ₹{Math.floor(royaltyAmount).toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-blue-600">3% Royalty</p>
              </div>
            </div>
          </div>
        </div>

        {showPayoutDetails && (
          <div className="mt-4 pt-4 border-t-2 border-gray-300 animate-slideDown">
            <p className="text-sm font-semibold text-gray-700 mb-2">How it Works:</p>
            <div className="text-xs text-gray-600 space-y-2 bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-800">Monthly Sales: ₹{monthlySales.toLocaleString('en-IN')}</p>
              <p className="text-gray-700">Your Revenue (Profit): ₹{monthlyRevenue.toLocaleString('en-IN')} (after business costs)</p>
              <hr className="my-2 border-gray-300" />
              <p className="text-gray-700"><span className="font-bold">Partner's Royalty:</span> 3% × ₹{monthlySales.toLocaleString('en-IN')} (Sales) = ₹{Math.floor(royaltyAmount).toLocaleString('en-IN')}</p>
              <p className="text-gray-700"><span className="font-bold">You Earn:</span> ₹{monthlyRevenue.toLocaleString('en-IN')} (Revenue) - ₹{Math.floor(royaltyAmount).toLocaleString('en-IN')} (Royalty) = ₹{Math.floor(ownerEarnings).toLocaleString('en-IN')}</p>
              <hr className="my-2 border-gray-300" />
              <p className="text-green-700 font-semibold">✓ You kept ₹{Math.floor(ownerEarnings).toLocaleString('en-IN')} while growing your business!</p>
            </div>
          </div>
        )}
      </div>

      {/* User Emotion */}
      <div className="text-center mb-4">
        <p className="text-lg italic text-green-700 font-semibold">
          "I kept 85% of my business and grew it 80% — that's Quiver."
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-4 rounded-xl text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        देखें - आपकी सफलता
        <br />
        See Impact →
      </button>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
        <div>
          <br></br>
        </div>
    </div>
  );
}
