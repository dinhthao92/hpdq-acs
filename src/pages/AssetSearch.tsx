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
  Package,
  Search,
  Upload,
  Camera,
  Clock,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
  Truck,
  MapPin,
  FileText,
  TrendingUp,
} from "lucide-react";

const AssetSearch = () => {
  const vttsAssets = [
    {
      id: "VTTS-001",
      equipmentCode: "GPS-001-2025",
      name: "Thiết bị GPS Tracker",
      type: "GPS Tracking",
      registrationId: "REG-001",
      driver: "Nguyễn Văn A",
      vehicle: "29A-12345",
      registrationDate: "2025-01-15",
      status: "Đã duyệt",
      entryStatus: "Đã vào",
      exitStatus: "Chưa ra",
      lastUpdate: "2025-01-18 14:30",
      location: "Khu sản xuất",
      images: 3,
    },
    {
      id: "VTTS-002",
      equipmentCode: "CAM-002-2025",
      name: "Camera hành trình",
      type: "Recording Device",
      registrationId: "REG-002",
      driver: "Trần Văn B",
      vehicle: "30B-67890",
      registrationDate: "2025-01-16",
      status: "Đang xử lý",
      entryStatus: "Đã vào",
      exitStatus: "Đã ra",
      lastUpdate: "2025-01-18 13:20",
      location: "Đã rời khỏi nhà máy",
      images: 2,
    },
    {
      id: "VTTS-003",
      equipmentCode: "SEN-003-2025",
      name: "Cảm biến nhiệt độ",
      type: "Temperature Sensor",
      registrationId: "REG-003",
      driver: "Lê Văn C",
      vehicle: "51C-11111",
      registrationDate: "2025-01-17",
      status: "Từ chối",
      entryStatus: "Chưa vào",
      exitStatus: "N/A",
      lastUpdate: "2025-01-18 09:00",
      location: "Cổng chính",
      images: 1,
    },
  ];

  const assetHistory = [
    {
      time: "14:30:15",
      action: "Cập nhật vị trí",
      location: "Khu sản xuất - Dây chuyền 2",
      status: "Hoạt động bình thường",
      user: "Hệ thống tự động",
      details: "GPS signal: Strong",
    },
    {
      time: "12:15:30",
      action: "Kiểm tra định kỳ",
      location: "Khu sản xuất - Dây chuyền 2",
      status: "Đã kiểm tra",
      user: "Nguyễn Văn A",
      details: "Thiết bị hoạt động tốt",
    },
    {
      time: "08:30:45",
      action: "Vào khu vực",
      location: "Cổng chính",
      status: "Đã xác thực",
      user: "Bảo vệ - Trạm 1",
      details: "Scan QR code thành công",
    },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      "Đã duyệt": "text-green-700 bg-green-100",
      "Đang xử lý": "text-blue-700 bg-blue-100",
      "Từ chối": "text-red-700 bg-red-100",
      "Chờ duyệt": "text-yellow-700 bg-yellow-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const getEntryExitBadge = (status: string) => {
    const config = {
      "Đã vào": "text-green-700 bg-green-100",
      "Đã ra": "text-blue-700 bg-blue-100",
      "Chưa vào": "text-gray-700 bg-gray-100",
      "Chưa ra": "text-yellow-700 bg-yellow-100",
      "N/A": "text-gray-500 bg-gray-50",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "GPS Tracking":
        return <MapPin className="h-4 w-4 text-blue-600" />;
      case "Recording Device":
        return <Camera className="h-4 w-4 text-green-600" />;
      case "Temperature Sensor":
        return <TrendingUp className="h-4 w-4 text-orange-600" />;
      default:
        return <Package className="h-4 w-4 text-gray-600" />;
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
              Tìm kiếm vật tư tài sản (VTTS)
            </h1>
            <p className="text-gray-600 mt-1">
              Truy xuất thiết bị, tài sản và trạng thái đăng ký
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Package className="h-3 w-3 mr-1" />
              145 VTTS đang hoạt động
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <CheckCircle className="h-3 w-3 mr-1" />
              98% tỷ lệ theo dõi
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search Interface */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Search className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Tìm kiếm VTTS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search by Equipment Code */}
              <div>
                <Label htmlFor="equipment-code">Mã thiết bị</Label>
                <Input
                  id="equipment-code"
                  placeholder="VD: GPS-001-2025"
                  className="mt-2"
                />
              </div>

              {/* Search by Registration */}
              <div>
                <Label htmlFor="registration-id">Đơn đăng ký</Label>
                <Input
                  id="registration-id"
                  placeholder="VD: REG-001"
                  className="mt-2"
                />
              </div>

              {/* Search by Driver */}
              <div>
                <Label htmlFor="driver-name">Tài xế vận chuyển</Label>
                <Input
                  id="driver-name"
                  placeholder="Nhập tên tài xế..."
                  className="mt-2"
                />
              </div>

              {/* Search by Vehicle */}
              <div>
                <Label htmlFor="vehicle-plate">Xe vận chuyển</Label>
                <Input
                  id="vehicle-plate"
                  placeholder="VD: 29A-12345"
                  className="mt-2"
                />
              </div>

              {/* Equipment Type */}
              <div>
                <Label>Loại thiết bị</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn loại" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="gps">GPS Tracking</SelectItem>
                    <SelectItem value="camera">Recording Device</SelectItem>
                    <SelectItem value="sensor">Temperature Sensor</SelectItem>
                    <SelectItem value="radio">Radio Equipment</SelectItem>
                    <SelectItem value="computer">Computer/Tablet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status Filter */}
              <div>
                <Label>Trạng thái đăng ký</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn trạng thái" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="approved">Đã duyệt</SelectItem>
                    <SelectItem value="processing">Đang xử lý</SelectItem>
                    <SelectItem value="rejected">Từ chối</SelectItem>
                    <SelectItem value="pending">Chờ duyệt</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div className="space-y-3">
                <Label>Thời gian đăng ký</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="date" />
                  <Input type="date" />
                </div>
              </div>

              {/* Image Search */}
              <div className="space-y-4">
                <Label>Tìm kiếm bằng hình ảnh</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-hoa-phat-400 transition-colors">
                  <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                  <p className="text-xs text-gray-600">
                    Tải ảnh thiết bị để tìm kiếm
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    JPG, PNG - Tối đa 5MB
                  </p>
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
                <Package className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Danh sách VTTS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã thiết bị</TableHead>
                    <TableHead>Thông tin</TableHead>
                    <TableHead>Đăng ký</TableHead>
                    <TableHead>Vận chuyển</TableHead>
                    <TableHead>Vào/Ra</TableHead>
                    <TableHead>Vị trí hiện tại</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vttsAssets.map((asset) => (
                    <TableRow key={asset.id}>
                      <TableCell>
                        <div>
                          <div className="font-mono font-semibold text-hoa-phat-700">
                            {asset.equipmentCode}
                          </div>
                          <div className="text-xs text-gray-500">
                            ID: {asset.id}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium flex items-center">
                            {getTypeIcon(asset.type)}
                            <span className="ml-2">{asset.name}</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {asset.type}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Camera className="h-3 w-3 mr-1" />
                            {asset.images} ảnh
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="font-medium">
                            {asset.registrationId}
                          </div>
                          <div className="text-gray-500">
                            {asset.registrationDate}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1 text-gray-400" />
                            {asset.driver}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Truck className="h-3 w-3 mr-1" />
                            {asset.vehicle}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <Badge
                            className={getEntryExitBadge(asset.entryStatus)}
                          >
                            {asset.entryStatus}
                          </Badge>
                          <Badge
                            className={getEntryExitBadge(asset.exitStatus)}
                          >
                            {asset.exitStatus}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                            {asset.location}
                          </div>
                          <div className="text-xs text-gray-500">
                            {asset.lastUpdate.split(" ")[1]}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(asset.status)}>
                          {asset.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileText className="h-3 w-3" />
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

        {/* Asset Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Asset History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Clock className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Lịch sử hoạt động - GPS-001-2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assetHistory.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        {record.action === "Cập nhật vị trí" && (
                          <MapPin className="h-4 w-4 text-blue-600" />
                        )}
                        {record.action === "Kiểm tra định kỳ" && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                        {record.action === "Vào khu vực" && (
                          <Package className="h-4 w-4 text-orange-600" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-sm">
                          {record.action}
                        </div>
                        <div className="text-xs text-gray-500">
                          {record.time}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {record.location}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        <div>Người thực hiện: {record.user}</div>
                        <div>Chi tiết: {record.details}</div>
                      </div>
                      <Badge
                        className={
                          record.status === "Hoạt động bình thường" ||
                          record.status === "Đã kiểm tra" ||
                          record.status === "Đã xác thực"
                            ? "text-green-700 bg-green-100"
                            : "text-gray-700 bg-gray-100"
                        }
                      >
                        {record.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Asset Images */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Camera className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Hình ảnh đính kèm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                    <Package className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="text-xs text-center">
                    <div className="font-medium">Ảnh thiết bị</div>
                    <div className="text-gray-500">Đăng ký lúc 08:30</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="text-xs text-center">
                    <div className="font-medium">Giấy tờ</div>
                    <div className="text-gray-500">Chứng nhận xuất xứ</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="text-xs text-center">
                    <div className="font-medium">Ảnh vị trí</div>
                    <div className="text-gray-500">Cập nhật 14:30</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <Upload className="h-6 w-6 mx-auto text-gray-400 mb-1" />
                      <div className="text-xs text-gray-500">Thêm ảnh</div>
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
              <TrendingUp className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Thao tác nhanh & Báo cáo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="p-4 h-auto justify-start">
                <div className="text-left">
                  <div className="font-medium">Truy xuất nhanh</div>
                  <div className="text-sm text-gray-600">
                    Xác nhận vào/ra nhanh
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="p-4 h-auto justify-start">
                <div className="text-left">
                  <div className="font-medium">Xuất báo cáo</div>
                  <div className="text-sm text-gray-600">
                    Báo cáo đăng ký VTTS
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="p-4 h-auto justify-start">
                <div className="text-left">
                  <div className="font-medium">Cập nhật trạng thái</div>
                  <div className="text-sm text-gray-600">
                    Bulk update status
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="p-4 h-auto justify-start">
                <div className="text-left">
                  <div className="font-medium">Kiểm tra định kỳ</div>
                  <div className="text-sm text-gray-600">Lên lịch kiểm tra</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AssetSearch;
