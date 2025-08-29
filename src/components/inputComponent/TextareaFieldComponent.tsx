"use client";
import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface TextareaFieldComponentProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  rows?: number;
  error?: string;
  isRequired?: boolean;
}

const TextareaFieldComponent = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  rows = 4,
  isRequired = true,
  error,
}: TextareaFieldComponentProps<T>) => {
  return (
    <div className="flex flex-col w-full">
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-800 !mb-1"
      >
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>

      {/* Textarea field */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            id={name}
            rows={rows}
            placeholder={placeholder}
            className={`w-full bg-white rounded-[12px] border border-[#B1B1B1] !px-4 !py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-[#9BC9FF]"
            }`}
          />
        )}
      />

      {/* Error Message */}
      {error && <p className="mt-1 !text-xs !text-red-500">{error}</p>}
    </div>
  );
};

export default TextareaFieldComponent;
