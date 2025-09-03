"use client";
import React, { useState } from "react";

import ActiveIndicator from "@/components/inputComponent/ActiveIndicator";
import PersonalDetails from "../forms/PersonalDetails";
import {
  EducationDetails,
  WorkExperienceDetails,
} from "@/app/dashboard/profile/forms";
import TechnicalSkills from "../forms/TechnicalSkills";
import { resumeData } from "../../_templates/resumedata";
// import ResumeTemplate2 from "../../_templates/ResumeTemplate2";
// import ResumeTemplate from "../../_templates/ResumeTemplate";
import ResumeTemplate3 from "../../_templates/ResumeTemplate3";

const tabs = [
  "Personal Details",
  "Education Details",
  "Work Experience Details",
  "Technical Skills",
];

const MyProfilePage = () => {
  const [activeForm, setActiveForm] = useState(1);
  const renderScreen = () => {
    switch (activeForm) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <EducationDetails />;
      case 3:
        return <WorkExperienceDetails />;
      case 4:
        return <TechnicalSkills />;
      default:
        return null;
    }
  };
  return (
    <>
      <ActiveIndicator
        options={tabs}
        activeOption={activeForm}
        setActiveScreen={setActiveForm}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderScreen()}
        <div className="flex justify-center items-start ">
          <ResumeTemplate3 widthPercent={60} data={resumeData}/>
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
