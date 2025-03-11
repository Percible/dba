import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { BarChart2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BarChart from "@/components/dashboard/BarChart";
import DonutChart from "@/components/dashboard/DonutChart";

const ChartsPage = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Charts" icon={<BarChart2 className="h-6 w-6 text-purple-primary" />} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart</CardTitle>
              <CardDescription>Visualize comparative data with bar charts</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Donut Chart</CardTitle>
              <CardDescription>Visualize proportional data with donut charts</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <DonutChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
