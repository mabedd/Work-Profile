"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { CompanyResumeCard } from "@/components/company-resumr-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { CredentialCard } from "@/components/credential-card";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { ChevronLeftIcon } from "lucide-react";
import { AchievementCard } from "@/components/achievements-card";

// Role inside a company
interface Role {
  id: string;
  position: string;
  startDate: string;
  endDate: string;
  description:
    | Array<{
        point: string;
        subpoints?: string[];
      }>
    | string;
}

// Company with possible multiple roles
interface Experience {
  id: string;
  company: string;
  logoImage?: {
    url?: string;
  } | null;
  // Only required if no roles array
  startDate?: string;
  endDate?: string;
  description?:
    | string
    | {
        point: string;
        subpoints?: string[];
      }[];
  // Optional for single-role companies
  roles?: {
    id: string;
    position: string;
    startDate: string;
    endDate: string;
    description:
      | string
      | {
          point: string;
          subpoints?: string[];
        }[];
  }[];
}

// Education entry
interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate?: string;
  endDate?: string;
  description: string;
  logoImage: string;
}

// Skill entry
interface Skill {
  skillName: string;
  category: string;
}

// Course entry
interface CourseEntry {
  id: string;
  title: string;
  provider?: string;
  date?: string;
  description?: string;
}

// Certificate entry
interface CertificateEntry {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description?: string;
}

// --- Achievements / Awards ---
interface AchievementEntry {
  id: string;
  title: string;
  issuer?: string;
  date?: string; // year-only if you like
  description?: string;
  logoImage?: string; // optional, if you want to add logos later
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "National Health Information Center (NHIC)",
    logoImage: { url: "/logoNHIC.png" },
    roles: [
      {
        id: "r1",
        position: "Lead Software Engineer",
        startDate: "2024-10",
        endDate: "Present",
        description: [
          {
            point: "Leading the Software Development Team.",
            subpoints: [
              "Lead a cross-functional software development team focused on building solutions and services.",
              "Foster a collaborative and agile environment, encouraging continuous learning and innovation.",
              "Ensure technical excellence, high code quality, and effective task management across the team.",
            ],
          },
          {
            point:
              "Technically Supervising and Supporting the Implementation of National NHIC Projects.",
            subpoints: [
              "Collaborating closely with involved teams to translate requirements into technical specifications.",
              "Actively participating in technical planning, system integration, and deployment cycles.",
              "Overseeing technical validations, system configurations, and system testing during project rollouts.",
              "Ensured compliance with security, scalability, and performance benchmarks.",
            ],
          },
          {
            point:
              "Participation in the National Unified Health Record (nphies) Execution and Operation.",
            subpoints: [
              "Established a standardized approach for modalities data exchange with nphies, ensuring interoperability standards alignment.",
              "Participated in the inclusion of visitors patient records, ensuring broader clinical data coverage.",
            ],
          },
          {
            point:
              "Leading National Health Core Registry services technical activities.",
            subpoints: [
              "Lead initiatives to integrate new data sources into NHCR to expand coverage and improve data.",
              "Optimize integrations with consumers to enhance service delivery and quality.",
              "Build initiatives to establish optimized integration with national health solutions.",
            ],
          },
          {
            point:
              "Project Manager for the Health IT Registration and Accreditation Program.",
            subpoints: [
              "Led the development of the national Health IT Evaluation and Accreditation Framework, defining assessment criteria, processes, and compliance standards.",
              "Directed coordination across technical, regulatory, and policy teams to ensure seamless implementation and stakeholder alignment.",
              "Ensured alignment with international frameworks such as HL7, ISO, and IHE profiles to uphold global best practices.",
              "Oversaw the program’s successful launch under the patronage of H.E. the Minister of Health during the Global Health Exhibition (GHE) 2025.",
            ],
          },
          {
            point:
              "Directing the end-to-end technical delivery of nationwide digital health projects ensuring excellence.",
          },
        ],
      },
      {
        id: "r2",
        position: "Software Engineer",
        startDate: "2023-01",
        endDate: "2024-10",
        description: [
          {
            point:
              "Participated in Healthcare Organizations Onboarding with National Unified Health Record (nphies).",
            subpoints: [
              "Managed the integration with National Health Core Registry which is a core prerequisite.",
              "Involved in overviewing and managing onboarding activities in an Agile manner.",
              "Contributed to key technical activities ensuring alignment with project goals and requirements.",
            ],
          },
          {
            point: "Contributed to the Build of NHIC eServices Portal.",
            subpoints: [
              "Implemented Services Catalog allowing users to explore, request, and track onboarding to services.",
              "Supported development of a centralized Single Sign-On ensuring unified access across all services.",
              "Participated in the setup of an integrated Developer Portal to facilitate API integration.",
              "Facilitated API access request workflows and tracking to ensure efficient consumer integrations.",
            ],
          },
          {
            point: "Led the Technical Activities of the Core Registry System.",
            subpoints: [
              "Participated in the successful integration of healthcare consumers into the system.",
              "Continuously improved services to meet evolving consumer needs and industry standards.",
              "Engaged in system enhancements, including data flows and technical architecture.",
            ],
          },
          {
            point:
              "Designed and Developed Object Identifier (OID) Registry system for issuing and managing OIDs for nphies Clinical Services program.",
            subpoints: [
              "Successfully fasted the process of issuing OIDs in a reliable way.",
              "Designed the workflow in a way that meets HL7 and NHIC standards.",
              "Integrated the system with involved parties to ensure better system utilization.",
              "Established an effective workflow for OIDs through the direct integration with nphies.",
            ],
          },
          {
            point:
              "Proposed and implemented an AI-based clinical codes automapping solution.",
            subpoints: [
              "Used NLP algorithms to predict the closest standard code set based on code descriptions.",
              "Conducted a successful pilot with ICD10 codes, demonstrating the potential for the proposed solution.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "1",
    company: "National Health Information Center (NHIC)",
    logoImage: { url: "/logoNHIC.png" },
    roles: [
      {
        id: "r3",
        position: "Coop Trainee",
        startDate: "2021-09",
        endDate: "2022-03",
        description: [
          {
            point:
              "Designed and developed National Health Accounts system for managing revenue cycles among healthcare entities, ensuring seamless integration with existing registries and services.",
          },
          {
            point:
              " Participated in a pilot study on AI in healthcare by exploring the use of AI solution for early breast cancer detection via CT scan screenings.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    company: "Research and Initiatives Center - Prince Sultan University",
    logoImage: { url: "/logoPSU.png" },
    roles: [
      {
        id: "r1",
        position: "Undergraduate Research Assistant",
        startDate: "2020-08",
        endDate: "2021-08",
        description: [
          {
            point:
              "Participated in AI-driven solutions development across diverse fields including robotics, safety compliance, and identity recognition.",
            subpoints: [
              "Utilized cutting-edge technologies like TensorFlow, YOLO, and neural networks.",
            ],
          },
          {
            point:
              "1st Place Winner at KAUST Challenge: Ideas and Solutions for Hajj and Umrah.",
            subpoints: [
              "Designed an AI surveillance and statistics system incorporating Object Detection, Object Classification, and Age Estimation.",
              "Utilized TensorFlow and YOLO for implementation.",
              "Participated in data collection and labeling from various sources.",
            ],
          },
          {
            point:
              "Designed and developed Object Detection Model for safety in construction sites.",
            subpoints: [
              "Built a YOLO-based model for safety measurements and insurance.",
              "Collected and labeled over 4,000 images of personnel at construction sites.",
              "Achieved 98% test accuracy for safety compliance detection.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    company: "Smart Methods",
    logoImage: { url: "/logoSmartmethods.png" },
    roles: [
      {
        id: "r1",
        position: "IoT and AI Intern",
        startDate: "2020-06",
        endDate: "2020-08",
        description: [
          {
            point:
              "Developed and maintained robotics integration control panel applications using HTML, CSS, and PHP.",
          },
          {
            point:
              "Designed user-friendly interfaces for real-time control and monitoring of robotic systems.",
          },
          {
            point:
              "Integrated backend logic with robotics hardware for seamless communication and automation.",
          },
          {
            point:
              "Optimized application performance to ensure smooth operation and responsiveness in robotics control.",
          },
        ],
      },
    ],
  },
];

const achievements: AchievementEntry[] = [
  {
    id: "a_nhic_onboarding",
    title:
      "Recognition for National Onboarding with nphies & National Health Core Registry",
    issuer: "National Health Information Center (NHIC)",
    description:
      "Recognized for contributions to nationwide onboarding and data-integration efforts across nphies and NHCR.",
  },
  {
    id: "a_national_initiatives_2024",
    title: "Recognition for Participation in National Initiatives",
    issuer: "National Health Information Center (NHIC)",
    date: "2024",
    description:
      "Acknowledged for active participation and impact across key national digital-health programs.",
  },
  {
    id: "a_kaust_hajj_umrah",
    title: "1st Place — KAUST Challenge: Ideas and Solutions for Hajj & Umrah",
    issuer: "King Abdullah University of Science and Technology (KAUST)",
    description:
      "AI-driven surveillance & statistics solution (object detection, classification, age estimation) built with TensorFlow/YOLO.",
  },
  {
    id: "a_psu_excellence_scholarship",
    title: "Excellence Scholarship",
    issuer: "Prince Sultan University",
    description:
      "Merit-based academic scholarship awarded for outstanding performance in Software Engineering.",
  },
];

const workProjects = [
  {
    id: "0",
    company: "National Unified Health Record (nphies)",
    position: "National Health Information Center (NHIC)",
    description:
      "The National Unified Health Record (nphies) is a centralized, patient-centric platform designed to unify health records across all healthcare providers in Saudi Arabia. Built upon global best practices and aligned with national and international health data standards, nphies ensures that each patient has a single, longitudinal health record accessible across public and private sectors. By enabling real-time, secure, and standardized health information exchange, nphies enhances care coordination, reduces duplication, improves clinical outcomes, and supports data-driven policymaking. As part of NHIC’s technical leadership team, I played a key role in the national onboarding of healthcare providers and later transitioned into technical supervision and expansion activities, enhancing system integrations between nphies and foundational national data sources such as the Health Core Registries. My focus has been on strengthening data quality, scalability, and nationwide interoperability.",
    logoImage: "/logoNphies.png",
  },
  {
    id: "1",
    company: "National Health Core Registry",
    position: "National Health Information Center (NHIC)",
    description:
      "The National Health Core Registry serves as a foundational pillar of Saudi Arabia’s digital health ecosystem, acting as the single source of truth for core health entities. It comprises three integrated registries — Patients, Practitioners, and Organizations — each containing verified demographic and identification data. Every entity is assigned a unique national identifier to ensure consistency, accuracy, and traceability across systems. The registry enables unified identity management, seamless data exchange, and trustworthy interoperability across platforms such as nphies, Sehaty, and MOH National Systems. As Technical Lead, I provided governance oversight, architectural direction, and integration strategies to ensure continuous evolution, scalability, and alignment with emerging national health initiatives.",
    logoImage: null,
  },
  {
    id: "2",
    company: "Health IT Registration and Accreditation Program",
    position: "National Health Information Center (NHIC)",
    description:
      "A national initiative led by the National Health Information Center to establish a unified framework for certifying and accrediting digital health solutions across Saudi Arabia. The program ensures that all Health IT systems — including Electronic Medical Records (EMRs), Health Information Exchange (HIE) platforms, and digital health applications — comply with national standards for interoperability, security, and quality. It defines the governance, compliance, and conformance testing frameworks aligned with international standards such as HL7, FHIR, and IHE, supporting safer and more interoperable digital healthcare across the Kingdom. As Project Manager, I oversaw the program’s end-to-end delivery, coordinating multidisciplinary teams to develop the certification model, testing infrastructure, and national accreditation policies that now underpin the Kingdom’s digital health ecosystem.",
    logoImage: null,
  },
  {
    id: "3",
    company: "Medication Dictionary",
    position: "National Health Information Center (NHIC)",
    description:
      "The Medication Dictionary is a national platform designed to consolidate all medications available across healthcare sectors into a unified, authoritative registry. It integrates data from diverse sources, regulatory bodies, and international code systems to provide a standardized view of medications — including identifiers, ingredients, strengths, forms, manufacturers, and regulatory statuses. Each medication is assigned a unique Medication Registry ID (MRID) to serve as a single source of truth and enable accurate referencing. By establishing a unified medication coding system, the registry enhances interoperability across electronic health systems, supports safe prescribing and dispensing, and strengthens pharmacovigilance. As the Technical Project Manager, I oversaw the system’s architecture design, data-integration framework, and governance model — ensuring alignment with national digital health standards and supporting the Kingdom’s health information interoperability goals.",
    logoImage: null,
  },
  {
    id: "4",
    company: "Saudi Health Data Dictionary (SHDD)",
    position: "National Health Information Center (NHIC)",
    description:
      "The Saudi Health Data Dictionary (SHDD) is the national reference for standardized health terminology, designed to unify the definitions and usage of clinical and administrative data across the healthcare ecosystem. It serves as the authoritative source for health terms, codes, and classifications, supporting semantic interoperability and data quality across all health systems. SHDD underpins regulatory compliance and consistent reporting at the national level. As Technical Project Manager, I led the project’s technical development and delivery, overseeing the design of its data model, integration framework, and terminology management processes, ensuring alignment with HL7, SNOMED CT, and other international standards.",
    logoImage: null,
  },
  {
    id: "5",
    company: "NHIC eServices Portal",
    position: "National Health Information Center (NHIC)",
    description:
      "The NHIC eServices Portal is the unified digital gateway for accessing and managing all National Health Information Center services. It provides a streamlined interface for healthcare entities to register, request integrations, and manage their participation in national health programs. The platform features a comprehensive Service Catalog, centralized Single Sign-On (SSO), and a Developer Portal for API access and integration management. As a Software Engineer, I contributed to the system’s architecture, user experience design, and service management modules, ensuring secure and scalable integration across NHIC’s national platforms.",
    logoImage: null,
  },
  {
    id: "6",
    company: "nphies Object Identifier (OID) Registry",
    position: "National Health Information Center (NHIC)",
    description:
      "The nphies Object Identifier (OID) Registry is a national platform developed to automatically issue and manage unique Object Identifiers (OIDs) for all participants in Saudi Arabia’s healthcare ecosystem. Fully aligned with HL7 and NHIC standards, the registry ensures that every healthcare entity, system, and device receives a globally recognized identifier to enable secure and standardized health information exchange. As the System Designer and Engineer, I built the registry architecture, established integration with nphies, and implemented automated OID issuance workflows — eliminating manual validation, improving data consistency, and enhancing nationwide interoperability.",
    logoImage: null,
  },
];

const educationEntries: EducationEntry[] = [
  {
    id: "2",
    institution: "Edinburgh Napier University",
    degree: "Master of Business Administration (MBA)",
    fieldOfStudy: "IT Strategy and Governance",
    description:
      "Pursuing an MBA with a specialization in IT Strategy and Governance, focusing on aligning technology initiatives with business objectives, digital transformation, and leadership in large-scale enterprise programs. The program emphasizes strategic planning, organizational performance, and innovation management within digital ecosystems.",
    logoImage: "/logoEN.png",
  },
  {
    id: "1",
    institution: "Prince Sultan University",
    degree: "B.Sc. in Software Engineering",
    fieldOfStudy: "Software Engineering",
    description:
      "Graduated with Excellence Scholarship, focusing on software design, system architecture, and data-driven development. Completed multiple research and applied projects in Artificial Intelligence, Robotics, and Digital Health innovation, earning national recognition for academic and technical achievements.",
    logoImage: "/logoPSU.png",
  },
];

const courses: CourseEntry[] = [
  // --- Healthcare ---
  { id: "c_applied_ai_health", title: "Applied AI in Healthcare" },
  {
    id: "c_hinf_context",
    title: "The Social and Technical Context of Health Informatics",
  },
  { id: "c_hc_quality_gov", title: "Healthcare Data Quality and Governance" },
  { id: "c_hl7_starter", title: "HL7 Starter Module" },

  // --- Architecture & Software Engineering ---
  { id: "c_arch_found", title: "Software Architecture Foundations" },
  {
    id: "c_arch_ddd",
    title: "Software Architecture: Domain-Driven Design (DDD)",
  },

  // --- Integration / APIs ---
  {
    id: "c_apigee",
    title: "Google API Developer Learning Path with Apigee",
    provider: "Google Cloud",
  },

  // --- DevOps & Cloud ---
  { id: "c_az_devops", title: "DevOps Fundamentals", provider: "Microsoft" },
  {
    id: "c_aws_fund",
    title: "AWS Fundamentals Specialization",
    provider: "Coursera / AWS",
  },

  // --- Data & AI ---
  {
    id: "c_dl_spec",
    title: "Deep Learning Specialization",
    provider: "DeepLearning.AI",
  },
  {
    id: "c_genai_path",
    title: "Google Generative AI Learning Path",
    provider: "Google Cloud",
  },

  // --- Analytics / BI ---
  {
    id: "c_powerbi",
    title: "Microsoft Power BI Desktop for Business Intelligence",
    provider: "Microsoft",
  },

  // --- UX / Design ---
  { id: "c_ux_essentials", title: "User Experience Design Essentials" },
];

const certificates: CertificateEntry[] = [
  {
    id: "cert0",
    title: "Google Cloud Certified Generative AI Leader",
    issuer: "Google Cloud",
    date: "2025",
  },
  {
    id: "cert1",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2022",
  },
  {
    id: "cert2",
    title: "Applied AI for Healthcare - Developer",
    issuer: "King Faisal Specialized Hospital and Research Center",
    date: "2022",
  },
  {
    id: "cert3",
    title: "ITIL v4 Foundation",
    issuer: "Axelos Best Practices",
    date: "2020",
  },
];

const skills: Skill[] = [
  // Software Enginnering
  {
    skillName: "Business / Systems Analysis",
    category: "Software Engineering",
  },
  { skillName: "Solution Architecture", category: "Software Engineering" },
  { skillName: "System Design", category: "Software Engineering" },
  { skillName: "Domain Driven Design", category: "Software Engineering" },
  { skillName: "Software Modelling", category: "Software Engineering" },
  { skillName: "Systems Integration", category: "Software Engineering" },
  { skillName: "Full-Stack Development", category: "Software Engineering" },
  {
    skillName: "Software Process Management",
    category: "Software Engineering",
  },

  {
    skillName: "Quality Assurance & Testing",
    category: "Software Engineering",
  },

  // Development
  { skillName: "React", category: "Development" },
  { skillName: "Next", category: "Development" },
  { skillName: ".NET", category: "Development" },
  { skillName: "JavaScript", category: "Development" },
  { skillName: "TypeScript", category: "Development" },
  { skillName: "C#", category: "Development" },
  { skillName: "Python", category: "Development" },
  { skillName: "SQL", category: "Development" },
  { skillName: "NoSQL", category: "Development" },
  { skillName: "Git", category: "Development" },
  { skillName: "CI/CD Pipeline", category: "Development" },
  { skillName: "Microservices", category: "Development" },
  { skillName: "Containerization", category: "Development" },
  { skillName: "API Development", category: "Development" },
  { skillName: "API Documentation", category: "Development" },

  // Business and Management
  { skillName: "Project Management", category: "Business" },
  { skillName: "Agile Methodologies", category: "Business" },
  { skillName: "Scrum", category: "Business" },
  { skillName: "Operations Management", category: "Business" },
  { skillName: "ITIL Practices", category: "Business" },

  { skillName: "Service Level Agreements", category: "Business" },
  { skillName: "Business Documentation", category: "Business" },

  // Data
  { skillName: "Data Analysis", category: "Data" },
  { skillName: "Dashboard Reporting", category: "Data" },
  { skillName: "Business Intelligence", category: "Data" },
  { skillName: "Data Flow Design", category: "Data" },
  { skillName: "Machine Learning", category: "Data" },
  { skillName: "Predictive Analysis", category: "Data" },

  // Digital Health
  { skillName: "Unified Health Record", category: "Digital Health" },
  { skillName: "HL7 Background", category: "Digital Health" },
  {
    skillName: "IHE Profiles Background",
    category: "Digital Health",
  },
  {
    skillName: "Health Information Exchange (HIE)",
    category: "Digital Health",
  },
  {
    skillName: "Health Information Systems (HIS)",
    category: "Digital Health",
  },

  // Tools and Technologies
  { skillName: "Jira", category: "Tools & Technologies" },
  { skillName: "Azure DevOps", category: "Tools & Technologies" },
  { skillName: "Apigee API Management", category: "Tools & Technologies" },
  { skillName: "Google Cloud Platform", category: "Tools & Technologies" },
  { skillName: "Docker", category: "Tools & Technologies" },
  { skillName: "Elastic", category: "Tools & Technologies" },
];

// Group skills by category
const groupedSkills: Record<string, string[]> = skills.reduce((acc, skill) => {
  const { category, skillName } = skill;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(skillName);
  return acc;
}, {} as Record<string, string[]>);

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailtoLink = `mailto:mohammed.o.abed@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  const pageSize = 5;
  const [coursePage, setCoursePage] = useState(1);
  const totalCoursePages = Math.ceil(courses.length / pageSize);
  const courseSliceStart = (coursePage - 1) * pageSize;
  const currentCourses = courses.slice(
    courseSliceStart,
    courseSliceStart + pageSize
  );

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm Mohammed 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text="Results-driven technology professional committed to advancing digital innovation and improving quality of life through impactful solutions."
              />
            </div>
            {/* <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade> */}
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            Passionate for revolutionizing the Digital Health sector. My journey
            has been driven by a commitment to developing innovative Health IT
            solutions that address complex challenges. With hands-on experience
            in leading national Digital Health projects, I’ve contributed to
            pioneering initiatives in digital health, leading transformative
            solutions across technology and innovation.
            <br />
            <br />
            I’m not just about coding and systems; I’m about making a tangible
            impact. My enthusiasm for technology is matched by my eagerness to
            continuously learn and evolve, ensuring that I stay at the forefront
            of this rapidly changing industry.
          </div>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {experiences.map((company, index) => (
            <BlurFade
              key={company.id}
              delay={BLUR_FADE_DELAY * 6 + index * 0.05}
            >
              <CompanyResumeCard
                logoUrl={company.logoImage?.url ?? ""}
                altText={company.company}
                title={company.company}
                roles={
                  company.roles?.map((role) => ({
                    position: role.position,
                    startDate: role.startDate,
                    endDate: role.endDate,
                    description: Array.isArray(role.description) ? (
                      <ul className="list-disc pl-5">
                        {role.description.map((item, i) => (
                          <li key={i} className="mb-2">
                            {item.point}
                            {item.subpoints && (
                              <ul className="list-[circle] pl-5 mt-1">
                                {item.subpoints.map((subpoint, j) => (
                                  <li key={j} className="mb-1">
                                    {subpoint}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{role.description}</p>
                    ),
                  })) ?? []
                }
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {educationEntries.map((education, id) => (
            <BlurFade
              key={education.id}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                logoUrl={education.logoImage ?? ""}
                altText={education.institution || ""}
                title={education.institution || ""}
                subtitle={education.degree || ""}
                period={
                  education.startDate || education.endDate
                    ? `${education.startDate ?? ""}${
                        education.endDate ? ` - ${education.endDate}` : ""
                      }`
                    : undefined
                }
                description={education.description || ""}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="work-projects">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Projects</h2>
          </BlurFade>
          {workProjects.map((work, index) => (
            <BlurFade key={work.id} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
              <ResumeCard
                logoUrl={work.logoImage ?? ""}
                altText={work.company}
                title={work.company}
                subtitle={work.position}
                description={
                  Array.isArray(work.description) ? (
                    <ul className="list-disc pl-5">
                      {work.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{work.description}</p>
                  )
                }
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="achievements">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Achievements & Awards</h2>
          </BlurFade>

          {/* 3 per row on lg, 2 on sm, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {achievements.map((a, idx) => (
              <BlurFade key={a.id} delay={BLUR_FADE_DELAY * 13 + idx * 0.05}>
                <AchievementCard
                  title={a.title}
                  issuer={a.issuer}
                  date={a.date}
                  description={a.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold">Certificates</h2>
          </BlurFade>
          {certificates.map((cert, index) => (
            <BlurFade key={cert.id} delay={BLUR_FADE_DELAY * 16 + index * 0.05}>
              <CredentialCard
                title={cert.title}
                subtitle={cert.issuer}
                date={cert.date ?? ""}
                description={cert.description}
                icon="certificate"
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="courses">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Courses</h2>
          </BlurFade>
          {currentCourses.map((course, index) => (
            <BlurFade
              key={course.id}
              delay={BLUR_FADE_DELAY * 14 + index * 0.05}
            >
              <CredentialCard
                title={course.title}
                subtitle={course.provider ?? ""}
                date={course.date ?? ""}
                description={course.description}
                icon="course"
              />
            </BlurFade>
          ))}
          {/* Pagination Controls */}
          <div className="mt-2 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setCoursePage((p) => Math.max(1, p - 1))}
              disabled={coursePage === 1}
              aria-label="Previous page"
              className={cn(
                "inline-flex items-center justify-center rounded-md border p-1.5",
                coursePage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-muted"
              )}
            >
              <ChevronLeftIcon className="size-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                setCoursePage((p) => Math.min(totalCoursePages, p + 1))
              }
              disabled={coursePage === totalCoursePages}
              aria-label="Next page"
              className={cn(
                "inline-flex items-center justify-center rounded-md border p-1.5",
                coursePage === totalCoursePages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-muted"
              )}
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          {Object.keys(groupedSkills).map((category, index) => (
            <div key={category} className="flex flex-col gap-y-2">
              <BlurFade delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
                <h3 className="text-lg font-semibold">{category}</h3>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {groupedSkills[category].map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 11 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section id="opensource-projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest software projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve participated in a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites. I&apos;m always looking for new challenges and
                  opportunities to learn and grow.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a message via the form below and
                I&apos;ll respond whenever I can.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name, Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                {/* Row 2: Company, Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                {/* Row 3: Message (Textarea) */}
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
