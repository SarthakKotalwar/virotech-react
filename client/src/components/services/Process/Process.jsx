import "./Process.scss";

import processData from "./ProcessData";

export default function Process() {
  return (
    <section className="services-process services-section">

      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="services-section-header">

          <span className="services-section-tag">
            {processData.sectionTag}
          </span>

          <h2>
            {processData.sectionTitle}
          </h2>

          <p>
            {processData.sectionDescription}
          </p>

        </div>


        {/* =====================================================
            PROCESS TIMELINE
        ===================================================== */}

        <div className="services-process__timeline">

          {processData.steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <article
                className="services-process__step"
                key={step.number}
              >

                {/* =================================================
                    TIMELINE LINE
                ================================================= */}

                {index !== processData.steps.length - 1 && (
                  <span
                    className="services-process__line"
                    aria-hidden="true"
                  />
                )}


                {/* =================================================
                    STEP ICON
                ================================================= */}

                <div className="services-process__icon">

                  <Icon />

                </div>


                {/* =================================================
                    STEP NUMBER
                ================================================= */}

                <span className="services-process__number">
                  {step.number}
                </span>


                {/* =================================================
                    STEP CONTENT
                ================================================= */}

                <div className="services-process__content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
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