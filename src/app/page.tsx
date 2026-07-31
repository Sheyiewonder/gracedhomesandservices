import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/footer/Footer";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/contact/Contact";


export default function HomePage() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}