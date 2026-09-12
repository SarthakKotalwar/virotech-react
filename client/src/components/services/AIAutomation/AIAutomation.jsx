import "./AIAutomation.scss";

import aiAutomationData from "./AIAutomationData";

export default function AIAutomation() {
  return (
    <section className="ai-automation" id="ai-automation">

      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="ai-automation__header">

          <span className="section-tag">
            {aiAutomationData.sectionTag}
          </span>

          <h2>
            {aiAutomationData.title}
          </h2>

          <p>
            {aiAutomationData.description}
          </p>

        </div>


        {/* =====================================================
            AI & AUTOMATION SERVICES GRID
        ===================================================== */}

        <div className="ai-automation__grid">

          {aiAutomationData.services.map(
            (service, index) => {

              const Icon = service.icon;

              return (
                <article
                  className="ai-automation-card"
                  key={index}
                >

                  {/* =========================================
                      CARD NUMBER
                  ========================================= */}

                  <span className="ai-automation-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* =========================================
                      ICON
                  ========================================= */}

                  <div className="ai-automation-card__icon">

                    <Icon />

                  </div>


                  {/* =========================================
                      CARD CONTENT
                  ========================================= */}

                  <div className="ai-automation-card__content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>

                </article>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}