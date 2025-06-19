import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  AlertTriangle,
  Shield,
  Camera,
  Users,
  Truck,
  Package,
  Bell,
  Eye,
  Play,
  Phone,
  RadioIcon as Radio,
  Zap,
  Activity,
  Settings,
} from "lucide-react";
import { useState } from "react";

const SmartMap = () => {
  const [mapView, setMapView] = useState("2d");
  const [alertFilter, setAlertFilter] = useState("all");

  const activeAlerts = [
    {
      id: "ALERT-001",
      type: "blacklist",
      severity: "high",
      time: "14:35:20",
      location: "Cổng chính",
      camera: "CAM-001",
      description: "Xe trong danh sách đen: 51C-11111",
      subject: "51C-11111",
      action: "Vào khu vực",
      coordinates: { x: 80, y: 250 },
      status: "active",
    },
    {
      id: "ALERT-002",
      type: "unauthorized",
      severity: "medium",
      time: "14:20:15",
      location: "Khu sản xuất",
      camera: "CAM-008",
      description: "Người không được cấp quyền",
      subject: "Unknown Person",
      action: "Vào khu hạn chế",
      coordinates: { x: 290, y: 160 },
      status: "investigating",
    },
    {
      id: "ALERT-003",
      type: "equipment",
      severity: "low",
      time: "14:10:30",
      location: "Trạm cân",
      camera: "CAM-005",
      description: "VTTS không đăng ký: GPS-999",
      subject: "GPS-999",
      action: "Phát hiện thiết bị",
      coordinates: { x: 200, y: 200 },
      status: "resolved",
    },
  ];

  const iotDevices = [
    {
      id: "IOT-001",
      name: "Cổng chính",
      type: "Access Control",
      status: "online",
      alerts: 2,
      coordinates: { x: 80, y: 250 },
    },
    {
      id: "IOT-002",
      name: "Trạm cân",
      type: "Weight Station",
      status: "online",
      alerts: 0,
      coordinates: { x: 200, y: 200 },
    },
    {
      id: "IOT-003",
      name: "Khu sản xuất",
      type: "Production Monitor",
      status: "warning",
      alerts: 1,
      coordinates: { x: 290, y: 160 },
    },
    {
      id: "IOT-004",
      name: "Kho hàng",
      type: "Warehouse Control",
      status: "online",
      alerts: 0,
      coordinates: { x: 150, y: 100 },
    },
  ];

  const getSeverityBadge = (severity: string) => {
    const config = {
      high: "text-red-700 bg-red-100 border-red-300",
      medium: "text-yellow-700 bg-yellow-100 border-yellow-300",
      low: "text-blue-700 bg-blue-100 border-blue-300",
    };
    return (
      config[severity as keyof typeof config] || "text-gray-700 bg-gray-100"
    );
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "blacklist":
        return <Shield className="h-4 w-4 text-red-600" />;
      case "unauthorized":
        return <Users className="h-4 w-4 text-yellow-600" />;
      case "equipment":
        return <Package className="h-4 w-4 text-blue-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const config = {
      active: "text-red-700 bg-red-100",
      investigating: "text-yellow-700 bg-yellow-100",
      resolved: "text-green-700 bg-green-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const getDeviceStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "#10b981"; // green
      case "warning":
        return "#f59e0b"; // yellow
      case "offline":
        return "#ef4444"; // red
      default:
        return "#6b7280"; // gray
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Bản đồ số cảnh báo thông minh
            </h1>
            <p className="text-gray-600 mt-1">
              Giám sát real-time - Cảnh báo tự động - IOC Alert System
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge
              variant="outline"
              className="bg-red-50 text-red-700 animate-pulse"
            >
              <Bell className="h-3 w-3 mr-1" />2 Cảnh báo cao
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Activity className="h-3 w-3 mr-1" />
              15 Thiết bị online
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Smart Map */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-lg font-semibold">
                  <MapPin className="h-5 w-5 mr-2 text-hoa-phat-600" />
                  Bản đồ nhà máy - Giám sát thời gian thực
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Select value={mapView} onValueChange={setMapView}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2d">2D</SelectItem>
                      <SelectItem value="3d">3D</SelectItem>
                      <SelectItem value="satellite">Vệ tinh</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="sm" variant="outline">
                    <Settings className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg h-96 relative overflow-hidden">
                {/* Factory Map SVG */}
                <div className="absolute inset-0">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 300"
                    style={{
                      background:
                        "linear-gradient(135deg, #f0f9ff 0%, #f1f5f9 100%)",
                    }}
                  >
                    {/* Grid background */}
                    <defs>
                      <pattern
                        id="grid"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                      </pattern>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Factory Buildings */}
                    <g>
                      {/* Main Gate */}
                      <rect
                        x="60"
                        y="240"
                        width="40"
                        height="20"
                        fill="#94a3b8"
                        stroke="#64748b"
                        strokeWidth="2"
                        rx="2"
                      />
                      <text
                        x="80"
                        y="253"
                        fontSize="8"
                        fill="#374151"
                        textAnchor="middle"
                        fontWeight="bold"
                      >
                        Cổng chính
                      </text>

                      {/* Production Area */}
                      <rect
                        x="250"
                        y="120"
                        width="100"
                        height="80"
                        fill="#94a3b8"
                        stroke="#64748b"
                        strokeWidth="2"
                        rx="4"
                      />
                      <text
                        x="300"
                        y="165"
                        fontSize="10"
                        fill="#374151"
                        textAnchor="middle"
                        fontWeight="bold"
                      >
                        Khu sản xuất
                      </text>

                      {/* Warehouse */}
                      <rect
                        x="120"
                        y="80"
                        width="80"
                        height="60"
                        fill="#94a3b8"
                        stroke="#64748b"
                        strokeWidth="2"
                        rx="4"
                      />
                      <text
                        x="160"
                        y="115"
                        fontSize="10"
                        fill="#374151"
                        textAnchor="middle"
                        fontWeight="bold"
                      >
                        Kho hàng
                      </text>

                      {/* Weighing Station */}
                      <rect
                        x="180"
                        y="180"
                        width="60"
                        height="40"
                        fill="#94a3b8"
                        stroke="#64748b"
                        strokeWidth="2"
                        rx="4"
                      />
                      <text
                        x="210"
                        y="205"
                        fontSize="9"
                        fill="#374151"
                        textAnchor="middle"
                        fontWeight="bold"
                      >
                        Trạm cân
                      </text>

                      {/* Office */}
                      <rect
                        x="30"
                        y="50"
                        width="60"
                        height="50"
                        fill="#94a3b8"
                        stroke="#64748b"
                        strokeWidth="2"
                        rx="4"
                      />
                      <text
                        x="60"
                        y="80"
                        fontSize="9"
                        fill="#374151"
                        textAnchor="middle"
                        fontWeight="bold"
                      >
                        Văn phòng
                      </text>
                    </g>

                    {/* Roads */}
                    <g>
                      <path
                        d="M 80 240 L 80 200 L 160 200 L 160 140"
                        stroke="#6b7280"
                        strokeWidth="6"
                        fill="none"
                        opacity="0.7"
                      />
                      <path
                        d="M 160 200 L 250 200 L 250 160"
                        stroke="#6b7280"
                        strokeWidth="6"
                        fill="none"
                        opacity="0.7"
                      />
                    </g>

                    {/* IoT Devices */}
                    {iotDevices.map((device, index) => (
                      <g key={device.id}>
                        <circle
                          cx={device.coordinates.x}
                          cy={device.coordinates.y}
                          r="8"
                          fill={getDeviceStatusColor(device.status)}
                          stroke="#fff"
                          strokeWidth="2"
                          filter="url(#glow)"
                        >
                          {device.status === "online" && (
                            <animate
                              attributeName="opacity"
                              values="1;0.5;1"
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          )}
                        </circle>
                        <text
                          x={device.coordinates.x}
                          y={device.coordinates.y - 15}
                          fontSize="6"
                          fill="#374151"
                          textAnchor="middle"
                          fontWeight="bold"
                        >
                          {device.name}
                        </text>
                        {device.alerts > 0 && (
                          <circle
                            cx={device.coordinates.x + 6}
                            cy={device.coordinates.y - 6}
                            r="4"
                            fill="#ef4444"
                            stroke="#fff"
                            strokeWidth="1"
                          >
                            <animate
                              attributeName="r"
                              values="4;6;4"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                      </g>
                    ))}

                    {/* Active Alerts */}
                    {activeAlerts
                      .filter((alert) => alert.status === "active")
                      .map((alert, index) => (
                        <g key={alert.id}>
                          <circle
                            cx={alert.coordinates.x}
                            cy={alert.coordinates.y}
                            r="15"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="3"
                            opacity="0.8"
                            filter="url(#glow)"
                          >
                            <animate
                              attributeName="r"
                              values="15;25;15"
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle
                            cx={alert.coordinates.x}
                            cy={alert.coordinates.y}
                            r="8"
                            fill="#ef4444"
                            stroke="#fff"
                            strokeWidth="2"
                          />
                          <text
                            x={alert.coordinates.x}
                            y={alert.coordinates.y + 3}
                            fontSize="8"
                            fill="#fff"
                            textAnchor="middle"
                            fontWeight="bold"
                          >
                            !
                          </text>
                        </g>
                      ))}
                  </svg>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-xs space-y-2">
                    <div className="font-semibold text-gray-800 mb-2">
                      Chú thích
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Thiết bị online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span>Cảnh báo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>Offline/Lỗi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-red-300"></div>
                      <span>Cảnh báo cao</span>
                    </div>
                  </div>
                </div>

                {/* Real-time Clock */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-sm font-mono">
                    <div className="font-semibold">Real-time</div>
                    <div>{new Date().toLocaleTimeString("vi-VN")}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alert Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Bell className="h-5 w-5 mr-2 text-red-600" />
                Cảnh báo hoạt động
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Alert Filter */}
              <Select value={alertFilter} onValueChange={setAlertFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả cảnh báo</SelectItem>
                  <SelectItem value="high">Mức cao</SelectItem>
                  <SelectItem value="medium">Mức trung bình</SelectItem>
                  <SelectItem value="low">Mức thấp</SelectItem>
                </SelectContent>
              </Select>

              {/* Active Alerts List */}
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {activeAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-lg border-2 ${
                      alert.severity === "high"
                        ? "border-red-300 bg-red-50"
                        : alert.severity === "medium"
                          ? "border-yellow-300 bg-yellow-50"
                          : "border-blue-300 bg-blue-50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getAlertIcon(alert.type)}
                        <Badge className={getSeverityBadge(alert.severity)}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-500">{alert.time}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {alert.description}
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>Vị trí: {alert.location}</div>
                      <div>Camera: {alert.camera}</div>
                      <div>Đối tượng: {alert.subject}</div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <Badge className={getStatusBadge(alert.status)}>
                        {alert.status}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Play className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Actions */}
              <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Thao tác khẩn cấp
                </h4>
                <div className="space-y-2">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    size="sm"
                  >
                    <Phone className="h-3 w-3 mr-2" />
                    Gọi IOC Center
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-orange-600"
                    size="sm"
                  >
                    <Radio className="h-3 w-3 mr-2" />
                    Alert Bảo vệ
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <Camera className="h-3 w-3 mr-2" />
                    Live Camera
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alert History Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Activity className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Lịch sử cảnh báo hôm nay
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Thời gian</TableHead>
                  <TableHead>Loại</TableHead>
                  <TableHead>Mức độ</TableHead>
                  <TableHead>Vị trí</TableHead>
                  <TableHead>Mô tả</TableHead>
                  <TableHead>Đối tượng</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-mono text-sm">
                      {alert.time}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getAlertIcon(alert.type)}
                        <span className="text-sm capitalize">{alert.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getSeverityBadge(alert.severity)}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                        {alert.location}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {alert.description}
                    </TableCell>
                    <TableCell className="font-medium">
                      {alert.subject}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(alert.status)}>
                        {alert.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Play className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Bell className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Camera className="h-4 w-4 mr-2" />
                Camera Online
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">45/50</div>
              <p className="text-xs text-green-600 mt-1">90% hoạt động</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                IoT Devices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">15/16</div>
              <p className="text-xs text-blue-600 mt-1">94% online</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Cảnh báo hôm nay
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-700">12</div>
              <p className="text-xs text-yellow-600 mt-1">-3 so với hôm qua</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Tỷ lệ an ninh
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">97.8%</div>
              <p className="text-xs text-green-600 mt-1">+0.5% tuần này</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SmartMap;
