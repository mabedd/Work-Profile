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
    company: "National Health Information Center (NHIC) - Saudi Health Council",
    position: "Coop Trainee",
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
    company: "National Health Information Center (NHIC) - Saudi Health Council",
    position: "Coop Trainee",
    startDate: "2021-08",
    endDate: "2022-03",
    description:
      "Built National Health Accounts system for Revenue Cycle Management among healthcare providers. Conducted a pilot study about the use of Artificial Intelligence in radiology for enhancing the Breast Cancer diagnosis.",
    logoImage: null,
  },
  {
    id: "2",
    company: "Research and Initiatives Center - Prince Sultan University",
    position: "Undergraduate Research Assistant",
    startDate: "2020-09",
    endDate: "2021-07",
    description:
      "Worked on several research projects in Computer Vision and Machine Learning. Developed Object Detection, Face Recognition, and Image Classification applications.",
    logoImage: null,
  },
  {
    id: "1",
    company: "National Health Information Center (NHIC) - Saudi Health Council",
    position: "Coop Trainee",
    startDate: "2021-08",
    endDate: "2022-03",
    description:
      "Built National Health Accounts system for Revenue Cycle Management among healthcare providers. Conducted a pilot study about the use of Artificial Intelligence in radiology for enhancing the Breast Cancer diagnosis.",
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
  { skillName: "JavaScript", category: "Programming" },
  { skillName: "React", category: "Frontend" },
  { skillName: "Node.js", category: "Backend" },
  { skillName: "TypeScript", category: "Programming" },
  { skillName: "HTML", category: "Frontend" },
  { skillName: "CSS", category: "Frontend" },
  { skillName: "Express.js", category: "Backend" },
  { skillName: "MongoDB", category: "Database" },
  { skillName: "SQL", category: "Database" },
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
            {`I specialize in developing innovative solutions that leverage AI to improve healthcare systems.`}
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

      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Projects</h2>
          </BlurFade>
          {experiences.map((work, index) => (
            <BlurFade key={work.id} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
              <ResumeCard
                logoUrl={work.logoImage?.url ?? ""}
                altText={work.company ?? ""}
                title={work.company ?? ""}
                subtitle={work.position ?? ""}
                period={`${work.startDate} - ${work.endDate}`}
                description={work.description ?? ""}
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
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
