"use client";
import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-[#0a0a0a] py-28 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-montserrat)] text-[#CC5132] text-[10px] tracking-[0.4em] uppercase mb-4">
            Estamos para ayudarte
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.05em] mb-5">
            CONTACTO
          </h2>
          <div className="w-12 h-[2px] bg-[#CC5132] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <div className="space-y-10">
            <div>
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#CC5132] text-[10px] tracking-[0.3em] uppercase mb-3">
                Dirección
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-sm leading-relaxed">
                Av. Lázaro Cárdenas 303, Col. Corporativo Proser.
                <br />
                Torre Malva Int. 1501. Distrito Armida.
                <br />
                San Pedro Garza García, 66260.
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#CC5132] text-[10px] tracking-[0.3em] uppercase mb-3">
                WhatsApp
              </p>
              <a
                href="https://wa.me/528131032261"
                className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-sm hover:text-[#CC5132] transition-colors"
              >
                81 3103 2261
              </a>
            </div>

            <div>
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#CC5132] text-[10px] tracking-[0.3em] uppercase mb-3">
                Correo
              </p>
              <a
                href="mailto:info@lexline.mx"
                className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-sm hover:text-[#CC5132] transition-colors"
              >
                info@lexline.mx
              </a>
            </div>

            <div>
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#CC5132] text-[10px] tracking-[0.3em] uppercase mb-3">
                Contacto
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-sm">
                Daniela Barrales
              </p>
            </div>

            {/* Decorative */}
            <div className="pt-4">
              <div className="w-full h-px bg-white/10" />
              <p className="font-[family-name:var(--font-montserrat)] font-black text-5xl text-white/[0.04] mt-6 tracking-[0.4em]">
                LEXLINE
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center">
                <div className="text-[#CC5132] text-5xl mb-6">✓</div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-xl mb-3">
                  Mensaje enviado
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#9B9A9A] text-sm">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { name: "name", placeholder: "Nombre completo", type: "text" },
                  { name: "email", placeholder: "Correo electrónico", type: "email" },
                  { name: "phone", placeholder: "Teléfono", type: "tel" },
                ].map((field) => (
                  <div key={field.name}>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      required={field.name !== "phone"}
                      className="w-full bg-transparent border-b border-white/15 focus:border-[#CC5132] text-white placeholder-[#555] text-sm font-[family-name:var(--font-inter)] py-3 outline-none transition-colors duration-300"
                    />
                  </div>
                ))}
                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-white/15 focus:border-[#CC5132] text-white placeholder-[#555] text-sm font-[family-name:var(--font-inter)] py-3 outline-none resize-none transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[0.25em] uppercase bg-[#CC5132] text-white py-4 hover:bg-[#b34529] transition-colors w-full"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
