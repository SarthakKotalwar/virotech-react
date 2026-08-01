import {
  FaAws,
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";

const cloudEngineeringData = {
  sectionTag: "CLOUD ENGINEERING",

  title: "Scalable Cloud Infrastructure Built For Growth.",

  description:
    "We design, deploy and manage secure, scalable and highly available cloud infrastructure that helps businesses modernize their technology environment and operate with confidence.",

  services: [
    {
      icon: FaAws,
      title: "AWS Cloud Solutions",
      description:
        "Design and implementation of reliable AWS cloud environments using services such as EC2, S3, RDS, Lambda, IAM, VPC and CloudFormation.",
    },

    {
      icon: FaCloud,
      title: "Cloud Migration",
      description:
        "Move applications, databases and workloads from traditional infrastructure to modern cloud environments with minimal disruption.",
    },

    {
      icon: FaServer,
      title: "Cloud Infrastructure",
      description:
        "Build scalable and resilient infrastructure designed for performance, availability and long-term business growth.",
    },

    {
      icon: FaShieldAlt,
      title: "Cloud Security",
      description:
        "Implement secure cloud architectures with identity management, access controls, network security and infrastructure best practices.",
    },

    {
      icon: FaDatabase,
      title: "Cloud Databases",
      description:
        "Deploy and manage reliable database infrastructure using managed cloud database services with scalability, backup and monitoring.",
    },

    {
      icon: FaNetworkWired,
      title: "Cloud Networking",
      description:
        "Design secure VPC architectures, subnets, routing, security groups and network connectivity for modern cloud applications.",
    },
  ],
};

export default cloudEngineeringData;