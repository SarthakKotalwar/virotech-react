import "./Process.scss";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding business goals, users and technical requirements."
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Preparing architecture, UI/UX and project roadmap."
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building secure, scalable and high-performance solutions."
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Deployment, monitoring and continuous improvement."
  }
];

export default function Process() {
  return (
    <section className="process">

      <div className="container">

        <div className="process__header">

          <span className="section-tag">
            OUR PROCESS
          </span>

          <h2>
            How We Build Successful Products
          </h2>

          <p>
            Every successful project follows a proven engineering process
            that ensures quality, scalability and long-term success.
          </p>

        </div>

        <div className="process__grid">

          {steps.map((step) => (

            <div
              className="process-card"
              key={step.number}
            >

              <span className="process-card__number">
                {step.number}
              </span>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}