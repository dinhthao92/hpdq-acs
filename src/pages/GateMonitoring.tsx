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
  Camera,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  Car,
  User,
  Activity,
  Lock,
  Unlock,
  Eye,
  AlertTriangle,
  PlayCircle,
  Square,
} from "lucide-react";
import { useState } from "react";

const GateMonitoring = () => {
  const [barrierStatus, setBarrierStatus] = useState<"open" | "closed">(
    "closed",
  );

  const cameraFeeds = [
    {
      id: "cam-1",
      name: "Cổng chính - Camera 1",
      status: "online",
      type: "LPR",
    },
    {
      id: "cam-2",
      name: "Cổng chính - Camera 2",
      status: "online",
      type: "Face",
    },
    {
      id: "cam-3",
      name: "Cổng phụ - Camera 1",
      status: "offline",
      type: "LPR",
    },
    {
      id: "cam-4",
      name: "Khu vực cân - Camera 1",
      status: "online",
      type: "Overview",
    },
  ];

  const recentEvents = [
    {
      time: "14:25:30",
      type: "success",
      vehicle: "29A-12345",
      driver: "Nguyễn Văn A",
      action: "Vào",
      method: "Face + LPR",
      gate: "Cổng chính",
    },
    {
      time: "14:20:15",
      type: "failed",
      vehicle: "30B-67890",
      driver: "Không xác định",
      action: "Vào",
      method: "LPR",
      gate: "Cổng chính",
    },
    {
      time: "14:18:45",
      type: "success",
      vehicle: "51C-11111",
      driver: "Trần Văn B",
      action: "Ra",
      method: "Face + LPR",
      gate: "Cổng chính",
    },
    {
      time: "14:15:20",
      type: "warning",
      vehicle: "29A-12345",
      driver: "Nguyễn Văn A",
      action: "Vào",
      method: "Manual Override",
      gate: "Cổng phụ",
    },
  ];

  const toggleBarrier = () => {
    setBarrierStatus((prev) => (prev === "open" ? "closed" : "open"));
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getEventBadge = (type: string) => {
    const config = {
      success: "text-green-700 bg-green-100",
      failed: "text-red-700 bg-red-100",
      warning: "text-yellow-700 bg-yellow-100",
    };
    return config[type as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Giám sát & Xác thực tại cổng
            </h1>
            <p className="text-gray-600 mt-1">
              Monitoring thời gian thực - Điều khiển thiết bị an ninh
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Activity className="h-3 w-3 mr-1" />
              Hệ thống hoạt động
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <Camera className="h-3 w-3 mr-1" />
              4/4 Camera online
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Camera Feeds */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Camera className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Camera Feeds - Thời gian thực
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cameraFeeds.map((camera) => (
                  <div
                    key={camera.id}
                    className="relative border rounded-lg overflow-hidden"
                  >
                    {/* Camera Feed Display */}
                    <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                      {camera.status === "online" ? (
                        <div className="text-center">
                          <Camera className="h-12 w-12 text-white mb-2 mx-auto" />
                          <p className="text-white text-sm">Live Feed</p>
                          <div className="absolute top-2 right-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <XCircle className="h-12 w-12 text-red-400 mb-2 mx-auto" />
                          <p className="text-red-400 text-sm">Offline</p>
                        </div>
                      )}

                      {/* Recognition Overlay */}
                      {camera.status === "online" &&
                        (camera.type === "LPR" || camera.type === "Face") && (
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="bg-black/70 text-white p-2 rounded text-xs">
                              {camera.type === "LPR" && (
                                <div>
                                  <p className="text-green-400">
                                    ✓ Đã nhận diện: 29A-12345
                                  </p>
                                  <p>Độ tin cậy: 95%</p>
                                </div>
                              )}
                              {camera.type === "Face" && (
                                <div>
                                  <p className="text-green-400">
                                    ✓ Đã nhận diện: Nguyễn Văn A
                                  </p>
                                  <p>Độ tin cậy: 87%</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                    </div>

                    {/* Camera Info */}
                    <div className="p-3 bg-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{camera.name}</h4>
                          <p className="text-xs text-gray-600">
                            Type: {camera.type}
                          </p>
                        </div>
                        <Badge
                          className={
                            camera.status === "online"
                              ? "text-green-700 bg-green-100"
                              : "text-red-700 bg-red-100"
                          }
                        >
                          {camera.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Control Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Shield className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Bảng điều khiển
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Barrier Control */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Điều khiển barrier
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Trạng thái hiện tại:
                    </span>
                    <Badge
                      className={
                        barrierStatus === "open"
                          ? "text-green-700 bg-green-100"
                          : "text-red-700 bg-red-100"
                      }
                    >
                      {barrierStatus === "open" ? (
                        <>
                          <Unlock className="h-3 w-3 mr-1" />
                          Mở
                        </>
                      ) : (
                        <>
                          <Lock className="h-3 w-3 mr-1" />
                          Đóng
                        </>
                      )}
                    </Badge>
                  </div>
                  <Button
                    onClick={toggleBarrier}
                    className={`w-full ${
                      barrierStatus === "open"
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {barrierStatus === "open" ? (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Đóng Barrier
                      </>
                    ) : (
                      <>
                        <Unlock className="h-4 w-4 mr-2" />
                        Mở Barrier
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Manual Override */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Thao tác thủ công
                </h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full text-left justify-start"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Xác thực thủ công
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-left justify-start"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Xem lại recording
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-left justify-start text-red-600"
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Báo động khẩn cấp
                  </Button>
                </div>
              </div>

              {/* Current Detection */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Phát hiện hiện tại
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Biển số:</span>
                      <span className="font-medium">29A-12345</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Tài xế:</span>
                      <span className="font-medium">Nguyễn Văn A</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ticket:</span>
                      <span className="font-medium">TT-001</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Quyền truy cập:</span>
                      <Badge className="text-green-700 bg-green-100">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Được phép
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-3 bg-hoa-phat-600 hover:bg-hoa-phat-700">
                    Cho phép vào
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Thống kê hôm nay
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-green-700">
                      45
                    </div>
                    <div className="text-xs text-green-600">Thành công</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-red-700">3</div>
                    <div className="text-xs text-red-600">Từ chối</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-yellow-700">
                      2
                    </div>
                    <div className="text-xs text-yellow-600">Cảnh báo</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-blue-700">
                      12
                    </div>
                    <div className="text-xs text-blue-600">Thủ công</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Log */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Activity className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Nhật ký ra vào - Thời gian thực
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Thời gian</TableHead>
                  <TableHead>Kết quả</TableHead>
                  <TableHead>Phương tiện</TableHead>
                  <TableHead>Tài xế</TableHead>
                  <TableHead>Hành động</TableHead>
                  <TableHead>Phương thức</TableHead>
                  <TableHead>Cổng</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentEvents.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-sm">
                      {event.time}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getEventIcon(event.type)}
                        <Badge className={getEventBadge(event.type)}>
                          {event.type === "success" && "Thành công"}
                          {event.type === "failed" && "Thất bại"}
                          {event.type === "warning" && "Cảnh báo"}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {event.vehicle}
                    </TableCell>
                    <TableCell>{event.driver}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          event.action === "Vào"
                            ? "text-green-700"
                            : "text-blue-700"
                        }
                      >
                        {event.action}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{event.method}</TableCell>
                    <TableCell className="text-sm">{event.gate}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <PlayCircle className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GateMonitoring;
