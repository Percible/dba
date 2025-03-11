import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  increased: boolean;
  icon: React.ReactNode;
  className?: string;
}

const StatCard = ({
  title,
  value,
  change,
  increased,
  icon,
  className,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 text-white shadow-sm h-full transition-transform duration-300 hover:scale-[1.02]",
        className
      )}
    >
      <div className="flex justify-between">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white/90">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
          <div className="flex items-center">
            {increased ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 mr-1" />
            )}
            <p className="text-sm">
              {increased ? "Increased" : "Decreased"} by {change}%
            </p>
          </div>
        </div>
        <div className="flex items-start opacity-75">
          {icon}
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg 
          width="150" 
          height="150" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          className="translate-x-1/4 translate-y-1/4"
        >
          <circle cx="100" cy="100" r="80" fill="white" fillOpacity="0.2" />
          <circle cx="150" cy="70" r="40" fill="white" fillOpacity="0.2" />
        </svg>
      </div>
    </div>
  );
};

export default StatCard;
