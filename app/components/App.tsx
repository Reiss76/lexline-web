"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AppSection() {
  return (
    <section className="bg-[#16163F] py-28 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="section-title text-white text-4xl md:text-5xl mb-4">
            DESCARGA NUESTRA
            <br />
            APLICACIÓN
          </h2>
          <div className="w-16 h-1 bg-[#CC5132] mb-8 mx-auto md:mx-0" />
          <p className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-lg mb-10 max-w-md mx-auto md:mx-0">
            Accede a tus casos, documentos y comunicación con tu abogado desde
            cualquier lugar, en cualquier momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase bg-[#CC5132] text-white px-8 py-4 hover:bg-[#b34529] transition-colors text-center"
            >
              App Store
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase border border-white/30 text-white px-8 py-4 hover:border-[#CC5132] hover:text-[#CC5132] transition-colors text-center"
            >
              Google Play
            </a>
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-56 h-[480px] md:w-64 md:h-[550px]">
            <Image
              src="https://static.wixstatic.com/media/3547fa_bef3fcb87f8942b8b37f716219c8dc60~mv2.png"
              alt="Lexline App"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 224px, 256px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
