import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Building,
  Car,
  Package,
  Search,
  Download,
  Filter,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

const ObjectReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("week");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  // Mock data for contractors/customers
  const contractorData = [
    {
      name: "Công ty TNHH ABC",
      registrations: 45,
      validEntries: 42,
      alerts: 2,
      duplicates: 1,
      status: "active",
    },
    {
      name: "Công ty Cổ phần XYZ",
      registrations: 38,
      validEntries: 36,
      alerts: 1,
      duplicates: 0,
      status: "active",
    },
    {
      name: "Công ty TNHH DEF",
      registrations: 29,
      validEntries: 28,
      alerts: 3,
      duplicates: 2,
      status: "warning",
    },
    {
      name: "Công ty Cổ phần GHI",
      registrations: 52,
      validEntries: 49,
      alerts: 1,
      duplicates: 0,
      status: "active",
    },
  ];

  // Mock data for personnel by department
  const personnelData = [
    {
      department: "Sản xuất",
      totalAccess: 234,
      wrongPermissions: 5,
      wrongTime: 8,
      efficiency: 95.2,
    },
    {
      department: "Kỹ thuật",
      totalAccess: 156,
      wrongPermissions: 2,
      wrongTime: 3,
      efficiency: 97.8,
    },
    {
      department: "Hành chính",
      totalAccess: 89,
      wrongPermissions: 1,
      wrongTime: 2,
      efficiency: 96.6,
    },
    {
      department: "An ninh",
      totalAccess: 78,
      wrongPermissions: 0,
      wrongTime: 1,
      efficiency: 98.7,
    },
    {
      department: "Kho vận",
      totalAccess: 145,
      wrongPermissions: 3,
      wrongTime: 6,
      efficiency: 94.1,
    },
  ];

  // Mock data for VTTS
  const vttsData = [
    {
      equipmentType: "Camera an ninh",
      registrations: 25,
      confirmed: 24,
      discrepancies: 1,
      alertRate: 4.2,
    },
    {
      equipmentType: "Cổng kiểm soát",
      registrations: 8,
      confirmed: 8,
      discrepancies: 0,
      alertRate: 0,
    },
    {
      equipmentType: "Cân điện tử",
      registrations: 4,
      confirmed: 4,
      discrepancies: 0,
      alertRate: 0,
    },
    {
      equipmentType: "RFID Reader",
      registrations: 12,
      confirmed: 11,
      discrepancies: 1,
      alertRate: 8.3,
    },
  ];

  // Mock data for transport
  const transportData = [
    {
      route: "Nhà máy - Kho A",
      totalTickets: 156,
      processed: 142,
      successful: 138,
      anomalies: 4,
    },
    {
      route: "Nhà máy - Kho B",
      totalTickets: 89,
      processed: 85,
      successful: 82,
      anomalies: 3,
    },
    {
      route: "Kho A - Khách hàng",
      totalTickets: 234,
      processed: 228,
      successful: 220,
      anomalies: 8,
    },
    {
      route: "Kho B - Khách hàng",
      totalTickets: 178,
      processed: 174,
      successful: 168,
      anomalies: 6,
    },
  ];

  // Chart data for trends
  const weeklyTrendData = [
    { day: "T2", contractors: 45, personnel: 234, vtts: 12, transport: 67 },
    { day: "T3", contractors: 52, personnel: 245, vtts: 11, transport: 73 },
    { day: "T4", contractors: 48, personnel: 228, vtts: 13, transport: 69 },
    { day: "T5", contractors: 56, personnel: 256, vtts: 14, transport: 78 },
    { day: "T6", contractors: 62, personnel: 267, vtts: 15, transport: 82 },
    { day: "T7", contractors: 38, personnel: 189, vtts: 10, transport: 45 },
    { day: "CN", contractors: 25, personnel: 134, vtts: 8, transport: 32 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "error":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Hoạt động";
      case "warning":
        return "Cảnh báo";
      case "error":
        return "Lỗi";
      default:
        return "Không xác định";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Báo Cáo Theo Đối Tượng
            </h1>
            <p className="text-gray-600 mt-1">
              Thống kê chi tiết theo từng loại đối tượng
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tìm kiếm..."
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
            <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
              <Download className="h-4 w-4 mr-2" />
              Xuất báo cáo
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="contractors" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="contractors"
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Nhà thầu/Khách
            </TabsTrigger>
            <TabsTrigger value="personnel" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Cán bộ nhân sự
            </TabsTrigger>
            <TabsTrigger value="vtts" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              VTTS
            </TabsTrigger>
            <TabsTrigger value="transport" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Vận chuyển
            </TabsTrigger>
          </TabsList>

          {/* Contractors/Customers Tab */}
          <TabsContent value="contractors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Tổng lượt đăng ký</p>
                      <p className="text-2xl font-bold">164</p>
                    </div>
                    <Users className="h-8 w-8 text-hoa-phat-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        Lượt vào/ra hợp lệ
                      </p>
                      <p className="text-2xl font-bold">155</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        Cảnh báo phát sinh
                      </p>
                      <p className="text-2xl font-bold">7</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Hồ sơ trùng lặp</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <Filter className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Danh sách nhà thầu/khách</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tên công ty</TableHead>
                        <TableHead>Đăng ký</TableHead>
                        <TableHead>Hợp lệ</TableHead>
                        <TableHead>Cảnh báo</TableHead>
                        <TableHead>Trạng thái</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contractorData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {item.name}
                          </TableCell>
                          <TableCell>{item.registrations}</TableCell>
                          <TableCell>{item.validEntries}</TableCell>
                          <TableCell>{item.alerts}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(item.status)}>
                              {getStatusText(item.status)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Xu hướng hoạt động theo tuần</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={weeklyTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="contractors"
                        stroke="#1d4ed8"
                        name="Nhà thầu/Khách"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Personnel Tab */}
          <TabsContent value="personnel" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        Tổng lượt truy cập
                      </p>
                      <p className="text-2xl font-bold">702</p>
                    </div>
                    <Building className="h-8 w-8 text-hoa-phat-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        Sai quyền truy cập
                      </p>
                      <p className="text-2xl font-bold">11</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Ra vào sai giờ</p>
                      <p className="text-2xl font-bold">20</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        Hiệu suất trung bình
                      </p>
                      <p className="text-2xl font-bold">96.5%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Thống kê theo bộ phận</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Bộ phận</TableHead>
                        <TableHead>Lượt truy cập</TableHead>
                        <TableHead>Sai quyền</TableHead>
                        <TableHead>Sai giờ</TableHead>
                        <TableHead>Hiệu suất</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {personnelData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {item.department}
                          </TableCell>
                          <TableCell>{item.totalAccess}</TableCell>
                          <TableCell>{item.wrongPermissions}</TableCell>
                          <TableCell>{item.wrongTime}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                item.efficiency > 96
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {item.efficiency}%
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hiệu suất theo bộ phận</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={personnelData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="department" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="efficiency"
                        fill="#1d4ed8"
                        name="Hiệu suất %"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* VTTS Tab */}
          <TabsContent value="vtts" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Tổng đăng ký</p>
                      <p className="text-2xl font-bold">49</p>
                    </div>
                    <Car className="h-8 w-8 text-hoa-phat-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Đã xác nhận</p>
                      <p className="text-2xl font-bold">47</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Sai lệch</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Tỷ lệ cảnh báo</p>
                      <p className="text-2xl font-bold">4.1%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Chi tiết VTTS theo loại thiết bị</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Loại thiết bị</TableHead>
                      <TableHead>Đăng ký</TableHead>
                      <TableHead>Xác nhận</TableHead>
                      <TableHead>Sai lệch</TableHead>
                      <TableHead>Tỷ lệ cảnh báo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vttsData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {item.equipmentType}
                        </TableCell>
                        <TableCell>{item.registrations}</TableCell>
                        <TableCell>{item.confirmed}</TableCell>
                        <TableCell>{item.discrepancies}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              item.alertRate === 0
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {item.alertRate}%
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transport Tab */}
          <TabsContent value="transport" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Tổng ticket</p>
                      <p className="text-2xl font-bold">657</p>
                    </div>
                    <Package className="h-8 w-8 text-hoa-phat-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Đã xử lý</p>
                      <p className="text-2xl font-bold">629</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Thành công</p>
                      <p className="text-2xl font-bold">608</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Bất thường</p>
                      <p className="text-2xl font-bold">21</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Thống kê theo tuyến vận chuyển</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tuyến vận chuyển</TableHead>
                      <TableHead>Tổng ticket</TableHead>
                      <TableHead>Đã xử lý</TableHead>
                      <TableHead>Thành công</TableHead>
                      <TableHead>Bất thường</TableHead>
                      <TableHead>Tỷ lệ thành công</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transportData.map((item, index) => {
                      const successRate = (
                        (item.successful / item.totalTickets) *
                        100
                      ).toFixed(1);
                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {item.route}
                          </TableCell>
                          <TableCell>{item.totalTickets}</TableCell>
                          <TableCell>{item.processed}</TableCell>
                          <TableCell>{item.successful}</TableCell>
                          <TableCell>{item.anomalies}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                parseFloat(successRate) > 95
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {successRate}%
                            </Badge>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ObjectReports;
