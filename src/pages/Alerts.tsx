import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Alerts = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Alerts" icon={<AlertTriangle className="h-6 w-6 text-purple-primary" />} />
        <Card>
          <CardHeader>
            <CardTitle>Automated Alert Monitoring</CardTitle>
            <CardDescription>View and manage active and historical alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Stay informed about critical database events with the Alert Monitoring dashboard.
              View active alerts, review historical alert trends, and acknowledge or resolve alerts as needed.
              Customize alert notifications and escalation policies to ensure timely incident response.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Alerts;
