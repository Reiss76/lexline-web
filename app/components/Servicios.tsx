"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    img: "https://static.wixstatic.com/media/3547fa_5878d6dfa6a747da9e1cd8f38b9982d1~mv2.png",
    title: "Servicios Legales Corporativos",
    desc: "Asesoramos a empresas en su constitución, contratos mercantiles, fusiones, adquisiciones y cumplimiento normativo para un desarrollo seguro y eficiente.",
  },
  {
    img: "https://static.wixstatic.com/media/3547fa_39f187618ca04e89859cea2adeaa84a8~mv2.png",
    title: "Servicios Legales Digitales",
    desc: "Protección de datos, contratos digitales, propiedad intelectual en entornos online y compliance tecnológico para negocios del siglo XXI.",
  },
  {
    img: "https://static.wixstatic.com/media/3547fa_cccfa6e7de9942c9adcdedcad9971328~mv2.png",
    title: "Servicios Legales Personales",
    desc: "Acompañamos a personas físicas en asuntos familiares, patrimoniales, laborales y civiles con atención cercana y resultados concretos.",
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

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-[#0a0a0a] text-4xl md:text-5xl mb-4">
            SERVICIOS
          </h2>
          <div className="w-16 h-1 bg-[#CC5132] mx-auto" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-48 h-48 mb-8 overflow-hidden rounded-sm">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="192px"
                />
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[#0a0a0a] text-lg tracking-wide mb-4">
                {service.title}
              </h3>
              <div className="w-8 h-0.5 bg-[#CC5132] mb-4" />
              <p className="font-[family-name:var(--font-inter)] text-[#555] text-sm leading-relaxed max-w-xs">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
