"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 20, label: "Años de Experiencia", suffix: "+" },
  { value: 36, label: "Expertos Legales", suffix: "" },
  { value: 120, label: "Clientes Satisfechos", suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#16163F] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center py-10 md:py-0 px-8 ${
                i < stats.length - 1
                  ? "border-b md:border-b-0 md:border-r border-white/10"
                  : ""
              }`}
            >
              <div className="font-[family-name:var(--font-montserrat)] font-black text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-none">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-8 h-[2px] bg-[#CC5132] mb-4" />
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.3em] uppercase text-[#9B9A9A]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
