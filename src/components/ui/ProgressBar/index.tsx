"use client";
import React from "react";

interface ProgressBarProps {
  percentage: number;
  height?: number; // in px
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, height = 20, className }) => {
  const safePercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div
      className={`w-full rounded-full bg-[#9BC9FF] overflow-hidden ${className}`}
      style={{ height: `${height}px` }} // 👈 dynamic height in px
    >
      <div
        className="rounded-full bg-[#4679B5] transition-all duration-300 ease-in-out h-full"
        style={{ width: `${safePercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
