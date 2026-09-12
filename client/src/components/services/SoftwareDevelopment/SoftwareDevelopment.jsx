import "./SoftwareDevelopment.scss";

import softwareDevelopmentData from "./SoftwareDevelopmentData";

export default function SoftwareDevelopment() {
  return (
    <section className="software-development" id="web-development">

      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="software-development__header">

          <span className="section-tag">
            {softwareDevelopmentData.sectionTag}
          </span>

          <h2>
            {softwareDevelopmentData.title}
          </h2>

          <p>
            {softwareDevelopmentData.description}
          </p>

        </div>


        {/* =====================================================
            SOFTWARE DEVELOPMENT SERVICES
        ===================================================== */}

        <div className="software-development__grid">

          {softwareDevelopmentData.services.map(
            (service, index) => {

              const Icon = service.icon;

              return (
                <article
                  className="software-development-card"
                  key={index}
                >

                  {/* =========================================
                      CARD NUMBER
                  ========================================= */}

                  <span className="software-development-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* =========================================
                      ICON
                  ========================================= */}

                  <div className="software-development-card__icon">

                    <Icon />

                  </div>


                  {/* =========================================
                      CARD CONTENT
                  ========================================= */}

                  <div className="software-development-card__content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>

                </article>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}