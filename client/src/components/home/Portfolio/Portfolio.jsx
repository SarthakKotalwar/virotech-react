import "./Portfolio.scss";

const projects = [
  {
    id: 1,
    category: "Cloud Infrastructure",
    title: "Enterprise AWS Platform",
    description:
      "Designed and deployed a highly available AWS cloud platform with Infrastructure as Code, CI/CD automation and enterprise-grade security.",
    tech: ["AWS", "Terraform", "Docker", "GitHub Actions"],
    image: "https://placehold.co/900x650/eaf2ff/1e293b?text=Enterprise+AWS"
  },

  {
    id: 2,
    category: "Healthcare",
    title: "Healthcare Management System",
    description:
      "A complete healthcare platform built using the MERN stack featuring secure authentication, patient records and appointment scheduling.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://placehold.co/900x650/eaf2ff/1e293b?text=Healthcare+Platform"
  }
];

export default function Portfolio() {

  return (

    <section className="portfolio">

      <div className="container">

        <div className="portfolio__header">

          <span className="section-tag">
            OUR WORK
          </span>

          <h2>
            Featured Projects
          </h2>

          <p>
            From cloud engineering to enterprise software,
            we build digital products that help businesses
            innovate and scale faster.
          </p>

        </div>

        <div className="portfolio__grid">

          {projects.map((project) => (

            <article
              className="portfolio-card"
              key={project.id}
            >

              <div className="portfolio-card__image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className="portfolio-card__category">
                  {project.category}
                </span>

              </div>

              <div className="portfolio-card__content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="portfolio-card__tech">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

                <a
                  href="/portfolio"
                  className="portfolio-card__button"
                >
                  View Case Study →
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}