import { useState, useEffect } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatCard from "@/components/dashboard/StatCard";
import BarChart from "@/components/dashboard/BarChart";
import DonutChart from "@/components/dashboard/DonutChart";
import {
  Search,
  Mail,
  Bell,
  LogOut,
  TrendingUp,
  TrendingDown,
  Server,
  PieChart,
  Database,
  Cpu,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PageHeader from "@/components/layout/PageHeader"; // Import PageHeader

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center w-full max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search databases"
                  className="pl-10 bg-secondary border-0 w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </button>
              <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                <Bell className="h-5 w-5 text-muted-foreground" />
              </button>
              <div className="flex items-center gap-2 pl-2">
                <Avatar className="h-9 w-9 border">
                  <AvatarImage src="/lovable-uploads/86f5c01f-5b22-4029-a270-3f4556fe54d2.png" />
                  <AvatarFallback>DG</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">David Greymaax</p>
                  <p className="text-xs text-muted-foreground">Oracle DBA</p>
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                <LogOut className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Updated PageHeader with inline style for icon color */}
          <PageHeader
            title="Oracle DBA Dashboard - Overview"
            icon={<Database className="h-6 w-6" style={{ color: 'hsl(220, 100%, 65%)' }} />} // Baby blue inline style
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '50ms' }}>
              <StatCard
                title="Database Uptime"
                value="99.99%"
                change={0.01}
                increased={true}
                icon={<TrendingUp className="h-6 w-6" />}
                className="stat-card-sales"
              />
            </div>
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <StatCard
                title="CPU Usage"
                value="25%"
                change={5}
                increased={false}
                icon={<Cpu className="h-6 w-6" />}
                className="stat-card-orders"
              />
            </div>
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
              <StatCard
                title="Active Sessions"
                value="150"
                change={10}
                increased={true}
                icon={<Server className="h-6 w-6" />}
                className="stat-card-visitors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="dashboard-card p-6 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Session History</h2>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-chart-purple"></div>
                    <span className="text-sm text-muted-foreground">CHN</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-chart-pink"></div>
                    <span className="text-sm text-muted-foreground">USA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-chart-blue"></div>
                    <span className="text-sm text-muted-foreground">UK</span>
                  </div>
                </div>
              </div>
              <BarChart />
            </div>

            <div className="dashboard-card p-6 animate-fade-in opacity-0" style={{ animationDelay: '250ms' }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Database Traffic Sources</h2>
                <PieChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-center mb-4">
                <DonutChart />
              </div>
              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-chart-blue"></div>
                    <span className="text-sm">Search Engines</span>
                  </div>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-chart-teal"></div>
                    <span className="text-sm">Direct Click</span>
                  </div>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-chart-pink"></div>
                    <span className="text-sm">Bookmarks Click</span>
                  </div>
                  <span className="text-sm font-medium">40%</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
