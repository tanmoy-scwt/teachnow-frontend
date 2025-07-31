import React, { useMemo } from 'react';

interface CheckboxComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = React.memo(({
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
            <label htmlFor={checkboxId} className="checkbox-wrapper">
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
                        className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-800'} select-none`}
                    >
                        {label} {required && <span className="text-red-500">*</span>}
                    </label>
                )}
            </label>
        </div>
    );
});

export default CheckboxComponent;