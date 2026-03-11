"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-white text-4xl md:text-5xl mb-4">
            CONTACTO
          </h2>
          <div className="w-16 h-1 bg-[#CC5132] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#CC5132] text-xs tracking-widest uppercase mb-3">
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
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#CC5132] text-xs tracking-widest uppercase mb-3">
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
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#CC5132] text-xs tracking-widest uppercase mb-3">
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
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#CC5132] text-xs tracking-widest uppercase mb-3">
                Contacto
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#DBDBDB] text-sm">
                Daniela Barrales
              </p>
            </div>

            {/* Decorative */}
            <div className="pt-4">
              <div className="w-full h-px bg-white/10" />
              <p className="font-[family-name:var(--font-montserrat)] font-black text-4xl text-white/5 mt-6 tracking-widest">
                LEXLINE
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#CC5132] text-white placeholder-[#9B9A9A] text-sm font-[family-name:var(--font-inter)] py-3 outline-none transition-colors"
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
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#CC5132] text-white placeholder-[#9B9A9A] text-sm font-[family-name:var(--font-inter)] py-3 outline-none resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase bg-[#CC5132] text-white px-10 py-4 hover:bg-[#b34529] transition-colors w-full"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
