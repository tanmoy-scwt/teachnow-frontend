const workExperienceFieldObject = {
  companyName: "",
  jobTitle: "",
  employmentType: "",
  currentCompany: false,
  fromDate: "",
  toDate: "",
  aboutWork: "",
};
const projectObject = { title: "", description: "" }
const skillsObject = { skill: "", proficiency: 35 }

export const educationFieldObject = {
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

export const ResumeFormDefaultValues = {
  presonal_details: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    jobRole: "",
    industry: "",
    website: "",
    summary: "",
    languages: [""],
    address: "",
    experienceyear: 0,
  },
  educational_details: [educationFieldObject],
  workexperience_details: [workExperienceFieldObject],
  technical_skills: {
    skills : [skillsObject],
    projects : [projectObject]
}
};





// const resumeFormPreviewValues = methods.watch("presonal_details");
// const values2 = useWatch({ control });

// const progress = useMemo(() => {
//   const values = Object.entries(resumeFormPreviewValues);

//   let filledCount = 0;
//   const totalCount = values.length;

//   values.forEach(([key , value]) => {
//     console.log(key , "key");

//     if (Array.isArray(value)) {
//       if (value.some((item) => item && item.trim() !== "")) {
//         filledCount++;
//       }
//     } else if (typeof value === "number") {
//       if (value > 0) {
//         filledCount++;
//       }
//     } else {
//       if (value && String(value).trim() !== "") {
//         filledCount++;
//       }
//     }
//   });

//   return Math.round((filledCount / totalCount) * 100);
// }, [values2]);
