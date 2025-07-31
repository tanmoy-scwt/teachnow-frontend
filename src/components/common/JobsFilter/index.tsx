"use client"
import CheckboxComponent from '@/components/inputComponent/CheckboxComponent';
import React, { useEffect, useState, useCallback } from 'react'
import style from './style.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { generateQueryFromFilters } from '@/utils/generateQueryFromFilters';

export const filterOptions = [
    {
        paramKey: "job_type",
        groupLabel: "Job type",
        options: [
            { label: "Full-time", value: "full_time" },
            { label: "Part-time", value: "part_time" },
            { label: "Contract", value: "contract" },
            { label: "Freelancer", value: "freelancer" },
            { label: "Internship", value: "internship" },
        ],
    },
    {
        paramKey: "work_type",
        groupLabel: "Work type",
        options: [
            { label: "None", value: "none" },
            { label: "Hybrid", value: "hybrid" },
            { label: "In Office", value: "in_office" },
            { label: "Remote", value: "remote" },
            { label: "On-Site", value: "on_site" },
        ],
    },
    {
        paramKey: "salary_type",
        groupLabel: "Salary Type",
        options: [
            { label: "None", value: "none" },
            { label: "Monthly", value: "monthly" },
            { label: "Hourly", value: "hourly" },
        ],
    },
];

type FiltersState = {
    job_type: string[];
    work_type: string[];
    salary_type: string[];
};

const JobsFilter = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const initializeFilters = (): FiltersState => {
        return {
            job_type: searchParams.get("job_type")?.split(",").filter(Boolean) || [],
            work_type: searchParams.get("work_type")?.split(",").filter(Boolean) || [],
            salary_type: searchParams.get("salary_type")?.split(",").filter(Boolean) || []
        };
    };

    const [filters, setFilters] = useState<FiltersState>(initializeFilters);

    const handleFilterChange = useCallback((paramKey: keyof FiltersState, value: string, isChecked: boolean) => {
        setFilters(prev => {
            const currentValues = [...prev[paramKey]];
            const valueIndex = currentValues.indexOf(value);

            if (isChecked && valueIndex === -1) { currentValues.push(value) }
            else if (!isChecked && valueIndex !== -1) { currentValues.splice(valueIndex, 1) }
            return {
                ...prev,
                [paramKey]: currentValues
            };
        });
    }, []);

    useEffect(() => {
        const filterQuery: Record<string, string[] | null> = {
            job_type: filters.job_type.length ? filters.job_type : null,
            work_type: filters.work_type.length ? filters.work_type : null,
            salary_type: filters.salary_type.length ? filters.salary_type : null
        };
        const query = generateQueryFromFilters(searchParams, filterQuery);
        if (query !== searchParams.toString()) {
            router.push(`${pathname}?${query}`);
        }

    }, [filters, pathname, router, searchParams]);

    return (
        <div className={style.jobsFilterContainer}>
            <div className='flex flex-col gap-6'>
                {filterOptions?.map((group) => (
                    <div key={group.paramKey} className='flex flex-col gap-4'>
                        <label className={style.filterOptionLabel}>{group.groupLabel}</label>
                        <div className='flex flex-col mt-2'>
                            {group.options.map((option) => (
                                <CheckboxComponent
                                    key={`${group.paramKey}-${option.value}`}
                                    checked={filters[group.paramKey as keyof FiltersState].includes(option.value)}
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
    )
}

export default JobsFilter