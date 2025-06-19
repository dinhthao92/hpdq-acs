import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  AreaChart,
  Area,
} from "recharts";
import {
  AlertTriangle,
  Shield,
  Car,
  Users,
  MapPin,
  Clock,
  Search,
  Download,
  Filter,
  TrendingUp,
  FileText,
  Eye,
  Calendar,
} from "lucide-react";

const AlertReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("week");
  const [alertTypeFilter, setAlertTypeFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");

  // Mock data for alert categories
  const alertCategoryData = [
    { name: "Danh sách đen", count: 15, percentage: 23.4, color: "#ef4444" },
    { name: "Sai quyền ACS", count: 12, percentage: 18.8, color: "#f97316" },
    {
      name: "Sai tuyến vận chuyển",
      count: 18,
      percentage: 28.1,
      color: "#eab308",
    },
    { name: "VTTS không hợp lệ", count: 8, percentage: 12.5, color: "#06b6d4" },
    { name: "Cảnh báo khác", count: 11, percentage: 17.2, color: "#6b7280" },
  ];

  // Mock data for alert timeline
  const alertTimelineData = [
    { time: "00:00", personnel: 2, vehicle: 1, vtts: 0, transport: 1 },
    { time: "02:00", personnel: 1, vehicle: 0, vtts: 1, transport: 0 },
    { time: "04:00", personnel: 0, vehicle: 2, vtts: 0, transport: 1 },
    { time: "06:00", personnel: 5, vehicle: 3, vtts: 1, transport: 2 },
    { time: "08:00", personnel: 8, vehicle: 4, vtts: 2, transport: 3 },
    { time: "10:00", personnel: 6, vehicle: 5, vtts: 1, transport: 4 },
    { time: "12:00", personnel: 4, vehicle: 3, vtts: 2, transport: 2 },
    { time: "14:00", personnel: 7, vehicle: 6, vtts: 3, transport: 5 },
    { time: "16:00", personnel: 9, vehicle: 7, vtts: 2, transport: 6 },
    { time: "18:00", personnel: 5, vehicle: 4, vtts: 1, transport: 3 },
    { time: "20:00", personnel: 3, vehicle: 2, vtts: 1, transport: 1 },
    { time: "22:00", personnel: 2, vehicle: 1, vtts: 0, transport: 1 },
  ];

  // Mock data for area-based alerts
  const areaAlertData = [
    { area: "Cổng chính", high: 8, medium: 12, low: 5 },
    { area: "Khu sản xuất", high: 3, medium: 8, low: 15 },
    { area: "Kho hàng A", high: 2, medium: 6, low: 10 },
    { area: "Kho hàng B", high: 1, medium: 4, low: 8 },
    { area: "Bãi đỗ xe", high: 4, medium: 7, low: 12 },
    { area: "Văn phòng", high: 0, medium: 2, low: 6 },
  ];

  // Mock data for detailed alerts
  const detailedAlerts = [
    {
      id: "ALT-2024-001",
      type: "Danh sách đen",
      severity: "Cao",
      area: "Cổng chính",
      time: "2024-01-15 08:30:15",
      description: "Phát hiện người trong danh sách đen cố gắng ra vào",
      status: "Đã xử lý",
    },
    {
      id: "ALT-2024-002",
      type: "Sai quyền ACS",
      severity: "Trung bình",
      area: "Khu sản xuất",
      time: "2024-01-15 09:15:22",
      description: "Nhân viên truy cập vào khu vực không có quyền",
      status: "Đang xử lý",
    },
    {
      id: "ALT-2024-003",
      type: "VTTS không hợp lệ",
      severity: "Thấp",
      area: "Kho hàng A",
      time: "2024-01-15 10:45:33",
      description: "Thiết bị VTTS không phản hồi trong 5 phút",
      status: "Chờ xử lý",
    },
    {
      id: "ALT-2024-004",
      type: "Sai tuyến vận chuyển",
      severity: "Cao",
      area: "Cổng phụ",
      time: "2024-01-15 11:20:41",
      description: "Phương tiện đi sai tuyến đã được phê duyệt",
      status: "Đã xử lý",
    },
  ];

  // Mock data for weekly trends
  const weeklyTrendData = [
    { week: "Tuần 1", total: 45, resolved: 42, pending: 3 },
    { week: "Tuần 2", total: 52, resolved: 48, pending: 4 },
    { week: "Tuần 3", total: 38, resolved: 36, pending: 2 },
    { week: "Tuần 4", total: 64, resolved: 58, pending: 6 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Cao":
        return "bg-red-100 text-red-800";
      case "Trung bình":
        return "bg-yellow-100 text-yellow-800";
      case "Thấp":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đã xử lý":
        return "bg-green-100 text-green-800";
      case "Đang xử lý":
        return "bg-yellow-100 text-yellow-800";
      case "Chờ xử lý":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Báo Cáo Cảnh Báo
            </h1>
            <p className="text-gray-600 mt-1">
              Tổng hợp và phân tích các cảnh báo hệ thống
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tìm kiếm cảnh báo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-64"
              />
            </div>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Hôm nay</SelectItem>
                <SelectItem value="week">Tuần này</SelectItem>
                <SelectItem value="month">Tháng này</SelectItem>
                <SelectItem value="quarter">Quý này</SelectItem>
              </SelectContent>
            </Select>
            <Select value={alertTypeFilter} onValueChange={setAlertTypeFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Loại cảnh báo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="blacklist">Danh sách đen</SelectItem>
                <SelectItem value="acs">Sai quyền ACS</SelectItem>
                <SelectItem value="transport">Sai tuyến</SelectItem>
                <SelectItem value="vtts">VTTS</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
              <Download className="h-4 w-4 mr-2" />
              Xuất báo cáo
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Tổng cảnh báo tuần này
                  </p>
                  <p className="text-3xl font-bold text-gray-900">64</p>
                  <p className="text-xs text-green-600 mt-1">
                    ↑ 12% so với tuần trước
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Chưa xử lý
                  </p>
                  <p className="text-3xl font-bold text-gray-900">6</p>
                  <p className="text-xs text-red-600 mt-1">Cần xử lý ngay</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Đã xử lý</p>
                  <p className="text-3xl font-bold text-gray-900">58</p>
                  <p className="text-xs text-green-600 mt-1">
                    90.6% tỷ lệ xử lý
                  </p>
                </div>
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Thời gian xử lý TB
                  </p>
                  <p className="text-3xl font-bold text-gray-900">12.5</p>
                  <p className="text-xs text-gray-600 mt-1">phút</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Alert Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Phân Loại Cảnh Báo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={alertCategoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {alertCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Alert Timeline */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Cảnh Báo Theo Thời Gian
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={alertTimelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="personnel"
                    stackId="1"
                    stroke="#ef4444"
                    fill="#ef4444"
                    name="Nhân sự"
                  />
                  <Area
                    type="monotone"
                    dataKey="vehicle"
                    stackId="1"
                    stroke="#f97316"
                    fill="#f97316"
                    name="Phương tiện"
                  />
                  <Area
                    type="monotone"
                    dataKey="vtts"
                    stackId="1"
                    stroke="#eab308"
                    fill="#eab308"
                    name="VTTS"
                  />
                  <Area
                    type="monotone"
                    dataKey="transport"
                    stackId="1"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    name="Vận chuyển"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Area-based Alerts and Weekly Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Cảnh Báo Theo Khu Vực
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={areaAlertData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="area" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="high" fill="#ef4444" name="Cao" />
                  <Bar dataKey="medium" fill="#f97316" name="Trung bình" />
                  <Bar dataKey="low" fill="#eab308" name="Thấp" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Xu Hướng Theo Tuần
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#1d4ed8"
                    name="Tổng cảnh báo"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="resolved"
                    stroke="#059669"
                    name="Đã xử lý"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="pending"
                    stroke="#dc2626"
                    name="Chưa xử lý"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Alerts Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Chi Tiết Cảnh Báo
            </CardTitle>
            <div className="flex items-center gap-4 mt-4">
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Mức độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="high">Cao</SelectItem>
                  <SelectItem value="medium">Trung bình</SelectItem>
                  <SelectItem value="low">Thấp</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Lọc nâng cao
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mã cảnh báo</TableHead>
                  <TableHead>Loại</TableHead>
                  <TableHead>Mức độ</TableHead>
                  <TableHead>Khu vực</TableHead>
                  <TableHead>Thời gian</TableHead>
                  <TableHead>Mô tả</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {detailedAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-medium">{alert.id}</TableCell>
                    <TableCell>{alert.type}</TableCell>
                    <TableCell>
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>{alert.area}</TableCell>
                    <TableCell>{alert.time}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {alert.description}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(alert.status)}>
                        {alert.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Xem
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Xuất Báo Cáo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center gap-2"
              >
                <FileText className="h-6 w-6" />
                <span>Báo cáo Excel</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center gap-2"
              >
                <Download className="h-6 w-6" />
                <span>Báo cáo PDF</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center gap-2"
              >
                <Calendar className="h-6 w-6" />
                <span>Báo cáo định kỳ</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlertReports;
