"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const BreadCrumb = () => {
    const [pathArray, setPathArray] = useState<string[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname) {
            const paths = pathname
                .split("/")
                .filter((path) => path.length > 0);
            setPathArray(paths);
        }
    }, [pathname]);

    const buildHref = (index: number) => {
        return "/" + pathArray.slice(0, index + 1).join("/");
    };

    return (
        <nav aria-label="breadcrumb">
            {pathArray?.length > 0 && (
                <ul className={styles.breadcrumb}>
                    <li className="flex items-center">
                        <Link href="/" className={styles.breadcrumbLink}>
                            Home
                        </Link>
                        <TbArrowBadgeRightFilled />
                    </li>
                    {pathArray?.map((path, index) => {
                        const isLast = index === pathArray.length - 1;
                        return (
                            <li key={index} className="flex items-center">
                                <Link
                                    href={buildHref(index)}
                                    className={`${styles.breadcrumbLink} ${isLast ? styles.breadcrumbActive : ""
                                        }`}
                                >
                                    {decodeURIComponent(path)}
                                </Link>
                                {!isLast && <TbArrowBadgeRightFilled />}
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
};

export default BreadCrumb;
