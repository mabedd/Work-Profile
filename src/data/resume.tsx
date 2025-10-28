import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mohammed Abed",
  initials: "MA",
  url: "https://dillion.io",
  location: "Riyadh, Saudi Arabia",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mohammed.o.abed@outlook.com",
    tel: "+966 500098128",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mabedd",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammed-abed-itil/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  projects: [
    {
      title: "NHIC eServices Portal",
      href: "https://eservices.nhic.gov.sa",
      active: true,
      description:
        "Centralized platform that enables healthcare stakeholders to explore, request, and track onboarding to national digital health services. It features a unified Services Catalog, Single Sign-On, and a Developer Portal to streamline integration and support secure API access.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        ".NET",
        "SQL Server",
        "Strapi CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://eservices.nhic.gov.sa",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eservices.png",
      video: "",
    },
    {
      title: "NHIC API DevPortal",
      href: "https://devportal.nhic.gov.sa",
      active: true,
      description:
        "Provides streamlined access to technical documentation, sandbox environments, and API credentials. It simplifies integration with national health platforms by supporting secure onboarding, testing, and management of API services.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        ".NET",
        "SQL Server",
        "TailwindCSS",
        "Strapi CMS",
        "OpenAPI",
        "Scalar API Docs",
      ],
      links: [
        {
          type: "Website",
          href: "https://devportal.nhic.gov.sa",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/devportal.png",
      video: "",
    },
  ],
} as const;
