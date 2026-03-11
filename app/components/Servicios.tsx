"use client";
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

export default function Servicios() {
  return (
    <section id="servicios" className="bg-[#f5f4f0] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-[10px] tracking-[0.4em] uppercase mb-4">
            Lo que hacemos
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl lg:text-6xl text-[#0a0a0a] tracking-[0.1em] mb-5">
            SERVICIOS
          </h2>
          <div className="w-12 h-[2px] bg-[#CC5132] mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center group bg-white p-8 hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative w-full h-[200px] mb-8 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[#0a0a0a] text-base tracking-wide mb-4 leading-snug">
                {service.title}
              </h3>
              <div className="w-8 h-[2px] bg-[#CC5132] mb-4" />
              <p className="font-[family-name:var(--font-inter)] text-[#666] text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
