import { useState } from "react";
import "./FAQ.scss";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Depending on the project scope, delivery can range from 2 weeks for small solutions to several months for enterprise-scale platforms."
  },
  {
    question: "Do you provide AWS Cloud consulting?",
    answer:
      "Yes. We specialize in AWS architecture, migration, optimization, DevOps automation, and cloud-native deployments."
  },
  {
    question: "Can you build custom software?",
    answer:
      "Absolutely. We design and develop scalable web applications, enterprise platforms, SaaS products, and AI-powered solutions."
  },
  {
    question: "Do you offer DevOps implementation?",
    answer:
      "Yes. Our team builds complete CI/CD pipelines using GitHub Actions, Jenkins, Docker, Kubernetes, Terraform, and AWS services."
  },
  {
    question: "How do we start working together?",
    answer:
      "Simply contact us through the Contact page. We'll schedule a discovery meeting, understand your goals, and prepare a tailored proposal."
  }
];

export default function FAQ() {

  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="container">

        <div className="faq__header">

          <span className="section-tag">
            FAQ
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Everything you need to know before starting
            your digital transformation journey with us.
          </p>

        </div>

        <div className="faq__list">

          {faqs.map((item, index) => (

            <div
              className={`faq__item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="faq__question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{item.question}</span>

                <span>
                  {active === index ? "−" : "+"}
                </span>

              </button>

              <div className="faq__answer">

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}