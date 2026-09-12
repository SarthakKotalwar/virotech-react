import "./DevOps.scss";

import devOpsData from "./DevOpsData";

export default function DevOps() {
  return (
    <section className="devops" id="devops">

      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="devops__header">

          <span className="section-tag">
            {devOpsData.sectionTag}
          </span>

          <h2>
            {devOpsData.title}
          </h2>

          <p>
            {devOpsData.description}
          </p>

        </div>


        {/* =====================================================
            DEVOPS SERVICE GRID
        ===================================================== */}

        <div className="devops__grid">

          {devOpsData.services.map((service, index) => {

            const Icon = service.icon;

            return (
              <article
                className="devops-card"
                key={index}
              >

                {/* =================================================
                    CARD NUMBER
                ================================================= */}

                <span className="devops-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* =================================================
                    ICON
                ================================================= */}

                <div className="devops-card__icon">

                  <Icon />

                </div>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="devops-card__content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>

              </article>
            );

          })}

        </div>

      </div>

    </section>
  );
}