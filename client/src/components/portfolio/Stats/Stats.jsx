import "./Stats.scss";

import StatsData from "./StatsData";

export default function Stats() {
  return (
    <section className="portfolio-stats">

      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="portfolio-stats__header">

          <span className="section-tag">
            {StatsData.sectionTag}
          </span>

          <h2>
            {StatsData.sectionTitle}
          </h2>

          <p>
            {StatsData.sectionDescription}
          </p>

        </div>


        {/* =====================================================
            STATS GRID
        ===================================================== */}

        <div className="portfolio-stats__grid">

          {StatsData.stats.map((item, index) => (

            <article
              className="portfolio-stat-card"
              key={index}
            >

              <div className="portfolio-stat-card__number">
                {item.number}
              </div>

              <h3>
                {item.label}
              </h3>

              <p>
                {item.description}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}