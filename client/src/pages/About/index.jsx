import "./About.scss";

import Hero from "../../components/about/Hero/Hero";
import VisionMission from "../../components/about/VisionMission/VisionMission";
import WhyChoose from "../../components/about/WhyChoose/WhyChoose";
import Journey from "../../components/about/Journey/Journey";
import Technology from "../../components/about/Technology/Technology";
import Industries from "../../components/about/Industries/Industries";
import CTA from "../../components/about/CTA/CTA";

import Reveal from "../../components/common/Reveal/Reveal";

export default function About() {
  return (
    <main className="about-page">
      {/* 1. Hero & Core Metrics */}
      <Hero />

      {/* 2. Strategic Purpose & Vision */}
      <Reveal delay={0.06}>
        <VisionMission />
      </Reveal>

      {/* 3. Competitive Edge & Values (Unified) */}
      <Reveal delay={0.08}>
        <WhyChoose />
      </Reveal>

      {/* 4. Company Journey & Milestones */}
      <Reveal delay={0.08}>
        <Journey />
      </Reveal>

      {/* 5. Tech Stack & Engineering Ecosystem */}
      <Reveal delay={0.08}>
        <Technology />
      </Reveal>

      {/* 6. Vertical & Industry Breadth */}
      <Reveal delay={0.08}>
        <Industries />
      </Reveal>

      {/* 7. Conversion Consultation & Direct Email CTA */}
      <Reveal delay={0.08}>
        <CTA />
      </Reveal>
    </main>
  );
}