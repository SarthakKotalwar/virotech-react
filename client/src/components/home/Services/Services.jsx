import "./Services.scss";

const services = [
  {
    number: "01",
    title: "Cloud Engineering",
    description:
      "Scalable AWS infrastructure, migrations, DevOps automation and cloud-native deployments.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern React, Next.js and MERN applications built for speed, security and growth.",
  },
  {
    number: "03",
    title: "AI Automation",
    description:
      "AI assistants, workflow automation and intelligent business solutions.",
  },
  {
    number: "04",
    title: "DevOps Solutions",
    description:
      "CI/CD pipelines, Docker, Kubernetes and Infrastructure as Code.",
  },
];

export default function Services() {
  return (
    <section className="services">

      <div className="container">

        <div className="services__header">

          <span className="section-tag">
            OUR SERVICES
          </span>

          <h2>
            Enterprise Solutions
            <br />
            Built For Growth
          </h2>

          <p>
            We combine strategy, technology and engineering
            to build scalable digital products that help
            businesses grow faster.
          </p>

        </div>

        <div className="services__grid">

          {services.map((service) => (
            <div
              className="service-card"
              key={service.number}
            >
              <span className="service-card__number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}