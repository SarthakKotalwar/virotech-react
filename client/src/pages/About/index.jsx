import "./About.scss";

import Hero from "../../components/about/Hero/Hero";
import Overview from "../../components/about/Overview/Overview";
import VisionMission from "../../components/about/VisionMission/VisionMission";
import Values from "../../components/about/Values/Values";
import Technology from "../../components/about/Technology/Technology";
import Industries from "../../components/about/Industries/Industries";
import Journey from "../../components/about/Journey/Journey";
import Process from "../../components/about/Process/Process";
import Statistics from "../../components/about/Statistics/Statistics";
import CTA from "../../components/about/CTA/CTA";
import WhyChoose from "../../components/about/WhyChoose/WhyChoose";

import Reveal from "../../components/common/Reveal/Reveal";

export default function About() {
  return (
    <main className="about-page">

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal delay={0.05}>
        <Overview />
      </Reveal>

      <Reveal delay={0.10}>
        <VisionMission />
      </Reveal>

      <Reveal delay={0.15}>
        <Values />
      </Reveal>

      <Reveal delay={0.20}>
        <WhyChoose />
      </Reveal>

      <Reveal delay={0.25}>
        <Technology />
      </Reveal>

      <Reveal delay={0.30}>
        <Journey />
      </Reveal>

      <Reveal delay={0.35}>
        <Industries />
      </Reveal>

      <Reveal delay={0.40}>
        <Process />
      </Reveal>

      <Reveal delay={0.45}>
        <Statistics />
      </Reveal>

      <Reveal delay={0.50}>
        <CTA />
      </Reveal>

    </main>
  );
}