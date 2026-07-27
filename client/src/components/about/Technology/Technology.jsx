import "./Technology.scss";

import technologyData from "./TechnologyData";

export default function Technology() {

  return (

    <section className="technology about-section">

      <div className="about-container">

        <div className="about-section-header">

          <span className="about-section-tag">

            {technologyData.badge}

          </span>

          <h2>

            {technologyData.title}

          </h2>

          <p>

            {technologyData.description}

          </p>

        </div>

        <div className="about-grid">

          {

            technologyData.categories.map((item,index)=>(

              <article
                className="about-card technology-card"
                key={index}
              >

                <h3>

                  {item.title}

                </h3>

                <div className="technology-tags">

                  {

                    item.tech.map((tech,i)=>(

                      <span
                        key={i}
                        className="technology-tag"
                      >

                        {tech}

                      </span>

                    ))

                  }

                </div>

              </article>

            ))

          }

        </div>

      </div>

    </section>

  );

}