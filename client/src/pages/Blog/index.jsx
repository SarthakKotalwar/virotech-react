import React from "react";
import BlogHero from "../../components/blog/BlogHero/BlogHero";
import FeaturedPosts from "../../components/blog/FeaturedPosts/FeaturedPosts";
import BlogExplorer from "../../components/blog/BlogExplorer/BlogExplorer";
import "./Blog.scss";

const Blog = () => {
  return (
    <main className="blog-page">
      <BlogHero />
      <FeaturedPosts />
      <BlogExplorer />

      <section className="blog-page__cta" id="blog-contact">
        <div className="blog-page__cta-glow" />
        <div className="blog-page__cta-content">
          <span>LET'S BUILD SOMETHING</span>
          <h2>
            Have an idea
            <br />
            worth exploring?
          </h2>
          <p>
            Tell us what you're working on. Our team would love
            to explore the problem with you.
          </p>
          <a href="/contact">
            Start a conversation
            <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Blog;