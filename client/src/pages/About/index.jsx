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

export default function About() {
  return (
    <main className="about-page">

      <Hero />

      <Overview />

      <VisionMission />

      <Values />

      <WhyChoose />

      <Technology />

      <Journey />

      <Industries />

      <Process />

      <Statistics />

      <CTA />

    </main>
  );
}