import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { FileQuestion } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documentation = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Documentation" icon={<FileQuestion className="h-6 w-6 text-purple-primary" />} />

        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
                <CardDescription>Welcome to the Oracle DBA Dashboard documentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Welcome to the Oracle DBA Dashboard documentation! This guide will help you get started with the Oracle DBA Dashboard,
                  understand its features, and use it for effective Oracle database management.
                </p>

                <h3 className="text-lg font-semibold mt-6">Overview</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comprehensive monitoring of Oracle databases, application servers, and infrastructure.</li>
                  <li>Performance management and optimization tools.</li>
                  <li>Automated alerts and notifications for critical events.</li>
                  <li>Detailed reporting and analytics for capacity planning and performance analysis.</li>
                  <li>User-friendly interface for efficient database administration.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
                <CardDescription>Learn how to navigate the dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold mt-4">Sidebar Navigation</h3>
                <p>
                  Use the sidebar to access different sections of the Oracle DBA Dashboard:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><b>Overview:</b>  Dashboard overview with key metrics and summaries.</li>
                  <li><b>Database Instances:</b> Manage and monitor your Oracle database instances.</li>
                  <li><b>Performance Monitoring:</b> Real-time performance metrics and monitoring tools.</li>
                  <li><b>SQL Performance:</b> SQL analysis and tuning features.</li>
                  <li><b>Storage Management:</b> Storage monitoring and capacity planning.</li>
                  <li><b>Configuration:</b> Database configuration settings and management.</li>
                  <li><b>Alerts:</b> Automated alert monitoring and management.</li>
                  <li><b>Reports:</b> Generate and view database reports.</li>
                  <li><b>Documentation:</b> Access documentation and help resources.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>Explore the main features of the Oracle DBA Dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><b>Monitoring and Management:</b>
                    <ul>
                      <li className="list-disc pl-6 space-y-2">Comprehensive monitoring of database, application servers, OS, and hardware.</li>
                      <li className="list-disc pl-6 space-y-2">Automated event detection and alerting.</li>
                      <li className="list-disc pl-6 space-y-2">Performance metrics tracking and anomaly detection.</li>
                    </ul>
                  </li>
                  <li><b>Performance Management and Optimization:</b>
                    <ul>
                      <li className="list-disc pl-6 space-y-2">Automatic Workload Repository (AWR) and Active Session History (ASH) support.</li>
                      <li className="list-disc pl-6 space-y-2">SQL performance analysis and tuning recommendations (SQL Tuning Advisor, SQL Performance Analyzer).</li>
                      <li className="list-disc pl-6 space-y-2">Advanced monitoring and management for Exadata and RAC clusters.</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>API documentation (placeholder)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  API documentation is not applicable for this dashboard as it is a front-end UI built for demonstration purposes.
                  This section is a placeholder to indicate where API documentation would be located in a real application.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documentation;
