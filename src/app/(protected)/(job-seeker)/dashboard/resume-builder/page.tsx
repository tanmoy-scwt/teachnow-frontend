import React from "react";
import FormButton from "@/components/inputComponent/FormButton";
import Image from "next/image";
import Link from "next/link";

const templates = [
  { id: 1, name: "Template 1", src: "/image/resume/r1.png" },
  { id: 2, name: "Template 2", src: "/image/resume/r2.png" },
  { id: 3, name: "Template 3", src: "/image/resume/r3.png" },
  { id: 4, name: "Template 4", src: "/image/resume/r4.png" },
  { id: 5, name: "Template 5", src: "/image/resume/r5.png" },
  { id: 6, name: "Template 6", src: "/image/resume/r6.png" },
];

const page = () => {
  return (
    <>
     <div>
        <div className="section-content text-center">
          <h2 className={`!text-[clamp(22px,4vw,36px)] !font-medium text-[var(--primary-color)] leading-[1.2] !mb-0`}>
            Choose a template layout
          </h2>
          <p className="leading-relaxed">
            You can build your own design or select a pre made style
          </p>
        </div>
        <div className="!mt-6 flex flex-col justify-center gap-5 items-center lg:flex-row md:flex-row">
          <FormButton
            title="Continue"
            buttonType="button"
            buttonVariant="filled"
            isSubmitting={false}
            submittingMessage="Saving..."
          />
          <p>Or</p>
          <FormButton
            title="upload your cv"
            buttonType="button"
            buttonVariant="filled"
            isSubmitting={false}
            submittingMessage="Saving..."
          />
        </div>
       <div className="grid grid-cols-1 !mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates?.map((template) => (
            <Link key={template.id} href={`resume-builder/template/1`}>
            <div
              className="overflow-hidden transition-transform duration-300 hover:scale-103 cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={template?.src ?? ""}
                  alt={template?.name ?? "Resume Untitled"}
                  fill
                  className="object-cover rounded-[30px]"
                  sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       (max-width: 1280px) 33vw,
                       25vw"
                />
              </div>

              {/* Caption */}
              <div className="text-center !py-3">
                <p className="text-sm font-medium text-gray-700">
                  {template?.name ?? "Untitle"}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
