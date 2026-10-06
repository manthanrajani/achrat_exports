/**
 * Stylized SVG trade globe. Animated routes radiating from India.
 * Indicative only (not a geographic claim): we arrange shipping to
 * virtually any port worldwide.
 */
const ROUTES: Array<{ to: [number, number]; ctrl: [number, number]; label: string }> = [
  { to: [132, 128], ctrl: [200, 60], label: "Europe" },
  { to: [82, 108], ctrl: [150, 20], label: "Americas" },
  { to: [236, 118], ctrl: [276, 62], label: "Middle East" },
  { to: [212, 316], ctrl: [250, 250], label: "Africa" },
  { to: [356, 252], ctrl: [336, 180], label: "Asia-Pacific" },
  { to: [108, 268], ctrl: [180, 320], label: "South America" },
];

const ORIGIN: [number, number] = [298, 192]; // India (stylized)

export function TradeGlobe({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 480 480" role="img" aria-label="Animated globe showing shipping routes from India to world regions" className="h-auto w-full">
        <style>{`
          .tg-route{stroke-dasharray:5 7;animation:tgflow 3.2s linear infinite}
          @keyframes tgflow{to{stroke-dashoffset:-96}}
          .tg-halo{transform-box:fill-box;transform-origin:center;animation:tghalo 2.6s ease-out infinite}
          @keyframes tghalo{0%{transform:scale(1);opacity:.9}100%{transform:scale(3.2);opacity:0}}
          .tg-spin{transform-box:fill-box;transform-origin:center;animation:tgspin 60s linear infinite}
          @keyframes tgspin{to{transform:rotate(360deg)}}
        `}</style>

        {/* Outer glow ring */}
        <circle cx="240" cy="240" r="232" fill="none" stroke="#C9A24B" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 8" className="tg-spin" />
        {/* Globe */}
        <circle cx="240" cy="240" r="210" fill="#13315C" fillOpacity="0.5" stroke="#FAFAF7" strokeOpacity="0.25" strokeWidth="1.5" />
        {/* Longitudes */}
        <ellipse cx="240" cy="240" rx="150" ry="210" fill="none" stroke="#FAFAF7" strokeOpacity="0.14" />
        <ellipse cx="240" cy="240" rx="80" ry="210" fill="none" stroke="#FAFAF7" strokeOpacity="0.14" />
        <line x1="240" y1="30" x2="240" y2="450" stroke="#FAFAF7" strokeOpacity="0.14" />
        {/* Latitudes */}
        <ellipse cx="240" cy="140" rx="182" ry="42" fill="none" stroke="#FAFAF7" strokeOpacity="0.12" />
        <ellipse cx="240" cy="240" rx="210" ry="58" fill="none" stroke="#FAFAF7" strokeOpacity="0.16" />
        <ellipse cx="240" cy="340" rx="182" ry="42" fill="none" stroke="#FAFAF7" strokeOpacity="0.12" />

        {/* Routes */}
        {ROUTES.map(({ to, ctrl }, i) => (
          <path
            key={i}
            d={`M ${ORIGIN[0]} ${ORIGIN[1]} Q ${ctrl[0]} ${ctrl[1]} ${to[0]} ${to[1]}`}
            fill="none"
            stroke="#C9A24B"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="tg-route"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        ))}

        {/* Destination markers */}
        {ROUTES.map(({ to }, i) => (
          <g key={`m-${i}`}>
            <circle cx={to[0]} cy={to[1]} r="7" fill="none" stroke="#C9A24B" strokeWidth="1.4" className="tg-halo" style={{ animationDelay: `${i * 0.4}s` }} />
            <circle cx={to[0]} cy={to[1]} r="4" fill="#C9A24B" />
          </g>
        ))}

        {/* Origin: India */}
        <circle cx={ORIGIN[0]} cy={ORIGIN[1]} r="12" fill="#1B998B" fillOpacity="0.25" className="tg-halo" />
        <circle cx={ORIGIN[0]} cy={ORIGIN[1]} r="5.5" fill="#1B998B" stroke="#FAFAF7" strokeWidth="1.5" />
        <text x={ORIGIN[0]} y={ORIGIN[1] - 16} textAnchor="middle" fill="#FAFAF7" fontSize="12" fontWeight="700" letterSpacing="2">
          SURAT · IN
        </text>
      </svg>
    </div>
  );
}
