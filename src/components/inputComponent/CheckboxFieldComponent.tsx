"use client";
import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface CheckboxFieldComponentProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    error?: string;
    classname?: string;
}

const CheckboxFieldComponent = <T extends FieldValues>({
    name,
    control,
    label,
    error,
    classname,
}: CheckboxFieldComponentProps<T>) => {
    return (
        <div className={`flex gap-3 items-center ${classname} w-full mb-4`}>
            <Controller
                name={name}
                control={control}
                render={({ field: { value, onChange } }) => (
                    <input
                        id={name}
                        type="checkbox"
                        checked={!!value}
                        onChange={(e) => onChange(e.target.checked)}
                        className={`h-6 w-6 appearance-none rounded-[8px] border border-gray-300 checked:bg-[#4679B5] checked:border-[#4679B5] checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-sm checked:after:leading-[1rem] checked:after:font-bold flex items-center justify-center`}
                    />
                )}
            />

            {/* Label after checkbox */}
            <label htmlFor={name} className="ml-2 text-sm font-medium text-[#B1B1B1]">
                {label}
            </label>

            {/* Error Message */}
            {error && <p className="ml-2 text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default CheckboxFieldComponent;
