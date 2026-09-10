import {
  FiBriefcase,
  FiCloud,
  FiCpu,
  FiTrendingUp,
} from "react-icons/fi";

const journeyData = {
  badge: "OUR JOURNEY",
  title: "Growing Through Innovation",
  description:
    "Every milestone represents our commitment to innovation, engineering excellence, and long-term partnerships with businesses across industries.",
  timeline: [
    {
      year: "2023",
      icon: FiBriefcase,
      title: "Company Founded & Core Systems",
      description:
        "Established with an engineering-first mindset, launching scalable full-stack web and mobile architectures for emerging startups and enterprise clients.",
    },
    {
      year: "2024",
      icon: FiCloud,
      title: "Cloud Native & DevOps Expansion",
      description:
        "Integrated advanced AWS/GCP cloud environments, automated zero-downtime CI/CD pipelines, Kubernetes containerization, and microservices.",
    },
    {
      year: "2025",
      icon: FiCpu,
      title: "AI Integration & Workflow Automation",
      description:
        "Expanded into custom LLM pipelines, autonomous internal automation, and intelligent data systems that supercharge operational throughput.",
    },
    {
      year: "2026+",
      icon: FiTrendingUp,
      title: "Next-Gen Scalability & Global Footprint",
      description:
        "Pioneering distributed edge intelligence, autonomous cloud resilience, and expanding cross-continental engineering support.",
    },
  ],
};

export default journeyData;