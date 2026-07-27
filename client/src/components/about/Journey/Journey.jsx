import "./Journey.scss";

import journeyData from "./JourneyData";

export default function Journey() {

  return (

    <section className="journey about-section">

      <div className="about-container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div className="about-section-header">

          <span className="about-section-tag">

            {journeyData.badge}

          </span>

          <h2>

            {journeyData.title}

          </h2>

          <p>

            {journeyData.description}

          </p>

        </div>

        {/* ==========================================
            TIMELINE
        ========================================== */}

        <div className="journey__timeline">

          {

            journeyData.timeline.map((item, index) => {

              const Icon = item.icon;

              return (

                <article

                  key={index}

                  className={`journey-item ${
                    index % 2 === 0
                      ? "journey-item--left"
                      : "journey-item--right"
                  }`}

                >

                  {/* Timeline Circle */}

                  <div className="journey-item__node">

                    <div className="journey-item__icon">

                      <Icon />

                    </div>

                  </div>

                  {/* Timeline Card */}

                  <div className="about-card journey-item__card">

                    <span className="journey-item__year">

                      {item.year}

                    </span>

                    <h3>

                      {item.title}

                    </h3>

                    <p>

                      {item.description}

                    </p>

                  </div>

                </article>

              );

            })

          }

        </div>

      </div>

    </section>

  );

}