export const resumeData = {
  personalData: {
    firstName: "Sourav",
    lastName: "Sharma",
    phone: "+91 98123 45678",
    email: "sourav.sharma@email.com",
    jobRole: "Frontend Developer",
    industry: "Information Technology",
    website: "www.souravsharma.dev",
    summary:
      "Frontend developer with 3+ years of experience in building modern, scalable, and user-friendly web applications. Strong expertise in React, Next.js, and performance optimization. Passionate about delivering pixel-perfect UI and enhancing user experience.",
    languages: "English, Hindi",
    address: "Gurgaon, India",
    experienceyear: 3,
  },

  education: [
    {
      degreeName: "Bachelor of Technology",
      course: "Computer Science Engineering",
      instituteName: "National Institute of Technology, Kurukshetra",
      university: "NIT Kurukshetra",
      currentlyPursuing: false,
      fromDate: "2016",
      toDate: "2020",
      gradeType: "CGPA" as "CGPA" | "Percentage",
      cgpa: 8.2,
      percentage: 0,
    },
    {
      degreeName: "Senior Secondary",
      course: "Science (PCM)",
      instituteName: "Delhi Public School",
      university: "CBSE Board",
      currentlyPursuing: false,
      fromDate: "2014",
      toDate: "2016",
      gradeType: "Percentage",
      cgpa: 0,
      percentage: 87,
    },
  ],

  workExperience: [
    {
      companyName: "Infosys Ltd",
      jobTitle: "Frontend Developer",
      employmentType: "Full-time",
      currentCompany: true,
      fromDate: "Feb 2022",
      toDate: "",
      aboutWork: `• Developed and maintained React & Next.js applications with high performance.
• Integrated REST APIs and optimized UI for speed and accessibility.
• Collaborated with backend and design teams to implement features.`,
    },
    {
      companyName: "HCL Technologies",
      jobTitle: "Frontend Developer",
      employmentType: "Full-time",
      currentCompany: false,
      fromDate: "Aug 2020",
      toDate: "Jan 2022",
      aboutWork: `• Built responsive dashboards and landing pages with React, TailwindCSS.
• Enhanced SEO performance and improved Lighthouse scores by 25%.
• Worked in Agile environment, contributing to sprint planning and daily scrums.`,
    },
    {
      companyName: "Internshala",
      jobTitle: "Web Development Intern",
      employmentType: "Internship",
      currentCompany: false,
      fromDate: "Jan 2020",
      toDate: "Jun 2020",
      aboutWork: `• Assisted in frontend development tasks with HTML, CSS, JavaScript.
• Learned Git version control and real-world project workflows.
• Contributed to small UI feature enhancements.`,
    },
  ],

  technicalSkills: {
    skills: [
      { skill: "React", proficiency: 85 },
      { skill: "Next.js", proficiency: 80 },
      { skill: "TailwindCSS", proficiency: 75 },
      { skill: "JavaScript", proficiency: 90 },
      { skill: "TypeScript", proficiency: 70 },
      { skill: "Redux", proficiency: 75 },
      { skill: "Git & GitHub", proficiency: 80 },
    ],
    projects: [
      {
        title: "Portfolio Website",
        description:
          "Created a personal portfolio using Next.js and TailwindCSS showcasing projects, blogs, and contact form with form validation.",
      },
      {
        title: "Job Portal Platform",
        description:
          "Built a job portal with authentication, job listings, and real-time chat using React, Node.js, Express, and Socket.io.",
      },
      {
        title: "E-commerce Store",
        description:
          "Developed a scalable e-commerce application with product filters, shopping cart, and payment integration using React, Redux, and Stripe.",
      },
    ],
  },
};


export interface PersonalData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  jobRole: string;
  industry: string;
  website: string;
  summary: string;
  languages: string;
  address: string;
  experienceyear: number;
}
export type GradeType = "CGPA" | "Percentage";

export interface Education {
  degreeName: string;
  course: string;
  instituteName: string;
  university: string;
  currentlyPursuing: boolean;
  fromDate: string;
  toDate: string;
  gradeType: GradeType;
  cgpa: number;
  percentage: number;
}

export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Freelance";

export interface WorkExperience {
  companyName: string;
  jobTitle: string;
  employmentType: EmploymentType;
  currentCompany: boolean;
  fromDate: string;
  toDate: string;
  aboutWork: string;
}

export interface Skill {
  skill: string;
  proficiency: number; // out of 100
}

export interface Project {
  title: string;
  description: string;
}

export interface TechnicalSkills {
  skills: Skill[];
  projects: Project[];
}

export interface ResumeData {
  personalData: PersonalData;
  education: Education[];
  workExperience: WorkExperience[];
  technicalSkills: TechnicalSkills;
}
