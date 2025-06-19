import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Truck,
  Search,
  Camera,
  MapPin,
  Clock,
  Eye,
  Route,
  AlertTriangle,
  CheckCircle,
  Car,
  Shield,
  TrendingUp,
  Play,
  Bell,
  Navigation,
} from "lucide-react";
import { useState } from "react";

const VehicleSearch = () => {
  const [searchMethod, setSearchMethod] = useState("license");

  const vehicleSearchResults = [
    {
      id: "V001",
      licensePlate: "29A-12345",
      brand: "Hino",
      model: "500 Series",
      color: "Trắng",
      type: "Xe tải",
      driver: "Nguyễn Văn A",
      firstSeen: "2025-01-18 08:30",
      lastSeen: "2025-01-18 14:30",
      currentLocation: "Khu vực cân",
      status: "Trong khu vực",
      blacklist: false,
      confidence: 98,
    },
    {
      id: "V002",
      licensePlate: "30B-67890",
      brand: "Hyundai",
      model: "Mighty",
      color: "Xanh",
      type: "Xe tải",
      driver: "Trần Văn B",
      firstSeen: "2025-01-18 07:45",
      lastSeen: "2025-01-18 13:20",
      currentLocation: "Đã rời khỏi nhà máy",
      status: "Đã ra",
      blacklist: false,
      confidence: 94,
    },
    {
      id: "V003",
      licensePlate: "51C-11111",
      brand: "Toyota",
      model: "Hiace",
      color: "Đỏ",
      type: "Xe con",
      driver: "Không xác định",
      firstSeen: "2025-01-18 10:15",
      lastSeen: "2025-01-18 10:20",
      currentLocation: "Cổng phụ",
      status: "Cảnh báo",
      blacklist: true,
      confidence: 89,
    },
  ];

  const vehicleRoute = [
    {
      time: "08:30:15",
      camera: "LPR-001",
      location: "Cổng chính",
      action: "Vào",
      speed: "15 km/h",
      confidence: 98,
    },
    {
      time: "08:35:30",
      camera: "LPR-005",
      location: "Bãi đỗ xe",
      action: "Đỗ xe",
      speed: "5 km/h",
      confidence: 95,
    },
    {
      time: "09:45:20",
      camera: "LPR-008",
      location: "Khu vực cân",
      action: "Di chuyển",
      speed: "10 km/h",
      confidence: 97,
    },
    {
      time: "14:30:10",
      camera: "LPR-008",
      location: "Khu vực cân",
      action: "Hiện tại",
      speed: "0 km/h",
      confidence: 98,
    },
  ];

  const getStatusBadge = (status: string, blacklist: boolean) => {
    if (blacklist) {
      return (
        <Badge className="text-red-700 bg-red-100">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Danh sách đen
        </Badge>
      );
    }

    const config = {
      "Trong khu vực": "text-green-700 bg-green-100",
      "Đã ra": "text-gray-700 bg-gray-100",
      "Cảnh báo": "text-red-700 bg-red-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const getVehicleTypeBadge = (type: string) => {
    const config = {
      "Xe tải": "text-blue-700 bg-blue-100",
      "Xe con": "text-green-700 bg-green-100",
      "Xe máy": "text-orange-700 bg-orange-100",
      "Xe khách": "text-purple-700 bg-purple-100",
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
              Tìm kiếm & Truy vết phương tiện
            </h1>
            <p className="text-gray-600 mt-1">
              LPR Camera Network - Blacklist Alert System
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Camera className="h-3 w-3 mr-1" />
              25 LPR Camera
            </Badge>
            <Badge variant="outline" className="bg-red-50 text-red-700">
              <Shield className="h-3 w-3 mr-1" />5 Blacklist active
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search Interface */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Search className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Tìm kiếm phương tiện
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search Method */}
              <div>
                <Label className="text-sm font-medium">
                  Phương pháp tìm kiếm
                </Label>
                <Select value={searchMethod} onValueChange={setSearchMethod}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="license">Biển số xe</SelectItem>
                    <SelectItem value="color">Màu sơn</SelectItem>
                    <SelectItem value="brand">Hãng xe</SelectItem>
                    <SelectItem value="type">Loại xe</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Input */}
              {searchMethod === "license" && (
                <div>
                  <Label htmlFor="license-plate">Biển số xe</Label>
                  <Input
                    id="license-plate"
                    placeholder="VD: 29A-12345"
                    className="mt-2"
                  />
                </div>
              )}

              {searchMethod === "color" && (
                <div>
                  <Label>Màu sơn xe</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Chọn màu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="white">Trắng</SelectItem>
                      <SelectItem value="black">Đen</SelectItem>
                      <SelectItem value="red">Đỏ</SelectItem>
                      <SelectItem value="blue">Xanh dương</SelectItem>
                      <SelectItem value="gray">Xám</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {searchMethod === "brand" && (
                <div>
                  <Label htmlFor="vehicle-brand">Hãng xe</Label>
                  <Input
                    id="vehicle-brand"
                    placeholder="Toyota, Hyundai, Hino..."
                    className="mt-2"
                  />
                </div>
              )}

              {searchMethod === "type" && (
                <div>
                  <Label>Loại xe</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Chọn loại xe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="truck">Xe tải</SelectItem>
                      <SelectItem value="car">Xe con</SelectItem>
                      <SelectItem value="motorcycle">Xe máy</SelectItem>
                      <SelectItem value="bus">Xe khách</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Time Range */}
              <div className="space-y-3">
                <Label>Khoảng thời gian</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="datetime-local" />
                  <Input type="datetime-local" />
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <Label>Khu vực camera</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn khu vực" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả camera</SelectItem>
                    <SelectItem value="gate-main">Cổng chính</SelectItem>
                    <SelectItem value="gate-side">Cổng phụ</SelectItem>
                    <SelectItem value="parking">Bãi đỗ xe</SelectItem>
                    <SelectItem value="weighing">Khu vực cân</SelectItem>
                    <SelectItem value="warehouse">Khu kho</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Advanced Options */}
              <div className="space-y-3">
                <Label>Tùy chọn nâng cao</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Chỉ xe trong blacklist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Xe không được cấp quyền</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Xe vi phạm tốc độ</span>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <Button className="w-full bg-hoa-phat-600 hover:bg-hoa-phat-700">
                <Search className="h-4 w-4 mr-2" />
                Tìm kiếm
              </Button>
            </CardContent>
          </Card>

          {/* Search Results */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Truck className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Kết quả tìm kiếm phương tiện
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Biển số</TableHead>
                    <TableHead>Xe</TableHead>
                    <TableHead>Tài xế</TableHead>
                    <TableHead>Lần đầu/cuối</TableHead>
                    <TableHead>Vị trí hiện tại</TableHead>
                    <TableHead>Độ tin cậy</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vehicleSearchResults.map((vehicle) => (
                    <TableRow key={vehicle.id}>
                      <TableCell>
                        <div className="font-mono font-semibold text-hoa-phat-700">
                          {vehicle.licensePlate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            {vehicle.brand} {vehicle.model}
                          </div>
                          <div className="text-sm text-gray-500">
                            {vehicle.color} •{" "}
                            <Badge
                              className={getVehicleTypeBadge(vehicle.type)}
                            >
                              {vehicle.type}
                            </Badge>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {vehicle.driver || "Không xác định"}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-xs">
                          <div>Đầu: {vehicle.firstSeen.split(" ")[1]}</div>
                          <div>Cuối: {vehicle.lastSeen.split(" ")[1]}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                          {vehicle.currentLocation}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="text-sm font-medium">
                            {vehicle.confidence}%
                          </div>
                          <div className="ml-2 w-16 bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full"
                              style={{ width: `${vehicle.confidence}%` }}
                            ></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(vehicle.status, vehicle.blacklist)}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Route className="h-3 w-3" />
                          </Button>
                          {vehicle.blacklist && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600"
                            >
                              <Bell className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Vehicle Route Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Route Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Navigation className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Lộ trình di chuyển - 29A-12345
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vehicleRoute.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Camera className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-sm">
                          {record.location}
                        </div>
                        <div className="text-xs text-gray-500">
                          {record.time}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {record.camera} • {record.action} • {record.speed}
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">LPR: </span>
                        <span className="text-xs font-medium ml-1">
                          {record.confidence}%
                        </span>
                        {record.confidence > 95 && (
                          <CheckCircle className="h-3 w-3 text-green-500 ml-1" />
                        )}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Play className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Visual Route Map */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <MapPin className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Tuyến đường trên bản đồ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-gray-100">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 300"
                  >
                    {/* Grid */}
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
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Roads */}
                    <path
                      d="M 20 250 L 380 250"
                      stroke="#64748b"
                      strokeWidth="8"
                      opacity="0.8"
                    />
                    <path
                      d="M 200 20 L 200 280"
                      stroke="#64748b"
                      strokeWidth="6"
                      opacity="0.8"
                    />

                    {/* Buildings/Areas */}
                    <rect
                      x="50"
                      y="50"
                      width="60"
                      height="40"
                      fill="#94a3b8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text
                      x="80"
                      y="75"
                      fontSize="8"
                      fill="#374151"
                      textAnchor="middle"
                    >
                      Cổng chính
                    </text>

                    <rect
                      x="250"
                      y="80"
                      width="80"
                      height="60"
                      fill="#94a3b8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text
                      x="290"
                      y="115"
                      fontSize="8"
                      fill="#374151"
                      textAnchor="middle"
                    >
                      Khu vực cân
                    </text>

                    <rect
                      x="120"
                      y="180"
                      width="60"
                      height="40"
                      fill="#94a3b8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text
                      x="150"
                      y="205"
                      fontSize="8"
                      fill="#374151"
                      textAnchor="middle"
                    >
                      Bãi đỗ xe
                    </text>

                    {/* Vehicle route */}
                    <path
                      d="M 80 250 L 150 230 L 200 200 L 290 160"
                      stroke="#ef4444"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="8,4"
                    />

                    {/* LPR Camera positions */}
                    <g>
                      <circle cx="80" cy="250" r="6" fill="#3b82f6" />
                      <text x="70" y="270" fontSize="7" fill="#3b82f6">
                        LPR-001
                      </text>

                      <circle cx="150" cy="230" r="6" fill="#3b82f6" />
                      <text x="140" y="245" fontSize="7" fill="#3b82f6">
                        LPR-005
                      </text>

                      <circle cx="290" cy="160" r="6" fill="#3b82f6" />
                      <text x="300" y="175" fontSize="7" fill="#3b82f6">
                        LPR-008
                      </text>
                    </g>

                    {/* Current vehicle position */}
                    <g>
                      <circle
                        cx="290"
                        cy="160"
                        r="10"
                        fill="#ef4444"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="r"
                          values="10;15;10"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <rect
                        x="285"
                        y="155"
                        width="10"
                        height="6"
                        fill="#fff"
                        stroke="#ef4444"
                        strokeWidth="1"
                      />
                      <text
                        x="305"
                        y="155"
                        fontSize="8"
                        fill="#ef4444"
                        fontWeight="bold"
                      >
                        29A-12345
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>LPR Camera</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-1 bg-red-500"></div>
                      <span>Lộ trình xe</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-2 bg-white border border-red-500"></div>
                      <span>Vị trí hiện tại</span>
                    </div>
                  </div>
                </div>

                {/* Time controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="sm" variant="outline" className="bg-white">
                    <Clock className="h-3 w-3 mr-1" />
                    Replay
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Speed: 1x
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blacklist Alert System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
              Hệ thống cảnh báo & Blacklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Active Alerts */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Cảnh báo đang hoạt động
                </h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-400 bg-red-50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-red-800">
                        51C-11111
                      </div>
                      <Badge className="text-red-700 bg-red-100">
                        <Bell className="h-3 w-3 mr-1" />
                        BLACKLIST
                      </Badge>
                    </div>
                    <div className="text-sm text-red-700 mb-2">
                      <div>Xe trong danh sách đen đã vào cổng phụ</div>
                      <div>Thời gian: 10:15 - Camera: LPR-003</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Gửi alert IOC
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600"
                      >
                        Xem chi tiết
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Thao tác nhanh
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Quản lý blacklist
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Cấu hình cảnh báo
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Camera className="h-4 w-4 mr-2" />
                    Xem live camera
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Báo cáo vi phạm
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default VehicleSearch;
