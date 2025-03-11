import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ErrorPages = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Error Pages" icon={<AlertTriangle className="h-6 w-6 text-purple-primary" />} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>404 Error</CardTitle>
              <CardDescription>Page not found error example</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <h2 className="text-6xl font-bold text-purple-primary mb-4">404</h2>
              <p className="text-xl text-muted-foreground mb-6 text-center">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Button className="bg-purple-primary hover:bg-purple-primary/90">
                Return to Dashboard
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>500 Error</CardTitle>
              <CardDescription>Server error example</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <h2 className="text-6xl font-bold text-destructive mb-4">500</h2>
              <p className="text-xl text-muted-foreground mb-6 text-center">
                Server error. We're working on fixing the problem.
              </p>
              <Button variant="destructive">
                Try Again
              </Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>403 Error</CardTitle>
              <CardDescription>Forbidden access error example</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <h2 className="text-6xl font-bold text-amber-500 mb-4">403</h2>
              <p className="text-xl text-muted-foreground mb-6 text-center">
                You don't have permission to access this resource.
              </p>
              <div className="flex gap-4">
                <Button variant="outline">Contact Admin</Button>
                <Button className="bg-purple-primary hover:bg-purple-primary/90">
                  Return to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ErrorPages;
