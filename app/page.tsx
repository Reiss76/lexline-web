import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Stats from "./components/Stats";
import OfficePhotos from "./components/OfficePhotos";
import Acerca from "./components/Acerca";
import Experiencia from "./components/Experiencia";
import Proceso from "./components/Proceso";
import Valores from "./components/Valores";
import AppSection from "./components/App";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Stats />
      <OfficePhotos />
      <Acerca />
      <Experiencia />
      <Proceso />
      <Valores />
      <AppSection />
      <Contacto />
      <Footer />
    </main>
  );
}
