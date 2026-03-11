"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/30 z-10" />

      {/* Hero image — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 z-0">
        <Image
          src="https://static.wixstatic.com/media/3547fa_ffd2a1fe6b834160b41d272be3b38f92~mv2.png"
          alt="Lexline Hero"
          fill
          priority
          className="object-cover object-center opacity-70 md:opacity-90"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>

      {/* Text content */}
      <div className="relative z-20 w-full px-8 lg:px-16 xl:px-24 py-32">
        <motion.div
          initial={{ opacity: 1, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-[11px] font-semibold tracking-[0.5em] uppercase mb-6">
            Despacho Jurídico
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.0] mb-8">
            Modernizando
            <br />
            el servicio
            <br />
            <span className="text-[#CC5132]">Legal.</span>
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-base md:text-lg mb-10 max-w-sm leading-relaxed">
            Transparencia, lealtad y comunicación total en cada caso que nos confías.
          </p>
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[0.2em] uppercase bg-[#CC5132] text-white px-10 py-4 hover:bg-[#b34529] transition-colors text-center"
            >
              Contáctanos
            </a>
            <a
              href="#servicios"
              className="font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[0.2em] uppercase border border-white/40 text-white px-10 py-4 hover:border-white hover:bg-white/5 transition-colors text-center"
            >
              Nuestros Servicios
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-[family-name:var(--font-montserrat)] text-[#9B9A9A] text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-[#CC5132]"
        />
      </div>
    </section>
  );
}
