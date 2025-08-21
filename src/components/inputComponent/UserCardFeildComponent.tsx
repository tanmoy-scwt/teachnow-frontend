"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { MdEditSquare } from "react-icons/md";

interface UserCardFeildComponentProps {
    name: string;
    email: string;
    imageUrl: string;
    showsPencil?: boolean;
    editable?: boolean;
}

const UserCardFeildComponent: React.FC<UserCardFeildComponentProps> = ({
    name,
    email,
    imageUrl,
    showsPencil = false,
    editable = false,
}) => {
    const [previewUrl, setPreviewUrl] = useState(imageUrl); // ✅ Local state for preview
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const newUrl = URL.createObjectURL(file);
            setPreviewUrl(newUrl);
        }
    };

    const handlePencilClick = () => {
        if (editable && fileInputRef.current) {
            fileInputRef.current.click(); // ✅ Open file picker
        }
    };

    return (
        <div className="flex items-center gap-3">
            {/* Profile Image */}
            <div className="relative">
                <div className="relative w-[90px] h-[90px] rounded-full overflow-hidden">
                    <Image
                        src={previewUrl}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* ✅ Pencil Button if enabled */}
                {showsPencil && (
                    <button
                        type="button"
                        onClick={handlePencilClick}
                        className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-200 text-white shadow hover:bg-[#a6cfff] transition"
                    >
                        <MdEditSquare size={18} color="#4679B5" />
                    </button>
                )}

                {/* Hidden File Input */}
                {editable && (
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                )}
            </div>

            {/* User Info */}
            <div>
                <h4 className="text-sm font-semibold text-gray-900">{name}</h4>
                <p className="text-xs text-gray-500">{email}</p>
            </div>
        </div>
    );
};

export default UserCardFeildComponent;
