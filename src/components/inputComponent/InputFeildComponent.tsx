"use client";
import React from "react";
import { Controller } from "react-hook-form";

interface InputFieldComponentProps {
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  type?: string;
  rules?: object;
  error?: string;
}

const InputFieldComponent: React.FC<InputFieldComponentProps> = ({
  name,
  control,
  label,
  placeholder,
  type = "text",
  rules,
  error,
}) => {
  return (
    <div className="flex flex-col w-full mb-4">
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-800 mb-1"
      >
        {label} <span className="text-red-500">*</span>
      </label>

      {/* Input field */}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            className={`w-full rounded-md border px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
        )}
      />

      {/* Error Message */}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputFieldComponent;
