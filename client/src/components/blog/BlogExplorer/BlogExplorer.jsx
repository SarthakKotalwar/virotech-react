import React, { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import "./BlogExplorer.scss";

const blogPosts = [
  {
    id: 1,
    number: "01",
    category: "DIGITAL PRODUCTS",
    title: "Building better digital products that people actually use",
    excerpt:
      "How thoughtful product strategy, UX and technology come together to create digital experiences that deliver measurable business value.",
    image: "/images/blog/digital-products.jpg",
    date: "AUG 2026",
    readTime: "6 MIN READ",
    tags: ["Product", "UX", "Technology"],
    content: [
      "Successful digital products are not simply collections of features. They are carefully designed experiences that solve meaningful problems for the people using them.",
      "A strong product starts with understanding the business objective, the customer journey and the technology required to support both. When these elements work together, products become easier to use, easier to scale and easier to improve.",
      "Modern product development also requires continuous iteration. Teams need to learn from real usage, measure outcomes and improve the experience rather than treating launch day as the finish line."
    ]
  },
  {
    id: 2,
    number: "02",
    category: "CLOUD",
    title: "Designing cloud platforms for growing businesses",
    excerpt:
      "A practical look at scalable infrastructure, reliability and the foundations required for modern digital operations.",
    image: "/images/blog/cloud-platforms.jpg",
    date: "JUL 2026",
    readTime: "6 MIN READ",
    tags: ["Cloud", "AWS", "DevOps"],
    content: [
      "Cloud infrastructure gives growing businesses the flexibility to scale technology alongside demand without building every capability from scratch.",
      "The strongest cloud platforms are designed around reliability, security and operational simplicity. Infrastructure should support the business rather than become a source of unnecessary complexity.",
      "A thoughtful cloud strategy also creates a foundation for automation, observability and continuous delivery."
    ]
  },
  {
    id: 3,
    number: "03",
    category: "AI & AUTOMATION",
    title: "Where AI automation creates real business value",
    excerpt:
      "Moving beyond AI hype by identifying practical workflows where automation can improve productivity and decision making.",
    image: "/images/blog/ai-automation.jpg",
    date: "JUL 2026",
    readTime: "7 MIN READ",
    tags: ["AI", "Automation", "Business"],
    content: [
      "AI becomes valuable when it is connected to a meaningful business workflow rather than simply added as a technology experiment.",
      "Businesses can use automation to reduce repetitive work, improve response times and help teams make better decisions using the information already available to them.",
      "The best implementations combine automation with human oversight, measurable outcomes and a clear understanding of the process being improved."
    ]
  },
  {
    id: 4,
    number: "04",
    category: "ECOMMERCE",
    title: "Creating ecommerce experiences built for conversion",
    excerpt:
      "The technology, UX and operational decisions that help ecommerce businesses create smoother customer journeys.",
    image: "/images/blog/ecommerce.jpg",
    date: "JUN 2026",
    readTime: "5 MIN READ",
    tags: ["Ecommerce", "UX", "Growth"],
    content: [
      "Modern ecommerce experiences need to make discovery, evaluation and checkout feel effortless.",
      "Performance, mobile usability, product information and trust signals all contribute to the customer journey.",
      "Technology should remain invisible to the customer while quietly making every important interaction faster and more reliable."
    ]
  },
  {
    id: 5,
    number: "05",
    category: "BUSINESS AUTOMATION",
    title: "Turning repetitive business processes into automated workflows",
    excerpt:
      "How connected systems and automation can reduce manual work while creating more reliable business operations.",
    image: "/images/blog/business-automation.jpg",
    date: "JUN 2026",
    readTime: "6 MIN READ",
    tags: ["Automation", "Operations", "Systems"],
    content: [
      "Many businesses lose valuable time because important processes still depend on repetitive manual actions.",
      "Workflow automation can connect applications, eliminate unnecessary data entry and provide teams with a more consistent operating model.",
      "The objective is not to automate everything. It is to identify the right processes where automation creates meaningful operational improvement."
    ]
  },
  {
    id: 6,
    number: "06",
    category: "CYBERSECURITY",
    title: "Building security into modern digital platforms",
    excerpt:
      "Security should be part of the architecture from the beginning instead of becoming an afterthought.",
    image: "/images/blog/cybersecurity.jpg",
    date: "MAY 2026",
    readTime: "6 MIN READ",
    tags: ["Security", "Cloud", "Technology"],
    content: [
      "Security is most effective when it is considered throughout the development and infrastructure lifecycle.",
      "Identity management, access control, monitoring and secure development practices form important layers of a modern security strategy.",
      "A proactive approach reduces risk while allowing teams to continue building and deploying products efficiently."
    ]
  },
  {
    id: 7,
    number: "07",
    category: "FUTURE OF WORK",
    title: "How technology is reshaping the future of work",
    excerpt:
      "Exploring the systems, tools and digital experiences changing how modern teams collaborate and operate.",
    image: "/images/blog/future-of-work.jpg",
    date: "MAY 2026",
    readTime: "5 MIN READ",
    tags: ["Work", "Technology", "Digital"],
    content: [
      "The future of work is increasingly shaped by connected digital systems that allow people to collaborate regardless of location.",
      "Automation and intelligent tools can remove repetitive tasks while allowing people to spend more time on creative and strategic work.",
      "Businesses that combine technology with thoughtful employee experiences will be better positioned for long-term change."
    ]
  },
  {
    id: 8,
    number: "08",
    category: "WEB DEVELOPMENT",
    title: "What modern web development should look like",
    excerpt:
      "Performance, accessibility, scalability and maintainability are becoming essential parts of a professional web experience.",
    image: "/images/blog/web-development.jpg",
    date: "APR 2026",
    readTime: "6 MIN READ",
    tags: ["Web", "React", "Development"],
    content: [
      "Modern websites need to do much more than look attractive. They need to perform well, remain accessible and provide a consistent experience across devices.",
      "Component-based development makes it possible to build flexible interfaces while maintaining a consistent design system.",
      "The best implementations balance visual quality with technical reliability."
    ]
  },
  {
    id: 9,
    number: "09",
    category: "TECHNOLOGY STRATEGY",
    title: "Creating a technology strategy that supports growth",
    excerpt:
      "Technology decisions become more powerful when they are directly connected to business priorities and long-term goals.",
    image: "/images/blog/technology-strategy.jpg",
    date: "APR 2026",
    readTime: "7 MIN READ",
    tags: ["Strategy", "Technology", "Growth"],
    content: [
      "A technology strategy should provide direction rather than simply becoming a list of tools and technologies.",
      "Businesses need to understand which systems create competitive advantage, which processes should be automated and where investment will produce the strongest return.",
      "A clear technology roadmap makes future decisions easier and reduces unnecessary complexity."
    ]
  },
  {
    id: 10,
    number: "10",
    category: "DIGITAL TRANSFORMATION",
    title: "Making digital transformation actually work",
    excerpt:
      "Digital transformation succeeds when technology, people and business processes evolve together.",
    image: "/images/blog/digital-transformation.jpg",
    date: "MAR 2026",
    readTime: "7 MIN READ",
    tags: ["Transformation", "Business", "Digital"],
    content: [
      "Digital transformation is not simply about replacing old software with new software.",
      "It requires organizations to rethink processes, customer experiences and the way teams use technology to create value.",
      "Successful transformation is incremental, measurable and aligned with the organization's broader business objectives."
    ]
  }
];

const BlogExplorer = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedPost ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPost]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPost(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleTilt = (event) => {
    const card = event.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const resetTilt = (event) => {
    const card = event.currentTarget;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  return (
    <>
      <section className="blog-explorer" id="blog-explorer">
        <div className="blog-explorer__container">

          {/* HEADER */}
          <div className="blog-explorer__header">

            <div className="blog-explorer__heading">

              <span className="blog-explorer__eyebrow">
                EXPLORE THE JOURNAL
              </span>

              <h2>
                Perspectives for
                <span> what's next.</span>
              </h2>

            </div>

            <p className="blog-explorer__description">
              Explore practical perspectives on technology,
              digital products, cloud, AI, automation and
              modern business.
            </p>

          </div>

          {/* FILTER / SUMMARY */}
          <div className="blog-explorer__toolbar">

            <div className="blog-explorer__count">
              <strong>{String(blogPosts.length).padStart(2, "0")}</strong>
              <span>Articles</span>
            </div>

            <div className="blog-explorer__topics">
              <span className="blog-filter blog-filter--active">
                All
              </span>

              <span className="blog-filter">
                Technology
              </span>

              <span className="blog-filter">
                Business
              </span>

              <span className="blog-filter">
                Digital
              </span>
            </div>

          </div>

          {/* BLOG GRID */}
          <div className="blog-explorer__grid">

            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="blog-explorer-card"
                tabIndex={0}
                role="button"
                onClick={() => setSelectedPost(post)}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    setSelectedPost(post);
                  }
                }}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >

                <div className="blog-explorer-card__inner">

                  {/* IMAGE */}
                  <div className="blog-explorer-card__media">

                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                    />

                    <div className="blog-explorer-card__image-overlay" />

                    <span className="blog-explorer-card__number">
                      {post.number}
                    </span>

                    <span className="blog-explorer-card__category">
                      {post.category}
                    </span>

                    <span className="blog-explorer-card__open">
                      <ArrowUpRight size={17} />
                    </span>

                  </div>

                  {/* CONTENT */}
                  <div className="blog-explorer-card__content">

                    <div className="blog-explorer-card__meta">

                      <span>{post.date}</span>

                      <i />

                      <span>{post.readTime}</span>

                    </div>

                    <h3>{post.title}</h3>

                    <p>{post.excerpt}</p>

                    <div className="blog-explorer-card__tags">

                      {post.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}

                    </div>

                    <div className="blog-explorer-card__footer">

                      <span>
                        Read article
                      </span>

                      <span className="blog-explorer-card__footer-arrow">
                        <ArrowUpRight size={15} />
                      </span>

                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ARTICLE MODAL */}
      {selectedPost && (
        <div
          className="blog-explorer-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-explorer-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPost(null);
            }
          }}
        >

          <div className="blog-explorer-modal__window">

            <header className="blog-explorer-modal__header">

              <div>

                <span className="blog-explorer-modal__category">
                  {selectedPost.category}
                </span>

                <div className="blog-explorer-modal__meta">
                  <span>{selectedPost.date}</span>
                  <i />
                  <span>{selectedPost.readTime}</span>
                </div>

              </div>

              <button
                type="button"
                className="blog-explorer-modal__close"
                onClick={() => setSelectedPost(null)}
                aria-label="Close article"
              >
                <X size={20} />
              </button>

            </header>

            <div className="blog-explorer-modal__scroll">

              <div className="blog-explorer-modal__image">

                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                />

              </div>

              <div className="blog-explorer-modal__article">

                <span className="blog-explorer-modal__eyebrow">
                  VIROTECH JOURNAL
                </span>

                <h1 id="blog-explorer-modal-title">
                  {selectedPost.title}
                </h1>

                <p className="blog-explorer-modal__intro">
                  {selectedPost.excerpt}
                </p>

                <div className="blog-explorer-modal__body">

                  {selectedPost.content.map(
                    (paragraph, index) => (
                      <p key={index}>
                        {paragraph}
                      </p>
                    )
                  )}

                </div>

                <div className="blog-explorer-modal__tags">

                  {selectedPost.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            <footer className="blog-explorer-modal__footer">

              <span>
                VIROTECH TECHNOLOGIES
              </span>

              <button
                type="button"
                onClick={() => setSelectedPost(null)}
              >
                Close article
                <ArrowUpRight size={15} />
              </button>

            </footer>

          </div>

        </div>
      )}
    </>
  );
};

export default BlogExplorer;