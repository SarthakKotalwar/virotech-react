import {
  FaComments,
  FaSearch,
  FaDraftingCompass,
  FaCode,
  FaVial,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const processData = {
  sectionTag: "OUR PROCESS",

  sectionTitle: "A Structured Approach to Building Better Digital Solutions",

  sectionDescription:
    "Our delivery process combines strategic planning, modern engineering practices, continuous collaboration, and reliable support to transform business requirements into scalable and future-ready technology solutions.",

  steps: [
    {
      number: "01",
      icon: FaComments,
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your business objectives, challenges, existing technology environment, and long-term goals. This helps us define the right solution strategy for your organization.",
    },

    {
      number: "02",
      icon: FaSearch,
      title: "Requirement Analysis",
      description:
        "Our team analyzes functional and technical requirements, identifies dependencies, evaluates existing systems, and defines the key capabilities required to deliver the desired business outcomes.",
    },

    {
      number: "03",
      icon: FaDraftingCompass,
      title: "Solution Architecture",
      description:
        "We design a scalable and secure technical architecture based on your business requirements, selecting the appropriate technologies, cloud services, integrations, and infrastructure components.",
    },

    {
      number: "04",
      icon: FaCode,
      title: "Development & Implementation",
      description:
        "Our engineering team builds and integrates the solution using modern development practices, clean architecture, automation, and scalable technologies while maintaining continuous communication throughout implementation.",
    },

    {
      number: "05",
      icon: FaVial,
      title: "Testing & Quality Assurance",
      description:
        "We validate functionality, performance, security, integrations, and reliability through structured testing and quality assurance practices before the solution moves toward production.",
    },

    {
      number: "06",
      icon: FaRocket,
      title: "Deployment & Launch",
      description:
        "Once the solution is validated, we manage the deployment process using reliable release practices and automation to ensure a smooth transition into the production environment.",
    },

    {
      number: "07",
      icon: FaHeadset,
      title: "Support & Continuous Improvement",
      description:
        "Our engagement continues beyond deployment with monitoring, maintenance, optimization, troubleshooting, and ongoing improvements to help your technology ecosystem evolve with your business.",
    },
  ],
};

export default processData;