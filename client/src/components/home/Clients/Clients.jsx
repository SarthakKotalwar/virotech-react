import "./Clients.scss";

const logos = [
  "Amazon",
  "Microsoft",
  "Google",
  "OpenAI",
  "AWS",
  "Docker",
  "MongoDB",
  "React",
  "Node.js",
  "Stripe",
  "Shopify",
  "Vercel"
];

export default function Clients() {
  return (
    <section className="clients">

      <div className="container">

        <div className="clients__header">

          <span className="section-tag">
            TRUSTED WORLDWIDE
          </span>

          <h2>
            Trusted By Innovative Companies
          </h2>

          <p>
            We build cloud infrastructure, enterprise software and AI solutions
            trusted by startups, SMBs and growing enterprises.
          </p>

        </div>

        <div className="clients__grid">

          {logos.map((logo) => (

            <div
              key={logo}
              className="client-logo"
            >
              {logo}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}