import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import "./Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Tejas Kadam",
    initial: "T",
    reviewsCount: "10 reviews",
    review:
      "Fantastic service. Very adaptive and quick responsive team and quality work on given time. Must go with this team.",
  },
  {
    id: 2,
    name: "Balasaheb Dere",
    initial: "B",
    reviewsCount: "1 review",
    review:
      "I had a fantastic experience with Virotech Technologies! Their cooperative approach, cost-effective solutions, and exceptional service truly stood out. They developed an app for me that exceeded my expectations. I highly recommend their services to anyone in need of reliable and top-notch tech solutions.",
  },
  {
    id: 3,
    name: "Sandip Chaudhari",
    initial: "S",
    reviewsCount: "2 reviews",
    review:
      "Fully supportive with innovative and cost effective solutions..more flexible..",
  },
  {
    id: 4,
    name: "Ram Magdum",
    initial: "R",
    reviewsCount: "7 reviews",
    review:
      "Great Service Provider as seen with the scene of Perfection, Performance, Punctual. Appreciate Brother, the way you are serving class with the latest tech. for The Clients.",
  },
  {
    id: 5,
    name: "Swaraj Uplenchwar",
    initial: "S",
    reviewsCount: "6 reviews",
    review:
      "Outstanding experience! This IT company exceeded my expectations in creating our website. Professional, timely, and top-notch quality. Highly recommended!",
  },
  {
    id: 6,
    name: "S quadraps005",
    initial: "S",
    reviewsCount: "1 review",
    review:
      "Exceptional service! Our website was expertly crafted by you, exceeding all expectations. From design to functionality, they delivered excellence. Highly recommend!",
  },
];

export default function Testimonials() {
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef) return;
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.style.setProperty("--mouse-x", `${x}px`);
    cardRef.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-tag">TESTIMONIALS</span>
          <h2>What Our Clients Say</h2>
          <p>
            Trusted by startups, enterprises, and growing businesses around the
            world.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <div
              className="testimonial-card"
              key={item.id}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            >
              <div className="card-spotlight" />

              <div className="testimonial-card__top">
                <div className="testimonial-card__stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="#f59e0b"
                      color="#f59e0b"
                      className="star-icon"
                    />
                  ))}
                </div>

                <div className="google-badge" title="Verified Google Review">
                  <span className="google-g">G</span>
                </div>
              </div>

              <p className="testimonial-card__review">"{item.review}"</p>

              <div className="testimonial-card__author">
                <div className="author-avatar">{item.initial}</div>

                <div className="author-details">
                  <h4>
                    {item.name}
                    <CheckCircle2 size={13} className="verified-check" />
                  </h4>
                  <span>Verified Google Review • {item.reviewsCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}