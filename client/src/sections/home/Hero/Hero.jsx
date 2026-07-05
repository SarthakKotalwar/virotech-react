import "./Hero.scss";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="hero">

      <div className="container hero__wrapper">

        <HeroLeft />

        <HeroRight />

      </div>

    </section>
  );
}