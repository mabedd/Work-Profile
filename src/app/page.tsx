"use client";
import Link from "next/link";
import Markdown from "react-markdown";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const experiences = [
  {
    id: "1",
    company: "National Health Information Center (NHIC)",
    position: "Software Engineer",
    startDate: "2021-08",
    endDate: "2022-03",
    description: [
      {
        point:
          "Involving in the successful onboarding of healthcare facilities with the National Health Unified Record (nphies):",
        subpoints: [
          "Coordinating with healthcare facilities to ensure alignment with NHIC Core Registry and regulations.",
          "Actively contributing to various technical activities providing insights and ensuring project strategy alignment.",
        ],
      },
      {
        point:
          "Leading the technical management and direction of the NHIC Core Registry System:",
        subpoints: [
          "Participating in the seamless integration of health organizations with CRS across the sector.",
          "Integrating the system with new data sources such as MOI, making the system more valuable for consumers",
        ],
      },
      {
        point:
          "Designed and Developed Object Identifier (OID) Registry system for issuing and managing OIDs:",
        subpoints: [
          "Successfully automated the process of issuing OIDs in a reliable way.",
          "Integrated the system with the Unified Health Record (nphies) directly for OID verification and with Seha Platform for OID display.",
        ],
      },
      {
        point:
          "Successfully automated the process of clinical codes mapping to standardized code sets with the use of AI and NLP",
      },
      {
        point:
          "Participated in the build of a DevOps mindset among NHIC team for process optimization and automation:",
        subpoints: [
          "Facilitated cross-team collaboration by introducing and advocating for DevOps practices.",
          "Implemented a CI/CD pipeline for deployment automation.",
        ],
      },
    ],
    logoImage: null,
  },
  {
    id: "2",
    company: "National Health Information Center (NHIC)",
    position: "Coop Trainee",
    startDate: "2021-08",
    endDate: "2022-03",
    description: [
      {
        point:
          "Built National Health Accounts system for Revenue Cycle Management among healthcare providers.",
      },
      {
        point:
          "Conducted a pilot study about the use of Artificial Intelligence in radiology for enhancing the Breast Cancer diagnosis.",
      },
    ],
    logoImage: null,
  },
  {
    id: "3",
    company: "Research and Initiatives Center - Prince Sultan University",
    position: "Undergraduate Research Assistant",
    startDate: "2020-09",
    endDate: "2021-07",
    description: [
      {
        point:
          "Worked on several research projects in Computer Vision and Machine Learning:",
        subpoints: [
          "Facilitated cross-team collaboration by introducing and advocating for DevOps practices.",
          "Implemented a CI/CD pipeline for deployment automation.",
        ],
      },
      {
        point:
          "Conducted a pilot study about the use of Artificial Intelligence in radiology for enhancing the Breast Cancer diagnosis.",
        subpoints: [
          "Facilitated cross-team collaboration by introducing and advocating for DevOps practices.",
          "Implemented a CI/CD pipeline for deployment automation.",
        ],
      },
    ],
    logoImage: null,
  },
  {
    id: "1",
    company: "Smart Methods",
    position: "Summer Intern",
    startDate: "2021-08",
    endDate: "2022-03",
    description:
      "Built National Health Accounts system for Revenue Cycle Management among healthcare providers. Conducted a pilot study about the use of Artificial Intelligence in radiology for enhancing the Breast Cancer diagnosis.",
    logoImage: null,
  },
];

const workProjects = [
  {
    id: "1",
    company: "National Unified Health Record (nphies)",
    position: "Software Engineer",
    startDate: "2021-08",
    endDate: "2022-03",
    description: [
      "Built National Health Accounts system for Revenue Cycle Management among healthcare providers.",
      "Conducted a pilot study about the use of Artificial Intelligence in radiology for enhancing the Breast Cancer diagnosis.",
    ],
    logoImage: null,
  },
  {
    id: "1",
    company: "National Health Core Registry",
    position: "Coop Trainee",
    startDate: "2021-08",
    endDate: "2022-03",
    description:
      "Built National Health Accounts system for Revenue Cycle Management among healthcare providers. Conducted a pilot study about the use of Artificial Intelligence in radiology for enhancing the Breast Cancer diagnosis.",
    logoImage: null,
  },
  {
    id: "2",
    company: "HL7 Object Identifier (OID) Registry",
    position: "Undergraduate Research Assistant",
    startDate: "2020-09",
    endDate: "2021-07",
    description:
      "Worked on several research projects in Computer Vision and Machine Learning. Developed Object Detection, Face Recognition, and Image Classification applications.",
    logoImage: null,
  },
];

const educationEntries = [
  {
    id: "1",
    institution: "Prince Sultan University",
    degree: "B.Sc. in Software Engineering",
    fieldOfStudy: "Software Engineering",
    startDate: "2017-08-06",
    endDate: "2021-05-27",
    description: "Focused on Software Development, AI, and Health Informatics.",
  },
];

// Software Enginnering
// Development
// Digital Health
// Business
// Data
const skills = [
  // Software Enginnering
  {
    skillName: "Business / Systems Analysis",
    category: "Software Engineering",
  },
  { skillName: "Solution Architecture", category: "Software Engineering" },
  { skillName: "Software Modelling", category: "Software Engineering" },
  {
    skillName: "Quality Assurance & Testing",
    category: "Software Engineering",
  },
  {
    skillName: "Business / Systems Analysis",
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

  // Business and Management
  { skillName: "Project Management", category: "Business" },
  { skillName: "Agile Methodologies", category: "Business" },
  { skillName: "Scrum", category: "Business" },
  { skillName: "Service Level Agreements", category: "Business" },
  { skillName: "Business Requirements Documet", category: "Business" },

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
    skillName: "Health Information Exchange (HIE)",
    category: "Digital Health",
  },

  // Tools and Technologies
  { skillName: "Jira", category: "Tools & Technologies" },
  { skillName: "Azure DevOps", category: "Tools & Technologies" },
  { skillName: "Apigee API Management", category: "Tools & Technologies" },
];

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  const { category, skillName } = skill;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(skillName);
  return acc;
}, {});

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const message = form.message.value;
    const mailtoLink = `mailto:mohammed.o.abed@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

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
                text={DATA.description}
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
            in leading national Digital Health projects, I’ve had the privilege
            of contributing to groundbreaking advancements in Software
            Development, AI, and Health Informatics.
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
          {experiences.map((work, index) => (
            <BlurFade key={work.id} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
              <ResumeCard
                logoUrl={work.logoImage?.url ?? ""}
                altText={work.company ?? ""}
                title={work.company ?? ""}
                subtitle={work.position ?? ""}
                period={`${work.startDate} - ${work.endDate}`}
                description={
                  Array.isArray(work.description) ? (
                    <ul className="list-disc pl-5">
                      {work.description.map((item, i) => (
                        <li key={i} className="mb-2">
                          {" "}
                          {/* Add margin-bottom for spacing */}
                          {item.point}
                          {item.subpoints && (
                            <ul className="list-[circle] pl-5 mt-1">
                              {" "}
                              {/* Add margin-top for spacing */}
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
                    <p>{work.description}</p>
                  )
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
                logoUrl=""
                altText={education.institution || ""}
                title={education.institution || ""}
                subtitle={education.degree || ""}
                period={`${education.startDate} - ${education.endDate}`}
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
                logoUrl={work.logoImage?.url ?? ""}
                altText={work.company ?? ""}
                title={work.company ?? ""}
                subtitle={work.position ?? ""}
                period={`${work.startDate} - ${work.endDate}`}
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

      <section id="opensource-projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest open source projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
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
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
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
                Want to chat? Just shoot me a message via the form below or{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on Twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
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
                    rows="4"
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
