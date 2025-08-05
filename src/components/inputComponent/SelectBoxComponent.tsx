"use client"
import React from 'react';
import Select, { SingleValue } from 'react-select';

interface OptionType {
    label: string;
    value: string | number;
}

interface SelectBoxComponentProps {
    options: OptionType[];
    value: OptionType | null;
    onChange: (selectedOption: OptionType | null) => void;
    name?: string;
    placeholder?: string;
    className?: string;
    classNamePrefix?: string;
    isDisabled?: boolean;
    isClearable?: boolean;
    isSearchable?: boolean;
}

const SelectBoxComponent: React.FC<SelectBoxComponentProps> = ({
    options,
    value,
    onChange,
    name,
    placeholder = 'Select...',
    className,
    classNamePrefix,
    isDisabled = false,
    isClearable = false,
    isSearchable = true,
}) => {
    return (
        <Select
            options={options}
            value={value}
            onChange={(option) => onChange(option as SingleValue<OptionType>)}
            name={name}
            placeholder={placeholder}
            className={className}
            classNamePrefix={classNamePrefix}
            isDisabled={isDisabled}
            isClearable={isClearable}
            isSearchable={isSearchable}
        />
    );
};

export default SelectBoxComponent;
