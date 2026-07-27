import "./Process.scss";

import processData from "./ProcessData";

export default function Process() {

  return (

    <section className="process about-section">

      <div className="about-container">

        <div className="about-section-header">

          <span className="about-section-tag">

            {processData.badge}

          </span>

          <h2>

            {processData.title}

          </h2>

          <p>

            {processData.description}

          </p>

        </div>

        <div className="process__grid">

          {

            processData.steps.map((item,index)=>{

              const Icon = item.icon;

              return(

                <article

                  className="about-card process-card"

                  key={index}

                >

                  <span className="process-card__number">

                    {item.number}

                  </span>

                  <div className="about-card__icon">

                    <Icon/>

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