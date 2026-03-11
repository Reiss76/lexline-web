"use client";
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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[4px] bg-[#0a0a0a]">
      {photos.map((photo) => (
        <div
          key={photo.alt}
          className="relative h-[400px] md:h-[500px] overflow-hidden group"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </div>
      ))}
    </section>
  );
}
