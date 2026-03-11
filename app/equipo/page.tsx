'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Adrián Román',
    role: 'Fundador y Director',
    img: 'https://static.wixstatic.com/media/3547fa_b869226d24fb411e91a4e648d2f8efe3~mv2.jpg/v1/crop/x_100,y_584,w_2148,h_2413/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/Equipo%20VMCR-02.jpg',
  },
  {
    name: 'José De La Rosa',
    role: 'Director de Legal',
    img: 'https://static.wixstatic.com/media/3547fa_92b42017b1774b17aae5d51699ba4b65~mv2.jpg/v1/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/Lexline-85.jpg',
  },
  {
    name: 'Aldo Damián H.',
    role: 'Director de Litigio',
    img: 'https://static.wixstatic.com/media/3547fa_bf2c493514ab47349267f052c11d51bf~mv2.jpg/v1/crop/x_0,y_558,w_2434,h_2733/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/Equipo%20VMCR-23.jpg',
  },
  {
    name: 'Fernando Bruno',
    role: 'Litigante',
    img: 'https://static.wixstatic.com/media/3547fa_6865269e312149db915ae2121a5e7b04~mv2.jpg/v1/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/Equipo%20VMCR-03.jpg',
  },
  {
    name: 'Perla Roman',
    role: 'Familiar / Notarial',
    img: 'https://static.wixstatic.com/media/3547fa_36943b0f90a94854aff1e16a5e19271e~mv2.jpg/v1/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/b1585db5-6ceb-4a35-a79c-b3e56ee22ba4_JPG.jpg',
  },
  {
    name: 'Daniela Olmos',
    role: 'Empresarial / Ambiental',
    img: 'https://static.wixstatic.com/media/3547fa_7c3b5d07c6a44a648ee9242b85532353~mv2.jpg/v1/crop/x_0,y_641,w_3667,h_4117/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/Lexline-32.jpg',
  },
  {
    name: 'Estefanía Rivera',
    role: 'Administrativo / Amparo',
    img: 'https://static.wixstatic.com/media/3547fa_47a3a9b62db9438fb35a33a18622e3f4~mv2.jpg/v1/crop/x_0,y_414,w_3846,h_4314/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/Lexline-14.jpg',
  },
  {
    name: 'Marlon Villarreal',
    role: 'Administrativo',
    img: 'https://static.wixstatic.com/media/3547fa_0c2c8108371048249f44c790cc175495~mv2.jpg/v1/crop/x_0,y_606,w_3987,h_4787/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/Lexline-70.jpg',
  },
  {
    name: 'Maximiliano Román',
    role: 'Paralegal',
    img: 'https://static.wixstatic.com/media/3547fa_2cf9f6c4c6ee42b5a80fad593c8e1d5f~mv2.jpg/v1/crop/x_0,y_802,w_4000,h_4485/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/Lexline-53.jpg',
  },
  {
    name: 'Jesús M. Sáenz V.',
    role: 'Abogado penalista',
    img: 'https://static.wixstatic.com/media/3547fa_6292ecffe145446ca68a89f2bdad6277~mv2.jpg/v1/crop/x_0,y_424,w_2624,h_2946/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/vmcr%20equipo.jpg',
  },
  {
    name: 'Jocelyne Correa M.',
    role: 'Practicante de litigio',
    img: 'https://static.wixstatic.com/media/3547fa_0616ad0ebcf846cead4f3c8d233382e8~mv2.jpg/v1/crop/x_0,y_434,w_2303,h_2586/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/A7309659.jpg',
  },
  {
    name: 'Darine De León',
    role: 'Corporativo',
    img: 'https://static.wixstatic.com/media/3547fa_46f48e67107c4c1b8487388098606448~mv2.jpg/v1/crop/x_0,y_283,w_2242,h_2514/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/A7309694.jpg',
  },
  {
    name: 'Josselyn García',
    role: 'Auxiliar',
    img: 'https://static.wixstatic.com/media/3547fa_6593a31a09a8442dbfc6cfc659898671~mv2.jpg/v1/crop/x_0,y_537,w_2584,h_2898/fill/w_1080,h_1200,al_c,q_90,enc_avif,quality_auto/Equipo%20VMCR-24.jpg',
  },
];

export default function EquipoPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <Link href="/" className="font-[family-name:var(--font-montserrat)] font-black text-xl tracking-[0.3em] text-white">
          LEXLINE
        </Link>
        <div className="flex items-center gap-8">
          {['Inicio', 'Servicios', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={item === 'Inicio' ? '/' : `/#${item.toLowerCase()}`}
              className="font-[family-name:var(--font-montserrat)] font-medium text-xs tracking-widest text-[#9B9A9A] hover:text-white transition-colors uppercase"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/equipo"
            className="font-[family-name:var(--font-montserrat)] font-medium text-xs tracking-widest text-[#CC5132] uppercase"
          >
            Equipo
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-end pb-16 px-8 md:px-20 overflow-hidden pt-20">
        <Image
          src="https://static.wixstatic.com/media/3547fa_0afe9ec050c4446dbf315486eadaaca7~mv2.jpg/v1/fill/w_2182,h_1744,al_c,q_90,enc_avif,quality_auto/3547fa_0afe9ec050c4446dbf315486eadaaca7~mv2.jpg"
          alt="Lexline equipo"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-xs tracking-[0.3em] uppercase mb-4">
              Nuestro Equipo
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] font-black text-5xl md:text-7xl text-white leading-none mb-6">
              Nuestro Equipo
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-base max-w-lg">
              Contamos con el más alto nivel de abogados especializados en el rubro o la materia que cada caso requiera.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-4 bg-[#111]" style={{ aspectRatio: '3/4' }}>
                {member.img ? (
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
                    <span className="font-[family-name:var(--font-montserrat)] font-black text-4xl text-white/10">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-0.5 bg-[#CC5132] mb-2" />
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-sm mb-1">
                {member.name}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#CC5132] text-xs tracking-wide">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 text-center">
        <Link href="/" className="font-[family-name:var(--font-montserrat)] font-black text-2xl tracking-[0.3em] text-white hover:text-[#CC5132] transition-colors">
          LEXLINE
        </Link>
        <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-xs mt-4">
          © {new Date().getFullYear()} Lexline. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
