// components/ResumeTemplate.tsx
import React from "react";

interface ResumeTemplateProps {
  widthPercent?: number; // e.g., 50 for 50% width
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ widthPercent = 100 }) => {
  // Scale factor: smaller width -> smaller fonts (min 0.7, max 1)
  const scale = Math.max(0.6, widthPercent / 100);

  const fontSize = (base: number) => `${base * scale}rem`; // dynamic font sizing

  return (
    <div className="w-full h-[100vh] bg-white shadow-xl !p-[5%] flex flex-col gap-[4%] text-gray-900">
      <header className="text-center border-b !pb-[2%]">
        <h1 className="font-bold" style={{ fontSize: fontSize(2) }}>
          John Doe
        </h1>
        <p className="text-gray-600" style={{ fontSize: fontSize(0.95) }}>
          Frontend Developer | johndoe@email.com | +91 12345 67890
        </p>
        <div className="flex justify-center gap-[2%] mt-[1%]">
          {["LinkedIn", "GitHub", "Portfolio"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-blue-500"
              style={{ fontSize: fontSize(0.85) }}
            >
              {link}
            </a>
          ))}
        </div>
      </header>
      <section>
        <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
          Summary
        </h2>
        <p style={{ fontSize: fontSize(0.85), lineHeight: 1.5 }}>
          Passionate frontend developer with 3+ years of experience building
          modern, responsive, and scalable web applications using React,
          Next.js, and TailwindCSS. Skilled in UI/UX design, problem solving,
          and collaborating with cross-functional teams.
        </p>
      </section>
      <section>
        <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
          Work Experience
        </h2>

        {[
          {
            title: "Frontend Developer – ABC Corp",
            duration: "Jan 2022 – Present",
            points: [
              "Built reusable React components with TailwindCSS.",
              "Improved site performance by 35% and reduced load time.",
              "Worked on responsive web designs and cross-browser compatibility.",
            ],
          },
          {
            title: "Junior Developer – XYZ Ltd",
            duration: "Jul 2020 – Dec 2021",
            points: [
              "Developed responsive landing pages and components.",
              "Collaborated with designers to implement modern UI/UX features.",
              "Optimized code for better performance and maintainability.",
            ],
          },
        ].map((exp, idx) => (
          <div key={idx} className="mb-[2%]">
            <h3 className="font-bold" style={{ fontSize: fontSize(1) }}>
              {exp.title}
            </h3>
            <p className="text-gray-600" style={{ fontSize: fontSize(0.85) }}>
              {exp.duration}
            </p>
            <ul style={{ fontSize: fontSize(0.85), lineHeight: 1.5 }} className="list-disc list-inside">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
          Education
        </h2>
        <div>
          <h3 className="font-bold" style={{ fontSize: fontSize(1) }}>
            B.Tech in Computer Science – XYZ University
          </h3>
          <p className="text-gray-600" style={{ fontSize: fontSize(0.85) }}>
            2016 – 2020
          </p>
        </div>
      </section>
      <section className="flex gap-4 flex-wrap">
      <div>
        <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
          Skills
        </h2>
        <div className="flex flex-wrap gap-[2%]">
          {["React", "Next.js", "TailwindCSS", "JavaScript", "TypeScript", "Git", "Figma"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 rounded-full px-[2%] py-[0.5%]"
                style={{ fontSize: fontSize(0.75) }}
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Contact */}
      <div>
        <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
          Contact
        </h2>
        {["Email: johndoe@email.com", "Phone: +91 12345 67890", "Website: www.johndoe.com"].map(
          (info, idx) => (
            <p key={idx} style={{ fontSize: fontSize(0.85) }}>
              {info}
            </p>
          )
        )}
      </div>
      </section>
    </div>
  );
};

export default ResumeTemplate;
