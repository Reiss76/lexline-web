"use client";
import { motion } from "framer-motion";

const valores = [
  {
    letter: "M",
    title: "Movilidad",
    desc: "Estamos ubicados en San Pedro Garza García, Nuevo León, pero no importa donde se tengan que aplicar nuestros servicios, vamos a donde se requieran, viajamos dentro y fuera del país.",
  },
  {
    letter: "C",
    title: "Contacto Permanente",
    desc: "Disponibles en todo momento, nuestra política de calidad nos indica que atendemos sin rezago alguno las llamadas de nuestros clientes y poder responder a todas sus dudas.",
  },
  {
    letter: "T",
    title: "Transparencia",
    desc: "Nuestros clientes desde la contratación sabrán el total de honorarios a sufragar, no hay cuentas ocultas y siempre conocerán el estatus en tiempo real de los asuntos.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Valores() {
  return (
    <section className="bg-[#111111] py-28 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-white text-4xl md:text-5xl mb-4">
            VALORES
          </h2>
          <div className="w-16 h-1 bg-[#CC5132] mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {valores.map((v) => (
            <motion.div
              key={v.title}
              variants={cardVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#CC5132] flex items-center justify-center mb-6 group-hover:bg-[#CC5132] transition-colors duration-300">
                <span className="font-[family-name:var(--font-montserrat)] font-black text-2xl text-[#CC5132] group-hover:text-white transition-colors">
                  {v.letter}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-xl mb-4 tracking-wide">
                {v.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-sm leading-relaxed max-w-xs">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
