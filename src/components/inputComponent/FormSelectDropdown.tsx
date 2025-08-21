"use client";
import React from "react";
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
          <select
            {...field}
            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${error
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-400"
              }`}
          >
            <option value="">Select {label}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormSelectDropdown;
