import React from "react";
import { ArrowUpRight } from "lucide-react";
import FeaturedPostsData from "./FeaturedPostsData";
import "./FeaturedPosts.scss";

const FeaturedPosts = () => {
  return (
    <section className="featured-posts" id="featured-posts">
      <div className="featured-posts__container">
        <div className="featured-posts__heading">
          <div>
            <span className="featured-posts__eyebrow">
              FEATURED INSIGHTS
            </span>

            <h2>
              Ideas worth
              <span> exploring.</span>
            </h2>
          </div>

          <p>
            Practical perspectives from the intersection of technology,
            business and digital product development.
          </p>
        </div>

        <div className="featured-posts__grid">
          {FeaturedPostsData.map((post, index) => (
            <article
              className={`featured-post featured-post--${post.accent}`}
              key={post.id}
            >
              <div className="featured-post__visual">
                <span className="featured-post__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="featured-post__visual-art">
                  <div className="featured-post__art-circle" />
                  <div className="featured-post__art-line" />
                  <div className="featured-post__art-node" />
                </div>

                <span className="featured-post__category">
                  {post.category}
                </span>
              </div>

              <div className="featured-post__body">
                <div className="featured-post__meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>

                <p>{post.excerpt}</p>

                <button type="button" className="featured-post__link">
                  Read article
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;