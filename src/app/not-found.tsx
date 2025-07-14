"use client";
import ButtonRound from "@/components/ui/button";
import Container from "@/components/ui/container";
import FiveCircleLoader from "@/components/ui/spinner/loader";
import { MdHomeFilled } from "react-icons/md";

export default function NotFound() {
    return (
        <div className="w-full flex flex-col gap-2 items-center relative top-20">
            <Container>
                <div className="w-full flex flex-col gap-6 items-center">
                    <div className="flex items-center flex-col">
                        <div className="w-24  mx-auto mb-6 animate-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-black text-gray-500 mb-2">
                            404
                        </h1>
                    </div>
                    <div className="text-center flex flex-col gap-1">
                        <h2 className="text-2xl sm:text-3xl text-gray-500 font-extrabold mb-4 flex items-center justify-center gap-1">
                            Lost in the clouds ?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 mb-6 px-4 sm:px-0">
                            The page you're looking for isn't here. It may have moved or never existed.
                        </p>
                    </div>

                    <ButtonRound
                        name="Back to Home Screen"
                        goTo="/"
                        icon={<MdHomeFilled size={28} className="ml-2 text-blue-400" />}
                        className="bgFilled"
                    />
                </div>
                <FiveCircleLoader />
            </Container>
        </div>
    );
}
