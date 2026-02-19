import React, { useState, useEffect } from 'react';

export default function Screen5({ businessMetrics, onRestart, onBack }) {
  const [showMetrics, setShowMetrics] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState('');

  useEffect(() => {
    // Show metrics with delay
    const timer = setTimeout(() => setShowMetrics(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleShare = async (platform) => {
    const growthPercentage = Math.round(((businessMetrics.expandedIncome - businessMetrics.initialIncome) / businessMetrics.initialIncome) * 100);
    const message = `
🎊 मैंने अपना व्यवसाय बढ़ाया!

I just grew my rural business with the help of an investment partner!
- Business Income: ₹${businessMetrics.initialIncome.toLocaleString('en-IN')} → ₹${businessMetrics.expandedIncome.toLocaleString('en-IN')}/month
- Growth: ${growthPercentage}%
- New Jobs Created: ${businessMetrics.jobsCreated}
- Community Impact: Positive

Learn how equity partnerships can help your business grow!
#RuralEntrepreneur #BusinessGrowth #EquityPartnership #Startup
    `;

    const shareUrl = 'https://equity-interactive.example.com'; // Update with actual URL

    if (platform === 'whatsapp') {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(message + '\n\n' + shareUrl)}`,
        '_blank'
      );
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(message);
      setCopiedMessage('Copied to clipboard!');
      setTimeout(() => setCopiedMessage(''), 2000);
    }
  };

  return (
    <div className="px-4 py-6 h-full flex flex-col justify-between">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🎊 आपकी सफलता!
        </h2>
        <p className="text-sm text-gray-600">Your Success Story</p>
      </div>

      {/* Success Visual */}
      <div className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-2xl p-6 mb-4 text-center">
        <div className="text-6xl mb-3 animate-bounce">🎉</div>
        <p className="text-lg font-bold text-gray-800">Business Expansion Complete!</p>
        <p className="text-sm text-gray-600 mt-2">आपका व्यवसाय फल-फूल रहा है</p>
      </div>

      {/* Impact Metrics */}
      {showMetrics && (
        <div className="space-y-3 mb-6 animate-fadeIn">
          {/* Revenue */}
          <div className="bg-white border-l-4 border-green-600 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📈</span>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Revenue Growth</p>
                <p className="text-lg font-bold text-green-700">
                  ₹{businessMetrics.initialIncome.toLocaleString('en-IN')} → ₹{businessMetrics.expandedIncome.toLocaleString('en-IN')}/month ({Math.round(((businessMetrics.expandedIncome - businessMetrics.initialIncome) / businessMetrics.initialIncome) * 100)}% Growth)
                </p>
              </div>
            </div>
          </div>

          {/* Jobs Created */}
          <div className="bg-white border-l-4 border-blue-600 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">👥</span>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Jobs Created</p>
                <p className="text-lg font-bold text-blue-700">
                  {businessMetrics.jobsCreated} New Workers Employed
                </p>
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <div className="bg-white border-l-4 border-yellow-600 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌾</span>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Community Benefit</p>
                <p className="text-lg font-bold text-yellow-700">
                  Village Economy Strengthened
                </p>
              </div>
            </div>
          </div>

          {/* Expansion */}
          <div className="bg-white border-l-4 border-purple-600 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏬</span>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Business</p>
                <p className="text-lg font-bold text-purple-700">
                  Fully Expanded & Equipped
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Key Learnings */}
      <div className="bg-green-50 rounded-lg p-4 mb-4">
        <p className="font-semibold text-gray-800 mb-3">What You Learned:</p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2">
            <span>✅</span>
            <span>Business growth needs capital</span>
          </li>
          <li className="flex gap-2">
            <span>✅</span>
            <span>Loans create monthly pressure</span>
          </li>
          <li className="flex gap-2">
            <span>✅</span>
            <span>Partnership enables sustainable growth</span>
          </li>
          <li className="flex gap-2">
            <span>✅</span>
            <span>Equity sharing benefits everyone</span>
          </li>
        </ul>
      </div>

      {/* Share Section */}
      <div className="text-center mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-3">
          Share Your Success:
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          <button
            onClick={() => handleShare('whatsapp')}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
          >
            <span>📤</span> Share on WhatsApp
          </button>
          <button
            onClick={() => handleShare('copy')}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>📋</span> Copy Text
          </button>
        </div>
        {copiedMessage && (
          <p className="text-sm text-green-600 font-semibold mt-2">{copiedMessage}</p>
        )}
      </div>

      {/* User Emotion */}
      <div className="text-center mb-4">
        <p className="text-lg italic text-green-700 font-semibold">
          "I built this success!"
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          🔁 Try Another<br />Business
        </button>
        <button className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold py-4 rounded-xl text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          📧 Learn More
        </button>
      </div>

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
