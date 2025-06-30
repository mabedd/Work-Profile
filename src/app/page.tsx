'use client'
import Link from 'next/link'
import Markdown from 'react-markdown'

import { HackathonCard } from '@/components/hackathon-card'
import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import { ProjectCard } from '@/components/project-card'
import { ResumeCard } from '@/components/resume-card'
import { CompanyResumeCard } from '@/components/company-resumr-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { DATA } from '@/data/resume'

// Role inside a company
interface Role {
  id: string
  position: string
  startDate: string
  endDate: string
  description:
    | Array<{
        point: string
        subpoints?: string[]
      }>
    | string
}

// Company with possible multiple roles
interface Experience {
  id: string
  company: string
  logoImage?: {
    url?: string
  } | null
  // Only required if no roles array
  startDate?: string
  endDate?: string
  description?:
    | string
    | {
        point: string
        subpoints?: string[]
      }[]
  // Optional for single-role companies
  roles?: {
    id: string
    position: string
    startDate: string
    endDate: string
    description:
      | string
      | {
          point: string
          subpoints?: string[]
        }[]
  }[]
}

// Education entry
interface EducationEntry {
  id: string
  institution: string
  degree: string
  fieldOfStudy: string
  startDate: string
  endDate: string
  description: string
}

// Skill entry
interface Skill {
  skillName: string
  category: string
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'National Health Information Center (NHIC)',
    logoImage: { url: '/logoNHIC.png' },
    roles: [
      {
        id: 'r1',
        position: 'Lead Software Engineer',
        startDate: '2022-04',
        endDate: 'Present',
        description: [
          {
            point: 'Leading the Software Development Team.',
            subpoints: [
              'Lead a cross-functional software development team focused on building solutions and services.',
              'Foster a collaborative and agile environment, encouraging continuous learning and innovation.',
              'Ensure technical excellence, high code quality, and effective task management across the team.',
            ],
          },
          {
            point:
              'Technically Supervising and Supporting the Implementation of National NHIC Projects.',
            subpoints: [
              'Collaborating closely with involved teams to translate requirements into technical specifications.',
              'Actively participating in technical planning, system integration, and deployment cycles.',
              'Overseeing technical validations, system configurations, and system testing during project rollouts.',
              'Ensured compliance with security, scalability, and performance benchmarks.',
            ],
          },
          {
            point:
              'Participation in the National Unified Health Record (nphies) Execution and Operation.',
            subpoints: [
              'Established a standardized approach for modalities data exchange with nphies, ensuring interoperability standards alignment.',
              'Participated in the inclusion of visitors patient records, ensuring broader clinical data coverage.',
            ],
          },
          {
            point: 'Enhancing National Health Core Registry Services.',
            subpoints: [
              'Lead initiatives to integrate new data sources into NHCR to expand coverage and improve data.',
              'Optimize integrations with consumers to enhance service delivery and quality.',
              'Build initiatives to establish optimized integration with national health solutions.',
            ],
          },
          {
            point:
              'Contributing to the Health IT Certification Program (Mutamad).',
            subpoints: [
              'Serve as a Product Owner for the Mutamad project, managing vision, backlog, and features.',
              'Play a key role in designing, building, and refining national certification standards.',
              'Ensure alignment with international frameworks such as HL7, ISO, and IHE profiles.',
              'Work closely with regulatory bodies and technical teams to ensure the standards are supportive.',
            ],
          },
        ],
      },
      {
        id: 'r2',
        position: 'Software Engineer',
        startDate: '2021-08',
        endDate: '2022-03',
        description: [
          {
            point:
              'Participated in Healthcare Organizations Onboarding with National Unified Health Record (nphies).',
            subpoints: [
              'Managed the integration with National Health Core Registry which is a core prerequisite.',
              'Involved in overviewing and managing onboarding activities in an Agile manner.',
              'Contributed to key technical activities ensuring alignment with project goals and requirements.',
            ],
          },
          {
            point: 'Contributed to the Build of NHIC eServices Portal.',
            subpoints: [
              'Implemented Services Catalog allowing users to explore, request, and track onboarding to services.',
              'Supported development of a centralized Single Sign-On ensuring unified access across all services.',
              'Participated in the setup of an integrated Developer Portal to facilitate API integration.',
              'Facilitated API access request workflows and tracking to ensure efficient consumer integrations.',
            ],
          },
          {
            point: 'Led the Technical Activities of the Core Registry System.',
            subpoints: [
              'Participated in the successful integration of healthcare consumers into the system.',
              'Continuously improved services to meet evolving consumer needs and industry standards.',
              'Engaged in system enhancements, including data flows and technical architecture.',
            ],
          },
          {
            point:
              'Designed and Developed Object Identifier (OID) Registry system for issuing and managing OIDs for nphies Clinical Services program.',
            subpoints: [
              'Successfully fasted the process of issuing OIDs in a reliable way.',
              'Designed the workflow in a way that meets HL7 and NHIC standards.',
              'Integrated the system with involved parties to ensure better system utilization.',
              'Established an effective workflow for OIDs through the direct integration with nphies.',
            ],
          },
          {
            point:
              'Proposed and implemented an AI-based clinical codes automapping solution.',
            subpoints: [
              'Used NLP algorithms to predict the closest standard code set based on code descriptions.',
              'Conducted a successful pilot with ICD10 codes, demonstrating the potential for the proposed solution.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '1',
    company: 'National Health Information Center (NHIC)',
    logoImage: { url: '/logoNHIC.png' },
    roles: [
      {
        id: 'r3',
        position: 'Coop Trainee',
        startDate: '2021-01',
        endDate: '2021-07',
        description: [
          {
            point:
              'Designed and developed National Health Accounts system for managing revenue cycles among healthcare entities, ensuring seamless integration with existing registries and services.',
          },
          {
            point:
              ' Participated in a pilot study on AI in healthcare by exploring the use of AI solution for early breast cancer detection via CT scan screenings.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    company: 'Research and Initiatives Center - Prince Sultan University',
    logoImage: { url: '/logoPSU.png' },
    roles: [
      {
        id: 'r1',
        position: 'Undergraduate Research Assistant',
        startDate: '2020-09',
        endDate: '2021-07',
        description: [
          {
            point:
              'Participated in AI-driven solutions development across diverse fields including robotics, safety compliance, and identity recognition.',
            subpoints: [
              'Utilized cutting-edge technologies like TensorFlow, YOLO, and neural networks.',
            ],
          },
          {
            point:
              '1st Place Winner at KAUST Challenge: Ideas and Solutions for Hajj and Umrah.',
            subpoints: [
              'Designed an AI surveillance and statistics system incorporating Object Detection, Object Classification, and Age Estimation.',
              'Utilized TensorFlow and YOLO for implementation.',
              'Participated in data collection and labeling from various sources.',
            ],
          },
          {
            point:
              'Designed and developed Object Detection Model for safety in construction sites.',
            subpoints: [
              'Built a YOLO-based model for safety measurements and insurance.',
              'Collected and labeled over 4,000 images of personnel at construction sites.',
              'Achieved 98% test accuracy for safety compliance detection.',
            ],
          },
          {
            point:
              'Developed and maintained robotics integration control panel applications using HTML, CSS, and PHP.',
          },
          {
            point:
              'Designed user-friendly interfaces for real-time control and monitoring of robotic systems.',
          },
          {
            point:
              'Integrated backend logic with robotics hardware for seamless communication and automation.',
          },
          {
            point:
              'Optimized application performance to ensure smooth operation and responsiveness in robotics control.',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    company: 'Smart Methods',
    logoImage: { url: '/logoSmartmethods.png' },
    roles: [
      {
        id: 'r1',
        position: 'Summer Intern',
        startDate: '2021-06',
        endDate: '2021-08',
        description: [
          {
            point:
              'Built National Health Accounts system for Revenue Cycle Management among healthcare providers.',
          },
          {
            point:
              'Conducted a pilot study about the use of Artificial Intelligence in radiology for enhancing the Breast Cancer diagnosis.',
          },
        ],
      },
    ],
  },
]

const workProjects = [
  {
    id: '0',
    company: 'National Unified Health Record (nphies)',
    position: 'National Health Information Center (NHIC)',
    description:
      'National Unified Health Record (nphies) is a centralized, patient-centric platform designed to unify health records across all integrated healthcare providers in the Kingdom. Built upon global best practices and aligned with national and international health data standards, nphies ensures that each patient has a single, longitudinal health record accessible across public and private sectors. By enabling real-time, secure, and standardized health information exchange, nphies enhances care coordination, reduces duplication, improves clinical outcomes, and supports informed decision-making for both care providers and policymakers. It is a key enabler of Saudi Arabia’s digital health transformation and a cornerstone for achieving true health system interoperability.',

    logoImage: null,
  },
  {
    id: '1',
    company: 'National Health Core Registry',
    position: 'National Health Information Center (NHIC)',
    description:
      'National Health Core Registry serves as a foundational pillar for the digital health ecosystem, acting as the single source of truth for core health entities. It comprises three integrated registries—Patients, Practitioners, and Organizations—each containing verified demographic and identification data. Every entity is assigned a unique national identifier to ensure consistency, accuracy, and traceability across systems. The registry is relied upon by all healthcare providers, digital platforms, and regulatory bodies, enabling unified identity management, seamless data exchange, and trustworthy interoperability across the sector. It underpins critical health systems such as nphies, Sehaty, MOH National Systems, and data reporting.',
    logoImage: null,
  },
  {
    id: '2',
    company: 'Medication Registry',
    position: 'National Health Information Center (NHIC)',
    description:
      'Medication Registry is a national platform designed to consolidate all medications available across healthcare sectors into a unified, authoritative registry. It integrates data from various sources, regulatory bodies, and international code systems to provide a standardized view of medications, including their identifiers, ingredients, strengths, forms, manufacturers, and regulatory statuses. Each medication entry is assigned a unique Medication Registry ID (MRID) to serve as a single source of truth and facilitate accurate referencing. By establishing a unified medication coding system, the registry aims to enhance interoperability across electronic health systems, support safe prescribing and dispensing, improve pharmacovigilance, and enable consistent medication reporting and analytics across providers, payers, and regulators.',
    logoImage: null,
  },
  {
    id: '3',
    company: 'Saudi Health Data Dictionary',
    position: 'National Health Information Center (NHIC)',
    description:
      'Saudi Health Data Dictionary (SHDD) is the national reference for standardized health terminology, designed to unify the definitions and usage of clinical and administrative data across the healthcare ecosystem. It serves as the authoritative source for common health terms, codes, and units of measure, and standardized classifications for diagnoses, procedures, and services. By ensuring consistent meaning and interpretation of health data, SHDD enhances semantic interoperability, supports accurate reporting and analytics, and promotes alignment with national and international standards. It is an essential tool for achieving data quality, regulatory compliance, and seamless integration across digital health systems in Saudi Arabia.',
    logoImage: null,
  },
  {
    id: '4',
    company: 'nphies Object Identifier (OID) Registry',
    position: 'National Health Information Center (NHIC)',
    description:
      'nphies Object Identifier (OID) Registry is a national registry designed to automatically issue and manage unique Object Identifiers (OIDs) for participants in the healthcare ecosystem. Aligned with HL7 and NHIC standards, the registry ensures each healthcare entity, systems, and devices receives a globally recognized identifier to support secure and standardized health information exchange (HIE). The OID Registry plays a critical role in enabling national data exchange use cases, particularly within nphies, by ensuring consistent identity referencing across systems. In addition, the registry incorporates a standardized model for all modalities, supporting interoperability for systems like RIS/PACS. Direct integration with platforms such as nphies ensures a seamless and automated OID issuance process, reducing manual effort and improving data consistency.',
    logoImage: null,
  },
]

const educationEntries: EducationEntry[] = [
  {
    id: '1',
    institution: 'Prince Sultan University',
    degree: 'B.Sc. in Software Engineering',
    fieldOfStudy: 'Software Engineering',
    startDate: '2017-08-06',
    endDate: '2021-05-27',
    description: 'Focused on Software Development, AI, and Health Informatics.',
  },
]

// Software Enginnering
// Development
// Digital Health
// Business
// Data
const skills: Skill[] = [
  // Software Enginnering
  {
    skillName: 'Business / Systems Analysis',
    category: 'Software Engineering',
  },
  { skillName: 'Solution Architecture', category: 'Software Engineering' },
  { skillName: 'Software Modelling', category: 'Software Engineering' },
  {
    skillName: 'Quality Assurance & Testing',
    category: 'Software Engineering',
  },
  {
    skillName: 'Business / Systems Analysis',
    category: 'Software Engineering',
  },

  // Development
  { skillName: 'React', category: 'Development' },
  { skillName: 'Next', category: 'Development' },
  { skillName: '.NET', category: 'Development' },
  { skillName: 'JavaScript', category: 'Development' },
  { skillName: 'TypeScript', category: 'Development' },
  { skillName: 'C#', category: 'Development' },
  { skillName: 'Python', category: 'Development' },
  { skillName: 'SQL', category: 'Development' },
  { skillName: 'NoSQL', category: 'Development' },
  { skillName: 'Git', category: 'Development' },
  { skillName: 'CI/CD Pipeline', category: 'Development' },

  // Business and Management
  { skillName: 'Project Management', category: 'Business' },
  { skillName: 'Agile Methodologies', category: 'Business' },
  { skillName: 'Scrum', category: 'Business' },
  { skillName: 'Service Level Agreements', category: 'Business' },
  { skillName: 'Business Requirements Documet', category: 'Business' },

  // Data
  { skillName: 'Data Analysis', category: 'Data' },
  { skillName: 'Dashboard Reporting', category: 'Data' },
  { skillName: 'Business Intelligence', category: 'Data' },
  { skillName: 'Data Flow Design', category: 'Data' },
  { skillName: 'Machine Learning', category: 'Data' },
  { skillName: 'Predictive Analysis', category: 'Data' },

  // Digital Health
  { skillName: 'Unified Health Record', category: 'Digital Health' },
  { skillName: 'HL7 Background', category: 'Digital Health' },
  {
    skillName: 'Health Information Exchange (HIE)',
    category: 'Digital Health',
  },

  // Tools and Technologies
  { skillName: 'Jira', category: 'Tools & Technologies' },
  { skillName: 'Azure DevOps', category: 'Tools & Technologies' },
  { skillName: 'Apigee API Management', category: 'Tools & Technologies' },
]

// Group skills by category
const groupedSkills: Record<string, string[]> = skills.reduce((acc, skill) => {
  const { category, skillName } = skill
  if (!acc[category]) {
    acc[category] = []
  }
  acc[category].push(skillName)
  return acc
}, {} as Record<string, string[]>)

const BLUR_FADE_DELAY = 0.04

export default async function Page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    const subject = (form.elements.namedItem('subject') as HTMLInputElement)
      .value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)
      .value

    const mailtoLink = `mailto:mohammed.o.abed@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

  return (
    <main className='flex flex-col min-h-[100dvh] space-y-10'>
      <section id='hero'>
        <div className='mx-auto w-full max-w-2xl space-y-8'>
          <div className='gap-2 flex justify-between'>
            <div className='flex-col flex flex-1 space-y-1.5'>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
                yOffset={8}
                text={`Hi, I'm Mohammed 👋`}
              />
              <BlurFadeText
                className='max-w-[600px] md:text-xl'
                delay={BLUR_FADE_DELAY}
                text='Enthusiastic Software Engineer ! Dedicated to using technology to improve the quality of life. Passionate about building innovative solutions that make a difference.'
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

      <section id='about'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className='text-xl font-bold'>About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'>
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

      <section id='work'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className='text-xl font-bold'>Work Experience</h2>
          </BlurFade>
          {experiences.map((company, index) => (
            <BlurFade
              key={company.id}
              delay={BLUR_FADE_DELAY * 6 + index * 0.05}
            >
              <CompanyResumeCard
                logoUrl={company.logoImage?.url ?? ''}
                altText={company.company}
                title={company.company}
                roles={
                  company.roles?.map((role) => ({
                    position: role.position,
                    startDate: role.startDate,
                    endDate: role.endDate,
                    description: Array.isArray(role.description) ? (
                      <ul className='list-disc pl-5'>
                        {role.description.map((item, i) => (
                          <li key={i} className='mb-2'>
                            {item.point}
                            {item.subpoints && (
                              <ul className='list-[circle] pl-5 mt-1'>
                                {item.subpoints.map((subpoint, j) => (
                                  <li key={j} className='mb-1'>
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

      <section id='education'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className='text-xl font-bold'>Education</h2>
          </BlurFade>
          {educationEntries.map((education, id) => (
            <BlurFade
              key={education.id}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                logoUrl=''
                altText={education.institution || ''}
                title={education.institution || ''}
                subtitle={education.degree || ''}
                period={`${education.startDate} - ${education.endDate}`}
                description={education.description || ''}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id='work-projects'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className='text-xl font-bold'>Work Projects</h2>
          </BlurFade>
          {workProjects.map((work, index) => (
            <BlurFade key={work.id} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
              <ResumeCard
                logoUrl={work.logoImage?.url ?? ''}
                altText={work.company}
                title={work.company}
                subtitle={work.position}
                description={
                  Array.isArray(work.description) ? (
                    <ul className='list-disc pl-5'>
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

      <section id='skills'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className='text-xl font-bold'>Skills</h2>
          </BlurFade>
          {Object.keys(groupedSkills).map((category, index) => (
            <div key={category} className='flex flex-col gap-y-2'>
              <BlurFade delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
                <h3 className='text-lg font-semibold'>{category}</h3>
              </BlurFade>
              <div className='flex flex-wrap gap-1'>
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

      <section id='opensource-projects'>
        <div className='space-y-12 w-full py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                  My Projects
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Check out my latest software projects
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  I&apos;ve participated in a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites. I&apos;m always looking for new challenges and
                  opportunities to learn and grow.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto'>
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
      </section>
      <section id='contact'>
        <div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                Contact
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Get in Touch
              </h2>
              <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Want to chat? Just shoot me a message via the form below and
                I&apos;ll respond whenever I can.
              </p>
              <form onSubmit={handleSubmit} className='space-y-4'>
                {/* Row 1: Name, Email */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    className='w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    className='w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </div>
                {/* Row 2: Company, Subject */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <input
                    type='text'
                    name='company'
                    placeholder='Your Company'
                    className='w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                  <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    className='w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </div>
                {/* Row 3: Message (Textarea) */}
                <div>
                  <textarea
                    name='message'
                    rows={4}
                    placeholder='Your Message'
                    className='w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type='submit'
                  className='px-4 py-2 text-sm text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  Send Message
                </button>
              </form>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
