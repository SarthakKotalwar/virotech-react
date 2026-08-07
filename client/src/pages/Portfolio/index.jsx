import "./Portfolio.scss";

import Hero from "../../components/portfolio/Hero/Hero.jsx";
import FeaturedProjects from "../../components/portfolio/FeaturedProjects/FeaturedProjects.jsx";
import CTA from "../../components/portfolio/CTA/CTA.jsx";

export default function Portfolio() {
  return (
    <main className="portfolio-page">

      {/* =====================================================
          PORTFOLIO HERO
      ===================================================== */}

      <Hero />


      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}

      <FeaturedProjects />

      {/* =====================================================
          PORTFOLIO CTA
      ===================================================== */}

      <CTA />

    </main>
  );
}