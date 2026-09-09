import "./EnterpriseSolutions.scss";
import enterpriseSolutionsData from "./EnterpriseSolutionsData";

export default function EnterpriseSolutions() {
  return (
    <section className="enterprise-solutions" id="enterprise-solutions">
      <div className="container">
        <div className="enterprise-solutions__header">
          <span className="section-tag">
            {enterpriseSolutionsData.sectionTag}
          </span>
          <h2>{enterpriseSolutionsData.sectionTitle}</h2>
          <p>{enterpriseSolutionsData.sectionDescription}</p>
        </div>

        <div className="enterprise-solutions__grid">
          {enterpriseSolutionsData.cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="enterprise-card" key={index}>
                <div className="enterprise-card__icon">
                  <Icon />
                </div>
                <div className="enterprise-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}