"use client";
import React from "react";
import Select from "react-select";
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
    <div className="flex flex-col mb-4 w-full">
      <label className="mb-1 font-medium text-gray-700">
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
            onChange={(selected) => field.onChange(selected ? selected.value : "")}
            className={`${error ? 'border rounded border-red-500' : ''}`}
          />
        )}
      />
      {error && <p className="mt-1 !text-sm !text-red-500">{error}</p>}
    </div>
  );
};

export default FormSelectDropdown;
