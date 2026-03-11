"use client";
import { motion } from "framer-motion";

export default function Acerca() {
  return (
    <section id="equipo" className="bg-[#0a0a0a] py-28 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white text-4xl md:text-5xl mb-4">
            ACERCA
          </h2>
          <div className="w-16 h-1 bg-[#CC5132] mx-auto mb-12" />
          <p className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Entendemos a nuestros clientes, nacimos con la idea de cambiar el
            concepto del despacho tradicional y fomentar la transparencia,
            lealtad, comunicación total y siempre que sea necesario, por ello
            implementamos estrictos controles de calidad y de servicio al
            cliente; todo para mejorar la experiencia y atención en materia
            legal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
