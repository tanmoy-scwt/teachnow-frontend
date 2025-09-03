"use client";
import dynamic from "next/dynamic";
import React from "react";
const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <SelectBoxShimmer />,
});
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { components } from "react-select";
import SelectBoxShimmer from "../ui/shimmers/SelectBoxShimmer";
import { GiSandsOfTime } from "react-icons/gi";

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
  isRequired?: boolean;
  addButtonComponent?: React.ReactNode;
}

const FormSelectDropdown = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  error,
  isRequired = true,
  isMulti = false,
  isLoading = false,
  addButtonComponent,
}: FormSelectDropdownProps<T>) => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between !mb-1">
          <label className="!text-sm !text-black">
            {label} {isRequired && <span className="text-red-500">*</span>}
          </label>
          {(addButtonComponent) && <div className="ml-auto">{addButtonComponent}</div>}
        </div>

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
                    ? `wait ${label?.toLowerCase()} loading...`
                    : `Select ${label}`
                }
                classNamePrefix="react-select"
                className={`${
                  error
                    ? "border animation !rounded-[12px] border-red-500"
                    : isLoading
                    ? "border border-blue-500 !cursor-not-allowed animate-pulse !rounded-[12px]"
                    : ""
                }`}
                components={{
                  DropdownIndicator: (props) =>
                    isLoading ? (
                      <div className="flex items-center justify-center !px-2">
                        <GiSandsOfTime
                          className="text-blue-600 animate-spin"
                          size={20} // you can adjust size
                          aria-label="loading"
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
    </div>
  );
};

export default FormSelectDropdown;
