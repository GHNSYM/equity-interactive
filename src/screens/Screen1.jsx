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

  // Dynamic problems based on inputs
  const getProblemsList = () => {
    const problems = [];
    const sales = parseInt(currentSales) || 50000;
    const margin = parseInt(profitMargin) || 20;
    const investment = parseInt(requiredInvestment) || 500000;
    const income = Math.round((sales * margin) / 100);

    // Problem 1: Thin margins
    if (margin < 25) {
      problems.push("Your margins are too thin to save capital");
    }

    // Problem 2: Years to save
    if (investment > 0 && income > 0) {
      const monthsToSave = Math.ceil(investment / income);
      if (monthsToSave > 12) {
        const years = Math.round(monthsToSave / 12);
        problems.push(`Saving alone would take ${years} years`);
      }
    }

    // Always show this
    problems.push("Growth is stuck without outside capital");

    return problems.slice(0, 3); // Show max 3 problems
  };

  const problems = getProblemsList();

  // Calculate months to save for dynamic quote
  const sales = parseInt(currentSales) || 50000;
  const margin = parseInt(profitMargin) || 20;
  const investment = parseInt(requiredInvestment) || 500000;
  const income = Math.round((sales * margin) / 100);
  const monthsToSave = income > 0 ? Math.ceil(investment / income) : 0;

  return (
    <div className="px-4 py-6 h-full flex flex-col justify-between overflow-y-auto">
      {/* Title */}
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">
          अपना व्यवसाय आज
        </h2>
        <p className="text-gray-600 mb-3">Your Business Today</p>
        <p className="text-sm text-gray-500 max-w-xs mx-auto">
          Tell us about your business and we'll show you exactly how to grow it.
        </p>
      </div>

      {/* Input Form */}
      {showInputs && (
        <div className="bg-white rounded-xl shadow-md p-4 mb-6 space-y-4">
          <p className="text-sm font-semibold text-gray-700 mb-4">Enter Your Business Details:</p>
          
          {/* Current Sales */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              What is your total sales per month? (₹)
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
              What % of that is your profit?
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
              How much money do you need to grow?
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
        <div className="mb-4">
          <p className="text-sm text-gray-600">Your Current Monthly Profit</p>
          <p className="text-2xl font-bold text-green-700">₹{monthlyIncome.toLocaleString('en-IN')}</p>
        </div>
        <div>
          <p className="text-sm text-gray-700 font-semibold mb-2">Your Challenges:</p>
          <ul className="space-y-2 text-sm text-gray-700">
            {problems.length > 0 ? (
              problems.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>{problem}</span>
                </li>
              ))
            ) : (
              <li>Growth is stuck without outside capital</li>
            )}
          </ul>
        </div>
      </div>

      {/* Dynamic insight text */}
      {monthlyIncome > 0 && (
        <div className="text-center mb-4">
          <p className="text-base font-semibold text-gray-800">
            At this rate, it would take {monthsToSave} months to save ₹{investment.toLocaleString('en-IN')} on your own.
          </p>
          <p className="text-sm text-gray-500 mt-2">{Math.round(monthsToSave / 12)} years of waiting...</p>
        </div>
      )}

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
