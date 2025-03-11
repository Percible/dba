import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BasicUIElements from "./pages/BasicUIElements";
import FormElements from "./pages/FormElements";
import TablesPage from "./pages/TablesPage";
import IconsPage from "./pages/IconsPage";
import ChartsPage from "./pages/ChartsPage";
import UserPages from "./pages/UserPages";
import ErrorPages from "./pages/ErrorPages";
import GeneralPages from "./pages/GeneralPages";
import Documentation from "./pages/Documentation";
import DatabaseInstances from "./pages/DatabaseInstances";
import PerformanceMonitoring from "./pages/PerformanceMonitoring";
import SQLPerformance from "./pages/SQLPerformance";
import StorageManagement from "./pages/StorageManagement";
import Configuration from "./pages/Configuration";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import LoginPage from "./pages/Login";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { AuthProvider } from "@/auth/AuthProvider"; // Import AuthProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider> {/* Wrap BrowserRouter with AuthProvider */}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/database-instances" element={<ProtectedRoute><DatabaseInstances /></ProtectedRoute>} />
            <Route path="/performance-monitoring" element={<ProtectedRoute><PerformanceMonitoring /></ProtectedRoute>} />
            <Route path="/sql-performance" element={<ProtectedRoute><SQLPerformance /></ProtectedRoute>} />
            <Route path="/storage-management" element={<ProtectedRoute><StorageManagement /></ProtectedRoute>} />
            <Route path="/configuration" element={<ProtectedRoute><Configuration /></ProtectedRoute>} />
            <Route path="/alerts" element={<ProtectedRoute><Alerts /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            <Route path="/documentation" element={<ProtectedRoute><Documentation /></ProtectedRoute>} />
            <Route path="/basic-ui-elements" element={<ProtectedRoute><BasicUIElements /></ProtectedRoute>} />
            <Route path="/form-elements" element={<ProtectedRoute><FormElements /></ProtectedRoute>} />
            <Route path="/tables" element={<ProtectedRoute><TablesPage /></ProtectedRoute>} />
            <Route path="/icons" element={<ProtectedRoute><IconsPage /></ProtectedRoute>} />
            <Route path="/charts" element={<ProtectedRoute><ChartsPage /></ProtectedRoute>} />
            <Route path="/user-pages" element={<ProtectedRoute><UserPages /></ProtectedRoute>} />
            <Route path="/error-pages" element={<ProtectedRoute><ErrorPages /></ProtectedRoute>} />
            <Route path="/general-pages" element={<ProtectedRoute><GeneralPages /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
