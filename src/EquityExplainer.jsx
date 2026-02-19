import React, { useState, useEffect } from 'react';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import ScreenEMI from './screens/ScreenEMI';
import LoanPreparationScreen from './screens/LoanPreparationScreen';
import logo from "./assets/logo.jpg";

export default function EquityExplainer() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [screenHistory, setScreenHistory] = useState([1]);
  const [chosenPath, setChosenPath] = useState(null); // 'loan' or 'partnership'
  const [businessMetrics, setBusinessMetrics] = useState({
    currentSales: 50000,
    profitMargin: 20,
    requiredInvestment: 500000,
    initialIncome: 10000,
    expandedIncome: 18000,
    jobsCreated: 3,
    ownershipBefore: 100,
    ownershipAfter: 80,
  });

  const handleUpdateMetrics = (newMetrics) => {
    setBusinessMetrics((prev) => ({
      ...prev,
      ...newMetrics,
    }));
  };

  const handleNavigateTo = (screenNumber) => {
    setScreenHistory([...screenHistory, screenNumber]);
    setCurrentScreen(screenNumber);
  };

  const handleBack = () => {
    if (screenHistory.length > 1) {
      const newHistory = screenHistory.slice(0, -1);
      setScreenHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  const screens = {
    1: (
      <Screen1 
        onNext={() => handleNavigateTo(2)}
        onUpdateMetrics={handleUpdateMetrics}
        businessMetrics={businessMetrics}
      />
    ),
    2: (
      <Screen2
        businessMetrics={businessMetrics}
        onChooseLoan={() => {
          setChosenPath('loan');
          handleNavigateTo('emi');
        }}
        onChoosePartnership={() => {
          setChosenPath('partnership');
          handleNavigateTo(3);
        }}
        onBack={handleBack}
      />
    ),
    emi: (
      <ScreenEMI
        businessMetrics={businessMetrics}
        onBack={handleBack}
        onContinueWithLoan={() => {
          handleNavigateTo('loanprep');
        }}
        onChoosePartnership={() => {
          handleBack();
        }}
      />
    ),
    3: (
      <Screen3
        chosenPath={chosenPath}
        businessMetrics={businessMetrics}
        onNext={() => handleNavigateTo(4)}
        onBack={handleBack}
      />
    ),
    4: (
      <Screen4
        businessMetrics={businessMetrics}
        onNext={() => handleNavigateTo(5)}
        onBack={handleBack}
      />
    ),
    5: (
      <Screen5
        businessMetrics={businessMetrics}
        onRestart={() => {
          setCurrentScreen(1);
          setScreenHistory([1]);
          setChosenPath(null);
          setBusinessMetrics({
            currentSales: 50000,
            profitMargin: 20,
            requiredInvestment: 500000,
            initialIncome: 10000,
            expandedIncome: 18000,
            jobsCreated: 3,
            ownershipBefore: 100,
            ownershipAfter: 80,
          });
        }}
        onBack={handleBack}
      />
    ),
    loanprep: (
      <LoanPreparationScreen
        onRestart={() => {
          setCurrentScreen(1);
          setScreenHistory([1]);
          setChosenPath(null);
          setBusinessMetrics({
            currentSales: 50000,
            profitMargin: 20,
            requiredInvestment: 500000,
            initialIncome: 10000,
            expandedIncome: 18000,
            jobsCreated: 3,
            ownershipBefore: 100,
            ownershipAfter: 80,
          });
        }}
      />
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      <div className="max-w-md mx-auto h-screen flex flex-col">
        {/* Header with progress */}
        <div className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
          {currentScreen == 1 && (
            <button
              onClick={handleBack}
              className="text-lg font-bold text-gray-200 transition-all"
            >
              ← Back
            </button>
          )}{currentScreen !== 1 && (
            <button
              onClick={handleBack}
              className="text-lg font-bold text-gray-700 hover:text-gray-900 transition-all"
            >
              ← Back
            </button>
          )}
          {currentScreen === 0 && <div className="w-8"></div>}
          <img 
            src={logo} 
            alt="Quiver Logo" 
            className="w-32 h-auto" 
          />
          <div className="text-sm text-gray-600 min-w-fit">
            {currentScreen === 'emi' ? 'EMI' : currentScreen === 'loanprep' ? 'Loan Prep' : `Screen ${currentScreen}/5`}
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-gray-200 h-1">
          <div
            className="bg-green-600 h-1 transition-all duration-500"
            style={{ width: `${currentScreen === 'emi' ? '25%' : currentScreen === 'loanprep' ? '25%' : (currentScreen / 5) * 100}%` }}
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
