// ================= preferredEmploymentTypeValues =================

export const preferredEmploymentTypeValues = [
  "full_time",
  "part_time",
  "contract",
  "internship",
  "freelance",
  "remote",
  "other",
] as const;

export const preferredEmploymentTypeOptions = [
  { value: "full_time", label: "Full-time" },
  { value: "part_time", label: "Part-time" },
  { value: "contract", label: "Contract / Temporary" },
  { value: "internship", label: "Internship / Training" },
  { value: "freelance", label: "Freelance / Project-based" },
  { value: "remote", label: "Remote / Work From Home" },
  { value: "other", label: "Other" },
];

// ================ salaryTypeValues ===============

export const salaryTypeValues = [
  "annual",
  "monthly",
  "weekly",
  "daily",
  "hourly",
  "contract",
  "negotiable",
  "commission",
] as const;

export const salaryTypeOptions = [
  { value: "annual", label: "Annual (per year)" },
  { value: "monthly", label: "Monthly (per month)" },
  { value: "weekly", label: "Weekly (per week)" },
  { value: "daily", label: "Daily (per day)" },
  { value: "hourly", label: "Hourly (per hour)" },
  { value: "contract", label: "Contract / Stipend" },
  { value: "negotiable", label: "Negotiable" },
  { value: "commission", label: "Commission-based" },
];

// ================ preferredShiftOptions =====================

export const preferredShiftValues = [
  "morning",
  "afternoon",
  "night",
  "flexible",
  "weekend",
  "split",
  "part_time",
  "remote",
  "custom",
] as const;

export const preferredShiftOptions = [
  { value: "morning", label: "Morning Shift (6 AM – 2 PM)" },
  { value: "afternoon", label: "Afternoon Shift (2 PM – 10 PM)" },
  { value: "night", label: "Night Shift (10 PM – 6 AM)" },
  { value: "flexible", label: "Flexible / Rotational" },
  { value: "weekend", label: "Weekend Shift Only" },
  { value: "split", label: "Split Shift" },
  { value: "part_time", label: "Part-time Shift" },
  { value: "remote", label: "Remote / Work From Home" },
  { value: "custom", label: "Custom / Other" },
];

// ============== jobLocationOptions =================

export const jobLocationValues = [
  "new_york",
  "los_angeles",
  "chicago",
  "houston",
  "remote",
] as const;

export const jobLocationOptions = [
  { value: "new_york", label: "New York" },
  { value: "los_angeles", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
  { value: "remote", label: "Remote / Work From Home" },
];

// ================== industryOptions ================

export const industryValues = [
  "school",
  "college",
  "training_institute",
  "online_education",
  "early_childhood",
  "other",
] as const;

export const industryOptions = [
  { value: "school", label: "School" },
  { value: "college", label: "College / University" },
  { value: "training_institute", label: "Training / Coaching Institute" },
  { value: "online_education", label: "Online Education / EdTech" },
  { value: "early_childhood", label: "Early Childhood / Kindergarten" },
  { value: "other", label: "Other" },
];

// ================== keyFunctionalArea ==================

export const keyFunctionalAreaValues = [
  "teaching",
  "administration",
  "counseling",
  "curriculum_design",
  "training",
  "academic_coordination",
  "research",
  "exam_evaluation",
  "librarian",
  "other",
] as const;

export const keyFunctionalAreaOptions = [
  { value: "teaching", label: "Teaching / Faculty" },
  { value: "administration", label: "Administration / Management" },
  { value: "counseling", label: "Counseling / Career Guidance" },
  { value: "curriculum_design", label: "Curriculum Design / Development" },
  { value: "training", label: "Training / Coaching" },
  { value: "academic_coordination", label: "Academic Coordination" },
  { value: "research", label: "Research / Academic Studies" },
  { value: "exam_evaluation", label: "Examination / Evaluation" },
  { value: "librarian", label: "Library / Resource Management" },
  { value: "other", label: "Other" },
];

// =================== preferredCompanyType ====================

export const preferredCompanyTypeValues = [
  "government_school",
  "private_school",
  "college_university",
  "coaching_institute",
  "edtech_company",
  "ngo",
  "other",
] as const;

export const preferredCompanyTypeOptions = [
  { value: "government_school", label: "Government School" },
  { value: "private_school", label: "Private School" },
  { value: "college_university", label: "College / University" },
  { value: "coaching_institute", label: "Coaching / Training Institute" },
  { value: "edtech_company", label: "EdTech Company" },
  { value: "ngo", label: "NGO / Non-profit Organization" },
  { value: "other", label: "Other" },
];

// ==================== diversityInclusion ================

export const diversityInclusionValues = [
  "women_friendly",
  "lgbtq_friendly",
  "inclusive_culture",
  "persons_with_disability",
  "ethnically_diverse",
  "age_diversity",
  "religious_inclusion",
  "mental_health_support",
  "other",
] as const;

export const diversityInclusionOptions = [
  { value: "women_friendly", label: "Women-friendly Workplace" },
  { value: "lgbtq_friendly", label: "LGBTQ+ Friendly" },
  { value: "inclusive_culture", label: "Inclusive Culture / Equal Opportunity" },
  { value: "persons_with_disability", label: "Support for Persons with Disability" },
  { value: "ethnically_diverse", label: "Ethnically Diverse Environment" },
  { value: "age_diversity", label: "Age Diversity" },
  { value: "religious_inclusion", label: "Religious / Cultural Inclusion" },
  { value: "mental_health_support", label: "Mental Health Support" },
  { value: "other", label: "Other" },
];

// ===================== ctcNegotiable ====================

export const ctcNegotiableValues = ["yes", "no", "open"] as const;

export const ctcNegotiableOptions = [
  { value: "yes", label: "Yes, Negotiable" },
  { value: "no", label: "No, Fixed" },
  { value: "open", label: "Open / Discussable" },
];

// ================ languagesOptions ===================

export const languagesOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "mandarin", label: "Mandarin" },
  { value: "hindi", label: "Hindi" },
];

export const languagesValues = [
  "english",
  "spanish",
  "french",
  "german",
  "mandarin",
  "hindi",
] as const;

// ================= skillsOption ===============

export const skillsValues = [
  "teaching",
  "curriculum_development",
  "classroom_management",
  "student_assessment",
  "educational_technology",
  "special_education",
  "lesson_planning",
  "research",
] as const;

export const skillsOptions = [
  { value: "teaching", label: "Teaching" },
  { value: "curriculum_development", label: "Curriculum Development" },
  { value: "classroom_management", label: "Classroom Management" },
  { value: "student_assessment", label: "Student Assessment" },
  { value: "educational_technology", label: "Educational Technology" },
  { value: "special_education", label: "Special Education" },
  { value: "lesson_planning", label: "Lesson Planning" },
  { value: "research", label: "Research" },
];
