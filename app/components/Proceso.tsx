"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Exposición detallada",
    desc: "El cliente nos explica su problemática, escuchamos atentos a fin de no perder detalle alguno.",
  },
  {
    num: "02",
    title: "Diseño de estrategia",
    desc: "Establecemos la estrategia correcta a aplicar, presupuestamos y elaboramos la propuesta.",
  },
  {
    num: "03",
    title: "Visto bueno y ejecución",
    desc: "Planteamos la propuesta del cliente, le escuchamos y si tenemos su visto bueno, iniciamos.",
  },
  {
    num: "04",
    title: "Preparación de documentos",
    desc: "Se inicia con la preparación de los documentos a ejecutar.",
  },
  {
    num: "05",
    title: "Inicio de procedimiento",
    desc: "Se presentan los documentos ante las autoridades o personas respectivas.",
  },
  {
    num: "06",
    title: "Conclusión",
    desc: "El proceso concluye ya sea por acuerdo, negociación o resolución.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Proceso() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-white text-4xl md:text-5xl mb-4">
            PROCESO
          </h2>
          <div className="w-16 h-1 bg-[#CC5132] mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="border border-white/10 p-8 hover:border-[#CC5132]/50 transition-colors duration-300 group"
            >
              <div className="font-[family-name:var(--font-montserrat)] font-black text-5xl text-[#CC5132]/20 group-hover:text-[#CC5132]/40 transition-colors mb-4">
                {step.num}
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-lg mb-3">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
