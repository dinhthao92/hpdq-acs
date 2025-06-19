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
  User,
  Search,
  Upload,
  Camera,
  MapPin,
  Clock,
  Eye,
  Route,
  AlertTriangle,
  CheckCircle,
  Users,
  Building,
  TrendingUp,
  Play,
  Calendar,
  IdCard,
} from "lucide-react";
import { useState } from "react";

const PersonSearch = () => {
  const [searchMethod, setSearchMethod] = useState("name");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const recentSearches = [
    {
      id: "P001",
      name: "Nguyễn Văn A",
      type: "CBNV",
      department: "Phòng Sản xuất",
      idNumber: "123456789",
      lastSeen: "2025-01-18 14:30",
      location: "Cổng chính",
      confidence: 95,
      status: "Trong khu vực",
    },
    {
      id: "P002",
      name: "Trần Thị B",
      type: "Nhà thầu",
      department: "Công ty ABC",
      idNumber: "987654321",
      lastSeen: "2025-01-18 13:45",
      location: "Kho 1",
      confidence: 87,
      status: "Đã ra",
    },
    {
      id: "P003",
      name: "Lê Văn C",
      type: "Khách",
      department: "Tập đoàn XYZ",
      idNumber: "456789123",
      lastSeen: "2025-01-18 15:00",
      location: "Văn phòng",
      confidence: 92,
      status: "Trong khu vực",
    },
  ];

  const trackingHistory = [
    {
      time: "14:30:15",
      camera: "CAM-001",
      location: "Cổng chính",
      action: "Vào",
      confidence: 95,
      image: "image1.jpg",
    },
    {
      time: "14:25:30",
      camera: "CAM-015",
      location: "Bãi đỗ xe",
      action: "Di chuyển",
      confidence: 88,
      image: "image2.jpg",
    },
    {
      time: "14:20:45",
      camera: "CAM-008",
      location: "Khu vực cân",
      action: "Dừng",
      confidence: 92,
      image: "image3.jpg",
    },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      "Trong khu vực": "text-green-700 bg-green-100",
      "Đã ra": "text-gray-700 bg-gray-100",
      "Cảnh báo": "text-red-700 bg-red-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const getTypeBadge = (type: string) => {
    const config = {
      CBNV: "text-blue-700 bg-blue-100",
      "Nhà thầu": "text-orange-700 bg-orange-100",
      Khách: "text-purple-700 bg-purple-100",
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
              Tìm kiếm & Truy vết đối tượng
            </h1>
            <p className="text-gray-600 mt-1">
              CBNV, nhà thầu, khách - Nhận diện AI & Sinh trắc học
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Camera className="h-3 w-3 mr-1" />
              50 Camera online
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <Users className="h-3 w-3 mr-1" />
              2.5M ảnh trong DB
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search Interface */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Search className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Tìm kiếm đối tượng
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search Method Selection */}
              <div>
                <Label className="text-sm font-medium">
                  Phương pháp tìm kiếm
                </Label>
                <Select value={searchMethod} onValueChange={setSearchMethod}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Tìm theo tên</SelectItem>
                    <SelectItem value="id">Mã định danh</SelectItem>
                    <SelectItem value="face">Hình ảnh khuôn mặt</SelectItem>
                    <SelectItem value="document">CCCD/Passport</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Input Based on Method */}
              {searchMethod === "name" && (
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="person-name">Tên đối tượng</Label>
                    <Input id="person-name" placeholder="Nhập họ tên..." />
                  </div>
                  <div>
                    <Label htmlFor="person-type">Loại đối tượng</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employee">CBNV</SelectItem>
                        <SelectItem value="contractor">Nhà thầu</SelectItem>
                        <SelectItem value="visitor">Khách</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {searchMethod === "id" && (
                <div>
                  <Label htmlFor="id-number">Mã định danh</Label>
                  <Input id="id-number" placeholder="Mã nhân viên, CCCD..." />
                </div>
              )}

              {searchMethod === "face" && (
                <div className="space-y-4">
                  <Label>Tìm kiếm bằng hình ảnh</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-hoa-phat-400 transition-colors">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      Kéo thả ảnh hoặc click để chọn
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      JPG, PNG - Tối đa 5MB
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-xs text-blue-800">
                    <strong>AI Face Recognition:</strong> Thuật toán sinh trắc
                    học sẽ tìm kiếm trong 2.5M ảnh với độ chính xác 95%+
                  </div>
                </div>
              )}

              {searchMethod === "document" && (
                <div>
                  <Label htmlFor="document-number">Số CCCD/Passport</Label>
                  <Input
                    id="document-number"
                    placeholder="Nhập số giấy tờ..."
                  />
                </div>
              )}

              {/* Time Range */}
              <div className="space-y-3">
                <Label>Khoảng thời gian</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Input type="datetime-local" />
                  </div>
                  <div>
                    <Input type="datetime-local" />
                  </div>
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <Label>Khu vực tìm kiếm</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn khu vực" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toàn bộ nhà máy</SelectItem>
                    <SelectItem value="gate">Khu vực cổng</SelectItem>
                    <SelectItem value="production">Khu sản xuất</SelectItem>
                    <SelectItem value="warehouse">Khu kho</SelectItem>
                    <SelectItem value="office">Văn phòng</SelectItem>
                  </SelectContent>
                </Select>
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
                <Users className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Kết quả tìm kiếm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ảnh</TableHead>
                    <TableHead>Thông tin</TableHead>
                    <TableHead>Loại</TableHead>
                    <TableHead>Xuất hiện cuối</TableHead>
                    <TableHead>Vị trí</TableHead>
                    <TableHead>Độ tin cậy</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSearches.map((person) => (
                    <TableRow key={person.id}>
                      <TableCell>
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{person.name}</div>
                          <div className="text-sm text-gray-500">
                            {person.department}
                          </div>
                          <div className="text-xs text-gray-400">
                            ID: {person.idNumber}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getTypeBadge(person.type)}>
                          {person.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{person.lastSeen.split(" ")[1]}</div>
                          <div className="text-gray-500">
                            {person.lastSeen.split(" ")[0]}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                          {person.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="text-sm font-medium">
                            {person.confidence}%
                          </div>
                          <div className="ml-2 w-16 bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-green-500 h-1.5 rounded-full"
                              style={{ width: `${person.confidence}%` }}
                            ></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(person.status)}>
                          {person.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Route className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Tracking View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Movement Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Route className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Lịch sử di chuyển - Nguyễn Văn A
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trackingHistory.map((record, index) => (
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
                        Camera: {record.camera} • {record.action}
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">
                          Độ tin cậy:{" "}
                        </span>
                        <span className="text-xs font-medium ml-1">
                          {record.confidence}%
                        </span>
                        {record.confidence > 90 && (
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

          {/* 2D/3D Map View */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <MapPin className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Bản đồ lộ trình 2D
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
                {/* Map Simulation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 300"
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
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Buildings */}
                    <rect
                      x="50"
                      y="50"
                      width="80"
                      height="60"
                      fill="#94a3b8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text
                      x="90"
                      y="85"
                      fontSize="10"
                      fill="#374151"
                      textAnchor="middle"
                    >
                      Văn phòng
                    </text>

                    <rect
                      x="200"
                      y="80"
                      width="100"
                      height="80"
                      fill="#94a3b8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text
                      x="250"
                      y="125"
                      fontSize="10"
                      fill="#374151"
                      textAnchor="middle"
                    >
                      Khu sản xuất
                    </text>

                    {/* Movement path */}
                    <path
                      d="M 30 200 L 90 180 L 150 160 L 250 140 L 350 120"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="5,5"
                    />

                    {/* Position markers with timestamps */}
                    <g>
                      <circle cx="30" cy="200" r="4" fill="#ef4444" />
                      <text x="15" y="220" fontSize="8" fill="#374151">
                        14:20
                      </text>

                      <circle cx="150" cy="160" r="4" fill="#f59e0b" />
                      <text x="135" y="150" fontSize="8" fill="#374151">
                        14:25
                      </text>

                      <circle cx="350" cy="120" r="4" fill="#10b981" />
                      <text x="335" y="110" fontSize="8" fill="#374151">
                        14:30
                      </text>
                    </g>

                    {/* Current position */}
                    <circle
                      cx="350"
                      cy="120"
                      r="8"
                      fill="#3b82f6"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        values="8;12;8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>

                {/* Map controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="sm" variant="outline" className="bg-white">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    2D
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white">
                    <Calendar className="h-3 w-3 mr-1" />
                    Timeline
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>Bắt đầu (14:20)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span>Trung gian (14:25)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Hiện tại (14:30)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <AlertTriangle className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Thao tác nhanh & Cảnh báo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="p-4 h-auto justify-start">
                <div className="text-left">
                  <div className="font-medium">Xuất báo cáo</div>
                  <div className="text-sm text-gray-600">
                    Lịch sử di chuyển chi tiết
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="p-4 h-auto justify-start">
                <div className="text-left">
                  <div className="font-medium">Thêm vào blacklist</div>
                  <div className="text-sm text-gray-600">
                    Cảnh báo khi xuất hiện
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="p-4 h-auto justify-start">
                <div className="text-left">
                  <div className="font-medium">Phát video lại</div>
                  <div className="text-sm text-gray-600">
                    Xem lại footage camera
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PersonSearch;
