"use client";

import React, { useState, useEffect } from "react";
import {
    FiHome,
    FiUser,
    FiSearch,
    FiFileText,
    FiFolder,
    FiVideo,
    FiSend,
    FiBookmark,
    FiLogOut,
    FiMenu,
    FiX,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";
import styles from "./style.module.css";
import Logo from "@/components/ui/logo";
import UserCard from "@/components/ui/userCard";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardClientProps {
    children: React.ReactNode;
    navigationItems: { icon: string; label: string; navLink: string; active: boolean }[];
    headerNavItems: { navLinks: string; itemName: string; }[];
}

const iconMap: Record<string, React.ElementType> = {
    FiHome,
    FiUser,
    FiSearch,
    FiFileText,
    FiFolder,
    FiVideo,
    FiSend,
    FiBookmark,
    FiLogOut,
};

const DashboardClient: React.FC<DashboardClientProps> = ({
    children,
    navigationItems,
    headerNavItems,
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTopNavOpen, setIsTopNavOpen] = useState(false);
    const pathName = usePathname()

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleTopNav = () => setIsTopNavOpen(!isTopNavOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsMobileMenuOpen(false);
                setIsTopNavOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayVisible : ""
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Sidebar Drawer */}
            <aside
                className={`${styles.sidebar} ${styles.sidebarMobile} ${isMobileMenuOpen ? styles.sidebarMobileOpen : ""
                    }`}
            >
                <div className={styles.sidebarHeader}>
                    <Logo />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={styles.closeButton}
                    >
                        <FiX size={20} />
                    </button>
                </div>
                <nav className={styles.navigation}>
                    {navigationItems.map((item, index) => {
                        const Icon = iconMap[item.icon];
                        return (
                            <Link
                                key={index}
                                href={item?.navLink}
                                className={`${styles.navItem} ${pathName === item.navLink ? styles.navItemActive : ""
                                    }`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                <Icon className={styles.navIcon} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Desktop Sidebar */}
            <aside style={{ boxShadow: "0px 4px 36.6px 0px #0000001A" }} className={`${styles.sidebar} ${styles.sidebarDesktop}`}>
                <div className={styles.sidebarHeader}>
                    <Logo />
                </div>
                <nav className={styles.navigation}>
                    {navigationItems.map((item, index) => {
                        const Icon = iconMap[item.icon];
                        return (
                            <Link
                                key={index}
                                href={item?.navLink}
                                className={`${styles.navItem} ${pathName === item.navLink ? styles.navItemActive : ""
                                    }`}
                            >
                                <Icon className={styles.navIcon} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <header style={{ boxShadow: "0px 4px 36.6px 0px #0000001A" }} className={styles.header}>
                    <div className={styles.headerLeft}>
                        {/* Sidebar Button (mobile) */}
                        <button
                            className={styles.mobileMenuButton}
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>

                        {/* Mobile Logo */}
                        <div className={styles.mobileLogo}>
                            <Logo />
                        </div>

                        {/* Desktop Header Nav */}
                        <nav className={styles.headerNav}>
                            {headerNavItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item?.navLinks}
                                    className={styles.headerNavLink}
                                >
                                    {item?.itemName}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Top Nav Toggle */}
                        <div className={styles.mobileTopNavToggle}>
                            <button
                                className={styles.mobileMenuButton}
                                onClick={toggleTopNav}
                            >
                                {isTopNavOpen ? (
                                    <FiChevronUp size={20} />
                                ) : (
                                    <FiChevronDown size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* User Card */}
                    <UserCard
                        name="Krishna"
                        role="Admin"
                        image="/image/profile/p1.png"
                        isDropdownActive={true}
                        profileShape="rectangleCurve"
                    />
                </header>

                {/* Mobile Top Nav */}
                {isTopNavOpen && (
                    <div className={styles.mobileTopNav}>
                        <nav className="flex flex-col !p-4 space-y-3">
                            {headerNavItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item?.navLinks}
                                    className={styles.mobileTopNavLink}
                                >
                                    {item?.itemName}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}

                {children}
            </main>
        </>
    );
};

export default DashboardClient;
