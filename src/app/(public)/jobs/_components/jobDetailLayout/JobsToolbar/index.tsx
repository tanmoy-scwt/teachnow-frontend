"use client"
import SelectBoxShimmer from '@/components/ui/shimmers/SelectBoxShimmer';
import React, { useEffect, useState, useCallback } from 'react';
import style from '../style.module.css'
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { generateQueryFromFilters } from "@/utils/generateQueryFromFilters";
import { BiMenuAltLeft } from 'react-icons/bi';
import MobileFilterDrawer from '../mobileFilterDrawer';
import dynamic from 'next/dynamic';
const SelectBoxComponent = dynamic(() => import('@/components/inputComponent/SelectBoxComponent'), {
    ssr: false, loading: () => <SelectBoxShimmer shimmerCSS={`${style.shimmerSelectBoxCSS}`} />
})

type OptionType = {
    label: string;
    value: string | number;
};

const SORT_OPTIONS: OptionType[] = [
    { label: 'Default', value: 'default' },
    { label: 'Latest', value: 'latest' },
    { label: 'Oldest', value: 'oldest' },
];

const PER_PAGE_OPTIONS: OptionType[] = [
    { label: '10 per page', value: 10 },
    { label: '20 per page', value: 20 },
    { label: '50 per page', value: 50 },
];

interface JobsToolbarProps {
    total?: number;
    page?: number;
    perPage?: number;
}

const JobsToolbar = ({ total = 184, page = 1, perPage = 10 }: JobsToolbarProps) => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const start = (page - 1) * perPage + 1;
    const end = Math.min(page * perPage, total);

    const [selectedPerPageOption, setSelectedPerPageOption] = useState<OptionType | null>(null);
    const [selectedSortOption, setSelectedSortOption] = useState<OptionType | null>(null);
    const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
    useEffect(() => {
        const sortParam = searchParams.get("sort");
        const perPageParam = searchParams.get("perPage");
        if (sortParam) setSelectedSortOption(SORT_OPTIONS.find(option => option.value === sortParam) || null);
        if (perPageParam) setSelectedPerPageOption(PER_PAGE_OPTIONS.find(option => option.value === +perPageParam) || null);

    }, [searchParams]);
    useEffect(() => {
        const searchQuery = {
            perPage: selectedPerPageOption?.value?.toString() || null,
            sort: selectedSortOption?.value?.toString() || null
        };
        const query = generateQueryFromFilters(searchParams, searchQuery);
        router.push(`${pathName}?${query}`);
    }, [selectedPerPageOption, selectedSortOption, searchParams, pathName, router]);

    const handlePerPageChange = useCallback((option: OptionType | null) => {
        setSelectedPerPageOption(option);
    }, []);

    const handleSortChange = useCallback((option: OptionType | null) => {
        setSelectedSortOption(option);
    }, []);

    return (
        <div className={`${style.toolbarWrapper} flex items-center justify-between gap-4`}>
            <div className='flex items-center gap-4'>
                <button
                    className="block lg:hidden bg-white border border-[#4679B5] rounded-lg px-4 py-2 shadow-inner hover:shadow-md active:translate-y-[1px] active:shadow-sm transition-all duration-150"
                    onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                >
                    <BiMenuAltLeft size={30} color="#4679B5" />
                </button>
                <p className={`text-gray-800 font-medium`}>
                    Showing {start}–{end} of {total} jobs
                </p>
            </div>
            <div className={`${style.selectBoxJobsToolBarWrapper} selectBoxCSS flex gap-2`}>
                <SelectBoxComponent
                    options={SORT_OPTIONS}
                    value={selectedSortOption}
                    onChange={handleSortChange}
                    placeholder='Default'
                    name="sort"
                    className="react-select"
                    classNamePrefix="react-select"
                />
                <SelectBoxComponent
                    options={PER_PAGE_OPTIONS}
                    value={selectedPerPageOption}
                    onChange={handlePerPageChange}
                    placeholder='10 Per Page'
                    name="perPage"
                    className="react-select"
                    classNamePrefix="react-select"
                />

                <MobileFilterDrawer
                    open={mobileFilterOpen}
                    setOpen={setMobileFilterOpen}
                />

            </div>

        </div>
    );
};

export default JobsToolbar;