import React, { useState, useEffect } from 'react';

export default function Screen1({ onNext, onUpdateMetrics, businessMetrics }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSales, setCurrentSales] = useState(
    businessMetrics?.currentSales ? businessMetrics.currentSales.toString() : ''
  );
  const [profitMargin, setProfitMargin] = useState(
    businessMetrics?.profitMargin ? businessMetrics.profitMargin.toString() : ''
  );
  const [requiredInvestment, setRequiredInvestment] = useState(
    businessMetrics?.requiredInvestment ? businessMetrics.requiredInvestment.toString() : ''
  );
  const [showInputs, setShowInputs] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const handleProceed = () => {
    const sales = parseInt(currentSales) || 50000;
    const margin = parseInt(profitMargin) || 20;
    const investment = parseInt(requiredInvestment) || 500000;
    const monthlyIncome = Math.round((sales * margin) / 100);
    
    // Update parent with new metrics
    onUpdateMetrics({
      currentSales: sales,
      profitMargin: margin,
      requiredInvestment: investment,
      initialIncome: monthlyIncome,
      expandedIncome: Math.round(monthlyIncome * 1.8), // 80% growth
    });
    
    setShowInputs(false);
    // Delay to show updated info before moving to next screen
    setTimeout(() => onNext(), 500);
  };

  const monthlyIncome = currentSales && profitMargin 
    ? Math.round((parseInt(currentSales)) * ((parseInt(profitMargin)) / 100))
    : 0;

  return (
    <div className="px-4 py-6 h-full flex flex-col justify-between overflow-y-auto">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          अपना व्यवसाय आज
        </h2>
        <p className="text-gray-600">Your Business Today</p>
      </div>

      {/* Input Form */}
      {showInputs && (
        <div className="bg-white rounded-xl shadow-md p-4 mb-6 space-y-4">
          <p className="text-sm font-semibold text-gray-700 mb-4">Enter Your Business Details:</p>
          
          {/* Current Sales */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Monthly Sales (₹)
            </label>
            <input
              type="number"
              value={currentSales}
              onChange={(e) => setCurrentSales(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              placeholder="50000"
            />
          </div>

          {/* Profit Margin */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Profit Margin (%)
            </label>
            <input
              type="number"
              value={profitMargin}
              onChange={(e) => setProfitMargin(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              placeholder="20"
            />
            <p className="text-xs text-gray-600 mt-1">e.g., 20 means 20% profit on sales</p>
          </div>

          {/* Required Investment */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Required Investment (₹)
            </label>
            <input
              type="number"
              value={requiredInvestment}
              onChange={(e) => setRequiredInvestment(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              placeholder="500000"
            />
          </div>
        </div>
      )}

      {/* Business Visual - Capacity Meter
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
      </div> */}

      {/* Business Info Card */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 border-l-4 border-green-600">
        <div className="mb-3">
          <p className="text-sm text-gray-600">Monthly Income</p>
          <p className="text-2xl font-bold text-green-700">₹{monthlyIncome.toLocaleString('en-IN')}</p>
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
        onClick={handleProceed}
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
