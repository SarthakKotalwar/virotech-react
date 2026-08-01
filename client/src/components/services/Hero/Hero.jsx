import "./Hero.scss";

import heroData from "./HeroData";

export default function Hero() {
  return (
    <section className="services-hero">

      {/* =====================================================
          BACKGROUND ELEMENTS
      ===================================================== */}

      <div className="services-hero__bg services-hero__bg--one" />

      <div className="services-hero__bg services-hero__bg--two" />


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="container services-hero__container">

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div className="services-hero__content">

          <span className="section-tag">
            {heroData.sectionTag}
          </span>

          <h1>
            {heroData.title}
          </h1>

          <p className="services-hero__description">
            {heroData.description}
          </p>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="services-hero__buttons">

            <a
              href={heroData.primaryButton.href}
              className="btn-primary"
            >
              {heroData.primaryButton.label}
            </a>

            <a
              href={heroData.secondaryButton.href}
              className="btn-secondary"
            >
              {heroData.secondaryButton.label}
            </a>

          </div>

        </div>


        {/* ===================================================
            RIGHT HIGHLIGHTS
        =================================================== */}

        <div
          className="services-hero__highlights"
          id="services-overview"
        >

          {heroData.highlights.map((item, index) => (

            <article
              className="services-hero__highlight"
              key={item.title}
            >

              <span className="services-hero__highlight-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}