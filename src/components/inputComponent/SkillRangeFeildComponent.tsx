import React, { useState, useRef, useEffect } from 'react';
import { Control, useController, FieldValues, Path } from 'react-hook-form';

interface SkillRangeFieldComponentProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: string[];
  disabled?: boolean;
  className?: string;
}

const SkillRangeFieldComponent = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  disabled = false,
  className = '',
}: SkillRangeFieldComponentProps<T>) => {
  const {
    field: { onChange, value = 0 },
  } = useController({ name, control });

  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [controlledValue, setControlledValue] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const latestOnChange = useRef<(value: number) => void>(() => {});

  const skillLevels = options.map((option, index) => ({
    value: (100 / (options.length - 1)) * index,
    label: option,
  }));

  // Sync internal controlledValue with form value
  useEffect(() => {
    setControlledValue(value);
  }, [value]);

  // Update latestOnChange ref so event handlers always call latest onChange
  useEffect(() => {
    latestOnChange.current = onChange;
  }, [onChange]);

  const getCurrentSkillLevel = (val: number) => {
    const segmentSize = 100 / (options.length - 1);
    const index = Math.round(val / segmentSize);
    return skillLevels[Math.min(index, options.length - 1)];
  };

  const getValueFromPosition = (clientX: number) => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    return Math.round(percentage);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || disabled) return;
      const newValue = getValueFromPosition(e.clientX);
      setControlledValue(newValue);
      latestOnChange.current?.(newValue);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setShowTooltip(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging, disabled]);

  const currentSkill = getCurrentSkillLevel(controlledValue);

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    e.preventDefault();
    setIsDragging(true);
    setShowTooltip(true);
  };

  const handleTrackMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    e.preventDefault();
    const newValue = getValueFromPosition(e.clientX);
    setControlledValue(newValue);
    onChange(newValue);
    setIsDragging(true);
    setShowTooltip(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    let newValue = controlledValue;
    const step = 100 / (options.length - 1);

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        newValue = Math.max(0, newValue - step);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        newValue = Math.min(100, newValue + step);
        break;
      case 'Home':
        newValue = 0;
        break;
      case 'End':
        newValue = 100;
        break;
      default:
        return;
    }

    e.preventDefault();
    const rounded = Math.round(newValue);
    setControlledValue(rounded);
    onChange(rounded);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="!mb-5">
        <label className="block text-sm font-medium text-black !mb-2">
          {label}{' '}
          <span className="font-bold text-[var(--primary-color)]">
            {currentSkill.label}
          </span>
        </label>
      </div>

      <div className="relative">
        <div
          className="relative h-2 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className={`
              absolute inset-0 bg-[#9BC9FF] rounded-full cursor-pointer
              transition-all duration-200 ease-out
              ${isHovered || isDragging ? 'h-3 -!mt-0.5' : 'h-2'}
              ${disabled ? 'cursor-not-allowed opacity-50' : ''}
            `}
            onMouseDown={handleTrackMouseDown}
          >
            {/* Fill */}
            <div
              className={`
                h-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] rounded-full
                transition-all duration-300 ease-out
                ${isDragging ? 'shadow-lg shadow-[var(--primary-color)]/30' : ''}
              `}
              style={{ width: `${controlledValue}%` }}
            />

            {/* Markers */}
            {skillLevels.map((level, index) => (
              <div
                key={index}
                className={`
                  absolute top-1/2 w-1 h-1 bg-white rounded-full
                  transform -translate-y-1/2 transition-all duration-200
                  ${controlledValue >= level.value ? 'opacity-100' : 'opacity-60'}
                `}
                style={{ left: `${level.value}%` }}
              />
            ))}
          </div>

          {/* Thumb */}
          <div
            className={`
              absolute top-1/2 w-5 h-5 bg-white border-2 border-[var(--primary-color)] rounded-full
              cursor-grab transform -translate-y-1/2 -translate-x-1/2
              transition-all duration-200 ease-out shadow-lg
              ${isDragging ? 'cursor-grabbing scale-110 shadow-xl shadow-[var(--primary-color)]' : ''}
              ${isHovered && !isDragging ? 'scale-105' : ''}
              ${disabled ? 'cursor-not-allowed opacity-50' : ''}
              focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2
            `}
            style={{ left: `${controlledValue}%` }}
            onMouseDown={handleThumbMouseDown}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => !isDragging && setShowTooltip(false)}
            onKeyDown={handleKeyDown}
            tabIndex={disabled ? -1 : 0}
            role="slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={controlledValue}
            aria-label={`${label}: ${currentSkill.label}`}
          >
            <div className={`absolute inset-0.5 bg-[var(--primary-color)] rounded-full`} />
            {showTooltip && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-[var(--primary-color)] text-white text-xs font-medium !px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                  {currentSkill.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--primary-color)]"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRangeFieldComponent;
