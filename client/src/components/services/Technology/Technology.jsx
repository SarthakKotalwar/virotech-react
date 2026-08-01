import "./Technology.scss";

import technologyData from "./TechnologyData";

export default function Technology() {
  return (
    <section className="technology about-section">

      <div className="about-container">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="about-section-header">

          <span className="about-section-tag">
            {technologyData.sectionTag}
          </span>

          <h2>
            {technologyData.sectionTitle}
          </h2>

          <p>
            {technologyData.sectionDescription}
          </p>

        </div>


        {/* =====================================================
            TECHNOLOGY CATEGORIES
        ====================================================== */}

        <div className="technology__categories">

          {technologyData.categories.map((category) => (

            <article
              className="technology-category"
              key={category.id}
            >

              {/* =================================================
                  CATEGORY HEADER
              ================================================== */}

              <div className="technology-category__header">

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.description}
                </p>

              </div>


              {/* =================================================
                  TECHNOLOGY GRID
              ================================================== */}

              <div className="technology__grid">

                {category.technologies.map((technology) => {

                  const Icon = technology.icon;

                  return (

                    <div
                      className="technology-card"
                      key={technology.name}
                    >

                      <div className="technology-card__icon">

                        <Icon />

                      </div>

                      <div className="technology-card__content">

                        <h4>
                          {technology.name}
                        </h4>

                        <p>
                          {technology.description}
                        </p>

                      </div>

                    </div>

                  );
                })}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}