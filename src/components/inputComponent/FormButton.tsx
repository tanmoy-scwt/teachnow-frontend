import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineArrowOutward } from "react-icons/md";

type FormButtonProps = {
  isSubmitting?: boolean;
  buttonVariant: "filled" | "outlined";
  title: string;
  buttonType: "button" | "submit" | "reset";
  submittingMessage?: string;
};

const FormButton = ({
  isSubmitting = false,
  submittingMessage = "Submitting...",
  buttonVariant,
  buttonType = "submit",
  title,
}: FormButtonProps) => {
  return (
    <div>
      <button
        type={buttonType}
        disabled={isSubmitting}
        className={`flex gap-2 box-hover border capitalize items-center !pl-6 ${isSubmitting ? "!pr-3" : "!pr-2"} !py-2 rounded-[50px] transition-all duration-300 ease-in-out
    ${
      isSubmitting
        ? "bg-gray-300 border-gray-300 text-gray-500 !cursor-not-allowed"
        : buttonVariant === "filled"
        ? "bg-[#9BC9FF] border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[#77b4ff] hover:text-white"
        : "border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[#88bcf7] hover:text-white"
    }
  `}
      >
        <span
          className={`transition-all !px-2 ${isSubmitting ? "animate-pulse" : ""}`}
        >
          {isSubmitting ? submittingMessage : title}
        </span>

        {!isSubmitting ? (
          <MdOutlineArrowOutward
            size={30}
            color="#ffffff"
            className={`rounded-full !p-1 transition-transform duration-500 ${
              isSubmitting
                ? "bg-gray-400 animate-spin"
                : "bg-[var(--primary-color)]"
            }`}
          />
        ) : (
          <GiSandsOfTime
            className="text-[var(--primary-color)] animate-spin"
            size={20} // you can adjust size
            aria-label="loading"
          />
        )}
      </button>
    </div>
  );
};

export default FormButton;
