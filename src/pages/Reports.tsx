import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Reports = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Reports" icon={<FileText className="h-6 w-6 text-purple-primary" />} />
        <Card>
          <CardHeader>
            <CardTitle>Database Reporting and Analytics</CardTitle>
            <CardDescription>Generate and view database performance and management reports</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Generate comprehensive reports on Oracle database performance and management.
              Access pre-built reports for capacity planning, performance analysis, and security audits.
              Customize reports to meet specific business requirements and reporting needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
