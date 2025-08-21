"use client";
import React from "react";
import { FieldError } from "react-hook-form";

export interface InputPair {
    id: number;
    field1: string;
    field2: string;
}

interface RepeatableTwoInputFieldProps {
    value: InputPair[];
    onChange: (value: InputPair[]) => void;
    errors?: { field1?: FieldError; field2?: FieldError }[];
}

const RepeatableTwoInputField: React.FC<RepeatableTwoInputFieldProps> = ({
    value,
    onChange,
    errors = [],
}) => {
    const handleChange = (
        id: number,
        field: "field1" | "field2",
        fieldValue: string
    ) => {
        onChange(
            value.map((item) =>
                item.id === id ? { ...item, [field]: fieldValue } : item
            )
        );
    };

    const addField = () => {
        onChange([...value, { id: Date.now(), field1: "", field2: "" }]);
    };

    const removeField = (id: number) => {
        onChange(value.filter((item) => item.id !== id));
    };

    return (
        <div className="flex flex-col gap-4">
            {value.map((item, index) => {
                const isLast = index === value.length - 1;
                const error = errors[index] || {};

                return (
                    <div key={item.id} className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    value={item.field1}
                                    onChange={(e) =>
                                        handleChange(item.id, "field1", e.target.value)
                                    }
                                    placeholder="Field 1"
                                    className={`border rounded-md px-2 py-1 ${error.field1 ? "border-red-500" : ""
                                        }`}
                                />
                                {error.field1 && (
                                    <p className="text-red-500 text-xs">
                                        {error.field1.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    value={item.field2}
                                    onChange={(e) =>
                                        handleChange(item.id, "field2", e.target.value)
                                    }
                                    placeholder="Field 2"
                                    className={`border rounded-md px-2 py-1 ${error.field2 ? "border-red-500" : ""
                                        }`}
                                />
                                {error.field2 && (
                                    <p className="text-red-500 text-xs">
                                        {error.field2.message}
                                    </p>
                                )}
                            </div>

                            {/* Delete button */}
                            <button
                                type="button"
                                onClick={() => removeField(item.id)}
                                className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center"
                                disabled={value.length === 1}
                            >
                                -
                            </button>

                            {/* Add button only on last row */}
                            {isLast && (
                                <button
                                    type="button"
                                    onClick={addField}
                                    className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center"
                                >
                                    +
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RepeatableTwoInputField;
