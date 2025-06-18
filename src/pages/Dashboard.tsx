import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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
  Car,
  TrendingUp,
  TrendingDown,
  Users,
  MapPin,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

const Dashboard = () => {
  // Sample data for charts
  const weeklyData = [
    { day: "T2", vehicles: 120, incidents: 2 },
    { day: "T3", vehicles: 135, incidents: 1 },
    { day: "T4", vehicles: 98, incidents: 3 },
    { day: "T5", vehicles: 142, incidents: 0 },
    { day: "T6", vehicles: 158, incidents: 1 },
    { day: "T7", vehicles: 89, incidents: 2 },
    { day: "CN", vehicles: 67, incidents: 1 },
  ];

  const vehicleTypeData = [
    { name: "Xe tải", value: 45, color: "#3b82f6" },
    { name: "Xe con", value: 30, color: "#10b981" },
    { name: "Xe khách", value: 15, color: "#f59e0b" },
    { name: "Xe máy", value: 10, color: "#ef4444" },
  ];

  const hourlyTraffic = [
    { hour: "00", count: 12 },
    { hour: "04", count: 8 },
    { hour: "08", count: 45 },
    { hour: "12", count: 67 },
    { hour: "16", count: 89 },
    { hour: "20", count: 34 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Tổng quan hệ thống quản lý phương tiện
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Cập nhật lần cuối: {new Date().toLocaleString("vi-VN")}
          </div>
        </div>

        {/* Key Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Tổng phương tiện
              </CardTitle>
              <Car className="h-4 w-4 text-hoa-phat-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% so với tháng trước
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Đang hoạt động
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">892</div>
              <p className="text-xs text-gray-600 mt-1">71.5% tổng số xe</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Sự cố hôm nay
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2 so với hôm qua
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Người dùng online
              </CardTitle>
              <Users className="h-4 w-4 text-hoa-phat-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">127</div>
              <p className="text-xs text-gray-600 mt-1">
                Đang truy cập hệ thống
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Traffic Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Lưu lượng theo tuần
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [
                      value,
                      name === "vehicles" ? "Phương tiện" : "Sự cố",
                    ]}
                  />
                  <Bar dataKey="vehicles" fill="#3b82f6" name="vehicles" />
                  <Bar dataKey="incidents" fill="#ef4444" name="incidents" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Vehicle Type Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Phân loại phương tiện
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={vehicleTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {vehicleTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hourly Traffic */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Lưu lượng theo giờ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={hourlyTraffic}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#3b82f6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Trạng thái hệ thống
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">CPU Usage</span>
                <span className="text-sm font-medium">68%</span>
              </div>
              <Progress value={68} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Memory</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <Progress value={45} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Disk Space</span>
                <span className="text-sm font-medium">23%</span>
              </div>
              <Progress value={23} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Network</span>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Ổn định
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Cảnh báo gần đây
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-red-900">
                      Xe 29A-12345 mất tín hiệu
                    </p>
                    <p className="text-xs text-red-600">5 phút trước</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-yellow-900">
                      Tốc độ vượt giới hạn - 51B-78901
                    </p>
                    <p className="text-xs text-yellow-600">12 phút trước</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <MapPin className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-900">
                      Xe 30C-45678 đã vào khu vực hạn chế
                    </p>
                    <p className="text-xs text-blue-600">18 phút trước</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-900">
                      Bảo trì định kỳ hoàn thành
                    </p>
                    <p className="text-xs text-green-600">1 giờ trước</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
