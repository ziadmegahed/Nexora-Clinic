import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-square w-full touch-none overflow-hidden rounded-2xl bg-muted select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <img
        src={after}
        alt={`${alt} — after treatment`}
        loading="lazy"
        width={800}
        height={800}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={`${alt} — before treatment`}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover"
          style={{ width: ref.current?.clientWidth ? `${ref.current.clientWidth}px` : "100%" }}
        />
      </div>

      <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-foreground/70 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-background uppercase">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground uppercase">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-card"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-card text-primary shadow-soft">
          <MoveHorizontal className="h-4 w-4" aria-hidden />
        </span>
      </div>

      <label className="sr-only" htmlFor={`ba-${alt}`}>
        Before and after comparison for {alt}
      </label>
      <input
        id={`ba-${alt}`}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute bottom-3 left-1/2 w-2/3 -translate-x-1/2 accent-primary"
      />
    </div>
  );
}
