import "./Industries.scss";

import industriesData from "./IndustriesData";

export default function Industries() {

  return (

    <section className="industries about-section">

      <div className="about-container">

        <div className="about-section-header">

          <span className="about-section-tag">
            {industriesData.badge}
          </span>

          <h2>
            {industriesData.title}
          </h2>

          <p>
            {industriesData.description}
          </p>

        </div>

        <div className="about-grid">

          {

            industriesData.industries.map((item,index)=>{

              const Icon = item.icon;

              return(

                <article
                  className="about-card industry-card"
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

            })

          }

        </div>

      </div>

    </section>

  );

}