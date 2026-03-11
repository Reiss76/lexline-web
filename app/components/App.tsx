"use client";
import Image from "next/image";

export default function AppSection() {
  return (
    <section className="bg-[#16163F] py-28 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-[10px] tracking-[0.4em] uppercase mb-4">
            Siempre conectado
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.03em] leading-tight mb-5">
            DESCARGA
            <br />
            NUESTRA APP
          </h2>
          <div className="w-12 h-[2px] bg-[#CC5132] mb-8 mx-auto md:mx-0" />
          <p className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-base md:text-lg mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
            Accede a tus casos, documentos y comunicación con tu abogado desde
            cualquier lugar, en cualquier momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[0.2em] uppercase bg-[#CC5132] text-white px-10 py-4 hover:bg-[#b34529] transition-colors text-center"
            >
              App Store
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[0.2em] uppercase border border-white/30 text-white px-10 py-4 hover:border-white/60 hover:bg-white/5 transition-colors text-center"
            >
              Google Play
            </a>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-56 h-[480px] md:w-64 md:h-[550px]">
            <Image
              src="https://static.wixstatic.com/media/3547fa_bef3fcb87f8942b8b37f716219c8dc60~mv2.png"
              alt="Lexline App"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 224px, 256px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
