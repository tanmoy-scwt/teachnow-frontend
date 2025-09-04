// components/ResumeTemplate.tsx
import React from "react";
import { resumeData } from "./resumedata";

// type PersonalDataType = typeof resumeData.personalData;
// type TechnicalSkillsType = typeof resumeData.technicalSkills;
type ResumeDataType = typeof resumeData;
type EducationType = typeof resumeData.education[number];
type WorkExperienceType = typeof resumeData.workExperience[number];
type SkillType = typeof resumeData.technicalSkills.skills[number];
type ProjectType = typeof resumeData.technicalSkills.projects[number];

interface ResumeTemplateProps {
  widthPercent?: number;
  data?: ResumeDataType;
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({
  widthPercent = 100,
  data,
}) => {
  const scale = Math.max(0.6, widthPercent / 100);
  const fontSize = (base: number) => `${base * scale}rem`;

  const personal = data?.personalData;
  const education = data?.education || [];
  const workExperience = data?.workExperience || [];
  const skills = data?.technicalSkills?.skills || [];
  const projects = data?.technicalSkills?.projects || [];

  return (
    <div className="w-full max-w-[800px] md:max-w-[600px] sm:max-w-[400px] aspect-[210/297] bg-white shadow-xl rounded-lg !p-4 flex flex-col gap-4 text-gray-900 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent mx-auto">
      {/* Header */}
      <header className="text-center border-b !pb-[2%]">
        <h1 className="font-bold" style={{ fontSize: fontSize(2) }}>
          {personal?.firstName} {personal?.lastName}
        </h1>
        <p className="text-gray-600" style={{ fontSize: fontSize(0.95) }}>
          {personal?.jobRole} | {personal?.email} | {personal?.phone}
        </p>
        <p className="text-gray-600" style={{ fontSize: fontSize(0.85) }}>
          {personal?.address}
        </p>
        <div className="flex justify-center gap-[2%] !mt-[1%]">
          {personal?.website && (
            <a
              href={personal?.website}
              className="text-blue-500"
              style={{ fontSize: fontSize(0.85) }}
            >
              {personal?.website}
            </a>
          )}
        </div>
      </header>

      {/* Summary */}
      {personal?.summary && (
        <section>
          <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
            Summary
          </h2>
          <p style={{ fontSize: fontSize(0.85), lineHeight: 1.5 }}>
            {personal?.summary}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {workExperience?.length > 0 && (
        <section>
          <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
            Work Experience
          </h2>
          {workExperience?.map((exp : WorkExperienceType , idx: number) => (
            <div key={idx} className="!mb-[2%]">
              <h3 className="font-bold" style={{ fontSize: fontSize(1) }}>
                {exp?.jobTitle} – {exp?.companyName}
              </h3>
              <p className="text-gray-600" style={{ fontSize: fontSize(0.85) }}>
                {exp?.fromDate} – {exp?.currentCompany ? "Present" : exp?.toDate}
              </p>
              <p
                style={{ fontSize: fontSize(0.85), lineHeight: 1.5 }}
                className="whitespace-pre-line"
              >
                {exp?.aboutWork}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <section>
          <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
            Education
          </h2>
          {education?.map((edu: EducationType, idx: number) => (
            <div key={idx} className="!mb-[2%]">
              <h3 className="font-bold" style={{ fontSize: fontSize(1) }}>
                {edu?.degreeName} in {edu?.course}
              </h3>
              <p className="text-gray-600" style={{ fontSize: fontSize(0.85) }}>
                {edu?.instituteName}, {edu?.university}
              </p>
              <p className="text-gray-600" style={{ fontSize: fontSize(0.85) }}>
                {edu?.fromDate} – {edu?.currentlyPursuing ? "Present" : edu?.toDate}
              </p>
              <p className="text-gray-600" style={{ fontSize: fontSize(0.85) }}>
                {edu?.gradeType}:{" "}
                {edu?.gradeType === "CGPA" ? edu?.cgpa : edu?.percentage}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <section>
          <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-[2%]">
            {skills?.map((s: SkillType, idx: number) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 rounded-full !px-[2%] !py-[0.5%]"
                style={{ fontSize: fontSize(0.75) }}
              >
                {s?.skill} ({s?.proficiency}%)
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <section>
          <h2 className="font-semibold !mb-[1%]" style={{ fontSize: fontSize(1.2) }}>
            Projects
          </h2>
          {projects?.map((p: ProjectType, idx: number) => (
            <div key={idx} className="!mb-[1%]">
              <h3 className="font-bold" style={{ fontSize: fontSize(1) }}>
                {p?.title}
              </h3>
              <p style={{ fontSize: fontSize(0.85) }}>{p?.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ResumeTemplate;
