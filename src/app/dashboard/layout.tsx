"use client";

import React, { useState } from "react";
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
} from "react-icons/fi";
import styles from "./dashboard.module.css";
import Logo from "@/components/ui/logo";
import UserCard from "@/components/ui/userCard";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { icon: FiHome, label: "Dashboard", active: true },
  { icon: FiUser, label: "My Profile", active: false },
  { icon: FiSearch, label: "Find Jobs", active: false },
  { icon: FiFileText, label: "Resume Builder", active: false },
  { icon: FiFolder, label: "CV Manager", active: false },
  { icon: FiVideo, label: "Video Resume", active: false },
  { icon: FiSend, label: "Applied Jobs", active: false },
  { icon: FiBookmark, label: "Saved Jobs", active: false },
  { icon: FiLogOut, label: "Logout", active: false },
];

const headerNavItems = [
  "Find Jobs",
  "Free Resume Builder",
  "Teaching Resources",
  "Pricing",
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.dashboard}>
      {/* Mobile Overlay */}
      <div
        className={`${styles.overlay} ${
          isMobileMenuOpen ? styles.overlayVisible : ""
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`${styles.sidebar} ${styles.sidebarMobile} ${
          isMobileMenuOpen ? styles.sidebarMobileOpen : ""
        }`}
      >
        <Logo />

        {/* <div className={styles.sidebarHeader}>
          <div className={styles.logo}>TeachNow</div>
        </div> */}

        <nav className={styles.navigation}>
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href="#"
                className={`${styles.navItem} ${
                  item.active ? styles.navItemActive : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                }}
              >
                <Icon className={styles.navIcon} />
                {item.label}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>TeachNow</div>
        </div>

        <nav className={styles.navigation}>
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href="#"
                className={`${styles.navItem} ${
                  item.active ? styles.navItemActive : ""
                }`}
                onClick={(e) => e.preventDefault()}
              >
                <Icon className={styles.navIcon} />
                {item.label}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            <nav className={styles.headerNav}>
              {headerNavItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={styles.headerNavLink}
                  onClick={(e) => e.preventDefault()}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <UserCard
            name="Krishna"
            role="Admin"
            image="/image/profile/p1.png" // place image in /public folder
            isDropdownActive = {true}
            profileShape="rectangleCurve"
          />
        </header>

        {/* Children Content */}
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
