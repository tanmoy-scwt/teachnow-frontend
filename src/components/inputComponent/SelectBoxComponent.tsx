import React from 'react';
import dynamic from 'next/dynamic';
import { Props as SelectProps } from 'react-select';

const Select = dynamic(() => import('react-select'), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

interface Option {
    label: string;
    value: string | number;
}

interface SelectBoxProps extends Partial<SelectProps> {
    options: Option[];
    value: Option | Option[] | null;
    onChange: (value: any) => void;
    placeholder?: string;
    isMulti?: boolean;
    isDisabled?: boolean;
    name?: string;
    onBlur?: () => void;
    error?: string;
    className?: string;
}

const SelectBoxComponent: React.FC<SelectBoxProps> = ({
    options,
    value,
    onChange,
    placeholder = 'Select...',
    isMulti = false,
    isDisabled = false,
    name,
    onBlur,
    error,
    className,
}) => {
    return (
        <div>
            <Select
                inputId={name}
                name={name}
                isMulti={isMulti}
                isDisabled={isDisabled}
                options={options}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={className}
                placeholder={placeholder}
                classNamePrefix="react-select"
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default SelectBoxComponent;
