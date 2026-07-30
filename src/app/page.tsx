import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";


export default function HomePage() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Process />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}