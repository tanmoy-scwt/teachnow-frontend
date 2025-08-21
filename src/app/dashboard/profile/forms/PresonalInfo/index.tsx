"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";

// ✅ Validation Schema
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  dob: yup.string().required("Date of Birth is required"),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),
  maritalStatus: yup
    .string()
    .oneOf(["single", "married", "divorced"], "Invalid status")
    .required("Marital Status is required"),
  website: yup.string().url("Invalid URL").required("Website is required"),
});

export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  gender: "male" | "female" | "other";
  maritalStatus: "single" | "married" | "divorced";
  website: string;
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
      maritalStatus: undefined as unknown as ProfileFormValues["maritalStatus"],
      website: "",
    },
  });

  const onSubmit: SubmitHandler<ProfileFormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
    >
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          name="maritalStatus"
          control={control}
          label="Marital Status"
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

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
