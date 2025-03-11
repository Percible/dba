import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { Table } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table as UITable,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TablesPage = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="Tables" icon={<Table className="h-6 w-6 text-purple-primary" />} />
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Table</CardTitle>
              <CardDescription>A simple table displaying user information</CardDescription>
            </CardHeader>
            <CardContent>
              <UITable>
                <TableCaption>A list of recent users.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">001</TableCell>
                    <TableCell>David Grey</TableCell>
                    <TableCell>david.grey@example.com</TableCell>
                    <TableCell className="text-right">Active</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">002</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane.smith@example.com</TableCell>
                    <TableCell className="text-right">Active</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">003</TableCell>
                    <TableCell>Robert Johnson</TableCell>
                    <TableCell>robert.johnson@example.com</TableCell>
                    <TableCell className="text-right">Inactive</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">004</TableCell>
                    <TableCell>Emily Davis</TableCell>
                    <TableCell>emily.davis@example.com</TableCell>
                    <TableCell className="text-right">Active</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">005</TableCell>
                    <TableCell>Michael Wilson</TableCell>
                    <TableCell>michael.wilson@example.com</TableCell>
                    <TableCell className="text-right">Pending</TableCell>
                  </TableRow>
                </TableBody>
              </UITable>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Invoices Table</CardTitle>
              <CardDescription>Recent payment transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <UITable>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>2023-10-05</TableCell>
                    <TableCell>$250.00</TableCell>
                    <TableCell className="text-right text-green-500">Paid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>2023-10-12</TableCell>
                    <TableCell>$150.00</TableCell>
                    <TableCell className="text-right text-green-500">Paid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>2023-10-20</TableCell>
                    <TableCell>$350.00</TableCell>
                    <TableCell className="text-right text-amber-500">Pending</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV004</TableCell>
                    <TableCell>2023-10-28</TableCell>
                    <TableCell>$450.00</TableCell>
                    <TableCell className="text-right text-red-500">Unpaid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV005</TableCell>
                    <TableCell>2023-11-03</TableCell>
                    <TableCell>$550.00</TableCell>
                    <TableCell className="text-right text-green-500">Paid</TableCell>
                  </TableRow>
                </TableBody>
              </UITable>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TablesPage;
