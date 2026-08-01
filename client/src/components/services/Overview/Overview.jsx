import "./Overview.scss";

import overviewData from "./OverviewData";

export default function Overview() {
  return (
    <section className="enterprise-overview services-section">

      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="services-section-header">

          <span className="services-section-tag">
            {overviewData.sectionTag}
          </span>

          <h2>
            {overviewData.sectionTitle}
          </h2>

          <p>
            {overviewData.sectionDescription}
          </p>

        </div>


        {/* =====================================================
            OVERVIEW GRID
        ===================================================== */}

        <div className="enterprise-overview__grid">

          {overviewData.cards.map((item, index) => {

            const Icon = item.icon;

            return (
              <article
                className="enterprise-overview-card"
                key={index}
              >

                {/* ICON */}

                <div className="enterprise-overview-card__icon">

                  <Icon />

                </div>


                {/* CONTENT */}

                <div className="enterprise-overview-card__content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
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