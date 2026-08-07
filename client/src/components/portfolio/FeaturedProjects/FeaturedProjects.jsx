import "./FeaturedProjects.scss";

import Reveal from "../../common/Reveal/Reveal";
import FeaturedProjectsData from "./FeaturedProjectsData";

import {
  FiArrowUpRight,
  FiExternalLink,
} from "react-icons/fi";

export default function FeaturedProjects() {
  return (
    <section
      className="featured-projects"
      id="featured-projects"
    >
      <div className="container">

        {/* ==============================
            HEADER
        ============================== */}

        <Reveal>

          <div className="featured-projects__header">

            <span className="section-tag">
              FEATURED WORK
            </span>

            <h2>

              Selected Projects
              <span> That Define Us.</span>

            </h2>

            <p>

              Every project reflects our commitment to innovation,
              scalability and creating exceptional digital
              experiences for modern businesses.

            </p>

          </div>

        </Reveal>

        {/* ==============================
            GRID
        ============================== */}

        <div className="featured-projects__grid">

          {FeaturedProjectsData.map((project, index) => (

            <Reveal
              key={project.id}
              delay={index * 0.08}
            >

              <article className="project-card">

                {/* ==========================
                    Browser Mockup
                ========================== */}

                <div className="project-card__browser">

                  <div className="browser-top">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                  <div className="browser-screen">

                    <img
                      src={project.logo}
                      alt={project.title}
                    />

                  </div>

                </div>

                {/* ==========================
                    CONTENT
                ========================== */}

                <div className="project-card__content">

                  <div className="project-card__meta">

                    <span>
                      {project.platform}
                    </span>

                    <span
                      className={
                        project.status === "Live"
                          ? "live"
                          : "ongoing"
                      }
                    >
                      {project.status}
                    </span>

                  </div>

                  <h3>

                    {project.title}

                  </h3>

                  <p>

                    {project.description}

                  </p>

                  {/* =======================
                      Technologies
                  ======================= */}

                  <div className="project-card__tech">

                    {project.technologies.map((tech) => (

                      <span key={tech}>

                        {tech}

                      </span>

                    ))}

                  </div>

                  {/* =======================
                      Footer
                  ======================= */}

                  <div className="project-card__footer">

                    <span>

                      {project.projectType}

                    </span>

                    {project.website ? (

                      <a
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                      >

                        Visit Website

                        <FiArrowUpRight />

                      </a>

                    ) : (

                      <span className="disabled">

                        Ongoing

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