"use client";

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

export default function Proceso() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-[10px] tracking-[0.4em] uppercase mb-4">
            Cómo trabajamos
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.05em] mb-5">
            PROCESO
          </h2>
          <div className="w-12 h-[2px] bg-[#CC5132] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border-l-2 border-[#CC5132]/40 hover:border-[#CC5132] bg-white/[0.02] hover:bg-white/[0.05] p-8 transition-all duration-300 group"
            >
              <div className="font-[family-name:var(--font-montserrat)] font-black text-4xl text-[#CC5132] mb-5 leading-none">
                {step.num}
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-base tracking-wide mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
