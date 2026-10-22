import { useEffect, useRef } from "react";

/** Lightweight 3D wireframe of a structural frame, drawn with a 2D canvas. */
export function StructureCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const colors = ["#f05a3c", "#f5c82a", "#2fbf71", "#2a9be0", "#6a3fe0", "#e8409a"];

    // Build a frame: 4x3 columns, 5 floors
    type P = [number, number, number];
    const pts: P[] = [];
    const edges: [number, number, number][] = [];
    const cols = 4, rows = 3, floors = 5;
    const id = (x: number, z: number, y: number) => y * cols * rows + z * cols + x;
    for (let y = 0; y < floors; y++)
      for (let z = 0; z < rows; z++)
        for (let x = 0; x < cols; x++) pts.push([x - (cols - 1) / 2, y * 0.8 - 1.6, z - (rows - 1) / 2]);
    for (let y = 0; y < floors; y++)
      for (let z = 0; z < rows; z++)
        for (let x = 0; x < cols; x++) {
          const ci = (x + z + y) % colors.length;
          if (x < cols - 1) edges.push([id(x, z, y), id(x + 1, z, y), ci]);
          if (z < rows - 1) edges.push([id(x, z, y), id(x, z + 1, y), ci]);
          if (y < floors - 1) edges.push([id(x, z, y), id(x, z, y + 1), -1]);
        }

    let raf = 0, mx = 0, my = 0, t = 0, visible = true;
    const onMove = (e: PointerEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 0.4;
      my = (e.clientY / window.innerHeight - 0.5) * 0.2;
    };
    const resize = () => {
      const d = Math.min(window.devicePixelRatio, 2);
      c.width = c.clientWidth * d;
      c.height = c.clientHeight * d;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(c);

    const draw = () => {
      if (visible) {
        t += reduced ? 0 : 0.0035;
        const w = c.width, h = c.height, s = Math.min(w, h) * 0.17;
        ctx.clearRect(0, 0, w, h);
        const ay = t + 0.6 + mx, ax = 0.35 + my;
        const proj = pts.map(([x, y, z]) => {
          const x1 = x * Math.cos(ay) - z * Math.sin(ay);
          const z1 = x * Math.sin(ay) + z * Math.cos(ay);
          const y1 = y * Math.cos(ax) - z1 * Math.sin(ax);
          const z2 = y * Math.sin(ax) + z1 * Math.cos(ax);
          const p = 4 / (4 + z2);
          return [w / 2 + x1 * s * p, h / 2 - y1 * s * p, p] as const;
        });
        for (const [a, b, ci] of edges) {
          const pa = proj[a], pb = proj[b];
          ctx.strokeStyle = ci < 0 ? "rgba(245,246,247,0.35)" : colors[ci];
          ctx.globalAlpha = ci < 0 ? 1 : 0.55 * pa[2];
          ctx.lineWidth = (ci < 0 ? 1 : 1.5) * Math.min(window.devicePixelRatio, 2);
          ctx.beginPath(); ctx.moveTo(pa[0], pa[1]); ctx.lineTo(pb[0], pb[1]); ctx.stroke();
        }
        ctx.globalAlpha = 1;
        ctx.fillStyle = "rgba(245,246,247,0.85)";
        for (const p of proj) { ctx.beginPath(); ctx.arc(p[0], p[1], 2 * p[2], 0, 7); ctx.fill(); }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
