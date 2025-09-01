"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import SectionContent from "@/components/ui/SectionContent";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import CheckboxFieldComponent from "@/components/inputComponent/CheckboxFieldComponent";
import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";
import FormButton from "@/components/inputComponent/FormButton";

const countryOptions = [
  { value: "india", label: "India" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
];
const stateOptions = [
  { value: "wb", label: "West Bengal" },
  { value: "mh", label: "Maharashtra" },
  { value: "dl", label: "Delhi" },
];
const cityOptions = [
  { value: "kolkata", label: "Kolkata" },
  { value: "mumbai", label: "Mumbai" },
  { value: "delhi", label: "Delhi" },
];

const schema = yup.object().shape({
  currentAddress: yup.object().shape({
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    pincode: yup.string().required("Pincode is required"),
    address: yup.string().required("Address is required"),
  }),
  permanentAddress: yup.object().shape({
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    pincode: yup.string().required("Pincode is required"),
    address: yup.string().required("Address is required"),
  }),
  isSameAddress: yup.boolean().default(false),
});

type ContactInfoValues = yup.InferType<typeof schema>;

const ContactInfo = () => {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactInfoValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      currentAddress: {
        country: "",
        state: "",
        city: "",
        pincode: "",
        address: "",
      },
      permanentAddress: {
        country: "",
        state: "",
        city: "",
        pincode: "",
        address: "",
      },
      isSameAddress: false,
    },
  });

  const isSameAddress = watch("isSameAddress");
  const currentAddress = watch("currentAddress");

  // ✅ Sync permanentAddress from currentAddress if checkbox checked
  useEffect(() => {
    if (isSameAddress) {
      setValue(
        "permanentAddress",
        { ...currentAddress },
        { shouldValidate: true }
      );
    } else {
      setValue("permanentAddress", {
        country: "",
        state: "",
        city: "",
        pincode: "",
        address: "",
      });
    }
  }, [isSameAddress, currentAddress, setValue]);

  const onSubmit: SubmitHandler<ContactInfoValues> = (data) => {
    console.log("Contact Info Submitted:", data);
  };

  return (
    <form className="flex gap-6 flex-col" onSubmit={handleSubmit(onSubmit)}>
      {/* Current Address */}
      <SectionContent
        variant="h4"
        title="Current Address"
        useCustomCSS={true}
        isContainerActive={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelectDropdown
            name="currentAddress.country"
            control={control}
            label="Country"
            options={countryOptions}
            error={errors.currentAddress?.country?.message}
          />
          <FormSelectDropdown
            name="currentAddress.state"
            control={control}
            label="State"
            options={stateOptions}
            error={errors.currentAddress?.state?.message}
          />
          <FormSelectDropdown
            name="currentAddress.city"
            control={control}
            label="City"
            options={cityOptions}
            error={errors.currentAddress?.city?.message}
          />
          <InputFieldComponent
            name="currentAddress.pincode"
            control={control}
            label="Pincode"
            error={errors.currentAddress?.pincode?.message}
          />
          <div className="col-span-1 md:col-span-2">
            <InputFieldComponent
              name="currentAddress.address"
              control={control}
              label="Address"
              error={errors.currentAddress?.address?.message}
            />
          </div>
        </div>
      </SectionContent>

      {/* Checkbox */}
      <div className="mt-4">
        <CheckboxFieldComponent
          name="isSameAddress"
          control={control}
          label="Same as Current Address"
        />
      </div>

      {/* Permanent Address */}
      <SectionContent
        variant="h4"
        title="Permanent Address"
        useCustomCSS={true}
        isContainerActive={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelectDropdown
            name="permanentAddress.country"
            control={control}
            label="Country"
            options={countryOptions}
            error={errors.permanentAddress?.country?.message}
          />
          <FormSelectDropdown
            name="permanentAddress.state"
            control={control}
            label="State"
            options={stateOptions}
            error={errors.permanentAddress?.state?.message}
          />
          <FormSelectDropdown
            name="permanentAddress.city"
            control={control}
            label="City"
            options={cityOptions}
            error={errors.permanentAddress?.city?.message}
          />
          <InputFieldComponent
            name="permanentAddress.pincode"
            control={control}
            label="Pincode"
            error={errors.permanentAddress?.pincode?.message}
          />
          <div className="col-span-1 md:col-span-2">
            <InputFieldComponent
              name="permanentAddress.address"
              control={control}
              label="Address"
              error={errors.permanentAddress?.address?.message}
            />
          </div>
        </div>
      </SectionContent>

      {/* Submit */}
      <div className="!mt-6 flex justify-between items-center">
          <FormButton
            title="back"
            buttonType="button"
            buttonVariant="outlined"
            isSubmitting={false}
            submittingMessage="Saving..."
          />
          <FormButton
            title="Save"
            buttonType="submit"
            buttonVariant="filled"
            isSubmitting={true}
            submittingMessage="Saving..."
          />
        </div>
    </form>
  );
};

export default ContactInfo;
