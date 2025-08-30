import FormSelectDropdown from "@/components/inputComponent/FormSelectDropdown";
import InputFieldComponent from "@/components/inputComponent/InputFeildComponent";
import SectionContent from "@/components/ui/SectionContent";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

const socialPlatformOptions = [
  { value: "facebook", label: "Facebook" },
  { value: "twitter", label: "Twitter" },
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "youtube", label: "YouTube" },
  { value: "tiktok", label: "TikTok" },
  { value: "snapchat", label: "Snapchat" },
  { value: "pinterest", label: "Pinterest" },
];

const socialPlatformValues = [
  "facebook",
  "twitter",
  "instagram",
  "linkedin",
  "youtube",
  "tiktok",
  "snapchat",
  "pinterest",
] as const;

const schema = yup.object().shape({
  socialMediaLinks: yup
    .array()
    .of(
      yup.object().shape({
        social_platform: yup
          .mixed<(typeof socialPlatformValues)[number]>()
          .oneOf(socialPlatformValues, "Invalid platform")
          .required("Platform is required"),
        social_url: yup.string().url("Invalid URL").required("URL is required"),
      })
    )
    .required("At least one social media link is required")
    .min(1, "Add at least one social media link"),
});

type FormValues = yup.InferType<typeof schema>;

const SocialMediaProfile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      socialMediaLinks: [
        {
          social_platform:
            undefined as unknown as (typeof socialPlatformValues)[number],
          social_url: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "socialMediaLinks",
    control,
  });

  const handleFormSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
     <SectionContent
      variant="h2"
      title="Social Media Links"
      useCustomCSS={true}
      isContainerActive={false}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {fields?.map((field, index) => (
          <div key={field.id} className="flex gap-4 !mt-4 items-center">
            <div className="flex-1">
              <FormSelectDropdown
                name={`socialMediaLinks.${index}.social_platform`}
                control={control}
                label="Social Platform"
                options={socialPlatformOptions}
                error={
                  errors.socialMediaLinks?.[index]?.social_platform?.message
                }
              />
            </div>
            <div className="flex-1">
              <InputFieldComponent
                name={`socialMediaLinks.${index}.social_url`}
                control={control}
                label="Social URL"
                type="url"
                placeholder="Enter social URL"
                error={errors.socialMediaLinks?.[index]?.social_url?.message}
              />
            </div>
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-base !mb-3 self-end text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="!mt-4"
          onClick={() =>
            append({
              social_platform:
                undefined as unknown as (typeof socialPlatformValues)[number],
              social_url: "",
            })
          }
        >
          Add More
        </button>
        <button type="submit">Submit</button>
      </form>
    </SectionContent>
  );
};

export default SocialMediaProfile;
