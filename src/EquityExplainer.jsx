import React, { useState, useEffect } from 'react';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';

export default function EquityExplainer() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [chosenPath, setChosenPath] = useState(null); // 'loan' or 'partnership'
  const [businessMetrics, setBusinessMetrics] = useState({
    initialIncome: 50000,
    requiredCapital: 500000,
    expandedIncome: 90000,
    jobsCreated: 3,
    ownershipBefore: 100,
    ownershipAfter: 80,
  });

  const screens = {
    1: <Screen1 onNext={() => setCurrentScreen(2)} />,
    2: (
      <Screen2
        onChooseLoan={() => {
          setChosenPath('loan');
          setCurrentScreen(3);
        }}
        onChoosePartnership={() => {
          setChosenPath('partnership');
          setCurrentScreen(3);
        }}
      />
    ),
    3: (
      <Screen3
        chosenPath={chosenPath}
        businessMetrics={businessMetrics}
        onNext={() => setCurrentScreen(4)}
      />
    ),
    4: (
      <Screen4
        businessMetrics={businessMetrics}
        onNext={() => setCurrentScreen(5)}
      />
    ),
    5: (
      <Screen5
        businessMetrics={businessMetrics}
        onRestart={() => {
          setCurrentScreen(1);
          setChosenPath(null);
        }}
      />
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      <div className="max-w-md mx-auto h-screen flex flex-col">
        {/* Header with progress */}
        <div className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-700">Grow Business</h1>
          <div className="text-sm text-gray-600">
            Screen {currentScreen}/5
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-gray-200 h-1">
          <div
            className="bg-green-600 h-1 transition-all duration-500"
            style={{ width: `${(currentScreen / 5) * 100}%` }}
          ></div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          {screens[currentScreen]}
        </div>
      </div>
    </div>
  );
}
