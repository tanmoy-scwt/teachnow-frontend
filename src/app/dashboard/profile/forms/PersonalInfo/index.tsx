"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";
import UserCardFeildComponent from "@/components/inputComponent/UserCardFeildComponent";
import ButtonRound from "@/components/ui/button";
import ToggleFieldComponent from "@/components/inputComponent/ToggleFeildComponent";

const genderOptions = ["male", "female", "other"] as const;
const maritalStatusOptions = ["single", "married", "divorced"] as const;

export const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  dob: yup.string().required("Date of Birth is required"),
  gender: yup
    .mixed<(typeof genderOptions)[number]>() // TS autocomplete
    .oneOf(genderOptions, "Invalid gender")
    .required("Gender is required"),

  // Marital Status (array, dynamic options)
  maritalStatus: yup
    .array()
    .of(
      yup
        .mixed<(typeof maritalStatusOptions)[number]>()
        .oneOf(maritalStatusOptions, "Invalid status")
        .required()
    )
    .min(1, "At least one status must be selected")
    .required("Marital Status is required"),

  website: yup.string().url("Invalid URL").required("Website is required"),

  acceptTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms")
    .required(),
});


export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  gender: (typeof genderOptions)[number];
  maritalStatus: Array<(typeof maritalStatusOptions)[number]>;
  website: string;
  acceptTerms: boolean;
}
export default function PersonalInfo() {
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
      dob: "",
      gender: undefined as unknown as ProfileFormValues["gender"],
      maritalStatus: [] as unknown as ProfileFormValues["maritalStatus"],
      website: "",
      acceptTerms: false,
    },
  });

  const onSubmit: SubmitHandler<ProfileFormValues> = (data : ProfileFormValues) => {
    console.log("Form Data:", data);
  };

  return (
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
          <ButtonRound type="button" name="Edit" className="bgFilled" />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between col-span-2">
          <ToggleFieldComponent
            name="acceptTerms"
            control={control}
            classname="flex-row gap-2"
            label="Hide profile From current employer"
            error={errors.acceptTerms?.message}
          />
          <ToggleFieldComponent
            name="acceptTerms"
            control={control}
            classname="flex-row gap-2"
            label="Open to Work"
            error={errors.acceptTerms?.message}
          />
        </div>
        <div className="grid col-span-2 grid-cols-1 md:grid-cols-2 gap-4">
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

          {/* Date of Birth */}
          <InputFieldComponent
            name="dob"
            control={control}
            label="Date of Birth"
            placeholder="Your Date of Birth"
            type="date"
            error={errors.dob?.message}
          />

          {/* Gender */}
          <FormSelectDropdown
            name="gender"
            control={control}
            label="Gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
            error={errors.gender?.message}
          />

          {/* Marital Status */}
          <FormSelectDropdown
          isMulti={true}
            name="maritalStatus"
            control={control}
            label="Marital Status"
            isLoading={true}
            options={[
              { value: "single", label: "Single" },
              { value: "married", label: "Married" },
              { value: "divorced", label: "Divorced" },
            ]}
            error={errors.maritalStatus?.message}
          />

          {/* Website */}
          <InputFieldComponent
            name="website"
            control={control}
            label="Website"
            placeholder="Your Website Details"
            error={errors.website?.message}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="!mt-6">
        <button
          type="submit"
          className="w-full md:w-auto !px-6 !py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Submit
        </button>
        {/* <ButtonRound type="button" name="Edit" className="bgFilled" extraClass="!p-0" /> */}
      </div>
    </form>
  );
}
