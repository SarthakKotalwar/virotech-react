import React from "react";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import Reveal from "../../common/Reveal/Reveal";
import FeaturedProjectsData from "./FeaturedProjectsData";
import "./FeaturedProjects.scss";

export default function FeaturedProjects() {
  return (
    <section className="featured-projects" id="featured-projects">
      <div className="container">
        {/* SECTION HEADER */}
        <Reveal>
          <div className="featured-projects__header">
            <span className="section-tag">FEATURED WORK</span>
            <h2>
              Selected Projects <span>That Define Us.</span>
            </h2>
            <p>
              Every project reflects our commitment to innovation, scalability,
              and creating exceptional digital experiences for modern
              businesses.
            </p>
          </div>
        </Reveal>

        {/* PROJECTS GRID */}
        <div className="featured-projects__grid">
          {FeaturedProjectsData.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <article className="project-card">
                {/* Browser Mockup */}
                <div className="project-card__browser">
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
                  </div>
                </div>

                {/* Content */}
                <div className="project-card__content">
                  <div className="project-card__meta">
                    <span className="platform-tag">{project.platform}</span>
                    <span
                      className={`status-tag ${
                        project.status === "Live" ? "live" : "ongoing"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* Tech Tags */}
                  <div className="project-card__tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="project-card__footer">
                    <span className="project-type">{project.projectType}</span>
                    {project.website ? (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <span>Visit Website</span>
                        <FiArrowUpRight />
                      </a>
                    ) : (
                      <span className="disabled-link">
                        <span>Ongoing</span>
                        <FiExternalLink />
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}