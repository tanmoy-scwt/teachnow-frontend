"use client";
import React, { useState } from "react";

import ActiveIndicator from "@/components/inputComponent/ActiveIndicator";
import PersonalDetails from "../forms/PersonalDetails";
import {
  EducationDetails,
  WorkExperienceDetails,
} from "@/app/dashboard/profile/forms";
import ResumeTemplate from "../../_templates/ResumeTemplate";
// import BackButton from "@/components/inputComponent/BackButton";

const tabs = [
  "Personal Details",
  "Education Details",
  "Work Experience Details",
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
      default:
        return null;
    }
  };
  return (
    <>
      {/* <div className="flex gap-6 items-start"> */}
        {/* <BackButton href="/dashboard/resume-builder" className="" /> */}
        {/* <div className="flex-1"> */}
          <ActiveIndicator
            options={tabs}
            activeOption={activeForm}
            setActiveScreen={setActiveForm}
          />
        {/* </div> */}
      {/* </div> */}
      <div className="grid grid-cols-2 gap-8">
        {renderScreen()}
        <ResumeTemplate widthPercent={50} />
      </div>
    </>
  );
};

export default MyProfilePage;
