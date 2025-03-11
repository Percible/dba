import React from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Server,
  Activity,
  Gauge,
  Database,
  AlertTriangle,
  FileText,
  FileQuestion,
  Settings,
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarItems = [
    { icon: Home, label: "Overview", path: "/" },
    { icon: Server, label: "Database Instances", path: "/database-instances" },
    { icon: Activity, label: "Performance Monitoring", path: "/performance-monitoring" },
    { icon: Gauge, label: "SQL Performance", path: "/sql-performance" },
    { icon: Database, label: "Storage Management", path: "/storage-management" },
    { icon: Settings, label: "Configuration", path: "/configuration" },
    { icon: AlertTriangle, label: "Alerts", path: "/alerts" },
    { icon: FileText, label: "Reports", path: "/reports" },
    { icon: FileQuestion, label: "Documentation", path: "/documentation" },
  ];

  return (
    <aside className="w-64 border-r bg-white hidden md:block overflow-y-auto h-screen">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-baby-blue-primary flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h10" />
              <path d="M7 12h10" />
              <path d="M7 17h10" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-baby-blue-primary">DBA Panel</h1>
        </div>
      </div>

      <div className="mt-2">
        <div className="px-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src="/lovable-uploads/86f5c01f-5b22-4029-a270-3f4556fe54d2.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">David Greymaax</p>
              <p className="text-xs text-muted-foreground">Oracle DBA</p>
            </div>
          </div>
        </div>

        <nav className="space-y-1 px-3">
          {sidebarItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "sidebar-item",
                currentPath === item.path && "active"
              )}
            >
              {/* Correctly apply baby blue color class to icons */}
              <item.icon className="h-5 w-5 text-baby-blue-primary" />
              <span className="text-sidebar-foreground">{item.label}</span> {/* Ensure label text color is correct */}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
