import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import Portfolio from "../../components/home/Portfolio/Portfolio";
import About from "../../components/home/About/About";
import Process from "../../components/home/Process/Process";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import Stats from "../../components/home/Stats/Stats";
import Clients from "../../components/home/Clients/Clients";
import SectionDivider from "../../components/common/SectionDivider/SectionDivider";

export default function Home() {
  return (
    <>
        <Hero />

        <Stats />

        <SectionDivider />

        <Services />

        <SectionDivider />

        <Portfolio />

        <SectionDivider />

        <About />

        <SectionDivider />

        <Process />

        <SectionDivider />

        <Testimonials />
        
        <SectionDivider />

        <Clients />
    </>
  );
}