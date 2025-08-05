"use client";
import React, { memo, useMemo } from 'react';

interface CheckboxComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
    value,
    checked,
    onChange,
    label,
    disabled = false,
    required = false,
    id,
    name,
    className = '',
    ...props
}) => {
    const checkboxId = useMemo(() =>
        id || name || `checkbox-${Math.random().toString(36).slice(2, 11)}`,
        [id, name]
    );

    return (
        <div className={`checkbox-container ${className}`}>
            <div className="checkbox-wrapper flex items-center gap-2">
                <input
                    type="checkbox"
                    id={checkboxId}
                    value={value}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    {...props}
                />
                <span className="checkbox-custom" />
                {label && (
                    <label
                        htmlFor={checkboxId}
                        className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-800'} select-none cursor-pointer`}
                    >
                        {label} {required && <span className="text-red-500">*</span>}
                    </label>
                )}
            </div>
        </div>
    );
};

const MemoizedCheckboxComponent = memo(CheckboxComponent);
MemoizedCheckboxComponent.displayName = "CheckboxComponent";

export default MemoizedCheckboxComponent;
