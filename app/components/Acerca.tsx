"use client";

export default function Acerca() {
  return (
    <section id="equipo" className="bg-[#0a0a0a] py-28 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-[10px] tracking-[0.4em] uppercase mb-4">
          Quiénes somos
        </p>
        <h2 className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.05em] mb-5">
          ACERCA
        </h2>
        <div className="w-12 h-[2px] bg-[#CC5132] mx-auto mb-14" />

        {/* Decorative quote mark */}
        <div
          className="font-[family-name:var(--font-montserrat)] font-black text-[120px] leading-none text-[#CC5132] select-none mb-[-40px]"
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <p className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-lg md:text-xl leading-relaxed">
          Entendemos a nuestros clientes, nacimos con la idea de cambiar el
          concepto del despacho tradicional y fomentar la transparencia,
          lealtad, comunicación total y siempre que sea necesario, por ello
          implementamos estrictos controles de calidad y de servicio al
          cliente; todo para mejorar la experiencia y atención en materia
          legal.
        </p>
      </div>
    </section>
  );
}
