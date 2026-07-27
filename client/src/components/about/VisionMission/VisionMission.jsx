import "./VisionMission.scss";

import visionMissionData from "./VisionMissionData";

export default function VisionMission() {
  return (
    <section className="vision-mission about-section">

      <div className="about-container">

        <div className="about-section-header">

          <span className="about-section-tag">
            {visionMissionData.sectionTag}
          </span>

          <h2>
            {visionMissionData.sectionTitle}
          </h2>

          <p>
            {visionMissionData.sectionDescription}
          </p>

        </div>

        <div className="about-grid">

          {visionMissionData.cards.map((item, index) => {

            const Icon = item.icon;

            return (

              <article
                className="about-card vision-card"
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