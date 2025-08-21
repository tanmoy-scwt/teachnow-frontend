"use client";
import dynamic from "next/dynamic";
import React from "react";
const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <p>Loading select...</p>,
});
import { Controller, Control, FieldValues, Path } from "react-hook-form";

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
}

const FormSelectDropdown = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  error,
}: FormSelectDropdownProps<T>) => {
  return (
    <div className="flex flex-col w-full">
      <label className="!mb-1 !text-sm !text-black">
        {label} <span className="text-red-500">*</span>
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            placeholder={`Select ${label}`}
            classNamePrefix="react-select"
            value={options.find((opt) => opt.value === field.value) || null}
            onChange={(selected) => field.onChange(selected ? (selected as Option).value : "")}
            className={`${error ? 'border !rounded-[12px] border-red-500' : ''}`}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "12px",
                padding: "0.1rem"
              }),
            }}
          />
        )}
      />

      {error && <p className="mt-1 !text-xs !text-red-500">{error}</p>}
    </div>
  );
};

export default FormSelectDropdown;
