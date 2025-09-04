"use client";
import React from "react";
import { useForm, useFieldArray, useFormContext } from "react-hook-form";
import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";
import SkillRangeFieldComponent from "@/components/inputComponent/SkillRangeFeildComponent";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import TextareaFieldComponent from "@/components/inputComponent/TextareaFieldComponent";
import SectionContent from "@/components/ui/SectionContent";
import FormButton from "@/components/inputComponent/FormButton";
import { ResumeBuilderSchemaType } from "../formConfig/ResumeFormValidationSchema";

interface SkillItem {
  skill: string;
  proficiency: number;
}

interface ProjectItem {
  title: string;
  description: string;
}

interface FormData {
  skills: SkillItem[];
  projects: ProjectItem[];
}

const TechnicalSkills = () => {
const {control , watch , formState: { errors } } = useFormContext<ResumeBuilderSchemaType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "technical_skills.skills",
  });
  const {
    fields: projectFeilds,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control,
    name: "technical_skills.projects",
  });

  const ButtonControllers = (index: number, addButtonActive: boolean) => {
    return (
      <div className="flex items-center gap-4">
        {addButtonActive && (
          <button
            type="button"
            onClick={() => append({ skill: "", proficiency: 35 })}
            className="text-sm text-[var(--primary-color)] hover:text-[var(--primary-color-dark)]"
          >
            + Add Skill
          </button>
        )}
        {fields.length > 1 && (
          <div>
            <button
              type="button"
              className="text-sm text-red-500 mt-1"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    );
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
      <SectionContent
      variant="h2"
      title="Technical Skills"
      useCustomCSS={true}
      isContainerActive={false}
    >
      <div className="flex flex-col gap-4">
        <div>
          {fields.map((field, index) => {
            const addButtonActive = index === fields.length - 1;
            return (
              <div key={field.id} className="flex flex-col gap-4 !pb-8">
                <FormSelectDropdown
                  name={`technical_skills.skills.${index}.skill`}
                  control={control}
                  label="Skill Type"
                  isLoading={false}
                  options={[
                    { label: "JavaScript", value: "javascript" },
                    { label: "Python", value: "python" },
                    { label: "Java", value: "java" },
                    { label: "C++", value: "cpp" },
                    { label: "Ruby", value: "ruby" },
                  ]}
                  addButtonComponent={ButtonControllers(index, addButtonActive)}
                />
                <SkillRangeFieldComponent
                  name={`technical_skills.skills.${index}.proficiency`}
                  control={control}
                  label="Proficiency:"
                  options={["Beginner", "Intermediate", "Advanced", "Expert"]}
                />
              </div>
            );
          })}
        </div>
        <div>
          {projectFeilds.map((field, index) => {
            return (
              <div key={field.id} className={`flex flex-col gap-4 ${projectFeilds.length - 1 ? "!pb-8":"!pb-3"}`}>
                <InputFieldComponent
                  name={`technical_skills.projects.${index}.title`}
                  control={control}
                  label="Project Title"
                  labelStyle="!font-bold"
                  placeholder="Enter Project Title"
                  // error={errors.educationDetails?.[index]?.university?.message}
                />
                <TextareaFieldComponent
                  name={`technical_skills.projects.${index}.description`}
                  control={control}
                  label="About The Project"
                  labelStyle="!font-bold"
                  placeholder="Write your description here..."
                  rows={5}
                  // error={errors.description?.message}
                />
                <div>
                  <button
                    type="button"
                    onClick={() => removeProject(index)}
                    className="text-sm text-red-500 mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div>
            <button
              type="button"
              onClick={() => appendProject({ title: "", description: "" })}
              className="text-sm text-[var(--primary-color)] hover:text-[var(--primary-color-dark)]"
            >
              + Add Project
            </button>
          </div>
        </div>
      </div>
    </SectionContent>
  );
};

export default TechnicalSkills;
