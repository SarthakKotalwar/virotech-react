import React, { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import BlogHeroData from "./BlogHeroData";
import "./BlogHero.scss";

const BlogHero = () => {
  const { featuredPosts, stats } = BlogHeroData;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activePost = featuredPosts[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, featuredPosts.length]);

  const nextPost = () => {
    setActiveIndex((current) => (current + 1) % featuredPosts.length);
  };

  const previousPost = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + featuredPosts.length) % featuredPosts.length
    );
  };

  const goToArticles = () => {
    const element = document.getElementById("blog-explorer");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToFeatured = () => {
    const element = document.getElementById("featured-insights");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="blog-hero">
      <div className="blog-hero__background">
        <span className="blog-hero__glow blog-hero__glow--one" />
        <span className="blog-hero__glow blog-hero__glow--two" />

        <div className="blog-hero__grid" />
      </div>

      <div className="blog-hero__container">
        {/* LEFT SIDE */}
        <div className="blog-hero__content">
          <div className="blog-hero__eyebrow">
            <span className="blog-hero__eyebrow-dot" />
            VIROTECH JOURNAL
          </div>

          <h1 className="blog-hero__title">
            Ideas that shape
            <span>what comes next.</span>
          </h1>

          <p className="blog-hero__description">
            Explore practical perspectives on technology, digital products,
            automation, AI and the ideas shaping modern businesses.
          </p>

          <div className="blog-hero__actions">
            <button
              type="button"
              className="blog-hero__primary-button"
              onClick={goToArticles}
            >
              Explore Articles
              <ArrowUpRight size={17} strokeWidth={2} />
            </button>

            <button
              type="button"
              className="blog-hero__secondary-button"
              onClick={goToFeatured}
            >
              Featured Insights
            </button>
          </div>

          <div className="blog-hero__stats">
            {stats.map((stat) => (
              <div className="blog-hero__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="blog-hero__showcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="blog-hero__showcase-orbit blog-hero__showcase-orbit--one" />
          <div className="blog-hero__showcase-orbit blog-hero__showcase-orbit--two" />

          <article
            className="blog-featured-card"
            key={activePost.id}
          >
            <div className="blog-featured-card__top">
              <span>FEATURED ARTICLE</span>

              <strong>{activePost.number}</strong>
            </div>

            <div className="blog-featured-card__image-wrap">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="blog-featured-card__image"
              />

              <div className="blog-featured-card__image-overlay" />

              <span className="blog-featured-card__image-category">
                {activePost.category}
              </span>

              <div className="blog-featured-card__image-decoration">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="blog-featured-card__body">
              <div className="blog-featured-card__meta">
                <span>{activePost.category}</span>
                <i />
                <span>{activePost.date}</span>
                <i />
                <span>{activePost.readTime}</span>
              </div>

              <h2>{activePost.title}</h2>

              <p>{activePost.excerpt}</p>

              <button
                type="button"
                className="blog-featured-card__read"
                onClick={goToFeatured}
              >
                Read article
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="blog-featured-card__footer">
              <span>VIROTECH JOURNAL</span>

              <div className="blog-featured-card__controls">
                <button
                  type="button"
                  onClick={previousPost}
                  aria-label="Previous article"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="blog-featured-card__dots">
                  {featuredPosts.map((post, index) => (
                    <button
                      type="button"
                      key={post.id}
                      className={
                        index === activeIndex
                          ? "is-active"
                          : ""
                      }
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show article ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextPost}
                  aria-label="Next article"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;