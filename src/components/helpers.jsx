
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

// ─── LANGUAGE DROPDOWN ─────────────────────────────────────────────────────
export function LangToggle({ lang, setLang }) {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'as', label: 'অসমীয়া' },
    { code: 'mr', label: 'मराठी' }
  ];

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className="px-3 py-1.5 rounded-lg border-2 border-emerald-600 text-emerald-700 bg-white font-bold text-sm hover:bg-emerald-50 transition-all cursor-pointer appearance-none pr-8"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2310b981' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 8px center',
        paddingRight: '28px'
      }}
    >
      {languages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}