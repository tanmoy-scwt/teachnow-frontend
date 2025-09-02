"use client";
import FormButton from "@/components/inputComponent/FormButton";
import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import TextareaFieldComponent from "@/components/inputComponent/TextareaFieldComponent";
import UserCardFeildComponent from "@/components/inputComponent/UserCardFeildComponent";
import SectionContent from "@/components/ui/SectionContent";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const languageOptions = ["english", "spanish", "french"] as const;
export const schema = yup.object().shape({
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
    .of(
      yup
        .mixed<(typeof languageOptions)[number]>()
        .oneOf(languageOptions, "Invalid language")
        .required()
    )
    .min(1, "At least one language must be selected")
    .required("Languages are required"),

  address: yup.string().required("Address is required"),
  experienceyear: yup
    .number()
    .min(0, "Experience year must be positive")
    .required("Experience year is required"),
  industry: yup.string().required("Industry is required"),
});

export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  website: string;
  summary: string;
  languages: Array<(typeof languageOptions)[number]>;
  address: string;
  experienceyear: number;
  industry: string;
}

const PersonalDetails = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      website: "",
      summary: "",
      languages: [] as unknown as ProfileFormValues["languages"],
      address: "",
      experienceyear: 0,
      industry: "",
    },
  });

  const onSubmit: SubmitHandler<ProfileFormValues> = (
    data: ProfileFormValues
  ) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <SectionContent
      variant="h2"
      title="Personal Details"
      useCustomCSS={true}
      isContainerActive={false}
    >
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Grid Layout */}
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
            name="firstName"
            control={control}
            label="First Name"
            placeholder="Your First Name"
            error={errors.firstName?.message}
          />

          {/* Last Name */}
          <InputFieldComponent
            name="lastName"
            control={control}
            label="Last Name"
            placeholder="Your Last Name"
            error={errors.lastName?.message}
          />

          {/* Phone */}
          <InputFieldComponent
            name="phone"
            control={control}
            label="Phone"
            placeholder="Your Phone number here"
            error={errors.phone?.message}
          />

          {/* Email */}
          <InputFieldComponent
            name="email"
            control={control}
            label="Email"
            placeholder="Your Email Here"
            type="email"
            error={errors.email?.message}
          />
          <FormSelectDropdown
            name="industry"
            control={control}
            label="Industry"
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
            error={errors.industry?.message}
          />
          <InputFieldComponent
            type="number"
            name="experienceyear"
            control={control}
            label="Experience Year"
            placeholder="Your Experience Year"
            error={errors.experienceyear?.message}
          />

          <TextareaFieldComponent
            name="address"
            control={control}
            label="Address"
            placeholder="Write your address here..."
            rows={5}
            error={errors.address?.message}
          />
          {/* Website */}
          <InputFieldComponent
            name="website"
            control={control}
            label="Website"
            placeholder="Your Website Details"
            error={errors.website?.message}
          />
          <FormSelectDropdown
            isMulti={true}
            name="languages"
            control={control}
            label="Languages"
            isLoading={true}
            options={[
              { value: "english", label: "English" },
              { value: "spanish", label: "Spanish" },
              { value: "french", label: "French" },
            ]}
            error={errors.languages?.message}
          />
          <TextareaFieldComponent
            name="summary"
            control={control}
            label="Summary"
            placeholder="Write your summary here..."
            rows={5}
            error={errors.summary?.message}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="!mt-6 flex justify-end items-center">
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
    </>
  );
};

export default PersonalDetails;
