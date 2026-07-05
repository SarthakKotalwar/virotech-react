import "./Stats.scss";

const stats = [
  {
    value: "100+",
    label: "Projects Delivered",
    icon: "🚀",
  },
  {
    value: "50+",
    label: "Happy Clients",
    icon: "🤝",
  },
  {
    value: "8+",
    label: "Years Experience",
    icon: "⭐",
  },
  {
    value: "24/7",
    label: "Support",
    icon: "⚡",
  },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((item) => (
            <div className="stats-card" key={item.label}>
              <div className="stats-card__icon">{item.icon}</div>

              <h3>{item.value}</h3>

              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}