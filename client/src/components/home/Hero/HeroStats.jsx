import "./Hero.scss";

const stats = [
  {
    number: "100+",
    label: "Projects Delivered",
  },
  {
    number: "50+",
    label: "Happy Clients",
  },
  {
    number: "4+",
    label: "Years Experience",
  },
];

export default function HeroStats() {
  return (
    <div className="hero__stats">
      {stats.map((item) => (
        <div className="hero__stat" key={item.label}>
          <h3>{item.number}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}