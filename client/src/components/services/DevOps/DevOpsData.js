import {
  FaDocker,
  FaJenkins,
  FaGithub,
  FaCogs,
  FaCloud,
  FaChartLine,
  FaServer,
  FaInfinity,
} from "react-icons/fa";

const devOpsData = {
  sectionTag: "DEVOPS & CI/CD",

  title: "Automate, Deploy and Scale With Modern DevOps Practices.",

  description:
    "We help businesses streamline software delivery through automation, continuous integration, continuous deployment and reliable infrastructure practices. Our DevOps solutions improve deployment speed, system reliability, scalability and operational efficiency.",

  services: [
    {
      icon: FaDocker,

      title: "Docker & Containerization",

      description:
        "Containerize applications and their dependencies to create consistent, portable and reliable development, testing and production environments.",
    },

    {
      icon: FaServer,

      title: "Kubernetes & Orchestration",

      description:
        "Deploy, manage and scale containerized applications using Kubernetes-based architectures designed for high availability and efficient resource management.",
    },

    {
      icon: FaJenkins,

      title: "Jenkins CI/CD",

      description:
        "Build automated continuous integration and deployment pipelines using Jenkins to improve release speed, application quality and deployment consistency.",
    },

    {
      icon: FaGithub,

      title: "GitHub Actions",

      description:
        "Automate build, testing and deployment workflows with GitHub Actions, enabling teams to deliver software faster through modern CI/CD automation.",
    },

    {
      icon: FaCogs,

      title: "Ansible Automation",

      description:
        "Automate server configuration, application deployment and infrastructure management using repeatable and reliable Ansible playbooks.",
    },

    {
      icon: FaCloud,

      title: "Terraform & Infrastructure as Code",

      description:
        "Provision and manage cloud infrastructure through reusable Infrastructure as Code practices using Terraform for consistent and automated environments.",
    },

    {
      icon: FaChartLine,

      title: "Monitoring & Observability",

      description:
        "Monitor infrastructure and applications using tools such as Prometheus and Grafana to gain visibility into system performance, health and operational metrics.",
    },

    {
      icon: FaInfinity,

      title: "DevOps Consulting & Automation",

      description:
        "Design and improve end-to-end DevOps workflows by combining version control, automated testing, CI/CD, infrastructure automation and monitoring.",
    },
  ],
};

export default devOpsData;