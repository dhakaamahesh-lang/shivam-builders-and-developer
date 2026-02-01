"use client";

import { useEffect, useRef, useState } from "react";
import { Typography } from "../ui/typography";

type StatProps = {
  value: number;
  suffix?: string;
  label: string;
  statWidth?: string;
};

function Stat({ value, suffix = "+", label, statWidth }: StatProps) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;

          let start = 0;
          const duration = 1200;
          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const current = Math.floor(progress * value);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div className={`${statWidth}`} ref={ref}>
      <h2 className="text-xl md:text-4xl lg:text-5xl font-semibold text-white">
        {count}
        {suffix}
      </h2>
      <Typography
        variant={"p20"}
        className="max-sm:text-base! mt-2 text-white-70"
      >
        {label}
      </Typography>
    </div>
  );
}

export default function StatsCounter({
  className,
  statWidth,
}: {
  className?: string;
  statWidth?: string;
}) {
  return (
    <section
      className={`w-full max-sm:grid max-sm:grid-cols-2 gap-4 sm:flex sm:items-center sm:justify-between py-6 lg:py-18 ${className}`}
    >
      <Stat statWidth={`${statWidth}`} value={15} label="Students enrolled" />
      <Stat
        statWidth={`${statWidth}`}
        value={25}
        label="Talented team members"
      />
      <Stat statWidth={`${statWidth}`} value={100} label="Completed projects" />
      <Stat statWidth={`${statWidth}`} value={9} label="Industry awards won" />
    </section>
  );
}
