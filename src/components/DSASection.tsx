import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, Play, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

/* ── Array Sorting Visualizer ── */
const generateArray = () =>
  Array.from({ length: 14 }, () => Math.floor(Math.random() * 90) + 10);

const ArraySorter = () => {
  const [arr, setArr] = useState(generateArray);
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    setArr((prev) => [...prev].sort((a, b) => a - b));
    setSorted(true);
  };

  const handleShuffle = () => {
    setArr(generateArray());
    setSorted(false);
  };

  const max = Math.max(...arr);

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="label-caps mb-1">Array Visualizer</p>
          <h3 className="font-display text-lg font-bold text-foreground">
            One-Click Sort
          </h3>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShuffle}>
            <Shuffle size={14} />
            Shuffle
          </Button>
          <Button
            size="sm"
            onClick={handleSort}
            disabled={sorted}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Play size={14} />
            Sort
          </Button>
        </div>
      </div>
      <div className="flex items-end gap-1.5 h-48">
        <AnimatePresence mode="popLayout">
          {arr.map((val, i) => (
            <motion.div
              key={`${val}-${i}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={spring}
              className="flex-1 rounded-t-md flex items-end justify-center pb-1"
              style={{
                height: `${(val / max) * 100}%`,
                backgroundColor: sorted
                  ? `hsl(${140 + (i / arr.length) * 80}, 70%, 50%)`
                  : `hsl(var(--accent) / ${0.4 + (val / max) * 0.6})`,
              }}
            >
              <span className="text-[10px] font-medium text-accent-foreground">
                {val}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <p className="text-xs text-muted-foreground mt-4 text-center">
        {sorted
          ? "✓ Sorted in ascending order (O(n log n))"
          : "Click Sort to arrange the array in ascending order"}
      </p>
    </div>
  );
};

/* ── Graph Shortest Path (Dijkstra) ── */
type Node = { id: string; x: number; y: number };
type Edge = { from: string; to: string; weight: number };

const NODES: Node[] = [
  { id: "A", x: 50, y: 50 },
  { id: "B", x: 200, y: 30 },
  { id: "C", x: 150, y: 150 },
  { id: "D", x: 320, y: 80 },
  { id: "E", x: 280, y: 180 },
  { id: "F", x: 420, y: 130 },
];

const EDGES: Edge[] = [
  { from: "A", to: "B", weight: 4 },
  { from: "A", to: "C", weight: 2 },
  { from: "B", to: "D", weight: 5 },
  { from: "C", to: "B", weight: 1 },
  { from: "C", to: "E", weight: 8 },
  { from: "D", to: "F", weight: 3 },
  { from: "E", to: "F", weight: 2 },
  { from: "B", to: "E", weight: 6 },
];

function dijkstra(
  nodes: Node[],
  edges: Edge[],
  start: string,
  end: string
): { path: string[]; dist: number } {
  const adj: Record<string, { to: string; w: number }[]> = {};
  nodes.forEach((n) => (adj[n.id] = []));
  edges.forEach((e) => {
    adj[e.from].push({ to: e.to, w: e.weight });
    adj[e.to].push({ to: e.from, w: e.weight });
  });

  const dist: Record<string, number> = {};
  const prev: Record<string, string | null> = {};
  const visited = new Set<string>();
  nodes.forEach((n) => {
    dist[n.id] = Infinity;
    prev[n.id] = null;
  });
  dist[start] = 0;

  for (let i = 0; i < nodes.length; i++) {
    let u: string | null = null;
    for (const n of nodes) {
      if (!visited.has(n.id) && (u === null || dist[n.id] < dist[u]))
        u = n.id;
    }
    if (!u || dist[u] === Infinity) break;
    visited.add(u);
    for (const { to, w } of adj[u]) {
      const alt = dist[u] + w;
      if (alt < dist[to]) {
        dist[to] = alt;
        prev[to] = u;
      }
    }
  }

  const path: string[] = [];
  let cur: string | null = end;
  while (cur) {
    path.unshift(cur);
    cur = prev[cur];
  }
  return { path: path[0] === start ? path : [], dist: dist[end] };
}

const GraphPathfinder = () => {
  const [start, setStart] = useState("A");
  const [end, setEnd] = useState("F");
  const [result, setResult] = useState<{
    path: string[];
    dist: number;
  } | null>(null);

  const handleFind = useCallback(() => {
    setResult(dijkstra(NODES, EDGES, start, end));
  }, [start, end]);

  const handleReset = () => setResult(null);

  const pathEdges = new Set<string>();
  if (result?.path) {
    for (let i = 0; i < result.path.length - 1; i++) {
      pathEdges.add(`${result.path[i]}-${result.path[i + 1]}`);
      pathEdges.add(`${result.path[i + 1]}-${result.path[i]}`);
    }
  }

  const isOnPath = (id: string) => result?.path?.includes(id) ?? false;
  const isEdgeOnPath = (from: string, to: string) =>
    pathEdges.has(`${from}-${to}`);

  const svgW = 480;
  const svgH = 220;

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="label-caps mb-1">Graph Algorithm</p>
          <h3 className="font-display text-lg font-bold text-foreground">
            Shortest Path (Dijkstra)
          </h3>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw size={14} />
            Reset
          </Button>
          <Button
            size="sm"
            onClick={handleFind}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Play size={14} />
            Find Path
          </Button>
        </div>
      </div>

      {/* Node selectors */}
      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Start:
          <select
            value={start}
            onChange={(e) => {
              setStart(e.target.value);
              setResult(null);
            }}
            className="bg-secondary text-foreground rounded-md px-2 py-1 text-sm border border-border"
          >
            {NODES.map((n) => (
              <option key={n.id} value={n.id}>
                {n.id}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          End:
          <select
            value={end}
            onChange={(e) => {
              setEnd(e.target.value);
              setResult(null);
            }}
            className="bg-secondary text-foreground rounded-md px-2 py-1 text-sm border border-border"
          >
            {NODES.map((n) => (
              <option key={n.id} value={n.id}>
                {n.id}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Graph SVG */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="w-full max-w-lg mx-auto"
        >
          {/* Edges */}
          {EDGES.map((e) => {
            const fromNode = NODES.find((n) => n.id === e.from)!;
            const toNode = NODES.find((n) => n.id === e.to)!;
            const onPath = isEdgeOnPath(e.from, e.to);
            const mx = (fromNode.x + toNode.x) / 2;
            const my = (fromNode.y + toNode.y) / 2;
            return (
              <g key={`${e.from}-${e.to}`}>
                <motion.line
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={onPath ? "hsl(340, 95%, 60%)" : "hsl(240, 5%, 75%)"}
                  strokeWidth={onPath ? 3 : 1.5}
                  animate={{
                    stroke: onPath
                      ? "hsl(340, 95%, 60%)"
                      : "hsl(240, 5%, 75%)",
                    strokeWidth: onPath ? 3 : 1.5,
                  }}
                  transition={spring}
                />
                <rect
                  x={mx - 10}
                  y={my - 8}
                  width={20}
                  height={16}
                  rx={4}
                  fill="hsl(240, 10%, 98%)"
                  stroke="hsl(240, 5%, 85%)"
                  strokeWidth={0.5}
                />
                <text
                  x={mx}
                  y={my + 4}
                  textAnchor="middle"
                  className="text-[10px] font-medium"
                  fill="hsl(240, 5%, 45%)"
                >
                  {e.weight}
                </text>
              </g>
            );
          })}
          {/* Nodes */}
          {NODES.map((n) => {
            const onPath = isOnPath(n.id);
            const isStart = n.id === start;
            const isEnd = n.id === end;
            return (
              <g key={n.id}>
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={onPath ? 18 : 16}
                  fill={
                    onPath
                      ? "hsl(340, 95%, 60%)"
                      : isStart || isEnd
                        ? "hsl(240, 10%, 10%)"
                        : "hsl(240, 5%, 93%)"
                  }
                  stroke={
                    onPath
                      ? "hsl(340, 95%, 45%)"
                      : "hsl(240, 5%, 75%)"
                  }
                  strokeWidth={1.5}
                  animate={{
                    r: onPath ? 18 : 16,
                    fill: onPath
                      ? "hsl(340, 95%, 60%)"
                      : isStart || isEnd
                        ? "hsl(240, 10%, 10%)"
                        : "hsl(240, 5%, 93%)",
                  }}
                  transition={spring}
                />
                <text
                  x={n.x}
                  y={n.y + 5}
                  textAnchor="middle"
                  className="text-xs font-bold"
                  fill={
                    onPath || isStart || isEnd
                      ? "hsl(0, 0%, 100%)"
                      : "hsl(240, 10%, 10%)"
                  }
                >
                  {n.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={spring}
            className="mt-4 p-3 rounded-lg bg-secondary text-center"
          >
            {result.path.length > 0 ? (
              <p className="text-sm text-foreground font-medium">
                Shortest path:{" "}
                <span className="text-accent font-bold">
                  {result.path.join(" → ")}
                </span>{" "}
                &nbsp;|&nbsp; Distance:{" "}
                <span className="text-accent font-bold">{result.dist}</span>
              </p>
            ) : (
              <p className="text-sm text-destructive font-medium">
                No path found
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Main DSA Section ── */
const DSASection = () => (
  <section id="dsa" className="py-24 px-6 container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={spring}
    >
      <p className="label-caps mb-2">Interactive</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        DSA Playground
      </h2>
      <p className="text-muted-foreground mb-12 max-w-xl">
        Explore classic data structure and algorithm problems with interactive
        visualizations. Sort arrays in one click or find the shortest path in a
        weighted graph.
      </p>
    </motion.div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...spring, delay: 0.1 }}
      >
        <ArraySorter />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...spring, delay: 0.2 }}
      >
        <GraphPathfinder />
      </motion.div>
    </div>
  </section>
);

export default DSASection;
