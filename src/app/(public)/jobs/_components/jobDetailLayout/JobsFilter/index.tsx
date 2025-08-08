"use client";

import CheckboxComponent from '@/components/inputComponent/CheckboxComponent';
import React, { useEffect, useState, useCallback } from 'react';
import style from './style.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { generateQueryFromFilters } from '@/utils/generateQueryFromFilters';

export const filterOptions = [
    {
        paramKey: "job-type",
        groupLabel: "Job type",
        options: [
            { label: "Full-time", value: "full-time" },
            { label: "Part-time", value: "part-time" },
            { label: "Contract", value: "contract" },
            { label: "Freelancer", value: "freelancer" },
            { label: "Internship", value: "internship" },
        ],
    },
    {
        paramKey: "work-type",
        groupLabel: "Work type",
        options: [
            { label: "None", value: "none" },
            { label: "Hybrid", value: "hybrid" },
            { label: "In Office", value: "in-office" },
            { label: "Remote", value: "remote" },
            { label: "On-Site", value: "on_site" },
        ],
    },
    {
        paramKey: "salary-type",
        groupLabel: "Salary Type",
        options: [
            { label: "None", value: "none" },
            { label: "Monthly", value: "monthly" },
            { label: "Hourly", value: "hourly" },
        ],
    },
];

type FiltersState = {
    "job-type": string;
    "work-type": string;
    "salary-type": string;
};

const JobsFilter = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const initializeFilters = (): FiltersState => {
        return {
            "job-type": searchParams.get("job-type")?.split(",")[0] || '',
            "work-type": searchParams.get("work-type")?.split(",")[0] || '',
            "salary-type": searchParams.get("salary-type")?.split(",")[0] || ''
        };
    };

    const [filters, setFilters] = useState<FiltersState>(initializeFilters);

    const handleFilterChange = useCallback((paramKey: keyof FiltersState, value: string, isChecked: boolean) => {
        setFilters(prev => ({
            ...prev,
            [paramKey]: isChecked ? value : ''
        }));
    }, []);

    useEffect(() => {
        const filterQuery: Record<string, string[] | null> = {
            "job-type": filters["job-type"] ? [filters["job-type"]] : null,
            "work-type": filters["work-type"] ? [filters["work-type"]] : null,
            "salary-type": filters["salary-type"] ? [filters["salary-type"]] : null
        };

        const query = generateQueryFromFilters(searchParams, filterQuery);
        if (query !== searchParams.toString()) {
            router.push(`${pathname}?${query}`);
        }
    }, [filters, pathname, router, searchParams]);

    return (
        <div className={style.jobsFilterContainer}>
            <div className="flex flex-col gap-6 overflow-y-auto overflow-x-hidden">
                {filterOptions.map((group) => (
                    <div key={group.paramKey} className='flex flex-col gap-4'>
                        <label className={style.filterOptionLabel}>{group.groupLabel}</label>
                        <div className='flex flex-col mt-2'>
                            {group.options.map((option) => (
                                <CheckboxComponent
                                    key={`${group.paramKey}-${option.value}`}
                                    checked={filters[group.paramKey as keyof FiltersState] === option.value}
                                    onChange={(e) => handleFilterChange(
                                        group.paramKey as keyof FiltersState,
                                        option.value,
                                        e.target.checked
                                    )}
                                    label={option.label}
                                    name={option.value}
                                    className={style.checkboxCSS}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobsFilter;
