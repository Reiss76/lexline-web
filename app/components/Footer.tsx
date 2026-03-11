"use client";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
          {/* Logo */}
          <div>
            <p className="font-[family-name:var(--font-montserrat)] font-black text-3xl tracking-[0.3em] text-white mb-3">
              LEXLINE
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-xs max-w-xs">
              Modernizando el servicio legal con transparencia, lealtad y comunicación total.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-montserrat)] font-medium text-xs tracking-widest text-[#9B9A9A] hover:text-[#CC5132] transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact quick */}
          <div className="text-center md:text-right">
            <a
              href="mailto:info@lexline.mx"
              className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-xs hover:text-[#CC5132] transition-colors block mb-2"
            >
              info@lexline.mx
            </a>
            <a
              href="https://wa.me/528131032261"
              className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-xs hover:text-[#CC5132] transition-colors block"
            >
              81 3103 2261
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-xs">
            © {new Date().getFullYear()} Lexline. Todos los derechos reservados.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-xs">
            San Pedro Garza García, Nuevo León, México.
          </p>
        </div>
      </div>
    </footer>
  );
}
