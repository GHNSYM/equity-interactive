import React, { useState, useEffect } from 'react';
import { T } from './language';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen4';
import Landing from './screens/Landing';
import ScreenEMI from './components/ScreenEMI';
import LoanPrep from './components/LoanPreparationScreen';
import { LangToggle } from './components/helpers';
import logo from './assets/logo.jpg';

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
const defaultMetrics = {
  currentSales: 50000, profitMargin: 20, requiredInvestment: 500000,
  initialIncome: 20000, expandedIncome: 30000, jobsCreated: 3,
};

export default function EquityExplainer() {
  const [lang, setLang] = useState("en");
  const [screen, setScreen] = useState(0); // 0 = landing (before Step 1)
  const [history, setHistory] = useState([0]);
  const [metrics, setMetrics] = useState(defaultMetrics);
  const t = T[lang];

  const nav = (s) => { setHistory(h => [...h, s]); setScreen(s); };
  const back = () => {
    if (history.length > 1) {
      const h = history.slice(0, -1);
      setHistory(h);
      setScreen(h[h.length - 1]);
    }
  };
  const restart = () => { setScreen(0); setHistory([0]); setMetrics(defaultMetrics); };

  const screenNum = typeof screen === "number" ? screen : null;
  const progressPct = screenNum !== null ? (screenNum / 4) * 100 : 20;
  const canGoBack = history.length > 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [screen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #2563eb; cursor: pointer; }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .active\\:scale-98:active { transform: scale(0.98); }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-sm mx-auto min-h-screen flex flex-col bg-white shadow-2xl">

          {/* Header */}
          <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm">
            <button onClick={back}
              className={`text-sm font-bold transition-all px-2 py-1 rounded-lg ${!canGoBack ? "text-gray-300 cursor-default" : "text-gray-600 hover:bg-gray-100"}`}
              disabled={!canGoBack}>
              {t.back}
            </button>

            {/* Logo / Brand */}
            <div className="flex items-center gap-1">
              <img
                src={logo}
                alt="Quiver logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-black text-gray-900 text-base tracking-tight"></span>
            </div>

            <LangToggle lang={lang} setLang={setLang} />
          </div>

          {/* Progress Bar */}
          <div className="h-0.5 bg-gray-100">
            <div className="h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-500"
              style={{ width: `${progressPct}%` }} />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {screen === 0 && <Landing onStart={() => nav(1)} t={t} />}
            {screen === 1 && <Screen1 onNext={() => nav(2)} 
              onUpdateMetrics={m => setMetrics(p => ({ ...p, ...m }))} 
              businessMetrics={metrics} t={t} 
            />}
            {screen === 2 && <Screen2 businessMetrics={metrics} 
              onChooseLoan={() => nav("emi")} 
              onChoosePartnership={() => nav(3)} t={t} 
            />}
            {screen === "emi" && <ScreenEMI businessMetrics={metrics} 
              onContinueWithLoan={() => nav("loanprep")} 
              onContinuePartnership={() => nav(3)} t={t} 
            />}
            {screen === 3 && <Screen3 businessMetrics={metrics} onNext={() => nav(4)} t={t} />}
            {screen === 4 && <Screen5 businessMetrics={metrics} onRestart={restart} onNext={() => nav(5)} t={t} />}
            {screen === "loanprep" && <LoanPrep onContinueEquity={() => nav(3)} t={t} />}
          </div>

        </div>
      </div>
    </>
  );
}
