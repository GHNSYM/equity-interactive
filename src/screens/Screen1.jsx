import React, { useState, useEffect } from 'react';

export default function Screen1({ onNext }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div className="px-4 py-6 h-full flex flex-col justify-between">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          अपना व्यवसाय आज
        </h2>
        <p className="text-gray-600">Your Business Today</p>
      </div>

      {/* Business Visual - Capacity Meter */}
      <div className="flex-1 flex items-center justify-center mb-6">
        <div className="text-center">
          <div className="text-6xl mb-4" style={{ animation: 'pulse 1.5s infinite' }}>
            🏪
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800 mb-2">Business at FULL CAPACITY</p>
            <div className="bg-red-100 border-2 border-red-500 rounded-xl p-4 inline-block">
              <div className="flex items-center gap-2">
                <span className="text-4xl">📊</span>
                <div className="text-left">
                  <p className="text-sm text-gray-700">Capacity:</p>
                  <p className="text-2xl font-bold text-red-600">100% FULL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Info Card */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 border-l-4 border-green-600">
        <div className="mb-3">
          <p className="text-sm text-gray-600">Income Every Month</p>
          <p className="text-2xl font-bold text-green-700">₹50,000</p>
        </div>
        <div>
          <p className="text-sm text-gray-700 font-semibold mb-2">Problems:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>⚠️ Cannot serve all customers</li>
            <li>⚠️ No new equipment</li>
            <li>⚠️ Limited workers</li>
          </ul>
        </div>
      </div>

      {/* User emotion text */}
      <div className="text-center mb-4">
        <p className="text-lg italic text-gray-700">
          "I am working hard but stuck."
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 rounded-xl text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 mb-4"
      >
        अपने व्यवसाय को बढ़ाएं
        <br />
        Grow My Business
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
        <div>
          <br></br>
        </div>
    </div>
  );
}
