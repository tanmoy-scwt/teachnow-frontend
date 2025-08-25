
import DashboardClient from "@/components/layout/dashboardClient";
import React from "react";
import styles from "./dashboard.module.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { icon: "FiHome", label: "Dashboard", navLink: "/dashboard", active: true },
  { icon: "FiUser", label: "My Profile", navLink: "/dashboard/profile", active: false },
  { icon: "FiSearch", label: "Find Jobs", navLink: "/dashboard/jobs", active: false },
  { icon: "FiFileText", label: "Resume Builder", navLink: "/dashboard/resume-builder", active: false },
  { icon: "FiFolder", label: "CV Manager", navLink: "/dashboard/cv-manager", active: false },
  { icon: "FiVideo", label: "Video Resume", navLink: "/dashboard/video-resume", active: false },
  { icon: "FiSend", label: "Applied Jobs", navLink: "/dashboard/applied-jobs", active: false },
  { icon: "FiBookmark", label: "Saved Jobs", navLink: "/dashboard/saved-jobs", active: false },
  { icon: "FiLogOut", label: "Logout", navLink: "/", active: false },
];

const headerNavItems = [
  { itemName: "Find Jobs", navLinks: "/jobs" },
  { itemName: "Free Resume Builder", navLinks: "/resume-builder" },
  { itemName: "Teaching Resources", navLinks: "/teaching-resources" },
  { itemName: "Pricing", navLinks: "/pricing" },
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className={styles.dashboard}>
      {/* Client-side wrapper handles sidebar, mobile toggles, etc. */}
      <DashboardClient navigationItems={navigationItems} headerNavItems={headerNavItems}>
        <div className={styles.content}>{children}</div>
      </DashboardClient>
    </div>
  );
};

export default DashboardLayout;
