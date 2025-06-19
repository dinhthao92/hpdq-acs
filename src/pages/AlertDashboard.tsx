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
  AlertTriangle,
  Bell,
  Shield,
  Users,
  Truck,
  Package,
  FileText,
  Camera,
  Clock,
  MapPin,
  Eye,
  Play,
  Volume2,
  Phone,
  RadioIcon as Radio,
  Activity,
  TrendingUp,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

const AlertDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const realtimeAlerts = [
    {
      id: "RT-001",
      type: "personnel",
      severity: "high",
      time: "14:35:20",
      title: "Người thuộc danh sách hạn chế",
      subject: "Nguyễn Văn X",
      location: "Khu sản xuất - Dây chuyền 2",
      camera: "CAM-008",
      violation: "Vào khu vực hạn chế",
      description: "Nhân viên không có quyền truy cập khu vực sản xuất",
      status: "active",
      priority: 1,
      evidence: ["face_detection.jpg", "area_violation.mp4"],
    },
    {
      id: "RT-002",
      type: "vehicle",
      severity: "critical",
      time: "14:33:15",
      title: "Xe trong danh sách đen",
      subject: "51C-11111",
      location: "Cổng chính",
      camera: "LPR-001",
      violation: "Blacklist vehicle detected",
      description: "Phương tiện bị cấm đã cố gắng vào khu vực",
      status: "active",
      priority: 1,
      evidence: ["license_plate.jpg", "gate_entry.mp4"],
    },
    {
      id: "RT-003",
      type: "vtts",
      severity: "medium",
      time: "14:30:45",
      title: "VTTS không khớp lệnh",
      subject: "GPS-999-2025",
      location: "Trạm cân",
      camera: "CAM-005",
      violation: "Unregistered equipment",
      description: "Thiết bị không có trong danh sách đăng ký",
      status: "investigating",
      priority: 2,
      evidence: ["equipment_scan.jpg"],
    },
    {
      id: "RT-004",
      type: "transport",
      severity: "low",
      time: "14:28:30",
      title: "Lệnh vận chuyển sai tuyến",
      subject: "TT-005",
      location: "Khu vực B",
      camera: "CAM-012",
      violation: "Wrong route taken",
      description: "Xe đi sai tuyến đường đã được phê duyệt",
      status: "resolved",
      priority: 3,
      evidence: ["route_tracking.jpg"],
    },
    {
      id: "RT-005",
      type: "personnel",
      severity: "medium",
      time: "14:25:10",
      title: "Ra vào ngoài giờ",
      subject: "Trần Thị Y",
      location: "Cổng phụ",
      camera: "CAM-003",
      violation: "Outside working hours",
      description: "Nhân viên ra vào ngoài giờ làm việc cho phép",
      status: "investigating",
      priority: 2,
      evidence: ["timestamp_violation.jpg"],
    },
  ];

  const alertStats = {
    today: {
      total: 47,
      critical: 3,
      high: 8,
      medium: 21,
      low: 15,
      resolved: 39,
      pending: 8,
    },
    thisWeek: {
      total: 234,
      avgPerDay: 33.4,
      trend: "+12%",
    },
  };

  const getSeverityBadge = (severity: string) => {
    const config = {
      critical: {
        className: "text-red-800 bg-red-100 border-red-300 animate-pulse",
        icon: <AlertTriangle className="h-3 w-3 mr-1" />,
      },
      high: {
        className: "text-red-700 bg-red-100 border-red-300",
        icon: <AlertTriangle className="h-3 w-3 mr-1" />,
      },
      medium: {
        className: "text-yellow-700 bg-yellow-100 border-yellow-300",
        icon: <Clock className="h-3 w-3 mr-1" />,
      },
      low: {
        className: "text-blue-700 bg-blue-100 border-blue-300",
        icon: <CheckCircle className="h-3 w-3 mr-1" />,
      },
    };
    const item = config[severity as keyof typeof config];
    return (
      <Badge className={item.className}>
        {item.icon}
        {severity.toUpperCase()}
      </Badge>
    );
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      personnel: <Users className="h-4 w-4 text-blue-600" />,
      vehicle: <Truck className="h-4 w-4 text-green-600" />,
      vtts: <Package className="h-4 w-4 text-orange-600" />,
      transport: <FileText className="h-4 w-4 text-purple-600" />,
    };
    return (
      icons[type as keyof typeof icons] || (
        <AlertTriangle className="h-4 w-4 text-gray-600" />
      )
    );
  };

  const getStatusBadge = (status: string) => {
    const config = {
      active: "text-red-700 bg-red-100",
      investigating: "text-yellow-700 bg-yellow-100",
      resolved: "text-green-700 bg-green-100",
      false_alarm: "text-gray-700 bg-gray-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const playAlertSound = () => {
    if (soundEnabled) {
      // Simulate alert sound
      console.log("🔊 Alert sound played");
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
              Cảnh báo thời gian thực
            </h1>
            <p className="text-gray-600 mt-1">
              Giám sát an ninh chủ động - Phản ứng kịp thời
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-sm font-mono bg-white p-2 rounded border">
              {currentTime.toLocaleString("vi-VN")}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={soundEnabled ? "bg-green-50 text-green-700" : ""}
            >
              <Volume2 className="h-4 w-4 mr-2" />
              {soundEnabled ? "Bật âm thanh" : "Tắt âm thanh"}
            </Button>
            <Badge
              variant="outline"
              className="bg-red-50 text-red-700 animate-pulse"
            >
              <Bell className="h-3 w-3 mr-1" />
              {alertStats.today.pending} cảnh báo chưa xử lý
            </Badge>
          </div>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Tổng cảnh báo hôm nay
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {alertStats.today.total}
              </div>
              <p className="text-xs text-gray-600 mt-1">
                +{alertStats.thisWeek.trend} so với tuần trước
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-600">
                Nghiêm trọng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-700">
                {alertStats.today.critical}
              </div>
              <p className="text-xs text-red-600 mt-1">Cần xử lý ngay</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-600">
                Cao
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-700">
                {alertStats.today.high}
              </div>
              <p className="text-xs text-yellow-600 mt-1">Ưu tiên cao</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-600">
                Trung bình
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">
                {alertStats.today.medium}
              </div>
              <p className="text-xs text-blue-600 mt-1">Theo dõi</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-600">
                Đã xử lý
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">
                {alertStats.today.resolved}
              </div>
              <p className="text-xs text-green-600 mt-1">
                {Math.round(
                  (alertStats.today.resolved / alertStats.today.total) * 100,
                )}
                % tỷ lệ
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Critical Alerts - Highlighted */}
        <Card className="border-red-300 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-red-800">
              <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
              Cảnh báo nghiêm trọng - Yêu cầu xử lý ngay
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {realtimeAlerts
                .filter(
                  (alert) =>
                    alert.severity === "critical" || alert.severity === "high",
                )
                .map((alert) => (
                  <div
                    key={alert.id}
                    className="bg-white p-4 rounded-lg border-2 border-red-300 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {getTypeIcon(alert.type)}
                          <div className="font-semibold text-gray-900">
                            {alert.title}
                          </div>
                          {getSeverityBadge(alert.severity)}
                          <div className="text-sm text-gray-500">
                            {alert.time}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                          <div>
                            <span className="text-gray-600">Đối tượng: </span>
                            <span className="font-medium">{alert.subject}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Vị trí: </span>
                            <span className="font-medium">
                              {alert.location}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Camera: </span>
                            <span className="font-medium">{alert.camera}</span>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <span className="font-medium">Vi phạm: </span>
                          {alert.description}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <Phone className="h-3 w-3 mr-1" />
                          Gọi IOC
                        </Button>
                        <Button size="sm" variant="outline">
                          <Radio className="h-3 w-3 mr-1" />
                          Alert bảo vệ
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3 mr-1" />
                          Xem chi tiết
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Real-time Alert Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Activity className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Luồng cảnh báo thời gian thực
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Thời gian</TableHead>
                  <TableHead>Loại</TableHead>
                  <TableHead>Mức độ</TableHead>
                  <TableHead>Tiêu đề</TableHead>
                  <TableHead>Đối tượng</TableHead>
                  <TableHead>Vị trí</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Bằng chứng</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {realtimeAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-mono text-sm">
                      {alert.time}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(alert.type)}
                        <span className="text-sm capitalize">{alert.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getSeverityBadge(alert.severity)}</TableCell>
                    <TableCell>
                      <div className="font-medium">{alert.title}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {alert.violation}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {alert.subject}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                        {alert.location}
                      </div>
                      <div className="text-xs text-gray-500">
                        {alert.camera}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(alert.status)}>
                        {alert.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        {alert.evidence.map((item, index) => (
                          <Button key={index} size="sm" variant="outline">
                            {item.includes(".mp4") ? (
                              <Play className="h-3 w-3" />
                            ) : (
                              <Camera className="h-3 w-3" />
                            )}
                          </Button>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={playAlertSound}
                        >
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

        {/* Alert Categories Quick View */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold text-blue-700">
                <Users className="h-5 w-5 mr-2" />
                Cảnh báo nhân sự
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Đi sai quyền:</span>
                  <span className="font-medium text-red-600">3</span>
                </div>
                <div className="flex justify-between">
                  <span>Ngoài giờ:</span>
                  <span className="font-medium text-yellow-600">5</span>
                </div>
                <div className="flex justify-between">
                  <span>Sai khu vực:</span>
                  <span className="font-medium text-blue-600">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Danh sách hạn chế:</span>
                  <span className="font-medium text-red-600">1</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold text-green-700">
                <Truck className="h-5 w-5 mr-2" />
                Cảnh báo phương tiện
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Không có quyền:</span>
                  <span className="font-medium text-red-600">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Sai tuyến:</span>
                  <span className="font-medium text-yellow-600">4</span>
                </div>
                <div className="flex justify-between">
                  <span>Sai giờ:</span>
                  <span className="font-medium text-blue-600">1</span>
                </div>
                <div className="flex justify-between">
                  <span>Blacklist:</span>
                  <span className="font-medium text-red-600">1</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold text-orange-700">
                <Package className="h-5 w-5 mr-2" />
                Cảnh báo VTTS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Không khớp lệnh:</span>
                  <span className="font-medium text-red-600">1</span>
                </div>
                <div className="flex justify-between">
                  <span>Sai mã đăng ký:</span>
                  <span className="font-medium text-yellow-600">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Vượt khối lượng:</span>
                  <span className="font-medium text-orange-600">1</span>
                </div>
                <div className="flex justify-between">
                  <span>Thiếu giấy tờ:</span>
                  <span className="font-medium text-blue-600">3</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold text-purple-700">
                <FileText className="h-5 w-5 mr-2" />
                Cảnh báo vận chuyển
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lệnh giả mạo:</span>
                  <span className="font-medium text-red-600">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Ticket trùng:</span>
                  <span className="font-medium text-yellow-600">1</span>
                </div>
                <div className="flex justify-between">
                  <span>Sai tuyến:</span>
                  <span className="font-medium text-orange-600">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Chưa cấp quyền:</span>
                  <span className="font-medium text-blue-600">1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AlertDashboard;
