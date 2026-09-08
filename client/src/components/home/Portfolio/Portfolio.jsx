import React, { useMemo } from "react";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "./Portfolio.scss";

// Direct project data embedded to avoid cross-directory Vite path issues
const FeaturedProjectsData = [
  {
    id: 1,
    title: "MXSTORE",
    category: "E-Commerce",
    platform: "Shopify",
    projectType: "E-Commerce Platform",
    description:
      "A modern Shopify storefront designed to deliver a smooth and scalable shopping experience for customers.",
    logo: "/images/portfolio/logos/mxstore.png",
    logoAlt: "MXSTORE Logo",
    website: "https://www.mxstore.in/",
    status: "Live",
    technologies: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    id: 2,
    title: "Motoxcellence",
    category: "E-Commerce",
    platform: "Zoho Commerce",
    projectType: "E-Commerce & Business Ecosystem",
    description:
      "An integrated e-commerce ecosystem combining online commerce with operational workflows and business management.",
    logo: "/images/portfolio/logos/motoxcellence.png",
    logoAlt: "Motoxcellence Logo",
    website: "https://www.motoxcellence.com/",
    status: "Live",
    technologies: ["Zoho Commerce", "Zoho Books", "JavaScript"],
  },
  {
    id: 3,
    title: "The Gel Bottle",
    category: "Service Business",
    platform: "Web Development",
    projectType: "Service & Appointment Platform",
    description:
      "A service-focused digital experience designed to showcase beauty services and simplify appointment enquiries through WhatsApp integration.",
    logo: "/images/portfolio/logos/thegelbottle.png",
    logoAlt: "The Gel Bottle Logo",
    website: "https://thegelbottle.co.in/",
    status: "Live",
    technologies: ["React", "JavaScript", "SCSS", "WhatsApp"],
  },
  {
    id: 4,
    title: "Mawrid Forklift",
    category: "E-Commerce",
    platform: "Shopify",
    projectType: "E-Commerce Website",
    description:
      "A Shopify-powered digital storefront created to present forklift-related products through a structured and user-friendly shopping experience.",
    logo: "/images/portfolio/logos/mawrid-forklift.png",
    logoAlt: "Mawrid Forklift Logo",
    website: "https://www.mawridforklift.com/",
    status: "Live",
    technologies: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    id: 5,
    title: "Tailwinds",
    category: "Professional Services",
    platform: "Web Development",
    projectType: "Professional Services Website",
    description:
      "A professional digital presence developed for Tailwinds, a team of passionate, qualified and experienced psychologists.",
    logo: "/images/portfolio/logos/tailwinds.png",
    logoAlt: "Tailwinds Logo",
    website: "https://tailwinds.co.in/",
    status: "Live",
    technologies: ["React", "JavaScript", "SCSS"],
  },
  {
    id: 6,
    title: "VP Designs",
    category: "Automotive",
    platform: "Web Development",
    projectType: "Customization Business Website",
    description:
      "A distinctive digital experience for a motorcycle customization business focused on transforming and enhancing bike appearance.",
    logo: "/images/portfolio/logos/vp-designs.png",
    logoAlt: "VP Designs Logo",
    website: "https://vpdesigns.com/",
    status: "Live",
    technologies: ["React", "JavaScript", "SCSS"],
  },
  {
    id: 7,
    title: "IPQS PL",
    category: "Corporate",
    platform: "React",
    projectType: "Corporate Website",
    description:
      "A React-based corporate website designed to establish a professional digital presence and communicate company capabilities.",
    logo: "/images/portfolio/logos/ipqspl.png",
    logoAlt: "IPQ SPL Logo",
    website: "https://ipqspl.com/",
    status: "Live",
    technologies: ["React", "JavaScript", "SCSS"],
  },
  {
    id: 8,
    title: "VITENG",
    category: "Corporate",
    platform: "Web Development",
    projectType: "Informative Corporate Website",
    description:
      "An ongoing informative corporate website designed to present the company's operations, capabilities, services and working processes.",
    logo: "/images/portfolio/logos/viteng.png",
    logoAlt: "VITENG Logo",
    website: "https://viteng.in/",
    status: "Ongoing",
    technologies: ["React", "JavaScript", "SCSS"],
  },
  {
    id: 9,
    title: "Retail Inventory Management",
    category: "Enterprise Software",
    platform: "Web & Mobile",
    projectType: "Inventory & Billing System",
    description:
      "An ongoing web-based inventory and billing platform designed for retail businesses with mobile application integration.",
    logo: "/images/portfolio/logos/inventory-management.png",
    logoAlt: "Retail Inventory Management System",
    website: null,
    status: "Ongoing",
    technologies: [
      "Web Application",
      "Mobile Integration",
      "Database",
      "Automation",
    ],
  },
];

export default function Portfolio() {
  // 3-Day Dynamic Rotation Algorithm
  const displayedProjects = useMemo(() => {
    if (!FeaturedProjectsData || FeaturedProjectsData.length === 0) return [];

    const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
    // Epoch cycle index increments automatically every 3 days across all users
    const cycleIndex = Math.floor(Date.now() / THREE_DAYS_MS);
    const totalProjects = FeaturedProjectsData.length;

    // Pick 2 sequential projects for the current 3-day epoch
    const firstIndex = (cycleIndex * 2) % totalProjects;
    const secondIndex = (firstIndex + 1) % totalProjects;

    return [
      FeaturedProjectsData[firstIndex],
      FeaturedProjectsData[secondIndex],
    ];
  }, []);

  return (
    <section className="portfolio" id="home-portfolio">
      <div className="container">
        <div className="portfolio__header">
          <div className="section-tag-wrap">
            <span className="section-tag">
              <Sparkles size={13} className="tag-sparkle" />
              FEATURED WORK
            </span>
          </div>

          <h2>Featured Projects</h2>

          <p>
            From cloud engineering to enterprise software, we build digital
            products that help businesses innovate and scale faster.
          </p>
        </div>

        <div className="portfolio__grid">
          {displayedProjects.map((project) => (
            <article className="portfolio-card" key={project.id}>
              {/* Browser-style Preview Screen */}
              <div className="portfolio-card__browser">
                <div className="browser-top">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>

                <div className="browser-screen">
                  <img
                    src={project.logo}
                    alt={project.logoAlt || project.title}
                    loading="lazy"
                  />
                  <span className="portfolio-card__category">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content & Details */}
              <div className="portfolio-card__content">
                <div className="portfolio-card__meta">
                  <span className="platform-tag">{project.platform}</span>
                  <span
                    className={`status-pill ${
                      project.status === "Live" ? "live" : "ongoing"
                    }`}
                  >
                    <span className="status-dot" />
                    {project.status}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="portfolio-card__tech">
                  {project.technologies?.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* Card Action Footer */}
                <div className="portfolio-card__footer">
                  <span className="project-type">{project.projectType}</span>

                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-card__link"
                    >
                      <span>Visit Live</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link to="/portfolio" className="portfolio-card__link">
                      <span>View Case Study</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global CTA to Portfolio Page */}
        <div className="portfolio__cta">
          <Link to="/portfolio" className="btn-explore">
            <span>Explore All Projects ({FeaturedProjectsData.length}+)</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}