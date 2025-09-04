"use client";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import CheckboxFieldComponent from "@/components/inputComponent/CheckboxFieldComponent";
import RadioButtonFieldComponent from "@/components/inputComponent/RadioButtonFieldComponent";
import SectionContent from "@/components/ui/SectionContent";
import { educationFieldObject } from "../../../resume-builder/template/_components/formConfig/ResumeFormDefaultValues";
import { ResumeBuilderSchemaType } from "../../../resume-builder/template/_components/formConfig/ResumeFormValidationSchema";

const educational_details = () => {
  const {control , watch , formState: { errors } } = useFormContext<ResumeBuilderSchemaType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educational_details",
  });

  return (
    <SectionContent
      variant="h2"
      title="Education Details"
      useCustomCSS={true}
      isContainerActive={false}
    >
      <div className="space-y-4">
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="flex !mt-5 flex-col gap-6">
              <InputFieldComponent
                name={`educational_details.${index}.degreeName`}
                control={control}
                label="Degree Name"
                placeholder="Enter Degree Name"
                error={errors.educational_details?.[index]?.degreeName?.message}
              />

              <InputFieldComponent
                name={`educational_details.${index}.course`}
                control={control}
                label="Course"
                placeholder="Enter Course"
                error={errors.educational_details?.[index]?.course?.message}
              />

              <InputFieldComponent
                name={`educational_details.${index}.instituteName`}
                control={control}
                label="Institute Name"
                placeholder="Enter Institute Name"
                error={errors.educational_details?.[index]?.instituteName?.message}
              />

              <InputFieldComponent
                name={`educational_details.${index}.university`}
                control={control}
                label="University"
                placeholder="Enter University"
                error={errors.educational_details?.[index]?.university?.message}
              />

              <CheckboxFieldComponent
                name={`educational_details.${index}.currentlyPursuing`}
                control={control}
                label="Currently Pursuing"
                error={
                  errors.educational_details?.[index]?.currentlyPursuing?.message
                }
                classname="mt-2"
              />

              <InputFieldComponent
                name={`educational_details.${index}.fromDate`}
                control={control}
                label="From Date"
                placeholder="Select From Date"
                error={errors.educational_details?.[index]?.fromDate?.message}
                type="date"
              />

              {!watch(`educational_details.${index}.currentlyPursuing`) && (
                <InputFieldComponent
                  name={`educational_details.${index}.toDate`}
                  control={control}
                  label="To Date"
                  placeholder="Select To Date"
                  error={errors.educational_details?.[index]?.toDate?.message}
                  type="date"
                />
              )}

              <div className="flex gap-6">
                <RadioButtonFieldComponent
                  name={`educational_details.${index}.gradeType`}
                  control={control}
                  label="CGPA"
                  value="CGPA"
                  error={errors.educational_details?.[index]?.gradeType?.message}
                />
                <RadioButtonFieldComponent
                  name={`educational_details.${index}.gradeType`}
                  control={control}
                  label="Percentage"
                  value="Percentage"
                  error={errors.educational_details?.[index]?.gradeType?.message}
                />
              </div>

              <InputFieldComponent
                type="number"
                name={
                  watch(`educational_details.${index}.gradeType`) === "CGPA"
                    ? `educational_details.${index}.cgpa`
                    : `educational_details.${index}.percentage`
                }
                control={control}
                label={
                  watch(`educational_details.${index}.gradeType`) === "CGPA"
                    ? "CGPA"
                    : "Percentage"
                }
                placeholder={
                  watch(`educational_details.${index}.gradeType`) === "CGPA"
                    ? "Enter CGPA"
                    : "Enter Percentage"
                }
                error={
                  watch(`educational_details.${index}.gradeType`) === "CGPA"
                    ? errors.educational_details?.[index]?.cgpa?.message
                    : errors.educational_details?.[index]?.percentage?.message
                }
              />

              <button
                type="button"
                onClick={() => remove(index)}
                className="self-start mt-2 text-base text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => append(educationFieldObject)}
          className="text-base !my-4 text-[var(--primary-color)] hover:text-[var(--primary-color-dark)]"
        >
          + Add More
        </button>
      </div>
    </SectionContent>
  );
};

export default educational_details;
