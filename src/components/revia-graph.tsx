// Decorative sketch of the ReVia knowledge graph: user input → exercises → plan.
const nodes = [
  { id: "profile", x: 60, y: 110, label: "Profil" },
  { id: "region", x: 170, y: 50, label: "Körperregion" },
  { id: "level", x: 170, y: 170, label: "Trainingslevel" },
  { id: "exercise", x: 290, y: 110, label: "Übung" },
  { id: "effect", x: 290, y: 30, label: "Trainingseffekt" },
  { id: "contra", x: 290, y: 190, label: "Kontraindikation" },
  { id: "plan", x: 400, y: 110, label: "Trainingsplan" },
];

const edges: [string, string][] = [
  ["profile", "region"],
  ["profile", "level"],
  ["region", "exercise"],
  ["level", "exercise"],
  ["exercise", "effect"],
  ["exercise", "contra"],
  ["exercise", "plan"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function ReviaGraph() {
  return (
    <svg
      viewBox="0 0 460 220"
      role="img"
      aria-label="Schematischer Ausschnitt des ReVia-Knowledge-Graphs"
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
        const primary = n.id === "profile" || n.id === "plan";
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
