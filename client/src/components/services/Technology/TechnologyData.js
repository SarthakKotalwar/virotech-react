import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJenkins,
  FaLinux,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";

const technologyData = {
  sectionTag: "TECHNOLOGY STACK",

  sectionTitle: "Technologies That Power Our Solutions",

  sectionDescription:
    "We use modern, reliable and industry-proven technologies to build scalable cloud infrastructure, automate software delivery and develop secure digital solutions for modern businesses.",

  categories: [
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      description:
        "We design and manage scalable cloud environments that help businesses improve reliability, security and operational efficiency.",

      technologies: [
        {
          name: "AWS",
          icon: FaAws,
          description:
            "Cloud infrastructure, compute, storage, databases and serverless solutions.",
        },
        {
          name: "Linux",
          icon: FaLinux,
          description:
            "Reliable operating system environments for servers, applications and cloud infrastructure.",
        },
        {
          name: "Docker",
          icon: FaDocker,
          description:
            "Containerized application environments for consistent development and deployment.",
        },
        {
          name: "Kubernetes",
          icon: SiKubernetes,
          description:
            "Container orchestration for scalable and resilient application workloads.",
        },
      ],
    },

    {
      id: "devops",
      title: "DevOps & Automation",
      description:
        "We automate development and deployment workflows to help teams deliver software faster and more reliably.",

      technologies: [
        {
          name: "Jenkins",
          icon: FaJenkins,
          description:
            "Continuous integration and continuous delivery automation.",
        },
        {
          name: "Git",
          icon: FaGitAlt,
          description:
            "Distributed version control for collaborative software development.",
        },
        {
          name: "GitHub",
          icon: FaGithub,
          description:
            "Source code management, collaboration and automated development workflows.",
        },
        {
          name: "Terraform",
          icon: SiTerraform,
          description:
            "Infrastructure as Code for consistent and repeatable cloud deployments.",
        },
        {
          name: "Ansible",
          icon: SiAnsible,
          description:
            "Infrastructure configuration, provisioning and automation.",
        },
        {
          name: "Prometheus",
          icon: SiPrometheus,
          description:
            "Infrastructure and application monitoring through metrics and alerting.",
        },
        {
          name: "Grafana",
          icon: SiGrafana,
          description:
            "Interactive dashboards and visual monitoring for infrastructure and applications.",
        },
      ],
    },

    {
      id: "development",
      title: "Software Development",
      description:
        "We build modern web applications and enterprise software using scalable development frameworks and programming technologies.",

      technologies: [
        {
          name: "React",
          icon: FaReact,
          description:
            "Modern component-based frontend applications and interactive user experiences.",
        },
        {
          name: "Node.js",
          icon: FaNodeJs,
          description:
            "Scalable backend services and API development using JavaScript.",
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          description:
            "Dynamic web applications and modern frontend development.",
        },
        {
          name: "Python",
          icon: FaPython,
          description:
            "Backend development, automation, AI integrations and data-driven applications.",
        },
        {
          name: "Java",
          icon: FaJava,
          description:
            "Enterprise-grade backend systems and scalable software applications.",
        },
      ],
    },

    {
      id: "database",
      title: "Data & Databases",
      description:
        "We work with reliable database technologies to support secure, scalable and high-performance applications.",

      technologies: [
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          description:
            "Powerful relational database systems for enterprise and cloud applications.",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          description:
            "Flexible NoSQL database solutions for modern application architectures.",
        },
      ],
    },
  ],
};

export default technologyData;