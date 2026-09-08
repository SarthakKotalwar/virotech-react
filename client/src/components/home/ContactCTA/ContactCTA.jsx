import { ArrowRight, Mail, CalendarCheck } from "lucide-react";
import "./ContactCTA.scss";

export default function ContactCTA() {
  const emailAddress = "support@virotech.in";
  const emailSubject = encodeURIComponent("Project Consultation - Virotech Technologies");
  const emailBody = encodeURIComponent(
    "Hello Virotech Team,\n\nI would like to discuss our project goals with your engineering team.\n\n"
  );

  // Direct mailto protocol triggers the OS/browser native email selection popup
  const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="contact-cta">
      <div className="contact-cta__ambient-glow" />

      <div className="container">
        <div className="contact-cta__content">
          <span className="section-tag">LET'S BUILD TOGETHER</span>

          <h2>
            Ready to Transform
            <br />
            Your Business?
          </h2>

          <p>
            Whether you're planning cloud migration, DevOps automation, AI
            integration, or a custom software solution, our experts are ready to
            help you.
          </p>

          <div className="contact-cta__buttons">
            {/* Button 1: Routes directly to the Contact page */}
            <a href="/contact" className="btn-primary">
              <CalendarCheck size={18} />
              <span>Schedule Consultation</span>
              <ArrowRight size={16} className="arrow-icon" />
            </a>

            {/* Button 2: Native OS Mailbox Protocol */}
            <a href={mailtoUrl} className="btn-outline">
              <Mail size={17} />
              <span>Email Us Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}