/* client/src/pages/PrivacyPolicy/PrivacyPolicy.jsx */
import { ShieldCheck, Database, Cpu, Lock, Mail } from "lucide-react";
import "./PrivacyPolicy.scss";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="container">
        {/* Header */}
        <div className="privacy-header">
          <span className="section-tag">
            <ShieldCheck size={14} className="tag-icon" />
            LEGAL & COMPLIANCE
          </span>
          <h1>Privacy Policy</h1>
          <p>Last updated: September 13, 2026</p>
        </div>

        {/* Content Sections Grid / Stack */}
        <div className="privacy-grid">
          <article className="privacy-card">
            <div className="privacy-card__icon">
              <ShieldCheck />
            </div>
            <div className="privacy-card__content">
              <h2>1. Introduction</h2>
              <p>
                Virotech Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our cloud engineering, software development, DevOps, and AI automation services.
              </p>
            </div>
          </article>

          <article className="privacy-card">
            <div className="privacy-card__icon">
              <Database />
            </div>
            <div className="privacy-card__content">
              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways, including:</p>
              <ul>
                <li><strong>Personal Data:</strong> Name, email address, phone number, and company details when you submit forms or contact us.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and access times collected automatically through analytics and cookies.</li>
              </ul>
            </div>
          </article>

          <article className="privacy-card">
            <div className="privacy-card__icon">
              <Cpu />
            </div>
            <div className="privacy-card__content">
              <h2>3. How We Use Your Information</h2>
              <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information collected to:</p>
              <ul>
                <li>Fulfill and manage project inquiries, contracts, and service deliveries.</li>
                <li>Respond to customer service requests and support needs.</li>
                <li>Improve website performance, user experience, and security.</li>
              </ul>
            </div>
          </article>

          <article className="privacy-card">
            <div className="privacy-card__icon">
              <Lock />
            </div>
            <div className="privacy-card__content">
              <h2>4. Data Security</h2>
              <p>
                We implement robust administrative, technical, and physical security measures designed to protect your personal information from unauthorized access, loss, misuse, or alteration.
              </p>
            </div>
          </article>

          <article className="privacy-card">
            <div className="privacy-card__icon">
              <Mail />
            </div>
            <div className="privacy-card__content">
              <h2>5. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <div className="contact-box">
                <span>Email Support</span>
                <strong>support@virotech.in</strong>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}