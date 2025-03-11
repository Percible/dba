import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DatabaseInstances = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Database Instances" icon={<Server className="h-6 w-6 text-purple-primary" />} />
        <Card>
          <CardHeader>
            <CardTitle>Monitoring & Management</CardTitle>
            <CardDescription>Database instance overview and management tools</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This section provides a comprehensive view of your Oracle database instances.
              Monitor their status, resource usage, and key performance indicators.
              Manage instances by starting, stopping, or restarting them as needed.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DatabaseInstances;
