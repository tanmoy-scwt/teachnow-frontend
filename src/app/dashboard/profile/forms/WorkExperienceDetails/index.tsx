"use client"
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import CheckboxFieldComponent from "@/components/inputComponent/CheckboxFieldComponent";
import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";
import SectionContent from "@/components/ui/SectionContent";
import FormButton from "@/components/inputComponent/FormButton";

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
  workExperiences: yup
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
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(workExperienceSchema),
    defaultValues: {
      workExperiences: [workExperienceFieldObject],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "workExperiences",
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col !mt-5 gap-6">
          <InputFieldComponent
            name={`workExperiences.${index}.companyName`}
            control={control}
            label="Company Name"
            placeholder="Type Here"
            error={errors.workExperiences?.[index]?.companyName?.message}
          />

          <FormSelectDropdown
            name={`workExperiences.${index}.jobTitle`}
            control={control}
            label="Job Title"
            options={jobTitleOptions}
            error={errors.workExperiences?.[index]?.jobTitle?.message}
          />

          <FormSelectDropdown
            name={`workExperiences.${index}.employmentType`}
            control={control}
            label="Type of Employment"
            options={employmentTypeOptions}
            error={errors.workExperiences?.[index]?.employmentType?.message}
          />

          <CheckboxFieldComponent
            name={`workExperiences.${index}.currentCompany`}
            control={control}
            label="Current Company"
            error={errors.workExperiences?.[index]?.currentCompany?.message}
            classname="mt-2"
          />

          <InputFieldComponent
            name={`workExperiences.${index}.fromDate`}
            control={control}
            label="From Date"
            placeholder="Choose Date"
            type="date"
            error={errors.workExperiences?.[index]?.fromDate?.message}
          />

          {!watch(`workExperiences.${index}.currentCompany`) && (
            <InputFieldComponent
              name={`workExperiences.${index}.toDate`}
              control={control}
              label="To Date"
              placeholder="Choose Date"
              type="date"
              error={errors.workExperiences?.[index]?.toDate?.message}
            />
          )}

          <InputFieldComponent
            name={`workExperiences.${index}.aboutWork`}
            control={control}
            label="About the Work Experience"
            placeholder="Type Here"
            error={errors.workExperiences?.[index]?.aboutWork?.message}
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
    </SectionContent>
  );
};

export default WorkExperienceDetails;
