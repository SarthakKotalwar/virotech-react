import "./Hero.scss";

export default function Hero() {
  const services = [
    {
      icon: "☁️",
      title: "AWS",
      subtitle: "Cloud Infrastructure",
    },
    {
      icon: "🤖",
      title: "Automation",
      subtitle: "AI Solutions",
    },
    {
      icon: "⚡",
      title: "CI/CD",
      subtitle: "Deployment Pipelines",
    },
  ];

  return (
    <section className="hero">

      {/* Background Decorations */}
      <div className="hero__bg hero__bg--one"></div>
      <div className="hero__bg hero__bg--two"></div>

      <div className="container hero__container">

        {/* LEFT CONTENT */}
        <div className="hero__left">

          <span className="hero__tag">
            🚀 AI • Cloud • DevOps • Enterprise Solutions
          </span>

          <h1 className="hero__title">
            Building
            <br />
            Tomorrow's Digital
            <br />
            Infrastructure.
          </h1>

          <p className="hero__description">
            We engineer cloud-native platforms, enterprise software,
            intelligent automation and AI-powered digital products
            that help businesses scale faster, operate smarter
            and innovate confidently.
          </p>

          <div className="hero__buttons">

            <a href="/contact" className="btn-primary">
              Start Project
            </a>

            <a href="/portfolio" className="btn-outline">
              Explore Work
            </a>

          </div>

          <div className="hero__stats">

            <div className="hero__stat">
              <h3>100+</h3>
              <p>Projects Delivered</p>
            </div>

            <div className="hero__stat">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="hero__stat">
              <h3>8+</h3>
              <p>Years Experience</p>
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="hero__right">

          <div className="hero__cards">

            {services.map((service) => (
              <div
                className="hero-card"
                key={service.title}
              >
                <span className="hero-card__icon">
                  {service.icon}
                </span>

                <div className="hero-card__content">

                  <h4>{service.title}</h4>

                  <p>{service.subtitle}</p>

                </div>

              </div>
            ))}

          </div>

          {/* Floating Decoration */}
          <div className="hero__floating"></div>

        </div>

      </div>

    </section>
  );
}