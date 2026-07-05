import { ArrowRight } from "lucide-react";
import "./Hero.scss";

export default function HeroButtons() {
  return (
    <div className="hero__buttons">
      <a href="/contact" className="btn btn-primary">
        Start Your Project
        <ArrowRight size={18} />
      </a>

      <a href="/portfolio" className="btn btn-secondary">
        Explore Our Work
      </a>
    </div>
  );
}