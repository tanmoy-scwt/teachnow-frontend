"use client";

import React, { memo, useState } from "react";
import styles from "./style.module.css";
import ButtonRound from "@/components/ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { generateQueryFromFilters } from "@/utils/generateQueryFromFilters";

const jobTitles = [
    "Software Engineer",
    "Product Manager",
    "Data Analyst",
    "UX/UI Designer",
    "Frontend Developer",
    "Backend Developer",
    "Digital Marketing Specialist",
    "DevOps Engineer",
    "QA Tester",
    "Technical Support Engineer",
];

const jobLocations = [
    "New York, NY",
    "San Francisco, CA",
    "London, UK",
    "Berlin, Germany",
    "Toronto, Canada",
    "Sydney, Australia",
    "Bangalore, India",
    "Singapore",
    "Dubai, UAE",
    "Remote",
];

const filterList = (list: string[], input: string): string[] =>
    list.filter((item) => item.toLowerCase().includes(input.toLowerCase()));

const SearchBox = ({ className }: { className?: string }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [jobTitleValue, setJobTitleValue] = useState(searchParams.get("title") || "");
    const [locationValue, setLocationValue] = useState(searchParams.get("location") || "");
    const [filteredJobTitle, setFilteredJobTitle] = useState<string[]>([]);
    const [filteredLocation, setFilteredLocation] = useState<string[]>([]);
    const [isJobTitleDropdownActive, setJobTitleDropdownActive] = useState(false);
    const [isLocationDropdownActive, setLocationDropdownActive] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: "jobTitle" | "location") => {
        const value = e.target.value;
        if (type === "jobTitle") {
            setJobTitleValue(value);
            setFilteredJobTitle(filterList(jobTitles, value));
            setJobTitleDropdownActive(value.length > 0);
        } else {
            setLocationValue(value);
            setFilteredLocation(filterList(jobLocations, value));
            setLocationDropdownActive(value.length > 0);
        }
        if (type === "jobTitle" && value?.length === 0) {
            const searchQuery = {
                title: null,
                location: locationValue || null
            };
            const newQuery = generateQueryFromFilters(searchParams, searchQuery);
            router.push(`${pathname}?${newQuery}`);
        }
        if (type === "location" && value?.length === 0) {
            const searchQuery = {
                title: jobTitleValue || null,
                location: null
            };
            const newQuery = generateQueryFromFilters(searchParams, searchQuery);
            router.push(`${pathname}?${newQuery}`);
        }
    };

    const handleSearchButton = () => {
        const searchQuery = {
            title: jobTitleValue || null,
            location: locationValue || null
        };
        const newQuery = generateQueryFromFilters(searchParams, searchQuery);
        router.push(`${pathname}?${newQuery}`);
    }

    const renderDropdown = (
        list: string[],
        onSelect: (val: string) => void,
        isActive: boolean,
        keyPrefix: string
    ) => {
        if (!isActive) return null;

        return (
            <div className={styles.filteredDropDown}>
                <ul>
                    {list?.length > 0 ? (
                        list?.map((item, index) => (
                            <li
                                key={`${keyPrefix}-${index}`}
                                onMouseDown={() => onSelect(item)}
                                onTouchStart={() => onSelect(item)}
                            >
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="text-center">No Search Found</li>
                    )}
                </ul>
            </div>
        );
    };
    return (
        <div className={`${styles.searchBoxContainer} ${className}`}>
            <div className={styles.inputContainer}>
                <div className={styles.searchBoxInputWrapper}>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Job Title"
                            autoComplete="off"
                            value={jobTitleValue}
                            onChange={(e) => handleInputChange(e, "jobTitle")}
                            onFocus={() => {
                                setJobTitleDropdownActive(true);
                                setFilteredJobTitle(jobTitles);
                            }}
                            onBlur={() => setTimeout(() => setJobTitleDropdownActive(false), 100)}
                        />
                        {renderDropdown(filteredJobTitle, setJobTitleValue, isJobTitleDropdownActive, "jobTitle")}
                    </div>
                </div>
                <div className={styles.searchBoxInputWrapper}>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Location"
                            autoComplete="off"
                            value={locationValue}
                            onChange={(e) => handleInputChange(e, "location")}
                            onFocus={() => {
                                setLocationDropdownActive(true);
                                setFilteredLocation(jobLocations);
                            }}
                            onBlur={() => setTimeout(() => setLocationDropdownActive(false), 100)}
                        />
                        {renderDropdown(filteredLocation, setLocationValue, isLocationDropdownActive, "jobLocation")}
                    </div>
                </div>
            </div>

            <div className={styles.searchBtn}>
                <ButtonRound type="button" name="Search" className="bgFilled" action={handleSearchButton} />
            </div>
        </div>
    );
};

export default memo(SearchBox);
