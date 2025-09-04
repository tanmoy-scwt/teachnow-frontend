"use client";
import React, { useState } from "react";
import ActiveIndicator from "@/components/inputComponent/ActiveIndicator";
import {
  EducationDetails,
  WorkExperienceDetails,
} from "@/app/(protected)/(job-seeker)/dashboard/profile/forms";
import { PersonalDetails, TechnicalSkills } from "../forms";
import { ResumeTemplate3 } from "../templates";
import { resumeData } from "../templates/resumedata";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";
import {
  ResumeFormDefaultValues,
  ResumeFormValidationSchema,
} from "../formConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import FormButton from "@/components/inputComponent/FormButton";
import ProgressBar from "@/components/ui/ProgressBar";
import { ResumeBuilderSchemaType } from "../formConfig/ResumeFormValidationSchema";

const tabs = [
  "Personal Details",
  "Education Details",
  "Work Experience Details",
  "Technical Skills",
];

const renderScreen = (activeForm: number) => {
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

const ResumeBuilderClient = () => {
  const [activeForm, setActiveForm] = useState(1);

  const methods = useForm<ResumeBuilderSchemaType>({
    defaultValues: ResumeFormDefaultValues as ResumeBuilderSchemaType,
    resolver: yupResolver(ResumeFormValidationSchema),
  });

  const resumeFormPreviewValues = methods.watch();

  const onSubmit: SubmitHandler<ResumeBuilderSchemaType> = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <>
      <ActiveIndicator
        options={tabs}
        activeOption={activeForm}
        setActiveScreen={setActiveForm}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {renderScreen(activeForm)}
            {/* <button type="submit">Hello my name is khan</button> */}
            {/* Submit Button */}
            <div className="!mt-6 flex justify-between items-center">
              <FormButton
                title="back"
                buttonType="button"
                buttonVariant="outlined"
                isSubmitting={false}
                submittingMessage="Saving..."
              />
              <FormButton
                title="next"
                buttonType="submit"
                buttonVariant="filled"
                isSubmitting={false}
                submittingMessage="Saving..."
              />
            </div>
          </form>
        </FormProvider>
        <div className="flex flex-col items-start ">
          <div className="flex w-full items-center gap-5">
            <div className="w-[95%]">
              <ProgressBar percentage={+50} height={8} />
            </div>
            <div className="w-[5%]">
              <p>{0}%</p>
            </div>
          </div>
          <ResumeTemplate3
            widthPercent={60}
            data={resumeData}
            previewData={resumeFormPreviewValues}
          />
        </div>
      </div>
    </>
  );
};

export default ResumeBuilderClient;
