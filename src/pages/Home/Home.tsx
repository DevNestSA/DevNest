import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { Intro } from "@/components/Intro/Intro";
import { Services } from "@/components/Services/Services";
import { Values } from "@/components/Values/Values";
import { Process } from "@/components/Process/Process";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { About } from "@/components/About/About";
import { Technologies } from "@/components/Technologies/Technologies";
import { CTA } from "@/components/CTA/CTA";
import { Footer } from "@/components/Footer/Footer";

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Values />
        <Process />
        <Portfolio />
        <About />
        <Technologies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
