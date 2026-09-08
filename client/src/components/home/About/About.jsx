import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Zap, Server, Code } from "lucide-react";
import "./About.scss";

export default function About() {
  const features = [
    "Cloud Infrastructure & AWS",
    "DevOps & CI/CD Automation",
    "AI Powered Business Solutions",
    "Enterprise Security Standards",
  ];

  const highlights = [
    {
      icon: <Server size={22} />,
      title: "Cloud Native",
      desc: "Architected for high availability, fault tolerance, and multi-region scale.",
    },
    {
      icon: <Zap size={22} />,
      title: "High Performance",
      desc: "Optimized pipelines with sub-second page loads and clean codebases.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Enterprise Grade",
      desc: "Bank-grade security protocols, automated testing, and CI/CD defense.",
    },
    {
      icon: <Code size={22} />,
      title: "Modern Tech",
      desc: "Built with React, Node, AWS, Docker, and intelligent automation systems.",
    },
  ];

  return (
    <section className="about">
      <div className="container about__container">
        {/* Left Story Content */}
        <div className="about__left">
          <span className="section-tag">ABOUT VIROTECH</span>
          <h2>
            Engineering Reliable
            <br />
            Digital Solutions
            <br />
            For Modern Businesses.
          </h2>
          <p>
            Virotech Technologies combines cloud engineering, enterprise
            software development, and AI automation to help businesses build
            scalable, secure, and future-ready digital products.
          </p>
          <ul className="about__features">
            {features.map((feature) => (
              <li key={feature}>
                <CheckCircle2 size={18} className="feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-primary">
            Learn More
          </Link>
        </div>

        {/* Right Feature Highlights (Replaces duplicate stats) */}
        <div className="about__right">
          {highlights.map((item) => (
            <div className="about-card" key={item.title}>
              <div className="about-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about__endfade" aria-hidden="true" />
    </section>
  );
}