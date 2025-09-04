"use client";
import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import TextareaFieldComponent from "@/components/inputComponent/TextareaFieldComponent";
import UserCardFeildComponent from "@/components/inputComponent/UserCardFeildComponent";
import SectionContent from "@/components/ui/SectionContent";
import React from "react";
import { useFormContext } from "react-hook-form";
import {ResumeBuilderType} from "../formConfig/ResumeFormDefaultValues";

const PersonalDetails = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<ResumeBuilderType>();

  return (
    <>
      <SectionContent
        variant="h2"
        title="Personal Details"
        useCustomCSS={true}
        isContainerActive={false}
      >
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <UserCardFeildComponent
              name="Alexa Rawles"
              email="alexarawles@gmail.com"
              imageUrl="/image/profile/p2.png"
              showsPencil={true}
              editable={true}
            />
          </div>
          <div className="grid col-span-1 grid-cols-1 gap-4">
            {/* First Name */}
            <InputFieldComponent
              name="presonal_details.firstName"
              control={control}
              label="First Name"
              placeholder="Your First Name"
              error={errors?.presonal_details?.firstName?.message}
            />

            {/* Last Name */}
            <InputFieldComponent
              name="presonal_details.lastName"
              control={control}
              label="Last Name"
              placeholder="Your Last Name"
              error={errors?.presonal_details?.lastName?.message}
            />

            {/* Phone */}
            <InputFieldComponent
              name="presonal_details.phone"
              control={control}
              label="Phone"
              placeholder="Your Phone number here"
              error={errors?.presonal_details?.phone?.message}
            />

            {/* Email */}
            <InputFieldComponent
              name="presonal_details.email"
              control={control}
              label="Email"
              placeholder="Your Email Here"
              type="email"
              error={errors?.presonal_details?.email?.message}
            />
            <FormSelectDropdown
              name="presonal_details.jobRole"
              control={control}
              label="Job Role"
              isLoading={false}
              options={[
                { value: "teacher", label: "Teacher" },
                { value: "developer", label: "Developer" },
                { value: "designer", label: "Designer" },
              ]}
              error={errors?.presonal_details?.jobRole?.message}
            />
            <FormSelectDropdown
              name="presonal_details.industry"
              control={control}
              label="Industry Name"
              isLoading={false}
              options={[
                { value: "school", label: "School" },
                { value: "college", label: "College / University" },
                {
                  value: "training_institute",
                  label: "Training/Coaching Institute",
                },
                { value: "online_education", label: "Online Education/EdTech" },
                {
                  value: "early_childhood",
                  label: "Early Childhood/Kindergarten",
                },
                { value: "other", label: "Other" },
              ]}
              error={errors?.presonal_details?.industry?.message}
            />
            <InputFieldComponent
              type="number"
              name="presonal_details.experienceyear"
              control={control}
              label="Experience (Year)"
              placeholder="Your Experience Year"
              error={errors?.presonal_details?.experienceyear?.message}
            />

            <TextareaFieldComponent
              name="presonal_details.address"
              control={control}
              label="Address"
              placeholder="Write your address here..."
              rows={5}
              error={errors?.presonal_details?.address?.message}
            />
            {/* Website */}
            <InputFieldComponent
              name="presonal_details.website"
              control={control}
              isRequired={false}
              label="Website (Optional)"
              placeholder="Your Website Details"
              error={errors?.presonal_details?.website?.message}
            />
            <FormSelectDropdown
              isMulti={true}
              isRequired={false}
              name="presonal_details.languages"
              control={control}
              label="Languages (Optional)"
              isLoading={false}
              options={[
                { value: "english", label: "English" },
                { value: "spanish", label: "Spanish" },
                { value: "french", label: "French" },
              ]}
              error={errors?.presonal_details?.languages?.message}
            />
            <TextareaFieldComponent
              name="presonal_details.summary"
              control={control}
              label="Summary"
              placeholder="Write your summary here..."
              rows={5}
              error={errors?.presonal_details?.summary?.message}
            />
          </div>
        </div>
      </SectionContent>
    </>
  );
};

export default PersonalDetails;
