"use client";
import React from "react";
import {
    Controller,
    Control,
    FieldValues,
    Path,
} from "react-hook-form";

interface ToggleFieldComponentProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    error?: string;
    classname?: string;
}

const ToggleFieldComponent = <T extends FieldValues>({
    name,
    control,
    label,
    error,
    classname,
}: ToggleFieldComponentProps<T>) => {
    return (
        <div className={`flex ${classname} w-full mb-4`}>
            {/* Label */}
            <label
                htmlFor={name}
                className="text-sm font-medium text-black mb-1"
            >
                {label}
            </label>

            {/* Toggle */}
            <Controller
                name={name}
                control={control}
                render={({ field: { value, onChange } }) => (
                    <button
                        type="button"
                        onClick={() => onChange(!value)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 ${value ? "bg-[#4679B5]" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full transition-transform duration-300 ${value ? "bg-white  translate-x-4" : "bg-[#4679B5] translate-x-1"
                                }`}
                        />
                    </button>
                )}
            />

            {/* Error Message */}
            {error && <p className="mt-1 !text-xs !text-red-500">{error}</p>}
        </div>
    );
};

export default ToggleFieldComponent;
