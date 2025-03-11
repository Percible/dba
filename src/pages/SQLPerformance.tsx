import React, { useState, useEffect } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { Gauge } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SQLPerformanceTable, { SQLPerformanceData } from "@/components/dashboard/SQLPerformanceTable";
import { Skeleton } from "@/components/ui/skeleton";

// const mockSQLPerformanceData = [ ... ]; // Removed mock data

const SQLPerformance = () => {
  const [sqlPerformanceData, setSqlPerformanceData] = useState<SQLPerformanceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSQLPerformanceData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate API call - replace with your actual API endpoint and API key
        const apiKey = 'YOUR_API_KEY_HERE'; // Placeholder for API key
        const apiUrl = '/api/sql-performance-data'; // Placeholder for API endpoint


        // Example of how to use API key in headers for authentication
        const headers = {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json', // Adjust content type if needed
        };

        // In WebContainer, replace with a direct data source or adjust as needed
        // const response = await fetch(apiUrl, { headers });
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();
        // setSqlPerformanceData(data);

        // For now, since we don't have a real API in WebContainer, we'll simulate empty data and remove setTimeout
        setSqlPerformanceData([]); // Set empty data as API response
        setLoading(false);


      } catch (err: any) {
        setError(err.message || "Error fetching SQL performance data");
        setLoading(false);
      }
    };

    fetchSQLPerformanceData();
  }, []);

  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="SQL Performance" icon={<Gauge className="h-6 w-6 text-purple-primary" />} />
        <Card>
          <CardHeader>
            <CardTitle>Poor Performing SQLs</CardTitle>
            <CardDescription>List of SQL queries with poor performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <SQLPerformanceTable data={sqlPerformanceData} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SQLPerformance;
