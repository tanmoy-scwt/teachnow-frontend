"use client";
import React, { useMemo, useState } from "react";

import ActiveIndicator from "@/components/inputComponent/ActiveIndicator";
// import {
//   EducationDetails,
//   WorkExperienceDetails,
// } from "@/app/dashboard/profile/forms";
import { PersonalDetails } from "../forms";
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
import { ResumeBuilderType } from "../formConfig/ResumeFormDefaultValues";
import FormButton from "@/components/inputComponent/FormButton";
import ProgressBar from "@/components/ui/ProgressBar";

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
    // case 2:
    //   return <EducationDetails />;
    // case 3:
    //   return <WorkExperienceDetails />;
    // case 4:
    //   return <TechnicalSkills />;
    default:
      return null;
  }
};

const ResumeBuilderClient = () => {
  const [activeForm, setActiveForm] = useState(1);

  const methods = useForm({
    defaultValues: ResumeFormDefaultValues,
    resolver: yupResolver(ResumeFormValidationSchema),
  });

  const { control } = methods;

  // subscribe to all form values
  
  const resumeFormPreviewValues2 = methods.watch();
  const resumeFormPreviewValues = methods.watch("presonal_details");
  const values2 = useWatch({ control });
  
  const progress = useMemo(() => {
    const values = Object.entries(resumeFormPreviewValues);

    let filledCount = 0;
    const totalCount = values.length;

    values.forEach(([key , value]) => {
      console.log(key , "key");
      
      if (Array.isArray(value)) {
        if (value.some((item) => item && item.trim() !== "")) {
          filledCount++;
        }
      } else if (typeof value === "number") {
        if (value > 0) {
          filledCount++;
        }
      } else {
        if (value && String(value).trim() !== "") {
          filledCount++;
        }
      }
    });

    return Math.round((filledCount / totalCount) * 100);
  }, [values2]);

  const onSubmit: SubmitHandler<ResumeBuilderType> = (data) => {
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
            <div className="!mt-6 flex justify-end items-center">
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
            <ProgressBar percentage={+progress} height={8} />
            </div>
            <div className="w-[5%]">
            <p>{progress}%</p>
            </div>
          </div>
          <ResumeTemplate3
            widthPercent={60}
            data={resumeData}
            previewData={resumeFormPreviewValues2}
          />
        </div>
      </div>
    </>
  );
};

export default ResumeBuilderClient;
