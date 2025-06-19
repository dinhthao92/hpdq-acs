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
import TransportationPlanning from "./pages/TransportationPlanning";
import CreateTransportPlan from "./pages/CreateTransportPlan";
import WarehouseSchedule from "./pages/WarehouseSchedule";
import PersonSearch from "./pages/PersonSearch";
import VehicleSearch from "./pages/VehicleSearch";
import AssetSearch from "./pages/AssetSearch";
import OrderTracking from "./pages/OrderTracking";
import SmartMap from "./pages/SmartMap";
import AlertDashboard from "./pages/AlertDashboard";
import AlertHistory from "./pages/AlertHistory";
import AlertDetail from "./pages/AlertDetail";
import ReportsOverview from "./pages/ReportsOverview";
import ObjectReports from "./pages/ObjectReports";
import AlertReports from "./pages/AlertReports";
import CustomReports from "./pages/CustomReports";
import UserManagement from "./pages/UserManagement";
import PermissionManagement from "./pages/PermissionManagement";
import BlacklistManagement from "./pages/BlacklistManagement";
import VehicleCardManagement from "./pages/VehicleCardManagement";
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
          <Route
            path="/transportation-planning"
            element={<TransportationPlanning />}
          />
          <Route
            path="/create-transport-plan"
            element={<CreateTransportPlan />}
          />
          <Route path="/warehouse-schedule" element={<WarehouseSchedule />} />
          <Route path="/person-search" element={<PersonSearch />} />
          <Route path="/vehicle-search" element={<VehicleSearch />} />
          <Route path="/asset-search" element={<AssetSearch />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/smart-map" element={<SmartMap />} />
          <Route path="/alert-dashboard" element={<AlertDashboard />} />
          <Route path="/alert-history" element={<AlertHistory />} />
          <Route path="/alert-detail" element={<AlertDetail />} />
          <Route path="/reports-overview" element={<ReportsOverview />} />
          <Route path="/object-reports" element={<ObjectReports />} />
          <Route path="/alert-reports" element={<AlertReports />} />
          <Route path="/custom-reports" element={<CustomReports />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route
            path="/permission-management"
            element={<PermissionManagement />}
          />
          <Route
            path="/blacklist-management"
            element={<BlacklistManagement />}
          />
          <Route
            path="/vehicle-card-management"
            element={<VehicleCardManagement />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
