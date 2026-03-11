"use client";
import { motion } from "framer-motion";

export default function Experiencia() {
  return (
    <section className="bg-[#111111] py-28 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white text-4xl md:text-5xl mb-4">
            EXPERIENCIA
          </h2>
          <div className="w-16 h-1 bg-[#CC5132] mx-auto mb-12" />
          <p className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Es una palabra que nos define, ya que contamos con antecedentes y
            resoluciones que avalan nuestros casos de éxito, tenemos un gran
            número de clientes satisfechos, quienes han puesto su confianza en
            nuestras manos y les hemos demostrado con resultados nuestro
            compromiso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
