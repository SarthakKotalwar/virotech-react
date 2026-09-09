import "./Services.scss";

import Hero from "../../components/services/Hero/Hero";
import CloudEngineering from "../../components/services/CloudEngineering/CloudEngineering";
import EnterpriseSolutions from "../../components/services/EnterpriseSolutions/EnterpriseSolutions";
import DevOps from "../../components/services/DevOps/DevOps";
import SoftwareDevelopment from "../../components/services/SoftwareDevelopment/SoftwareDevelopment";
import AIAutomation from "../../components/services/AIAutomation/AIAutomation";
import Process from "../../components/services/Process/Process";
import Technology from "../../components/services/Technology/Technology";
import CTA from "../../components/services/CTA/CTA";

export default function Services() {
  return (
    <main className="services-page">
      <div className="services-page__content">
        {/* SERVICES HERO */}
        <Hero />

        {/* CLOUD ENGINEERING */}
        <CloudEngineering />

        {/* ENTERPRISE SOLUTIONS */}
        <EnterpriseSolutions />

        {/* DEVOPS & CI/CD */}
        <DevOps />

        {/* SOFTWARE DEVELOPMENT */}
        <SoftwareDevelopment />

        {/* AI & AUTOMATION */}
        <AIAutomation />

        {/* DEVELOPMENT PROCESS */}
        <Process />

        {/* TECHNOLOGY STACK */}
        <Technology />

        {/* FINAL SERVICES CTA */}
        <CTA />
      </div>
    </main>
  );
}