"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 20, label: "Años", suffix: "+" },
  { value: 36, label: "Expertos", suffix: "" },
  { value: 120, label: "Clientes", suffix: "+" },
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
    <section className="bg-[#16163F] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="font-[family-name:var(--font-montserrat)] font-black text-6xl md:text-7xl text-white mb-3">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-12 h-0.5 bg-[#CC5132] mb-4" />
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#DBDBDB] text-lg tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
