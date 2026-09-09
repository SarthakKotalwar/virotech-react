import React, { useState } from "react";
import technologyData from "./TechnologyData";
import { Sparkles, Layers } from "lucide-react";
import "./Technology.scss";

export default function Technology() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", title: "All Technologies" },
    ...technologyData.categories.map((c) => ({ id: c.id, title: c.title })),
  ];

  const filteredCategories =
    activeTab === "all"
      ? technologyData.categories
      : technologyData.categories.filter((c) => c.id === activeTab);

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef) return;
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.style.setProperty("--mouse-x", `${x}px`);
    cardRef.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="technology" id="technology-stack">
      <div className="container">
        {/* Header */}
        <div className="technology__header">
          <span className="section-tag">
            <Sparkles size={13} className="tag-sparkle" />
            {technologyData.sectionTag}
          </span>
          <h2>{technologyData.sectionTitle}</h2>
          <p>{technologyData.sectionDescription}</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="technology__tabs">
          {categories.map((tab) => (
            <button
              key={tab.id}
              className={`tech-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.id === "all" ? <Layers size={15} /> : null}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Categories Grid */}
        <div className="technology__categories">
          {filteredCategories.map((category) => (
            <article className="technology-category" key={category.id}>
              <div className="technology-category__header">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <div className="technology__grid">
                {category.technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      className="technology-card"
                      key={tech.name}
                      onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    >
                      <div className="card-spotlight" />

                      <div className="technology-card__top">
                        <div className="technology-card__icon">
                          <Icon />
                        </div>
                      </div>

                      <div className="technology-card__content">
                        <h4>{tech.name}</h4>
                        <p>{tech.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}