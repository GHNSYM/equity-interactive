import React, { useState, useEffect, useRef } from "react";
import { fmt } from "../components/helpers";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.png";
import img6 from "../assets/image6.png";

export default function Screen3({ businessMetrics, onNext, t }) {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const stepRefs = useRef([]);

  const investorEquity = 19;
  const meenaEquity = 81;

  useEffect(() => {
    const observers = stepRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisibleSteps((p) => new Set([...p, i]));
        },
        { threshold: 0.2 },
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const steps = [
    {
      img: img1,
      color: "amber",
      tag: t.s3Tag1,
      title: t.s3Title1,
      content: (
        <div className="space-y-1.5 mt-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">{t.s3MonthlyIncome}</span>
            <span className="font-black text-gray-800">₹{fmt(50000)}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">{t.s3FundingNeeded}</span>
            <span className="font-black text-gray-800">₹{fmt(700000)}</span>
          </div>
        </div>
      ),
    },
    {
      img: img2,
      color: "red",
      tag: t.s3Tag2,
      title: t.s3Title2,
      content: (
        <div className="space-y-1.5 mt-2">
          {[t.s3Prob1, t.s3Prob2, t.s3Prob3].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-red-400" />
              </div>
              <p className="text-xs text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      img: img3,
      color: "blue",
      tag: t.s3Tag3,
      title: t.s3Title3,
      content: (
        <div className="grid grid-cols-2 gap-1.5 mt-2">
          {[
            { label: t.s3Investment, value: `₹${fmt(700000)}` },
            { label: t.s3ExitAfter, value: t.s3ExitVal },
          ].map(({ label, value }) => (
            <div key={label} className="bg-blue-50 rounded-xl p-2 text-center">
              <p className="text-xs text-blue-500 font-semibold">{label}</p>
              <p className="text-xs font-black text-blue-800">{value}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      img: img4,
      color: "purple",
      tag: t.s3Tag4,
      title: t.s3Title4,
      content: (
        <div className="mt-2 space-y-2">
          <div className="h-6 rounded-full overflow-hidden flex">
            <div className="bg-purple-500 flex items-center justify-center" style={{ width: `${meenaEquity}%` }}>
              <span className="text-white text-xs font-black">{meenaEquity}%</span>
            </div>
            <div className="bg-purple-200 flex items-center justify-center" style={{ width: `${investorEquity}%` }}>
              <span className="text-purple-700 text-xs font-black">{investorEquity}%</span>
            </div>
          </div>
          <div className="flex justify-between text-xs px-0.5">
            <span className="text-purple-600 font-bold">{t.s3MeenaControl}</span>
            <span className="text-purple-400 font-semibold">{t.s3InvestorPartner}</span>
          </div>
        </div>
      ),
    },
    {
      img: img5,
      color: "amber",
      tag: t.s3TagRisk,
      title: t.s3TitleRisk,
      content: (
        <div className="mt-2 space-y-2">
          {[t.s3Risk1, t.s3Risk2, t.s3Risk3].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-amber-500" />
              </div>
              <p className="text-xs text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      img: img6,
      color: "emerald",
      tag: t.s3Tag5,
      title: t.s3Title5,
      content: (
        <div className="space-y-1.5 mt-2">
          {[t.s3Out1, t.s3Out2, t.s3Out3].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const colorStyles = {
    amber:   { tag: "bg-amber-50 text-amber-600 border-amber-200",       card: "border-amber-200",   arrow: "#fcd34d" },
    red:     { tag: "bg-red-50 text-red-500 border-red-200",             card: "border-red-200",     arrow: "#fca5a5" },
    blue:    { tag: "bg-blue-50 text-blue-600 border-blue-200",          card: "border-blue-200",    arrow: "#93c5fd" },
    purple:  { tag: "bg-purple-50 text-purple-600 border-purple-200",    card: "border-purple-200",  arrow: "#c4b5fd" },
    emerald: { tag: "bg-emerald-50 text-emerald-600 border-emerald-200", card: "border-emerald-200", arrow: "#6ee7b7" },
  };

  return (
    <div className="px-4 py-6">
      {/* Hero */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-3">
          <span className="text-emerald-600 text-sm font-semibold">Step 3 of 4</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 leading-tight">{t.s3Title}</h2>
        <p className="text-sm text-gray-500 mt-1">{t.s3HeroSub}</p>
      </div>

      {/* Zigzag Roadmap */}
      <div className="relative">
        {steps.map((step, i) => {
          const c = colorStyles[step.color];
          const visible = visibleSteps.has(i);
          const isRight = i % 2 === 1;

          return (
            <div key={i} className="relative mb-2 my-8">
              {/* Zigzag connector arrow */}
              {i < steps.length - 1 && (
                <div className={`absolute ${isRight ? "left-6" : "right-6"} -bottom-10 z-10 flex flex-col items-center`}>
                  <svg width="34" height="53" viewBox="0 0 22 32">
                    <path
                      d={isRight ? "M 20 0 Q 4 8 4 16 Q 4 24 12 32" : "M 4 0 Q 20 8 20 16 Q 20 24 12 32"}
                      fill="none" stroke={c.arrow} strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round"
                    />
                    <circle cx="12" cy="30" r="3" fill={c.arrow} />
                  </svg>
                </div>
              )}

              {/* Outer bordered container */}
              <div
                ref={(el) => (stepRefs.current[i] = el)}
                className={`border ${c.card} rounded-2xl shadow-sm overflow-hidden bg-white transition-all duration-500
                  ${visible ? "opacity-100 translate-y-0" : `opacity-0 ${isRight ? "translate-x-4" : "-translate-x-4"}`}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {i === 2 ? (
                  <>
                    <div className="w-full h-44 overflow-hidden">
                      <img src={step.img} alt={step.tag} className="w-full object-cover" />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold border rounded-full px-2 py-0.5 ${c.tag}`}>{step.tag}</span>
                      </div>
                      <p className="font-black text-gray-900 text-sm">{step.title}</p>
                      {step.content}
                    </div>
                  </>
                ) : (
                  <div className={`flex items-stretch ${isRight ? "flex-row-reverse" : "flex-row"}`}>
                    <div className="shrink-0 w-36 overflow-hidden rounded-l-2xl">
                      <img src={step.img} alt={step.tag} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-1 min-w-0 p-3 flex-col justify-center">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold border rounded-full px-2 py-0.5 ${c.tag}`}>{step.tag}</span>
                      </div>
                      <p className="font-black text-gray-900 text-sm">{step.title}</p>
                      {step.content}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <button
        onClick={onNext}
        className="mt-8 w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-black py-4 rounded-2xl text-base hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg shadow-emerald-200"
      >
        {t.s3CTA}
      </button>
      <div className="h-4" />
    </div>
  );
}