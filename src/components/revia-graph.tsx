// Decorative semantic graph for the Revia card.
const nodes = [
  { id: "main", x: 60, y: 110, label: "main" },
  { id: "read", x: 170, y: 50, label: "read" },
  { id: "parse", x: 170, y: 170, label: "parse" },
  { id: "check", x: 290, y: 110, label: "check" },
  { id: "io", x: 290, y: 30, label: "effect: io" },
  { id: "err", x: 290, y: 190, label: "error" },
  { id: "emit", x: 400, y: 110, label: "contract" },
];

const edges: [string, string][] = [
  ["main", "read"],
  ["main", "parse"],
  ["read", "check"],
  ["parse", "check"],
  ["read", "io"],
  ["parse", "err"],
  ["check", "emit"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function ReviaGraph() {
  return (
    <svg
      viewBox="0 0 460 220"
      role="img"
      aria-label="Schematischer semantischer Graph"
      className="mx-auto h-auto w-full max-w-md"
    >
      {edges.map(([a, b]) => (
        <line
          key={a + b}
          x1={byId[a].x}
          y1={byId[a].y}
          x2={byId[b].x}
          y2={byId[b].y}
          className="stroke-line"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((n) => {
        const primary = n.id === "main" || n.id === "emit";
        return (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={primary ? 7 : 5}
              className={primary ? "fill-accent" : "fill-surface stroke-muted"}
              strokeWidth="1.5"
            />
            <text
              x={n.x}
              y={n.y + 22}
              textAnchor="middle"
              className="fill-muted font-mono text-[11px]"
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
