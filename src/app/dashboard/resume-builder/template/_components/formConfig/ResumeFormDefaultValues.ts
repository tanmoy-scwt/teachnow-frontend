
// const educationFieldObject = {
//   degreeName: "",
//   course: "",
//   instituteName: "",
//   university: "",
//   currentlyPursuing: false,
//   fromDate: "",
//   toDate: "",
//   gradeType: "CGPA" as "CGPA" | "Percentage",
//   cgpa: 0,
//   percentage: 0,
// };

// const workExperienceFieldObject = {
//   companyName: "",
//   jobTitle: "",
//   employmentType: "",
//   currentCompany: false,
//   fromDate: "",
//   toDate: "",
//   aboutWork: "",
// };
// const projectObject = { title: "", description: "" }
// const skillsObject = { skill: "", proficiency: 35 }

export const ResumeFormDefaultValues = {
    presonal_details: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      jobRole:'',
      industry: "",
      website: "",
      summary: "",
      languages: [""],
      address: "",
      experienceyear: 0,
    },
    // educational_details: [educationFieldObject],
    // workexperience_details: [workExperienceFieldObject],
    // technical_skills: {
    //     skills : [skillsObject],
    //     projects : [projectObject]
    // }
}

export type ResumeBuilderType = typeof ResumeFormDefaultValues;
export type PresonalDetailsTypes = typeof ResumeFormDefaultValues.presonal_details;