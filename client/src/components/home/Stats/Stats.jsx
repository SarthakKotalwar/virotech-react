import "./Stats.scss";
import { useEffect, useState } from "react";

const stats = [
  {
    number: 100,
    suffix: "+",
    label: "Projects Delivered"
  },
  {
    number: 50,
    suffix: "+",
    label: "Happy Clients"
  },
  {
    number: 8,
    suffix: "+",
    label: "Years Experience"
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support"
  }
];

function Counter({ end, suffix }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let current = 0;

    const increment = end / 70;

    const timer = setInterval(() => {

      current += increment;

      if (current >= end) {

        setCount(end);

        clearInterval(timer);

      } else {

        setCount(Math.ceil(current));

      }

    }, 20);

    return () => clearInterval(timer);

  }, [end]);

  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
}

export default function Stats() {

  return (

    <section className="stats">

      <div className="container">

        <div className="stats__grid">

          {stats.map((item) => (

            <div
              className="stats__card"
              key={item.label}
            >

              <Counter
                end={item.number}
                suffix={item.suffix}
              />

              <p>{item.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}