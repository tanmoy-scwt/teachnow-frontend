// app/dashboard/DashboardLayout.tsx
import DashboardClient from "@/components/layout/dashboardClient";
import React from "react";
import styles from "./dashboard.module.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { icon: "FiHome", label: "Dashboard", active: true },
  { icon: "FiUser", label: "My Profile", active: false },
  { icon: "FiSearch", label: "Find Jobs", active: false },
  { icon: "FiFileText", label: "Resume Builder", active: false },
  { icon: "FiFolder", label: "CV Manager", active: false },
  { icon: "FiVideo", label: "Video Resume", active: false },
  { icon: "FiSend", label: "Applied Jobs", active: false },
  { icon: "FiBookmark", label: "Saved Jobs", active: false },
  { icon: "FiLogOut", label: "Logout", active: false },
];

const headerNavItems = [
  "Find Jobs",
  "Free Resume Builder",
  "Teaching Resources",
  "Pricing",
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
