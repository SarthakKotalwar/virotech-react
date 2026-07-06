import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import About from "../../components/home/About/About";
import Process from "../../components/home/Process/Process";
import Portfolio from "../../components/home/Portfolio/Portfolio";
import Stats from "../../components/home/Stats/Stats";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import FAQ from "../../components/home/FAQ/FAQ";
import Clients from "../../components/home/Clients/Clients";
import ContactCTA from "../../components/home/ContactCTA/ContactCTA";

import Reveal from "../../components/common/Reveal/Reveal";

export default function Home() {
  return (
    <>
      <Reveal>
        <Hero />
         <div className="section-divider"></div>
      </Reveal>

      <Reveal delay={0.05}>
        <Services />
         <div className="section-divider"></div>
      </Reveal>

      <Reveal delay={0.10}>
        <About />
         <div className="section-divider"></div>
      </Reveal>

      <Reveal delay={0.15}>
        <Process />
         <div className="section-divider"></div>
      </Reveal>

      <Reveal delay={0.20}>
        <Portfolio />
         <div className="section-divider"></div>
      </Reveal>

      <Reveal delay={0.25}>
        <Stats />
         <div className="section-divider"></div>
      </Reveal>

      <Reveal delay={0.25}>
        <Testimonials />
         <div className="section-divider"></div>
      </Reveal>

      <Reveal delay={0.35}>
        <FAQ />
         <div className="section-divider"></div>
      </Reveal>

      <Reveal delay={0.30}>
        <Clients />
         <div className="section-divider"></div>
      </Reveal>

      <Reveal delay={0.40}>
        <ContactCTA />    
      </Reveal>
    </>
  );
}