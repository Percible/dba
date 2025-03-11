import React, { useState } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export interface SQLPerformanceData {
  sql_id: string;
  average_duration: string;
  executions: number;
  status: 'Critical' | 'Warning' | 'OK';
  sql_query: string;
}

interface SQLPerformanceTableProps {
  data: SQLPerformanceData[];
}

interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogContent> {
  queryToDisplay: string; // New prop to receive sql_query
  sqlId: string;       // New prop to receive sql_id
}


const SQLPerformanceTable: React.FC<SQLPerformanceTableProps> = ({ data }) => {
  // const [open, setOpen] = useState(false); // Removed open state - Dialog open state is now controlled directly in component
  // const [selectedQuery, setSelectedQuery] = useState<string | null>(null); // Removed selectedQuery state


  return (
    <>
      <Table>
        <TableCaption>List of SQL queries with poor performance.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>SQL ID</TableHead>
            <TableHead>Avg Duration</TableHead>
            <TableHead>Executions</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.sql_id}>
              <TableCell className="font-medium">{row.sql_id}</TableCell>
              <TableCell>{row.average_duration}</TableCell>
              <TableCell>{row.executions}</TableCell>
              <TableCell className="text-right">{row.status}</TableCell>
              <TableCell className="text-right">
                <Dialog >
                  <DialogTrigger asChild>
                    <Button size="sm">View Query</Button>
                  </DialogTrigger>
                  {/* Passing queryToDisplay and sqlId as props to DialogContent */}
                  <DialogContent queryToDisplay={row.sql_query} sqlId={row.sql_id} className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>SQL Query Details</DialogTitle>
                      <DialogDescription>
                        SQL ID: {row.sql_id}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="query">SQL Query</Label>
                        <Textarea
                          readOnly
                          id="query"
                          value={row.sql_query}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default SQLPerformanceTable;
