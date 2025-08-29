"use client";
import dynamic from "next/dynamic";
import React from "react";
const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <SelectBoxShimmer />,
});
import { Hourglass } from "react-loader-spinner";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { components } from "react-select";
import SelectBoxShimmer from "../ui/shimmers/SelectBoxShimmer";

interface Option {
  value: string;
  label: string;
}

interface FormSelectDropdownProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: Option[];
  error?: string;
  isMulti?: boolean;
  isLoading?: boolean;
}

const FormSelectDropdown = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  error,
  isMulti = false,
  isLoading = false,
}: FormSelectDropdownProps<T>) => {
  return (
    <div className="flex flex-col w-full">
      <label className="!mb-1 !text-sm !text-black">
        {label} <span className="text-red-500">*</span>
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const handleChange = (newValue: unknown) => {
            if (isMulti) {
              field.onChange(
                (newValue as Option[] | null)?.map((s) => s.value) || []
              );
            } else {
              field.onChange((newValue as Option | null)?.value || "");
            }
          };

          const value = isMulti
            ? options.filter((opt) =>
                Array.isArray(field.value)
                  ? field.value.includes(opt.value)
                  : false
              )
            : options.find((opt) => opt.value === field.value) || null;

          return (
            <Select
              options={options}
              isMulti={isMulti}
              value={value}
              onChange={handleChange}
              isLoading={isLoading}
              isDisabled={isLoading}
              placeholder={
                isLoading
                  ? `wait a moment ${label} loading...`
                  : `Select ${label}`
              }
              classNamePrefix="react-select"
              className={`${
                error ? "border animation !rounded-[12px] border-red-500"
                  : isLoading
                  ? "border border-blue-500 !cursor-not-allowed animate-pulse !rounded-[12px]"
                  : ""
              }`}
              components={{
                DropdownIndicator: (props) =>
                  isLoading ? (
                    <div className="flex items-center !px-2">
                      <Hourglass
                        visible={true}
                        height="16"
                        width="16"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={["#306cce", "#72a1ed"]}
                      />
                    </div>
                  ) : (
                    <components.DropdownIndicator {...props} />
                  ),
              }}
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: "12px",
                  padding: "0.1rem",
                }),
              }}
            />
          );
        }}
      />

      {error && <p className="mt-1 !text-xs !text-red-500">{error}</p>}
    </div>
  );
};

export default FormSelectDropdown;
