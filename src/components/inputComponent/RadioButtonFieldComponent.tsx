"use client";
import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface RadioButtonFieldComponentProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    value: string | number;
    error?: string;
    classname?: string;
}

const RadioButtonFieldComponent = <T extends FieldValues>({
    name,
    control,
    label,
    value,
    error,
    classname,
}: RadioButtonFieldComponentProps<T>) => {
    return (
        <div className={`flex gap-3 items-center ${classname} w-full mb-4`}>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value: selectedValue } }) => (
                    <input
                        id={`${name}-${value}`}
                        type="radio"
                        value={value}
                        checked={selectedValue === value}
                        onChange={() => onChange(value)}
                        className={`h-5 w-5 appearance-none rounded border border-gray-400 checked:bg-[#4679B5] `}
                    />
                )}
            />

            {/* Label after radio button */}
            <label htmlFor={`${name}-${value}`} className="ml-2 text-sm font-medium text-black">
                {label}
            </label>

            {/* Error Message */}
            {error && <p className="ml-2 text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default RadioButtonFieldComponent;
