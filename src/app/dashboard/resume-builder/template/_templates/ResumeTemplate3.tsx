import ProgressBar from "@/components/ui/ProgressBar";
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
  FaUser, // User
} from "react-icons/fa";
import { resumeData } from "./resumedata";
import Image from "next/image";

type ResumeDataType = typeof resumeData;
type EducationType = typeof resumeData.education[number];
type WorkExperienceType = typeof resumeData.workExperience[number];
type SkillType = typeof resumeData.technicalSkills.skills[number];
type ProjectType = typeof resumeData.technicalSkills.projects[number];
interface ResumeTemplate3Props {
  widthPercent?: number;
  data?: ResumeDataType;
}

interface FormData {
  [key: string]: number;
}

const ResumeTemplate3: React.FC<ResumeTemplate3Props> = ({
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
    <div className="w-full max-w-[210mm] mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* A4 Container with fixed height and scroll */}
      <div
        id="resume"
        className="w-full bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        style={{
          height: "297mm",
          maxHeight: "100vh",
        }}
      >
        <div className="!p-8 space-y-6">
          {/* Header Section with Profile Photo */}
          <header className="!mb-6 !pb-4 border-b-2 border-gray-100">
            <div className="flex items-start gap-6 !mb-4">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Profile"
                    className="absolute w-full h-full object-cover"
                    fill
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="flex-1">
                <h1
                  className="font-bold text-gray-900 !mb-1"
                  style={{ fontSize: fontSize(2.8), lineHeight: 1.1 }}
                >
                  {personal?.firstName} {personal?.lastName}
                </h1>
                <p
                  className="text-red-600 font-semibold !mb-3"
                  style={{ fontSize: fontSize(1.3) }}
                >
                  {personal?.jobRole}
                </p>
                
                {/* Contact Information */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaEnvelope size={12} className="text-red-500" />
                    <span style={{ fontSize: fontSize(0.9) }}>
                      {personal?.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt size={12} className="text-red-500" />
                    <span style={{ fontSize: fontSize(0.9) }}>
                      {personal?.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt size={12} className="text-red-500" />
                    <span style={{ fontSize: fontSize(0.9) }}>
                      {personal?.address}
                    </span>
                  </div>
                  {personal?.website && (
                    <div className="flex items-center gap-2">
                      <FaGlobe size={12} className="text-red-500" />
                      <a
                        href={`https://${personal?.website}`}
                        className="text-blue-600 hover:underline"
                        style={{ fontSize: fontSize(0.9) }}
                      >
                        {personal?.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Professional Summary Section */}
          {personal?.summary && (
            <section className="!mb-6">
              <h2
                className="font-bold text-gray-900 !mb-3 flex items-center gap-2"
                style={{ fontSize: fontSize(1.4) }}
              >
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                <FaUser size={16} className="text-red-500" />
                Professional Summary
              </h2>
              <div className="bg-gray-50 !p-4 rounded-lg border-l-4 border-red-500">
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontSize: fontSize(0.95), lineHeight: 1.7 }}
                >
                  {personal?.summary}
                </p>
              </div>
            </section>
          )}

          {/* Work Experience Section */}
          {workExperience?.length > 0 && (
            <section className="!mb-6">
              <h2
                className="font-bold text-gray-900 !mb-4 flex items-center gap-2"
                style={{ fontSize: fontSize(1.4) }}
              >
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                <FaBuilding size={16} className="text-red-500" />
                Professional Experience
              </h2>
              <div className="space-y-5">
                {workExperience?.map((exp: WorkExperienceType, idx: number) => (
                  <div
                    key={idx}
                    className="!pl-6 border-l-3 border-red-200 relative bg-gray-50 !p-4 rounded-r-lg"
                  >
                    <div className="absolute -left-[6px] top-4 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                    
                    <div className="flex items-start justify-between !mb-3">
                      <div>
                        <h3
                          className="font-bold text-gray-900"
                          style={{ fontSize: fontSize(1.2) }}
                        >
                          {exp?.jobTitle}
                        </h3>
                        <p
                          className="text-red-600 font-semibold"
                          style={{ fontSize: fontSize(1.05) }}
                        >
                          {exp?.companyName}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-gray-500 justify-end">
                          <FaCalendarAlt size={12} />
                          <span style={{ fontSize: fontSize(0.85) }}>
                            {exp?.fromDate} –{" "}
                            {exp?.currentCompany ? "Present" : exp?.toDate}
                          </span>
                        </div>
                        <span
                          className="!mt-1 inline-block bg-red-100 text-red-700 !px-3 !py-1 rounded-full font-medium"
                          style={{ fontSize: fontSize(0.75) }}
                        >
                          {exp?.employmentType}
                        </span>
                      </div>
                    </div>
                    
                    <div
                      className="text-gray-700 whitespace-pre-line"
                      style={{ fontSize: fontSize(0.9), lineHeight: 1.6 }}
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
                className="font-bold text-gray-900 !mb-4 flex items-center gap-2"
                style={{ fontSize: fontSize(1.4) }}
              >
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                <FaGraduationCap size={16} className="text-red-500" />
                Education
              </h2>
              <div className="space-y-4">
                {education?.map((edu: EducationType, idx: number) => (
                  <div
                    key={idx}
                    className="!pl-6 border-l-3 border-blue-200 relative bg-blue-50 !p-4 rounded-r-lg"
                  >
                    <div className="absolute -left-[6px] top-4 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                    
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3
                          className="font-bold text-gray-900"
                          style={{ fontSize: fontSize(1.15) }}
                        >
                          {edu?.degreeName} in {edu?.course}
                        </h3>
                        <p
                          className="text-blue-600 font-semibold"
                          style={{ fontSize: fontSize(1), lineHeight: 1.4 }}
                        >
                          {edu?.instituteName}
                        </p>
                        <p
                          className="text-gray-600"
                          style={{ fontSize: fontSize(0.9) }}
                        >
                          {edu?.university}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-gray-500 justify-end !mb-1">
                          <FaCalendarAlt size={12} />
                          <span style={{ fontSize: fontSize(0.85) }}>
                            {edu?.fromDate} –{" "}
                            {edu?.currentlyPursuing ? "Present" : edu?.toDate}
                          </span>
                        </div>
                        <span
                          className="bg-green-100 text-green-700 !px-3 !py-1 rounded-full font-medium"
                          style={{ fontSize: fontSize(0.75) }}
                        >
                          {edu?.gradeType}:{" "}
                          {edu?.gradeType === "CGPA"
                            ? edu?.cgpa
                            : `${edu?.percentage}%`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Skills Section */}
          {skills?.length > 0 && (
            <section className="!mb-6">
              <h2
                className="font-bold text-gray-900 !mb-4 flex items-center gap-2"
                style={{ fontSize: fontSize(1.4) }}
              >
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                <FaCode size={16} className="text-red-500" />
                Technical Skills
              </h2>
              <div className="bg-gray-50 !p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  {skills?.map((skill: SkillType, idx: number) => {
                    const skillKey = skill.skill
                      .toLowerCase()
                      .replace(/[^a-z0-9]/g, "");
                    return (
                      <div key={idx} className="!mb-3">
                        <div className="flex justify-between items-center !mb-2">
                          <span
                            className="text-gray-700 font-semibold"
                            style={{ fontSize: fontSize(0.95) }}
                          >
                            {skill.skill}
                          </span>
                          <span
                            className="text-red-600 font-bold !px-2 !py-1 bg-red-100 rounded-full"
                            style={{ fontSize: fontSize(0.8) }}
                          >
                            {formValues[skillKey] || skill.proficiency}%
                          </span>
                        </div>
                        <ProgressBar 
                          percentage={skill.proficiency} 
                          height={8}
                        //   color="#ef4444"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Projects Section */}
          {projects?.length > 0 && (
            <section className="!mb-6">
              <h2
                className="font-bold text-gray-900 !mb-4 flex items-center gap-2"
                style={{ fontSize: fontSize(1.4) }}
              >
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                <FaFolderOpen size={16} className="text-red-500" />
                Key Projects
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {projects?.map((project: ProjectType, idx: number) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-gray-50 to-white !p-4 rounded-lg border-l-4 border-red-500 shadow-sm"
                  >
                    <h3
                      className="font-bold text-gray-900 !mb-2"
                      style={{ fontSize: fontSize(1.1) }}
                    >
                      {project?.title}
                    </h3>
                    <p
                      className="text-gray-700"
                      style={{ fontSize: fontSize(0.9), lineHeight: 1.6 }}
                    >
                      {project?.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Additional Information Section */}
          <section className="!mb-6">
            <h2
              className="font-bold text-gray-900 !mb-4 flex items-center gap-2"
              style={{ fontSize: fontSize(1.4) }}
            >
              <div className="w-1 h-6 bg-red-500 rounded-full"></div>
              Additional Information
            </h2>
            <div className="bg-gray-50 !p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3
                    className="font-bold text-gray-800 !mb-2"
                    style={{ fontSize: fontSize(1.05) }}
                  >
                    Languages
                  </h3>
                  <p
                    className="text-gray-700 bg-white !px-3 !py-2 rounded-lg"
                    style={{ fontSize: fontSize(0.9) }}
                  >
                    {personal?.languages}
                  </p>
                </div>
                <div className="text-center">
                  <h3
                    className="font-bold text-gray-800 !mb-2"
                    style={{ fontSize: fontSize(1.05) }}
                  >
                    Experience
                  </h3>
                  <p
                    className="text-gray-700 bg-white !px-3 !py-2 rounded-lg"
                    style={{ fontSize: fontSize(0.9) }}
                  >
                    {personal?.experienceyear}+ years
                  </p>
                </div>
                <div className="text-center">
                  <h3
                    className="font-bold text-gray-800 !mb-2"
                    style={{ fontSize: fontSize(1.05) }}
                  >
                    Industry
                  </h3>
                  <p
                    className="text-gray-700 bg-white !px-3 !py-2 rounded-lg"
                    style={{ fontSize: fontSize(0.9) }}
                  >
                    {personal?.industry}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate3;