"use client";

import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

interface UserCardProps {
  name: string;
  role: string;
  image: string;
  isDropdownActive?: boolean;
  imageSize?: number;
  profileShape?: "circle" | "rectangleCurve";
  onDropdown?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  role,
  image,
  isDropdownActive = false,
  imageSize = 40,
  profileShape = "circle",
  onDropdown,
}) => {
  return (
    <div className="flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-gray-100">
      {/* User Image */}
      <div
        className="relative"
        style={{ width: imageSize, height: imageSize }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className={
            profileShape === "circle"
              ? "rounded-full object-cover"
              : "rounded-lg object-cover"
          }
          sizes={`${imageSize}px`}
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900">{name}</span>
        <span className="text-sm text-gray-500">{role}</span>
      </div>

      {/* Dropdown Wrapper */}
      {isDropdownActive && (
        <div className="relative">
          <FaChevronDown
            className={`w-4 h-4 ml-2 transition-transform`}
            //   className={`w-4 h-4 ml-2 transition-transform ${
            //     isDropdownActive ? "rotate-180 text-gray-900" : "text-gray-600"
            //   }`}
            onClick={onDropdown}
          />
        </div>
      )}

    </div>
  );
};

export default UserCard;
