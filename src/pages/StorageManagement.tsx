import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StorageManagement = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Storage Management" icon={<Database className="h-6 w-6 text-purple-primary" />} />
        <Card>
          <CardHeader>
            <CardTitle>Storage Monitoring</CardTitle>
            <CardDescription>Overview of database storage and space usage</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Manage your Oracle database storage effectively. Monitor tablespace usage, data file sizes,
              and storage trends. Plan capacity and optimize storage allocations to ensure efficient
              database operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StorageManagement;
