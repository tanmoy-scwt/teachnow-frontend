import * as yup from "yup";
const workExperienceDetailsSchema = yup
  .array()
  .of(
    yup.object().shape({
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
  .min(1, "Add at least one work experience");

const skillsObjectSchema = yup.object().shape({
  skill: yup.string().required("Skill is required"),
  proficiency: yup
    .number()
    .min(0, "Minimum proficiency is 0")
    .max(100, "Maximum proficiency is 100")
    .required("Proficiency is required"),
});

const projectSchema = yup.object().shape({
  title: yup.string().required("Project title is required"),
  description: yup.string().required("Project description is required"),
});

const technicalSkillsSchema = yup.object().shape({
  skills: yup.array().of(skillsObjectSchema).min(1, "Add at least one skill"),
  projects: yup.array().of(projectSchema).min(1, "Add at least one project"),
});

export const presonalDetailSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  website: yup.string().url("Invalid URL").required("Website is required"),
  summary: yup.string().required("summary is required"),
  languages: yup
    .array()
    .of(yup.string().required("Language is required"))
    .min(1, "At least one language must be selected")
    .required("Languages are required"),

  address: yup.string().required("Address is required"),
  experienceyear: yup
    .number()
    .min(0, "Experience year must be positive")
    .required("Experience year is required"),
  jobRole: yup.string().required("Job Role is required"),
  industry: yup.string().required("Industry is required"),
});

const educationalDetailsSchema = yup
  .array()
  .of(
    yup.object().shape({
      degreeName: yup.string().required("Degree Name is required"),
      course: yup.string().required("Course is required"),
      instituteName: yup.string().required("Institute Name is required"),
      university: yup.string().required("University is required"),
      currentlyPursuing: yup.boolean(),
      fromDate: yup.string().required("From Date is required"),
      toDate: yup.string().when("currentlyPursuing", {
        is: false,
        then: (schema) => schema.required("To Date is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
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
  .min(1, "Add at least one education");

export const ResumeFormValidationSchema = yup.object().shape({
  presonal_details: presonalDetailSchema,
  educational_details: educationalDetailsSchema,
  workexperience_details: workExperienceDetailsSchema,
    technical_skills: technicalSkillsSchema,
});

export type ResumeBuilderSchemaType = yup.InferType<
  typeof ResumeFormValidationSchema
>;
// export const ResumeFormValidationSchema = yup.object().shape({
//   presonal_details : presonalDetailSchema,
// })
