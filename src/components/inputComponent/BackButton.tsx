"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { usePathname } from "next/navigation";

interface BackButtonProps {
  href?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href= "", className }) => {
  const [backPage , setBackPage] = useState<string | null>(null);
  const pathname = usePathname();
  console.log(pathname.includes("template/"));
  useEffect(()=>{
    if (pathname.includes("template/")) {
      // Do something specific for template routes
      setBackPage("/dashboard/resume-builder");
    }else{
      setBackPage(pathname);
    }
  },[pathname])
  // console.log(pathname, "pathname");
  
  return (
    <div className="!my-3 !mb-6">
      <Link
        href={backPage || href}
        className={`flex items-center justify-center rounded-full bg-[#9BC9FF] !py-[clamp(4px,1.5vh,16px)] 
  !px-[clamp(25px,2vw,32px)] hover:bg-[#89b8f0] transition-colors duration-300 ${className} !transition-all !duration-300 hover:scale-105`}
      >
        <IoArrowBack className="text-white text-xl" />
      </Link>
    </div>
  );
};

export default BackButton;
