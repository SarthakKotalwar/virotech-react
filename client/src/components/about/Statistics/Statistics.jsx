import "./Statistics.scss";

import statisticsData from "./StatisticsData";

export default function Statistics() {

  return (

    <section className="statistics">

      <div className="about-container">

        <div className="about-section-header">

          <span className="about-section-tag">

            {statisticsData.badge}

          </span>

          <h2>

            {statisticsData.title}

          </h2>

          <p>

            {statisticsData.description}

          </p>

        </div>

        <div className="statistics__grid">

          {

            statisticsData.stats.map((item,index)=>{

              const Icon=item.icon;

              return(

                <div
                  className="stat-card"
                  key={index}
                >

                  <div className="stat-card__icon">

                    <Icon/>

                  </div>

                  <h3>

                    {item.value}

                  </h3>

                  <h4>

                    {item.title}

                  </h4>

                </div>

              );

            })

          }

        </div>

      </div>

    </section>

  );

}