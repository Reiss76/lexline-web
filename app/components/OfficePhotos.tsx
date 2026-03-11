"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "https://static.wixstatic.com/media/3547fa_607eff4c2e874911880cb96b3ee8939c~mv2.png",
    alt: "Oficina Lexline 1",
  },
  {
    src: "https://static.wixstatic.com/media/3547fa_889300a32c974a6488490cf10794208f~mv2.jpg",
    alt: "Oficina Lexline 2",
  },
];

export default function OfficePhotos() {
  return (
    <section className="bg-[#0a0a0a] grid grid-cols-1 md:grid-cols-2">
      {photos.map((photo, i) => (
        <motion.div
          key={photo.alt}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      ))}
    </section>
  );
}
