import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import About from "../../components/home/About/About";
import Process from "../../components/home/Process/Process";
import Portfolio from "../../components/home/Portfolio/Portfolio";
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
      </Reveal>

      <Reveal delay={0.05}>
        <Services />
      </Reveal>

      <Reveal delay={0.10}>
        <About />
      </Reveal>

      <Reveal delay={0.15}>
        <Process />
      </Reveal>

      <Reveal delay={0.20}>
        <Portfolio />
      </Reveal>

      <Reveal delay={0.25}>
        <Testimonials />
      </Reveal>

      <Reveal delay={0.30}>
        <FAQ />
      </Reveal>

      <Reveal delay={0.35}>
        <Clients />
      </Reveal>

      <Reveal delay={0.40}>
        <ContactCTA />
      </Reveal>
    </>
  );
}