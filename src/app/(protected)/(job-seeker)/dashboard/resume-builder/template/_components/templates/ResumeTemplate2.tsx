import React from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope, // Mail
  FaPhoneAlt, // Phone
  FaMapMarkerAlt, // MapPin
  FaGlobe, // Globe
  FaCalendarAlt, // Calendar
  FaBuilding, // Building2
  FaGraduationCap, // GraduationCap
  FaCode, // Code2
  FaFolderOpen, // FolderOpen
} from "react-icons/fa";
import ProgressBar from "@/components/ui/ProgressBar";
import { resumeData } from "./resumedata";
type ResumeDataType = typeof resumeData;
type EducationType = typeof resumeData.education[number];
type WorkExperienceType = typeof resumeData.workExperience[number];
type SkillType = typeof resumeData.technicalSkills.skills[number];
type ProjectType = typeof resumeData.technicalSkills.projects[number];

interface ResumeTemplate2Props {
  widthPercent?: number;
  data?: ResumeDataType;
}

interface FormData {
  [key: string]: number;
}
 

const ResumeTemplate2: React.FC<ResumeTemplate2Props> = ({
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

  // Initialize form with skill proficiency values
  const defaultValues: FormData = {};
  skills.forEach((skill: SkillType) => {
    const skillKey = skill.skill.toLowerCase().replace(/[^a-z0-9]/g, "");
    defaultValues[skillKey] = skill.proficiency;
  });

  const { watch } = useForm<FormData>({
    defaultValues,
  });

  const formValues = watch();
  return (
    <div  className="w-full max-w-[210mm] mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* A4 Container with fixed height and scroll */}
      <div id="resume"
        className="w-full bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        style={{
          height: "297mm",
          maxHeight: "100vh",
        }}
      >
        <div className="!p-8 space-y-6">
          {/* Header Section */}
          <header className="text-center !mb-3 !pb-1 border-b-2 border-gray-100">
            <div className="!mb-1">
              <h1
                className="font-bold text-gray-900 "
                style={{ fontSize: fontSize(2.5), lineHeight: 1 }}
              >
                {personal?.firstName} {personal?.lastName}
              </h1>
              <p
                className="text-red-600 font-semibold"
                style={{ fontSize: fontSize(1.2) }}
              >
                {personal?.jobRole}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <FaEnvelope size={10} />
                <span style={{ fontSize: fontSize(0.85), lineHeight: 1 }}>
                  {personal?.email}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaPhoneAlt size={10} />
                <span style={{ fontSize: fontSize(0.85), lineHeight: 1 }}>
                  {personal?.phone}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt size={10} />
                <span style={{ fontSize: fontSize(0.85), lineHeight: 1 }}>
                  {personal?.address}
                </span>
              </div>
              {personal?.website && (
                <div className="flex items-center gap-1">
                  <FaGlobe size={10} />
                  <a
                    href={`https://${personal?.website}`}
                    style={{ fontSize: fontSize(0.85) }}
                  >
                    {personal?.website}
                  </a>
                </div>
              )}
            </div>
          </header>

          {/* Summary Section */}
          {personal?.summary && (
            <section className="!mb-6">
              <h2
                className="font-bold text-gray-900 !mb-3 flex items-center gap-2"
                style={{ fontSize: fontSize(1.3) }}
              >
                <div className="w-1 h-6 bg-[var(--primary-color)] rounded-full"></div>
                Professional Summary
              </h2>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ fontSize: fontSize(0.9), lineHeight: 1.6 }}
              >
                {personal?.summary}
              </p>
            </section>
          )}

          {/* Work Experience Section */}
          {workExperience?.length > 0 && (
            <section className="!mb-6">
              <h2
                className="font-bold text-gray-900 !mb-2 flex items-center gap-2"
                style={{ fontSize: fontSize(1.3) }}
              >
                <div className="w-1 h-6 bg-[var(--primary-color)] rounded-full"></div>
                <FaBuilding size={14} />
                Work Experience
              </h2>
              <div className="space-y-4">
                {workExperience?.map((exp: WorkExperienceType, idx: number) => (
                  <div
                    key={idx}
                    className="!pl-4 border-l-2 !mb-2 border-gray-200 relative"
                  >
                    <div className="absolute -left-[4.7px] top-0 w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
                    <div className="!mb-2 flex items-start justify-between">
                      <div>
                        <h3
                          className="font-semibold text-gray-900"
                          style={{ fontSize: fontSize(1.1) }}
                        >
                          {exp?.jobTitle}
                        </h3>
                        <p
                          className="text-red-600 font-medium"
                          style={{ fontSize: fontSize(0.95), lineHeight: 1.5 }}
                        >
                          {exp?.companyName}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <FaCalendarAlt size={10} />
                        <span style={{ fontSize: fontSize(0.8) }}>
                          {exp?.fromDate} –{" "}
                          {exp?.currentCompany ? "Present" : exp?.toDate}
                        </span>
                        <span
                          className="!ml-2 bg-gray-100 text-gray-700 !px-2 !py-1 rounded-full text-xs"
                          style={{ fontSize: fontSize(0.7) }}
                        >
                          {exp?.employmentType}
                        </span>
                      </div>
                    </div>
                    <div
                      className="text-gray-700 whitespace-pre-line"
                      style={{ fontSize: fontSize(0.85), lineHeight: 1.5 }}
                    >
                      {exp?.aboutWork}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {education?.length > 0 && (
            <section className="!mb-6">
              <h2
                className="font-bold text-gray-900 !mb-3 flex items-center gap-2"
                style={{ fontSize: fontSize(1.3) }}
              >
                <div className="w-1 h-6 bg-[var(--primary-color)] rounded-full"></div>
                <FaGraduationCap size={14} />
                Education
              </h2>
              <div className="space-y-4">
                {education?.map((edu: EducationType, idx: number) => (
                  <div
                    key={idx}
                    className="!pl-4 border-l-2 border-gray-200 !mb-2 relative"
                  >
                    <div className="absolute -left-[4.7px] top-0 w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
                    <h3
                      className="font-semibold text-gray-900"
                      style={{ fontSize: fontSize(1.1) }}
                    >
                      {edu?.degreeName} in {edu?.course}
                    </h3>
                    <p
                      className="text-red-600 font-medium"
                      style={{ fontSize: fontSize(0.95), lineHeight: 1.5 }}
                    >
                      {edu?.instituteName}
                    </p>
                    <p
                      className="text-gray-600"
                      style={{ fontSize: fontSize(0.85) }}
                    >
                      {edu?.university}
                    </p>
                    <div className="flex items-center gap-4 !mt-1">
                      <div className="flex items-center gap-1 text-gray-500">
                        <FaCalendarAlt size={10} />
                        <span style={{ fontSize: fontSize(0.8) }}>
                          {edu?.fromDate} –{" "}
                          {edu?.currentlyPursuing ? "Present" : edu?.toDate}
                        </span>
                      </div>
                      <span
                        className="bg-green-100 text-green-700 !px-2 !py-1 rounded-full"
                        style={{ fontSize: fontSize(0.7) }}
                      >
                        {edu?.gradeType}:{" "}
                        {edu?.gradeType === "CGPA"
                          ? edu?.cgpa
                          : edu?.percentage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Skills Section with Custom Sliders */}
          {skills?.length > 0 && (
            <section className="!mb-6">
              <h2
                className="font-bold text-gray-900 !mb-4 flex items-center gap-2"
                style={{ fontSize: fontSize(1.3) }}
              >
                <div className="w-1 h-6 bg-[var(--primary-color)] rounded-full"></div>
                <FaCode size={14} />
                Technical Skills
              </h2>
              <div className="space-y-2 grid grid-cols-3 gap-2">
                {skills?.map((skill: SkillType, idx: number) => {
                  const skillKey = skill.skill
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "");
                  return (
                    <div key={idx}>
                      <div className="flex justify-between items-center !mt-1">
                        <span
                          className="text-gray-600 font-medium"
                          style={{ fontSize: fontSize(0.9) }}
                        >
                          {skill.skill}
                        </span>
                        <span
                          className="text-red-600 font-semibold"
                          style={{ fontSize: fontSize(0.85) }}
                        >
                          {formValues[skillKey] || skill.proficiency}%
                        </span>
                      </div>
                      <ProgressBar percentage={skill.proficiency} height={6} />
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {projects?.length > 0 && (
            <section className="!mb-6">
              <h2
                className="font-bold text-gray-900 !mb-2 flex items-center gap-2"
                style={{ fontSize: fontSize(1.3) }}
              >
                <div className="w-1 h-6 bg-[var(--primary-color)] rounded-full"></div>
                <FaFolderOpen size={14} />
                Key Projects
              </h2>
              <div className="!space-y-2">
                {projects?.map((project: ProjectType, idx: number) => (
                  <div
                    key={idx}
                    className="!pl-4 border-l-2 border-gray-200 relative"
                  >
                    <div className="absolute -left-[4.7px] top-0 w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
                    <h3
                      className="font-semibold text-gray-900 !mb-2"
                      style={{ fontSize: fontSize(1.1) }}
                    >
                      {project?.title}
                    </h3>
                    <p
                      className="text-gray-700"
                      style={{ fontSize: fontSize(0.85), lineHeight: 1.5 }}
                    >
                      {project?.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Additional Information */}
          <section className="!mb-6">
            <h2
              className="font-bold text-gray-900 !mb-4 flex items-center gap-2"
              style={{ fontSize: fontSize(1.3) }}
            >
              <div className="w-1 h-6 bg-[var(--primary-color)] rounded-full"></div>
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3
                  className="font-semibold text-gray-800 !mb-2"
                  style={{ fontSize: fontSize(1) }}
                >
                  Languages
                </h3>
                <p
                  className="text-gray-700"
                  style={{ fontSize: fontSize(0.85) }}
                >
                  {personal?.languages}
                </p>
              </div>
              <div>
                <h3
                  className="font-semibold text-gray-800 !mb-2"
                  style={{ fontSize: fontSize(1) }}
                >
                  Experience
                </h3>
                <p
                  className="text-gray-700"
                  style={{ fontSize: fontSize(0.85) }}
                >
                  {personal?.experienceyear}+ years in {personal?.industry}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate2;
