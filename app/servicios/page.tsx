'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  { title: 'CORPORATIVO', red: false, desc: 'Constitución y restructura de sociedades, contratos comerciales, gobierno corporativo y cumplimiento normativo para empresas de todos tamaños.' },
  { title: 'PERMISOS Y LICENCIAS', red: true, desc: 'Gestión y obtención de permisos, licencias y autorizaciones ante autoridades federales, estatales y municipales.' },
  { title: 'MERCANTIL', red: false, desc: 'Negociación, redacción y litigio en materia mercantil. Protección de intereses comerciales en toda clase de controversias.' },
  { title: 'FISCAL Y FINANCIERO', red: true, desc: 'Planeación fiscal, defensa ante el SAT, resoluciones favorables y asesoría en materia tributaria y financiera.' },
  { title: 'LABORAL PATRONAL', red: true, desc: 'Defensa patronal en juicios laborales, contratos colectivos e individuales, auditorías y cumplimiento de la NOM-035.' },
  { title: 'PENAL DE LA EMPRESA', red: false, desc: 'Representación en delitos empresariales: fraude, defraudación fiscal, lavado de activos y responsabilidad penal corporativa.' },
  { title: 'PERSONALES', red: true, desc: 'Asesoría y litigio en materia familiar, sucesiones, bienes raíces, trámites notariales y asuntos civiles personales.' },
  { title: 'SERVICIOS EXTRAS', red: false, desc: 'Mediación, arbitraje, due diligence, auditorías legales y consultoría especializada según las necesidades del cliente.' },
];

export default function ServiciosPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="font-[family-name:var(--font-montserrat)] font-black text-xl tracking-[0.4em] text-white hover:text-[#CC5132] transition-colors">
          LEXLINE
        </Link>
        <div className="flex items-center gap-10">
          {[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/servicios' },
            { label: 'Equipo', href: '/equipo' },
            { label: 'Contacto', href: '/#contacto' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-[family-name:var(--font-montserrat)] font-medium text-[10px] tracking-[0.2em] uppercase transition-colors ${
                item.label === 'Servicios' ? 'text-[#CC5132]' : 'text-[#9B9A9A] hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="https://static.wixstatic.com/media/3547fa_6441b423792c4fb1a423c2ba9ab5f9e9~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/3547fa_6441b423792c4fb1a423c2ba9ab5f9e9~mv2.jpg"
          alt="Servicios Lexline"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          <h1 className="font-[family-name:var(--font-montserrat)] font-black text-6xl md:text-8xl text-white mb-8 leading-none">
            Servicios
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-lg leading-relaxed max-w-2xl mx-auto">
            Nuestros servicios están diseñados exclusivamente para la empresa, lo que nos permite
            enfocarnos de manera especializada en las áreas legales que forman parte de ésta.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            className={`group relative flex flex-col justify-between p-10 min-h-[280px] cursor-pointer transition-all duration-300 ${
              service.red
                ? 'bg-[#CC5132] hover:bg-[#b34529]'
                : 'bg-[#f5f4f0] hover:bg-white'
            }`}
          >
            <div>
              <h2 className={`font-[family-name:var(--font-montserrat)] font-black text-lg leading-tight mb-6 tracking-wide ${
                service.red ? 'text-white' : 'text-[#0a0a0a]'
              }`}>
                {service.title}
              </h2>
              <p className={`font-[family-name:var(--font-inter)] text-sm leading-relaxed ${
                service.red ? 'text-white/85' : 'text-[#555]'
              }`}>
                {service.desc}
              </p>
            </div>
            <div className={`mt-8 flex items-center gap-2 text-xs font-[family-name:var(--font-montserrat)] font-semibold tracking-widest uppercase ${
              service.red ? 'text-white/70' : 'text-[#CC5132]'
            }`}>
              <span>Saber más</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 px-6 text-center border-t border-white/10">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-[10px] tracking-[0.4em] uppercase mb-4">Contáctenos</p>
          <h3 className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl text-white mb-6">
            ¿Necesita asesoría legal?
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] mb-10 max-w-xl mx-auto">
            Estamos disponibles para atender su caso. Contáctenos para una consulta inicial sin costo.
          </p>
          <Link
            href="/#contacto"
            className="inline-block font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase bg-[#CC5132] text-white px-12 py-4 hover:bg-[#b34529] transition-colors"
          >
            Contactar ahora
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-[family-name:var(--font-montserrat)] font-black text-2xl tracking-[0.4em] text-white hover:text-[#CC5132] transition-colors">
            LEXLINE
          </Link>
          <div className="flex gap-8">
            {[['/', 'Inicio'], ['/servicios', 'Servicios'], ['/equipo', 'Equipo'], ['/#contacto', 'Contacto']].map(([href, label]) => (
              <Link key={label} href={href} className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-widest text-[#9B9A9A] hover:text-[#CC5132] uppercase transition-colors">
                {label}
              </Link>
            ))}
          </div>
          <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-xs">
            © {new Date().getFullYear()} Lexline. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
