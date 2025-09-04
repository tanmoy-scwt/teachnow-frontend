"use client"
import React from "react";
import { useForm, useFieldArray, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import CheckboxFieldComponent from "@/components/inputComponent/CheckboxFieldComponent";
import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";
import SectionContent from "@/components/ui/SectionContent";
import FormButton from "@/components/inputComponent/FormButton";
import { ResumeBuilderSchemaType } from "../../../resume-builder/template/_components/formConfig/ResumeFormValidationSchema";

const employmentTypeOptions = [
  { value: "full_time", label: "Full-time" },
  { value: "part_time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
  { value: "freelance", label: "Freelance" },
];

const jobTitleOptions = [
  { value: "developer", label: "Developer" },
  { value: "designer", label: "Designer" },
  { value: "manager", label: "Manager" },
  { value: "team_lead", label: "Team Lead" },
  { value: "qa_engineer", label: "QA Engineer" },
];

const workExperienceSchema = yup.object({
  workexperience_details: yup
    .array()
    .of(
      yup.object({
        companyName: yup.string().required("Company Name is required"),
        jobTitle: yup.string().required("Job Title is required"),
        employmentType: yup.string().required("Type of Employment is required"),
        currentCompany: yup.boolean(),
        fromDate: yup.string().required("From Date is required"),
        toDate: yup.string().when("currentCompany", {
          is: false,
          then: (schema) => schema.required("To Date is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
        aboutWork: yup.string().required("About Work Experience is required"),
      })
    )
    .required("At least one work experience is required")
    .min(1, "Add at least one work experience"),
});

type FormValues = yup.InferType<typeof workExperienceSchema>;

const workExperienceFieldObject = {
  companyName: "",
  jobTitle: "",
  employmentType: "",
  currentCompany: false,
  fromDate: "",
  toDate: "",
  aboutWork: "",
};

const WorkExperienceDetails = () => {
  const {control , watch , formState: { errors } } = useFormContext<ResumeBuilderSchemaType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "workexperience_details",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
     <SectionContent
      variant="h2"
      title="Work Experience Details"
      useCustomCSS={true}
      isContainerActive={false}
    >
      <div>
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col !mt-5 gap-6">
          <InputFieldComponent
            name={`workexperience_details.${index}.companyName`}
            control={control}
            label="Company Name"
            placeholder="Type Here"
            error={errors.workexperience_details?.[index]?.companyName?.message}
          />

          <FormSelectDropdown
            name={`workexperience_details.${index}.jobTitle`}
            control={control}
            label="Job Title"
            options={jobTitleOptions}
            error={errors.workexperience_details?.[index]?.jobTitle?.message}
          />

          <FormSelectDropdown
            name={`workexperience_details.${index}.employmentType`}
            control={control}
            label="Type of Employment"
            options={employmentTypeOptions}
            error={errors.workexperience_details?.[index]?.employmentType?.message}
          />

          <CheckboxFieldComponent
            name={`workexperience_details.${index}.currentCompany`}
            control={control}
            label="Current Company"
            error={errors.workexperience_details?.[index]?.currentCompany?.message}
            classname="mt-2"
          />

          <InputFieldComponent
            name={`workexperience_details.${index}.fromDate`}
            control={control}
            label="From Date"
            placeholder="Choose Date"
            type="date"
            error={errors.workexperience_details?.[index]?.fromDate?.message}
          />

          {!watch(`workexperience_details.${index}.currentCompany`) && (
            <InputFieldComponent
              name={`workexperience_details.${index}.toDate`}
              control={control}
              label="To Date"
              placeholder="Choose Date"
              type="date"
              error={errors.workexperience_details?.[index]?.toDate?.message}
            />
          )}

          <InputFieldComponent
            name={`workexperience_details.${index}.aboutWork`}
            control={control}
            label="About the Work Experience"
            placeholder="Type Here"
            error={errors.workexperience_details?.[index]?.aboutWork?.message}
          />

          <button
            type="button"
            onClick={() => remove(index)}
            className="self-start mt-2 text-base text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append(workExperienceFieldObject)}
        className="text-base !my-4 text-[var(--primary-color)] hover:text-[var(--primary-color-dark)]"
      >
        + Add More
      </button>
    </div>
    </SectionContent>
  );
};

export default WorkExperienceDetails;
