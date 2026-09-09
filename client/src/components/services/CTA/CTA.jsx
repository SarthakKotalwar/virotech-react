import "./CTA.scss";
import ctaData from "./CTAData";

export default function CTA() {
  return (
    <section className="services-cta">
      <div className="services-cta__glow services-cta__glow--one" />
      <div className="services-cta__glow services-cta__glow--two" />
      <div className="services-cta__circle services-cta__circle--one" />
      <div className="services-cta__circle services-cta__circle--two" />

      <div className="container">
        {/* Main CTA Card */}
        <div className="services-cta__content">
          <span className="section-tag">{ctaData.sectionTag}</span>
          <h2>{ctaData.title}</h2>
          <p>{ctaData.description}</p>

          <div className="services-cta__buttons">
            <a href={ctaData.primaryButton.href} className="btn-primary">
              {ctaData.primaryButton.label}
            </a>
            <a href={ctaData.secondaryButton.href} className="btn-secondary">
              {ctaData.secondaryButton.label}
            </a>
          </div>
        </div>

        {/* CTA Feature Highlights */}
        <div className="services-cta__highlights">
          {ctaData.highlights.map((item, index) => (
            <article className="services-cta__highlight" key={index}>
              <span className="services-cta__highlight-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}