"use client";

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

export default function Valores() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-[10px] tracking-[0.4em] uppercase mb-4">
            Lo que nos define
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.05em] mb-5">
            VALORES
          </h2>
          <div className="w-12 h-[2px] bg-[#CC5132] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {valores.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#CC5132] flex items-center justify-center mb-6 group-hover:bg-[#CC5132] transition-all duration-300">
                <span className="font-[family-name:var(--font-montserrat)] font-black text-2xl text-[#CC5132] group-hover:text-white transition-colors duration-300">
                  {v.letter}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-xl mb-4 tracking-wide">
                {v.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-sm leading-relaxed max-w-xs">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
