import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import EmployeeRegistration from "./pages/EmployeeRegistration";
import VTTSRegistration from "./pages/VTTSRegistration";
import SalesOrderTickets from "./pages/SalesOrderTickets";
import ACSAccessControl from "./pages/ACSAccessControl";
import GateMonitoring from "./pages/GateMonitoring";
import WeighingStation from "./pages/WeighingStation";
import WarehouseDelivery from "./pages/WarehouseDelivery";
import FinalReconciliation from "./pages/FinalReconciliation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/employee-registration"
            element={<EmployeeRegistration />}
          />
          <Route path="/vtts-registration" element={<VTTSRegistration />} />
          <Route path="/sales-order-tickets" element={<SalesOrderTickets />} />
          <Route path="/acs-access-control" element={<ACSAccessControl />} />
          <Route path="/gate-monitoring" element={<GateMonitoring />} />
          <Route path="/weighing-station" element={<WeighingStation />} />
          <Route path="/warehouse-delivery" element={<WarehouseDelivery />} />
          <Route
            path="/final-reconciliation"
            element={<FinalReconciliation />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
