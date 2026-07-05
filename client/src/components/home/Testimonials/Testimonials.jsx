import "./Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    company: "TechNova",
    role: "CTO",
    review:
      "Virotech transformed our cloud infrastructure and automated our deployment pipeline. The team was highly professional and delivered beyond expectations."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "NextGen Systems",
    role: "Founder",
    review:
      "Their AI automation reduced our operational workload significantly. Communication and delivery were exceptional."
  },
  {
    id: 3,
    name: "Michael Brown",
    company: "CloudSphere",
    role: "Engineering Manager",
    review:
      "From planning to deployment, every step was handled professionally. We now have a highly scalable platform."
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="testimonials__header">

          <span className="section-tag">
            TESTIMONIALS
          </span>

          <h2>
            What Our Clients Say
          </h2>

          <p>
            Trusted by startups, enterprises and growing
            businesses around the world.
          </p>

        </div>

        <div className="testimonials__grid">

          {testimonials.map((item) => (

            <div
              className="testimonial-card"
              key={item.id}
            >

              <div className="testimonial-card__stars">
                ★★★★★
              </div>

              <p className="testimonial-card__review">
                "{item.review}"
              </p>

              <div className="testimonial-card__author">

                <h4>{item.name}</h4>

                <span>
                  {item.role} • {item.company}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}