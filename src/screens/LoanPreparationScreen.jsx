import React from 'react';

export default function LoanPreparationScreen({ onRestart }) {
  return (
    <div className="px-4 py-6 h-full flex flex-col justify-between">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Here's How to Prepare
        </h2>
        <p className="text-sm text-gray-600">Practical steps for your bank loan</p>
      </div>

      {/* Success Visual */}
      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 mb-4 text-center">
        <div className="text-8xl mb-4">📋</div>
      </div>

      {/* Dark background box with light text
       */}
      <div className="bg-gray-800 text-white rounded-xl p-5 mb-6 space-y-4">
        <p className="font-semibold text-lg">What you need before approaching a bank:</p>
        
        <div className="space-y-4">
          {/* Tip 1 */}
          <div className="border-l-4 border-blue-400 pl-4">
            <p className="font-semibold mb-1">📊 1. Clean Financial Records</p>
            <p className="text-sm text-gray-300">
              Bank statements for 6-12 months showing regular sales and cash flow. The cleaner your records, the faster approval.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="border-l-4 border-green-400 pl-4">
            <p className="font-semibold mb-1">🏦 2. Improve Your Credit Score</p>
            <p className="text-sm text-gray-300">
              Your personal credit score must be above 650-700. Pay off old loans, avoid new debt, and settle pending dues.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="border-l-4 border-purple-400 pl-4">
            <p className="font-semibold mb-1">📄 3. Required Documents</p>
            <p className="text-sm text-gray-300">
              GST registration, PAN card, Aadhaar, business license, property ownership docs, and last 2 years of tax returns.
            </p>
          </div>

          {/* Tip 4 */}
          <div className="border-l-4 border-orange-400 pl-4">
            <p className="font-semibold mb-1">🏦 4. Best Banks to Approach</p>
            <p className="text-sm text-gray-300">
              Start with your current bank (faster process), then try SBI, ICICI, HDFC, or regional cooperative banks for rural businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Final Note */}
      <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mb-4">
        <p className="text-sm text-gray-800">
          <span className="font-semibold">Quick tip: </span>While preparing your loan documents, also explore partnership options. You might find better terms with a growth partner than a bank loan.
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={onRestart}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        🔁 Try Another Business
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
      <div>
        <br></br>
      </div>
    </div>
  );
}
