import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const PageHeader = ({ title, icon, className, iconClassName }: PageHeaderProps) => {
  return (
    <div className={cn("flex items-center mb-8 animate-in fade-in duration-500", className)}>
      {/* Apply baby-blue-icon-bg class to the icon wrapper */}
      <div className={cn("baby-blue-icon-bg bg-opacity-10 p-2.5 rounded-xl mr-4", iconClassName)}>
        {React.cloneElement(icon as React.ReactElement, {
          className: cn(iconClassName, "h-6 w-6") // Keep other classes, remove color class from here
        })}
      </div>
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
};

export default PageHeader;
