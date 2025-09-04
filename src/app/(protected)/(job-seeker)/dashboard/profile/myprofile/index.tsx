"use client";
import React, { useState } from "react";
import {
    ProfileInfo,
    PersonalInfo,
    EducationDetails,
    WorkExperienceDetails,
    SocialMediaProfile,
    ContactInfo
} from '../forms';

import ActiveIndicator from "@/components/inputComponent/ActiveIndicator";

const tabs = [
  "Personal Info",
  "Profile Info",
  "Education Details",
  "Work Experience Details",
  "Social Media Profile",
  "Contact Info",
  "CV Manager"
];

const MyProfilePage = () => {
  const [activeForm, setActiveForm] = useState(1);
  const renderScreen = () => {
    switch (activeForm) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <ProfileInfo />;
      case 3:
        return <EducationDetails />;
      case 4:
        return <WorkExperienceDetails />;
      case 5:
        return <SocialMediaProfile />;
      case 6:
        return <ContactInfo />;
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
    {renderScreen()}
    </>
  );
};

export default MyProfilePage;
