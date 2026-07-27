import "./Values.scss";

import valuesData from "./ValuesData";

export default function Values() {

  return (

    <section className="values about-section">

      <div className="about-container">

        <div className="about-section-header">

          <span className="about-section-tag">
            {valuesData.sectionTag}
          </span>

          <h2>
            {valuesData.sectionTitle}
          </h2>

          <p>
            {valuesData.sectionDescription}
          </p>

        </div>

        <div className="about-grid">

          {valuesData.values.map((item, index) => {

            const Icon = item.icon;

            return (

              <article
                className="about-card value-card"
                key={index}
              >

                <div className="about-card__icon">

                  <Icon />

                </div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.description}

                </p>

              </article>

            );

          })}

        </div>

      </div>

    </section>

  );

}