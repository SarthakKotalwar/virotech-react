import "./Services.scss";

import Reveal from "../../components/common/Reveal/Reveal";

import Hero from "../../components/services/Hero/Hero";
import Overview from "../../components/services/Overview/Overview";
import CloudEngineering from "../../components/services/CloudEngineering/CloudEngineering";
import EnterpriseSolutions from "../../components/services/EnterpriseSolutions/EnterpriseSolutions";
import Process from "../../components/services/Process/Process";
import DevOps from "../../components/services/DevOps/DevOps";
import SoftwareDevelopment from "../../components/services/SoftwareDevelopment/SoftwareDevelopment";
import AIAutomation from "../../components/services/AIAutomation/AIAutomation";
import Technology from "../../components/services/Technology/Technology";
import CTA from "../../components/services/CTA/CTA";

export default function Services() {
  return (
    <main className="services-page">

      {/* =====================================================
          SERVICES PAGE CONTENT
      ===================================================== */}

      <div className="services-page__content">

        {/* =====================================================
            SERVICES HERO
        ===================================================== */}

        <Reveal>
          <Hero />
        </Reveal>


        {/* =====================================================
            SERVICES OVERVIEW
        ===================================================== */}

        <Reveal delay={0.05}>
          <Overview />
        </Reveal>


        {/* =====================================================
            CLOUD ENGINEERING
        ===================================================== */}

        <Reveal delay={0.10}>
          <CloudEngineering />
        </Reveal>


        {/* =====================================================
            ENTERPRISE SOLUTIONS
        ===================================================== */}

        <Reveal delay={0.15}>
          <EnterpriseSolutions />
        </Reveal>


        {/* =====================================================
            DEVOPS & CI/CD
        ===================================================== */}

        <Reveal delay={0.20}>
          <DevOps />
        </Reveal>


        {/* =====================================================
            SOFTWARE DEVELOPMENT
        ===================================================== */}

        <Reveal delay={0.25}>
          <SoftwareDevelopment />
        </Reveal>


        {/* =====================================================
            AI AUTOMATION
        ===================================================== */}

        <Reveal delay={0.30}>
          <AIAutomation />
        </Reveal>


        {/* =====================================================
            DEVELOPMENT PROCESS
        ===================================================== */}

        <Reveal delay={0.35}>
          <Process />
        </Reveal>


        {/* =====================================================
            TECHNOLOGY STACK
        ===================================================== */}

        <Reveal delay={0.40}>
          <Technology />
        </Reveal>


        {/* =====================================================
            FINAL SERVICES CTA
        ===================================================== */}

        <Reveal delay={0.45}>
          <CTA />
        </Reveal>

      </div>

    </main>
  );
}