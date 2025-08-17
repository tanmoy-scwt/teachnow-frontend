import React from "react";

type ToggleSwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ value, onChange }) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 ${
        value ? "bg-[#4679B5]" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
          value ? "translate-x-4" : "translate-x-1"
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;
