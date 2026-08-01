import "./EnterpriseSolutions.scss";

import enterpriseSolutionsData from "./EnterpriseSolutionsData";

export default function EnterpriseSolutions() {
  return (
    <section className="enterprise-solutions about-section">

      <div className="about-container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div className="about-section-header">

          <span className="about-section-tag">
            {enterpriseSolutionsData.sectionTag}
          </span>

          <h2>
            {enterpriseSolutionsData.sectionTitle}
          </h2>

          <p>
            {enterpriseSolutionsData.sectionDescription}
          </p>

        </div>


        {/* ==========================================
            ENTERPRISE SOLUTIONS GRID
        ========================================== */}

        <div className="about-grid enterprise-solutions__grid">

          {enterpriseSolutionsData.cards.map((item, index) => {

            const Icon = item.icon;

            return (

              <article
                className="about-card enterprise-card"
                key={index}
              >

                <div className="about-card__icon">

                  <Icon />

                </div>

                <div className="enterprise-card__content">

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