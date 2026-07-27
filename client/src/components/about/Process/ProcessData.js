import {
  FiSearch,
  FiClipboard,
  FiPenTool,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
} from "react-icons/fi";

const processData = {

  badge: "OUR DEVELOPMENT PROCESS",

  title: "A Proven Workflow For Every Successful Project",

  description:
    "From understanding your business requirements to delivering scalable software and long-term support, every project follows a structured engineering process.",

  steps: [

    {
      number: "01",
      icon: FiSearch,
      title: "Discovery",
      description:
        "Understanding business goals, challenges and project requirements.",
    },

    {
      number: "02",
      icon: FiClipboard,
      title: "Planning",
      description:
        "Creating architecture, roadmap and delivery milestones.",
    },

    {
      number: "03",
      icon: FiPenTool,
      title: "UI / UX Design",
      description:
        "Designing intuitive user experiences and modern interfaces.",
    },

    {
      number: "04",
      icon: FiCode,
      title: "Development",
      description:
        "Building scalable applications using modern technologies.",
    },

    {
      number: "05",
      icon: FiCheckCircle,
      title: "Testing",
      description:
        "Quality assurance, performance optimization and security validation.",
    },

    {
      number: "06",
      icon: FiUploadCloud,
      title: "Deployment",
      description:
        "Launching production-ready software with continuous monitoring.",
    },

  ],

};

export default processData;