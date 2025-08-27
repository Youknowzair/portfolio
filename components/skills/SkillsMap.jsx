"use client";
import { useEffect, useRef } from 'react';

// Interactive canvas skill map: force layout, zoom/pan, fit view, minimap.
export default function SkillsMap() {
  const canvasRef = useRef(null);
  const miniRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const mini = miniRef.current;
    if (!canvas || !mini) return;
    const ctx = canvas.getContext('2d');
    const mctx = mini.getContext('2d');

    let w = (canvas.width = canvas.clientWidth);
    let h = (canvas.height = canvas.clientHeight);

    const nodes = [
      { id: 'React', x: w * 0.5, y: h * 0.4, r: 36, vx: 0, vy: 0, color: '#60a5fa' },
      { id: 'Next.js', x: w * 0.72, y: h * 0.35, r: 30, vx: 0, vy: 0, color: '#06b6d4' },
      { id: 'Tailwind', x: w * 0.28, y: h * 0.6, r: 30, vx: 0, vy: 0, color: '#34d399' },
      { id: 'Node', x: w * 0.62, y: h * 0.75, r: 26, vx: 0, vy: 0, color: '#f97316' },
      { id: 'Postgres', r: 18, x: w * 0.8, y: h * 0.3, vx: 0, vy: 0, color: '#31648c' }
    ];

    const links = [
      ['React', 'Next.js'],
      ['React', 'Tailwind'],
      ['Node', 'React'],
      ['Postgres', 'Node']
    ];

    let mouse = { x: w / 2, y: h / 2, down: false };
    let scale = 1;
    let offset = { x: 0, y: 0 };

    function fitView() {
      let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
      for (const n of nodes) {
        minx = Math.min(minx, n.x - n.r);
        miny = Math.min(miny, n.y - n.r);
        maxx = Math.max(maxx, n.x + n.r);
        maxy = Math.max(maxy, n.y + n.r);
      }
      const bw = Math.max(10, maxx - minx);
      const bh = Math.max(10, maxy - miny);
      const target = Math.min(w / (bw + 120), h / (bh + 120), 1);
      scale = target;
      const cx = (minx + maxx) / 2;
      const cy = (miny + maxy) / 2;
      offset.x = w / (2 * scale) - cx;
      offset.y = h / (2 * scale) - cy;
    }

    function step() {
      // simple physics & repulsion
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.vx *= 0.92;
        a.vy *= 0.92;
        const dx = mouse.x / scale - offset.x - a.x;
        const dy = mouse.y / scale - offset.y - a.y;
        const d = Math.max(8, Math.hypot(dx, dy));
        const F = (mouse.down ? 800 : 200) / (d * d);
        a.vx += dx * F;
        a.vy += dy * F;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx2 = a.x - b.x;
          const dy2 = a.y - b.y;
          const dist = Math.max(4, Math.hypot(dx2, dy2));
          const repel = 30 / (dist * dist);
          a.vx += (dx2 / dist) * repel;
          a.vy += (dy2 / dist) * repel;
          b.vx -= (dx2 / dist) * repel;
          b.vy -= (dy2 / dist) * repel;
        }

        a.x += a.vx;
        a.y += a.vy;
      }

      for (const [A, B] of links) {
        const a = nodes.find((n) => n.id === A);
        const b = nodes.find((n) => n.id === B);
        if (!a || !b) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 1;
        const desired = (a.r + b.r) * 1.6;
        const diff = dist - desired;
        const k = 0.0015;
        const fx = dx * diff * k;
        const fy = dy * diff * k;
        a.vx += fx;
        a.vy += fy;
        b.vx -= fx;
        b.vy -= fy;
      }

      // draw
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.scale(scale, scale);
      ctx.translate(offset.x, offset.y);

      ctx.lineWidth = 1 / Math.max(0.5, scale);
      ctx.strokeStyle = 'rgba(100,116,139,0.12)';
      for (const [A, B] of links) {
        const a = nodes.find((n) => n.id === A);
        const b = nodes.find((n) => n.id === B);
        if (!a || !b) continue;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(99,102,241,0.06)';
        ctx.arc(n.x, n.y, n.r + 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = n.color;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'var(--text)';
        ctx.font = '600 12px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(n.id, n.x, n.y + n.r + 14);
      }

      ctx.restore();

      // minimap
      mctx.clearRect(0, 0, mini.clientWidth, mini.clientHeight);
      const sm = Math.min(mini.clientWidth / w, mini.clientHeight / h);
      mctx.save();
      mctx.scale(sm, sm);
      for (const [A, B] of links) {
        const a = nodes.find((n) => n.id === A);
        const b = nodes.find((n) => n.id === B);
        if (!a || !b) continue;
        mctx.beginPath();
        mctx.strokeStyle = 'rgba(100,116,139,0.12)';
        mctx.moveTo(a.x, a.y);
        mctx.lineTo(b.x, b.y);
        mctx.stroke();
      }
      for (const n of nodes) {
        mctx.beginPath();
        mctx.fillStyle = n.color;
        mctx.arc(n.x, n.y, Math.max(3, n.r * 0.12), 0, Math.PI * 2);
        mctx.fill();
      }
      mctx.restore();

      rafRef.current = requestAnimationFrame(step);
    }

    function resize() {
      w = canvas.width = canvas.clientWidth;
      h = canvas.height = canvas.clientHeight;
      fitView();
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
      mouse.x = x;
      mouse.y = y;
    }

    function onDown() {
      mouse.down = true;
    }

    function onUp() {
      mouse.down = false;
    }

    function onZoom(e) {
      const f = e?.detail?.factor || 1.12;
      scale = Math.min(3, Math.max(0.2, scale * f));
    }

    function onFit() { fitView(); }

    window.addEventListener('skills:zoom', onZoom);
    window.addEventListener('skills:fit', onFit);

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('touchmove', onMove, { passive: true });
    canvas.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('resize', resize);

    resize();
    rafRef.current = requestAnimationFrame(step);

    function onMiniClick(ev) {
      const rect = mini.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const sm2 = Math.min(mini.clientWidth / w, mini.clientHeight / h);
      const wx = x / sm2;
      const wy = y / sm2;
      offset.x = w / (2 * scale) - wx;
      offset.y = h / (2 * scale) - wy;
    }

    mini.addEventListener('click', onMiniClick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('touchmove', onMove);
      canvas.removeEventListener('mousedown', onDown);
      mini.removeEventListener('click', onMiniClick);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('resize', resize);
      window.removeEventListener('skills:zoom', onZoom);
      window.removeEventListener('skills:fit', onFit);
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <canvas ref={canvasRef} className="w-full h-full rounded-md" />
      <div className="absolute right-3 top-3 flex flex-col gap-2">
        <button onClick={() => window.dispatchEvent(new Event('skills:fit'))} className="px-3 py-1 bg-white/90 dark:bg-surface border border-divider rounded text-xs">Fit View</button>
        <div className="flex gap-2">
          <button onClick={() => window.dispatchEvent(new CustomEvent('skills:zoom', { detail: { factor: 1.12 } }))} className="px-2 py-1 bg-white/90 dark:bg-surface border border-divider rounded text-xs">+</button>
          <button onClick={() => window.dispatchEvent(new CustomEvent('skills:zoom', { detail: { factor: 0.88 } }))} className="px-2 py-1 bg-white/90 dark:bg-surface border border-divider rounded text-xs">−</button>
        </div>
      </div>
      <canvas ref={miniRef} className="absolute right-3 bottom-3 w-28 h-20 rounded border border-divider bg-white/5" />
    </div>
  );
}
