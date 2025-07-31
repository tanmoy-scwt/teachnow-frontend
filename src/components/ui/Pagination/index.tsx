"use client";

import React, { useMemo } from "react";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import styles from "./style.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { generateQueryFromFilters } from "@/utils/generateQueryFromFilters";

interface PaginationProps {
    activePage: number;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
    activePage = 1,
    totalPages = 1,
}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const generatePages = useMemo(() => {
        const pages: (number | "...")[] = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (activePage <= 3) {
                pages.push(1, 2, 3, "...", totalPages);
            } else if (activePage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(
                    1,
                    "...",
                    activePage - 1,
                    activePage,
                    activePage + 1,
                    "...",
                    totalPages
                );
            }
        }

        return pages;
    }, [activePage, totalPages]);

    const createPageUrl = (page: number) => {
        const query = generateQueryFromFilters(searchParams, { "page": page.toString() });
        return `${pathname}?${query}`;
    };

    return (
        <div className={styles.paginationContainer} role="navigation" aria-label="Pagination">
            <Link
                className={`${styles.iconButton} ${activePage === 1 ? styles.disabled : ''}`}
                href={createPageUrl(Math.max(1, activePage - 1))}
                aria-disabled={activePage === 1}
                scroll={false}
            >
                <FiArrowDownLeft aria-hidden="true" />
                <span className="sr-only">Previous Page</span>
            </Link>

            {generatePages.map((page, idx) =>
                page === "..." ? (
                    <span key={`ellipsis-${idx}`} className={styles.ellipsis}>
                        ...
                    </span>
                ) : (
                    <Link
                        key={`page-${page}`}
                        href={createPageUrl(page)}
                        className={`${styles.pageNumber} ${page === activePage ? styles.active : ""
                            }`}
                        scroll={false}
                    >
                        {page}
                    </Link>
                )
            )}

            <Link
                className={`${styles.iconButton} ${activePage === totalPages ? styles.disabled : styles.iconActive
                    }`}
                href={createPageUrl(Math.min(totalPages, activePage + 1))}
                aria-disabled={activePage === totalPages}
                scroll={false}
            >
                <FiArrowUpRight aria-hidden="true" />
                <span className="sr-only">Next Page</span>
            </Link>
        </div>
    );
};

export default Pagination;