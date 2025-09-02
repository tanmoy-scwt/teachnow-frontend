// components/A4Paper.tsx
"use client";
import React from "react";

const A4Paper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-[210mm] max-w-full h-[297mm] max-h-screen bg-white shadow-xl rounded-lg p-6 mx-auto my-4 flex flex-col">
      {children}
    </div>
  );
};

export default A4Paper;
