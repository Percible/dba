import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PerformanceMonitoring = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Performance Monitoring" icon={<Activity className="h-6 w-6 text-purple-primary" />} />
        <Card>
          <CardHeader>
            <CardTitle>Real-time Performance Metrics</CardTitle>
            <CardDescription>Monitor key database performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Keep a close watch on your database environment with real-time performance monitoring.
              Track CPU usage, memory consumption, disk I/O, and network traffic at the database,
              application server, OS, and hardware levels. Identify bottlenecks and ensure optimal performance.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Automated Alert System</CardTitle>
            <CardDescription>Configure and manage automated alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Set up automated alerts to be notified of critical events and anomalies.
              Customize thresholds for performance metrics and receive alerts via email or dashboard notifications.
              Proactively address potential issues before they impact database availability.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceMonitoring;
