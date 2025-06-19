import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  Car,
  AlertTriangle,
  FileText,
  TrendingUp,
  Activity,
  MapPin,
  Clock,
  Shield,
  RefreshCw,
} from "lucide-react";

const ReportsOverview = () => {
  const [timeRange, setTimeRange] = useState("today");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data for key metrics
  const keyMetrics = [
    {
      title: "Tổng lượt ra/vào hôm nay",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Cảnh báo phát sinh",
      value: "23",
      change: "-8.2%",
      icon: AlertTriangle,
      color: "text-red-600",
    },
    {
      title: "Phương tiện đang hoạt động",
      value: "156",
      change: "+5.3%",
      icon: Car,
      color: "text-blue-600",
    },
    {
      title: "Ticket vận chuyển chờ xử lý",
      value: "47",
      change: "+15.7%",
      icon: FileText,
      color: "text-orange-600",
    },
  ];

  // Mock data for hourly vehicle flow
  const hourlyFlowData = [
    { hour: "06:00", vehicles: 45, alerts: 2 },
    { hour: "07:00", vehicles: 89, alerts: 1 },
    { hour: "08:00", vehicles: 156, alerts: 4 },
    { hour: "09:00", vehicles: 134, alerts: 3 },
    { hour: "10:00", vehicles: 178, alerts: 5 },
    { hour: "11:00", vehicles: 201, alerts: 2 },
    { hour: "12:00", vehicles: 167, alerts: 3 },
    { hour: "13:00", vehicles: 189, alerts: 1 },
    { hour: "14:00", vehicles: 223, alerts: 6 },
    { hour: "15:00", vehicles: 245, alerts: 4 },
    { hour: "16:00", vehicles: 198, alerts: 2 },
    { hour: "17:00", vehicles: 156, alerts: 3 },
  ];

  // Mock data for alert types
  const alertTypeData = [
    { name: "Cảnh báo người", value: 8, color: "#ef4444" },
    { name: "Cảnh báo phương tiện", value: 12, color: "#f97316" },
    { name: "Cảnh báo VTTS", value: 3, color: "#eab308" },
    { name: "Cảnh báo khác", value: 2, color: "#6b7280" },
  ];

  // Mock data for security hotspots
  const securityHotspots = [
    { id: 1, name: "Cổng chính", x: 45, y: 30, alerts: 8, severity: "high" },
    {
      id: 2,
      name: "Khu vực kho A",
      x: 65,
      y: 45,
      alerts: 3,
      severity: "medium",
    },
    { id: 3, name: "Bãi đỗ xe", x: 30, y: 60, alerts: 5, severity: "medium" },
    {
      id: 4,
      name: "Khu vực sản xuất",
      x: 70,
      y: 70,
      alerts: 2,
      severity: "low",
    },
    { id: 5, name: "Cổng phụ", x: 80, y: 25, alerts: 1, severity: "low" },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-orange-500";
      case "low":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Controls */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard Tổng Quan Hoạt Động
            </h1>
            <p className="text-gray-600 mt-1">
              Giám sát vận hành toàn hệ thống nhà máy
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Hôm nay</SelectItem>
                <SelectItem value="yesterday">Hôm qua</SelectItem>
                <SelectItem value="week">Tuần này</SelectItem>
                <SelectItem value="month">Tháng này</SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="bg-hoa-phat-600 hover:bg-hoa-phat-700"
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
              />
              Làm mới
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-l-4 border-l-hoa-phat-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {metric.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {metric.value}
                      </span>
                      <Badge
                        variant="secondary"
                        className={`${metric.color} bg-opacity-10`}
                      >
                        {metric.change}
                      </Badge>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-hoa-phat-50`}>
                    <metric.icon className="h-6 w-6 text-hoa-phat-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Hourly Vehicle Flow Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Lưu Lượng Phương Tiện Theo Giờ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={hourlyFlowData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="vehicles" fill="#1d4ed8" name="Phương tiện" />
                  <Bar dataKey="alerts" fill="#ef4444" name="Cảnh báo" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Alert Types Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Phân Bố Cảnh Báo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={alertTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {alertTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Security Hotspot Map */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Bản Đồ Điểm Nóng An Ninh
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gray-100 rounded-lg h-96 overflow-hidden">
              {/* Factory Layout Background */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Factory buildings */}
                <rect
                  x="20"
                  y="20"
                  width="25"
                  height="20"
                  fill="#e5e7eb"
                  stroke="#6b7280"
                  strokeWidth="0.5"
                />
                <rect
                  x="50"
                  y="25"
                  width="30"
                  height="35"
                  fill="#e5e7eb"
                  stroke="#6b7280"
                  strokeWidth="0.5"
                />
                <rect
                  x="15"
                  y="45"
                  width="20"
                  height="25"
                  fill="#e5e7eb"
                  stroke="#6b7280"
                  strokeWidth="0.5"
                />
                <rect
                  x="60"
                  y="65"
                  width="25"
                  height="15"
                  fill="#e5e7eb"
                  stroke="#6b7280"
                  strokeWidth="0.5"
                />

                {/* Roads */}
                <rect x="0" y="35" width="100" height="3" fill="#9ca3af" />
                <rect x="45" y="0" width="3" height="100" fill="#9ca3af" />

                {/* Security hotspots */}
                {securityHotspots.map((hotspot) => (
                  <g key={hotspot.id}>
                    <circle
                      cx={hotspot.x}
                      cy={hotspot.y}
                      r="3"
                      className={`${getSeverityColor(hotspot.severity)} animate-pulse`}
                      opacity="0.8"
                    />
                    <circle
                      cx={hotspot.x}
                      cy={hotspot.y}
                      r="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className={`${getSeverityColor(hotspot.severity).replace("bg-", "text-")} animate-ping`}
                    />
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
                <h4 className="font-semibold text-sm mb-2">Mức độ cảnh báo</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Cao</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Trung bình</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Thấp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotspot Details */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
              {securityHotspots.map((hotspot) => (
                <div key={hotspot.id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{hotspot.name}</h4>
                    <div
                      className={`w-2 h-2 rounded-full ${getSeverityColor(hotspot.severity)}`}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {hotspot.alerts} cảnh báo
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Activity className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Theo dõi thời gian thực</h3>
                  <p className="text-sm text-gray-600">
                    Xem các sự kiện đang diễn ra
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Báo cáo chi tiết</h3>
                  <p className="text-sm text-gray-600">
                    Tạo báo cáo theo yêu cầu
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Lịch sử hoạt động</h3>
                  <p className="text-sm text-gray-600">
                    Xem lại các sự kiện đã qua
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportsOverview;
