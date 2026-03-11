
// ─── HELPERS ─────────────────────────────────────────────────────────────────
export function fmt(n) { return Number(n).toLocaleString("en-IN"); }

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────
export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md border border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

export function PillBadge({ label, color = "green" }) {
  const colors = {
    green: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    amber: "bg-amber-100 text-amber-700 border border-amber-200",
    blue: "bg-blue-100 text-blue-700 border border-blue-200",
    red: "bg-red-100 text-red-700 border border-red-200",
  };
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors[color]}`}>
      {label}
    </span>
  );
}

export function StatRow({ label, value, sub, color = "text-gray-800" }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-sm text-gray-500">{label}</span>
      <div className="text-right">
        <span className={`text-sm font-bold ${color}`}>{value}</span>
        {sub && <p className="text-xs text-gray-400">{sub}</p>}
      </div>
    </div>
  );
}

// ─── LANGUAGE TOGGLE ─────────────────────────────────────────────────────────
export function LangToggle({ lang, setLang }) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      className="flex items-center justify-center gap-1.5 text-xs font-bold py-1.5 rounded-full border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition-all min-w-[90px] whitespace-nowrap"
    >
      <span>{lang === "en" ? "हिंदी" : "English"}</span>
    </button>
  );
}