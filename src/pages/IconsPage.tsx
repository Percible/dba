import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { Image } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

const IconsPage = () => {
  // Create an array of icon names to display
  const lucideIconNames = Object.keys(LucideIcons).filter(
    (key) => key !== "default" && typeof LucideIcons[key] === "function"
  ).slice(0, 50); // Only show the first 50 icons to avoid too many

  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Icons" icon={<Image className="h-6 w-6 text-purple-primary" />} />

        <Card>
          <CardHeader>
            <CardTitle>Lucide Icons</CardTitle>
            <CardDescription>A collection of beautiful, open source icons from Lucide</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {lucideIconNames.map((iconName) => {
                // const IconComponent = LucideIcons[iconName];
                // Check if IconComponent is a valid React component before rendering
                // if (typeof IconComponent === 'function') {
                  return (
                    <div key={iconName} className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      {/* Render simple text instead of IconComponent */}
                      <span>Icon</span>
                      <span className="text-xs text-center text-muted-foreground truncate w-full">{iconName}</span>
                    </div>
                  );
                // } else {
                //   return null; // Or render a placeholder, or handle the case as needed
                // }
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IconsPage;
