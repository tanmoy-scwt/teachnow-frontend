import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import CheckboxFieldComponent from "@/components/inputComponent/CheckboxFieldComponent";
import RadioButtonFieldComponent from "@/components/inputComponent/RadioButtonFieldComponent";
import SectionContent from "@/components/ui/SectionContent";

const educationSchema = yup.object({
  educationDetails: yup
    .array()
    .of(
      yup.object({
        degreeName: yup.string().required("Degree Name is required"),
        course: yup.string().required("Course is required"),
        instituteName: yup.string().required("Institute Name is required"),
        university: yup.string().required("University is required"),
        currentlyPursuing: yup.boolean(),
        fromDate: yup.string().required("From Date is required"),
        toDate: yup.string().required("To Date is required"),
        gradeType: yup
          .string()
          .oneOf(["CGPA", "Percentage"])
          .required("Select Grade Type"),
        cgpa: yup
          .number()
          .typeError("CGPA must be a number")
          .when("gradeType", {
            is: (val: string) => val === "CGPA",
            then: (schema) =>
              schema
                .required("CGPA is required")
                .min(0, "CGPA cannot be less than 0")
                .max(10, "CGPA cannot be more than 10"),
            otherwise: (schema) => schema.notRequired(),
          }),
        percentage: yup
          .number()
          .typeError("Percentage must be a number")
          .when("gradeType", {
            is: (val: string) => val === "Percentage",
            then: (schema) =>
              schema
                .required("Percentage is required")
                .min(0, "Percentage cannot be less than 0")
                .max(100, "Percentage cannot be more than 100"),
            otherwise: (schema) => schema.notRequired(),
          }),
      })
    )
    .required("At least one education is required")
    .min(1, "Add at least one education"),
});

type FormValues = yup.InferType<typeof educationSchema>;

const educationFieldObject = {
  degreeName: "",
  course: "",
  instituteName: "",
  university: "",
  currentlyPursuing: false,
  fromDate: "",
  toDate: "",
  gradeType: "CGPA" as "CGPA" | "Percentage",
  cgpa: 0,
  percentage: 0,
};

const EducationDetails = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(educationSchema),
    defaultValues: {
      educationDetails: [
        educationFieldObject
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educationDetails",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
     <SectionContent
      variant="h2"
      title="Education Details"
      useCustomCSS={true}
      isContainerActive={false}
    >
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex !mt-5 flex-col gap-6">
          <InputFieldComponent
            name={`educationDetails.${index}.degreeName`}
            control={control}
            label="Degree Name"
            placeholder="Enter Degree Name"
            error={errors.educationDetails?.[index]?.degreeName?.message}
          />

          <InputFieldComponent
            name={`educationDetails.${index}.course`}
            control={control}
            label="Course"
            placeholder="Enter Course"
            error={errors.educationDetails?.[index]?.course?.message}
          />

          <InputFieldComponent
            name={`educationDetails.${index}.instituteName`}
            control={control}
            label="Institute Name"
            placeholder="Enter Institute Name"
            error={errors.educationDetails?.[index]?.instituteName?.message}
          />

          <InputFieldComponent
            name={`educationDetails.${index}.university`}
            control={control}
            label="University"
            placeholder="Enter University"
            error={errors.educationDetails?.[index]?.university?.message}
          />

          <CheckboxFieldComponent
            name={`educationDetails.${index}.currentlyPursuing`}
            control={control}
            label="Currently Pursuing"
            error={errors.educationDetails?.[index]?.currentlyPursuing?.message}
            classname="mt-2"
          />

          <InputFieldComponent
            name={`educationDetails.${index}.fromDate`}
            control={control}
            label="From Date"
            placeholder="Select From Date"
            error={errors.educationDetails?.[index]?.fromDate?.message}
            type="date"
          />

          <InputFieldComponent
            name={`educationDetails.${index}.toDate`}
            control={control}
            label="To Date"
            placeholder="Select To Date"
            error={errors.educationDetails?.[index]?.toDate?.message}
            type="date"
          />
          <div className="flex gap-6">
            <div>
              <RadioButtonFieldComponent
                name={`educationDetails.${index}.gradeType`}
                control={control}
                label="CGPA"
                value="CGPA"
                error={errors.educationDetails?.[index]?.gradeType?.message}
              />
            </div>
            <div>
              <RadioButtonFieldComponent
                name={`educationDetails.${index}.gradeType`}
                control={control}
                label="Percentage"
                value="Percentage"
                error={errors.educationDetails?.[index]?.gradeType?.message}
              />
            </div>
          </div>
          <InputFieldComponent
            type="number"
            name={
              watch(`educationDetails.${index}.gradeType`) === "CGPA"
                ? `educationDetails.${index}.cgpa`
                : `educationDetails.${index}.percentage`
            }
            control={control}
            label={
              watch(`educationDetails.${index}.gradeType`) === "CGPA"
                ? "CGPA"
                : "Percentage"
            }
            placeholder={
              watch(`educationDetails.${index}.gradeType`) === "CGPA"
                ? "Enter CGPA"
                : "Enter Percentage"
            }
            error={
              watch(`educationDetails.${index}.gradeType`) === "CGPA"
                ? errors.educationDetails?.[index]?.cgpa?.message
                : errors.educationDetails?.[index]?.percentage?.message
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
      ))}

      <button
        type="button"
        onClick={() => append(educationFieldObject)}
        className="text-base !my-4 text-[var(--primary-color)] hover:text-[var(--primary-color-dark)]"
      >
        + Add More
      </button>

      <div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Submit
        </button>
      </div>
    </form>
    </SectionContent>
  );
};

export default EducationDetails;
