"use client";

export default function Experiencia() {
  return (
    <section className="bg-[#111111] py-28 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-[10px] tracking-[0.4em] uppercase mb-4">
          Nuestra trayectoria
        </p>
        <h2 className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.05em] mb-5">
          EXPERIENCIA
        </h2>
        <div className="w-12 h-[2px] bg-[#CC5132] mx-auto mb-16" />

        {/* Quote-style body */}
        <blockquote className="mb-10">
          <p className="font-[family-name:var(--font-inter)] italic text-[#DBDBDB] text-xl md:text-2xl leading-relaxed tracking-wide">
            &ldquo;Es una palabra que nos define, ya que contamos con antecedentes y
            resoluciones que avalan nuestros casos de éxito. Tenemos un gran
            número de clientes satisfechos, quienes han puesto su confianza en
            nuestras manos y les hemos demostrado con resultados nuestro
            compromiso.&rdquo;
          </p>
        </blockquote>

        <div className="w-8 h-[2px] bg-[#CC5132] mx-auto mb-6" />
        <p className="font-[family-name:var(--font-montserrat)] text-[#9B9A9A] text-[11px] tracking-[0.3em] uppercase">
          Equipo Lexline
        </p>
      </div>
    </section>
  );
}
