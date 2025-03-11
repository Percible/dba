import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Configuration = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Configuration" icon={<Settings className="h-6 w-6 text-purple-primary" />} />
        <Card>
          <CardHeader>
            <CardTitle>Database Configuration Management</CardTitle>
            <CardDescription>View and manage database configuration settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Configure and manage your Oracle database instances.
              View and modify database parameters, manage user accounts and privileges,
              and configure network settings. Ensure your database instances are properly
              set up for performance, security, and manageability.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Configuration;
