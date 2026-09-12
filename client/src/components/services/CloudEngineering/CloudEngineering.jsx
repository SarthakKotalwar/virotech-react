import "./CloudEngineering.scss";

import cloudEngineeringData from "./CloudEngineeringData";

export default function CloudEngineering() {
  return (
    <section className="cloud-engineering" id="cloud-engineering">

      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="cloud-engineering__header">

          <span className="section-tag">
            {cloudEngineeringData.sectionTag}
          </span>

          <h2>
            {cloudEngineeringData.title}
          </h2>

          <p>
            {cloudEngineeringData.description}
          </p>

        </div>


        {/* =====================================================
            SERVICE GRID
        ===================================================== */}

        <div className="cloud-engineering__grid">

          {cloudEngineeringData.services.map(
            (service, index) => {

              const Icon = service.icon;

              return (

                <article
                  className="cloud-engineering-card"
                  key={index}
                >

                  {/* Number */}

                  <span className="cloud-engineering-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* Icon */}

                  <div className="cloud-engineering-card__icon">

                    <Icon />

                  </div>


                  {/* Content */}

                  <div className="cloud-engineering-card__content">

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