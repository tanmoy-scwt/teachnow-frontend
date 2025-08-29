"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";
import {
  ctcNegotiableOptions,
  ctcNegotiableValues,
  diversityInclusionOptions,
  diversityInclusionValues,
  industryOptions,
  industryValues,
  jobLocationOptions,
  jobLocationValues,
  keyFunctionalAreaOptions,
  keyFunctionalAreaValues,
  languagesOptions,
  languagesValues,
  preferredCompanyTypeOptions,
  preferredCompanyTypeValues,
  preferredEmploymentTypeOptions,
  preferredEmploymentTypeValues,
  preferredShiftOptions,
  preferredShiftValues,
  salaryTypeOptions,
  salaryTypeValues,
  skillsOptions,
  skillsValues,
} from "./helper";
import SectionContent from "@/components/ui/SectionContent";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import TextareaFieldComponent from "@/components/inputComponent/TextareaFieldComponent";
import CheckboxFieldComponent from "@/components/inputComponent/CheckboxFieldComponent";

const schema = yup.object().shape({
  preferredTypeOfEmployment: yup
    .mixed<(typeof preferredEmploymentTypeValues)[number]>()
    .oneOf(preferredEmploymentTypeValues, "Invalid employment type")
    .required("Employment Type is required"),
  salaryType: yup
    .mixed<(typeof salaryTypeValues)[number]>()
    .oneOf(salaryTypeValues, "Invalid salary type")
    .required("Salary Type is required"),
  expectedSalary: yup
    .number()
    .typeError("Expected salary must be a number")
    .positive("Expected salary must be positive")
    .required("Expected salary is required"),
  preferredShift: yup
    .mixed<(typeof preferredShiftValues)[number]>()
    .oneOf(preferredShiftValues, "Invalid shift")
    .required("Preferred Shift is required"),
  jobLocation: yup
    .mixed<(typeof jobLocationValues)[number]>()
    .oneOf(jobLocationValues, "Invalid location")
    .required("Job Location is required"),
  industry: yup
    .mixed<(typeof industryValues)[number]>()
    .oneOf(industryValues, "Invalid industry")
    .required("Industry is required"),
  keyFunctionalArea: yup
    .mixed<(typeof keyFunctionalAreaValues)[number]>()
    .oneOf(keyFunctionalAreaValues, "Invalid functional area")
    .required("Key Functional Area is required"),
  preferredCompanyType: yup
    .mixed<(typeof preferredCompanyTypeValues)[number]>()
    .oneOf(preferredCompanyTypeValues, "Invalid company type")
    .required("Preferred Company Type is required"),
  diversityInclusionPreference: yup
    .mixed<(typeof diversityInclusionValues)[number]>()
    .oneOf(diversityInclusionValues, "Invalid preference")
    .required("Diversity & Inclusion Preference is required"),
  expectedCTC: yup
    .number()
    .typeError("Expected CTC must be a number")
    .positive("Expected CTC must be positive")
    .required("Expected CTC is required"),
  notDisclose: yup.boolean().default(false),
  isCTCNegotiable: yup
    .mixed<(typeof ctcNegotiableValues)[number]>()
    .oneOf(ctcNegotiableValues, "Invalid CTC negotiation status")
    .required("CTC Negotiation Status is required"),
  languagesKnown: yup
    .array()
    .of(
      yup
        .mixed<(typeof languagesValues)[number]>()
        .oneOf(languagesValues, "Invalid language")
        .required()
    )
    .min(1, "At least one language must be selected")
    .required("Languages Known is required"),
  skills: yup
    .array()
    .of(
      yup
        .mixed<(typeof skillsValues)[number]>()
        .oneOf(skillsValues, "Invalid skill")
        .required()
    )
    .min(1, "At least one skill must be selected")
    .required("Skills are required"),
  description: yup.string().required("Description is required"),
});

export interface ProfileFormValues {
  preferredTypeOfEmployment: (typeof preferredEmploymentTypeValues)[number];
  salaryType: (typeof salaryTypeValues)[number];
  expectedSalary: number;
  preferredShift: (typeof preferredShiftValues)[number];
  jobLocation: (typeof jobLocationValues)[number];
  industry: (typeof industryValues)[number];
  keyFunctionalArea: (typeof keyFunctionalAreaValues)[number];
  preferredCompanyType: (typeof preferredCompanyTypeValues)[number];
  diversityInclusionPreference: (typeof diversityInclusionValues)[number];
  expectedCTC: number;
  notDisclose: boolean;
  isCTCNegotiable: (typeof ctcNegotiableValues)[number];
  languagesKnown: Array<(typeof languagesValues)[number]>;
  skills: Array<(typeof skillsValues)[number]>;
  description: string;
}
export default function ProfileInfo() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      preferredTypeOfEmployment:
        undefined as unknown as ProfileFormValues["preferredTypeOfEmployment"],
      salaryType: undefined as unknown as ProfileFormValues["salaryType"],
      expectedSalary: 0,
      preferredShift:
        undefined as unknown as ProfileFormValues["preferredShift"],
      industry: undefined as unknown as ProfileFormValues["industry"],
      keyFunctionalArea:
        undefined as unknown as ProfileFormValues["keyFunctionalArea"],
      preferredCompanyType:
        undefined as unknown as ProfileFormValues["preferredCompanyType"],
      diversityInclusionPreference:
        undefined as unknown as ProfileFormValues["diversityInclusionPreference"],
      expectedCTC: 0,
      notDisclose: false,
      isCTCNegotiable:
        undefined as unknown as ProfileFormValues["isCTCNegotiable"],
      languagesKnown: [] as unknown as ProfileFormValues["languagesKnown"],
      skills: [] as unknown as ProfileFormValues["skills"],
      description: "",
    },
  });

  const onSubmit: SubmitHandler<ProfileFormValues> = (
    data: ProfileFormValues
  ) => {
    console.log("Form Data:", data);
  };

  return (
    <SectionContent
      variant="h2"
      title="Job Preferences and Details"
      titleCSS="!text-3xl !font-medium text-[var(--primary-color)] !mb-6"
      isContainerActive={false}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <FormSelectDropdown
            name="preferredTypeOfEmployment"
            control={control}
            label="Preferred Type of Employment"
            options={preferredEmploymentTypeOptions}
            error={errors.preferredTypeOfEmployment?.message}
          />
            <FormSelectDropdown
              name="salaryType"
              control={control}
              label="Salary Type"
              options={salaryTypeOptions}
              error={errors.salaryType?.message}
            />
               <InputFieldComponent
              name="expectedSalary"
              control={control}
              label="Expected Salary"
              type="number"
              placeholder="Enter expected salary"
              error={errors.expectedSalary?.message}
            />
              <FormSelectDropdown
              name="preferredShift"
              control={control}
              label="Preferred Shift"
              options={preferredShiftOptions}
              error={errors.preferredShift?.message}
            />
            <FormSelectDropdown
              name="jobLocation"
              control={control}
              label="Job Location"
              options={jobLocationOptions}
              error={errors.jobLocation?.message}
            />
             <FormSelectDropdown
              name="industry"
              control={control}
              label="Industry"
              options={industryOptions}
              error={errors.industry?.message}
            />
              <FormSelectDropdown
              name="keyFunctionalArea"
              control={control}
              label="Key Functional Area"
              options={keyFunctionalAreaOptions}
              error={errors.keyFunctionalArea?.message}
            />
               <FormSelectDropdown
              name="preferredCompanyType"
              control={control}
              label="Preferred Company Type"
              options={preferredCompanyTypeOptions}
              error={errors.preferredCompanyType?.message}
            />
            <FormSelectDropdown
              name="diversityInclusionPreference"
              control={control}
              label="Diversity & Inclusion Preference"
              options={diversityInclusionOptions}
              error={errors.diversityInclusionPreference?.message}
            />
            <InputFieldComponent
              name="expectedCTC"
              control={control}
              label="Expected CTC"
              type="number"
              placeholder="Enter expected CTC"
              error={errors.expectedCTC?.message}
            />
             
            <div className="col-span-1 lg:col-span-2">
              <CheckboxFieldComponent
                name="notDisclose"
                control={control}
                label="Not disclose"
                error={errors.notDisclose?.message}
                classname="mt-2"
              />
            </div>
             <FormSelectDropdown
              name="isCTCNegotiable"
              control={control}
              label="CTC Negotiation Status"
              options={ctcNegotiableOptions}
              error={errors.isCTCNegotiable?.message}
            />
            <FormSelectDropdown
              name="languagesKnown"
              control={control}
              label="Languages Known"
              options={languagesOptions}
              isMulti={true}
              error={errors.languagesKnown?.message}
            />
              <div className="col-span-1 lg:col-span-2">
              <FormSelectDropdown
                name="skills"
                control={control}
                label="Skills"
                options={skillsOptions}
                isMulti={true}
                error={errors.skills?.message}
              />
            </div>
            <div className="col-span-1 lg:col-span-2">
              <TextareaFieldComponent
                name="description"
                control={control}
                label="Description"
                placeholder="Write your description here..."
                rows={5}
                error={errors.description?.message}
              />
            </div>
        </div>

        {/* Submit Button */}
        <div className="!mt-6">
          <button
            type="submit"
            className="w-full md:w-auto !px-6 !py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Submit2
          </button>
        </div>
      </form>
    </SectionContent>
  );
}
