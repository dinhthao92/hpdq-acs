import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  Users,
  Car,
  Settings,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Upload,
  Calendar,
  User,
  Camera,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Ban,
} from "lucide-react";

const BlacklistManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isAddBlacklistOpen, setIsAddBlacklistOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("person");

  // Mock data for blacklisted persons
  const blacklistedPersons = [
    {
      id: "BL-P-001",
      name: "Nguyễn Văn X",
      idCard: "123456789",
      photo: "/placeholder-avatar.jpg",
      reason: "Vi phạm nội quy an toàn lao động nghiêm trọng",
      reportedBy: "Phòng An ninh",
      dateAdded: "2024-01-10",
      status: "active",
      violations: 3,
      lastDetected: "2024-01-15 14:30",
      description: "Không tuân thủ quy định đội mũ bảo hộ và giày an toàn",
    },
    {
      id: "BL-P-002",
      name: "Trần Thị Y",
      idCard: "987654321",
      photo: "/placeholder-avatar.jpg",
      reason: "Ra vào trái phép khu vực hạn chế nhiều lần",
      reportedBy: "Bảo vệ ca 2",
      dateAdded: "2024-01-05",
      status: "review",
      violations: 2,
      lastDetected: "2024-01-12 09:15",
      description: "Cố tình vào khu vực sản xuất khi không có thẻ từ",
    },
  ];

  // Mock data for blacklisted vehicles
  const blacklistedVehicles = [
    {
      id: "BL-V-001",
      licensePlate: "29A-12345",
      vehicleType: "Xe tải",
      brand: "Hyundai",
      color: "Trắng",
      owner: "Công ty ABC",
      reason: "Vận chuyển hàng hóa không khai báo",
      reportedBy: "Phòng Kho vận",
      dateAdded: "2024-01-08",
      status: "active",
      violations: 1,
      lastDetected: "2024-01-14 16:45",
      description:
        "Phát hiện vận chuyển vật liệu không có trong phiếu xuất kho",
    },
    {
      id: "BL-V-002",
      licensePlate: "30B-67890",
      vehicleType: "Xe container",
      brand: "Dongfeng",
      color: "Xanh",
      owner: "Nhà thầu XYZ",
      reason: "Đỗ xe sai quy định gây cản trở giao thông",
      reportedBy: "Bảo vệ cổng",
      dateAdded: "2024-01-12",
      status: "pending",
      violations: 2,
      lastDetected: "Chưa phát hiện",
      description: "Đỗ xe tại khu vực cấm trong thời gian dài",
    },
  ];

  // Mock data for blacklisted equipment
  const blacklistedEquipment = [
    {
      id: "BL-E-001",
      equipmentId: "CAM-001",
      equipmentType: "Camera an ninh",
      location: "Cổng chính",
      reason: "Thiết bị hoạt động bất thường gây cảnh báo sai",
      reportedBy: "Phòng Kỹ thuật",
      dateAdded: "2024-01-06",
      status: "maintenance",
      violations: 1,
      lastDetected: "2024-01-13 11:20",
      description: "Camera ghi hình không ổn định, gây nhiều cảnh báo sai",
    },
  ];

  const violationReasons = [
    "Vi phạm nội quy an toàn lao động",
    "Ra vào trái phép",
    "Vận chuyển hàng hóa không khai báo",
    "Đỗ xe sai quy định",
    "Giả mạo giấy tờ",
    "Gây rối trật tự",
    "Không tuân thủ quy định COVID-19",
    "Hành vi đáng ngờ",
    "Thiết bị hoạt động bất thường",
    "Khác",
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-red-100 text-red-800">
            <Ban className="h-3 w-3 mr-1" />
            Đang chặn
          </Badge>
        );
      case "review":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Đang xem xét
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Clock className="h-3 w-3 mr-1" />
            Chờ duyệt
          </Badge>
        );
      case "maintenance":
        return (
          <Badge className="bg-orange-100 text-orange-800">
            <Settings className="h-3 w-3 mr-1" />
            Bảo trì
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-100 text-gray-800">Không xác định</Badge>
        );
    }
  };

  const BlacklistForm = ({
    item,
    type,
    onClose,
  }: {
    item?: any;
    type: string;
    onClose: () => void;
  }) => {
    const [formData, setFormData] = useState({
      name: item?.name || "",
      idCard: item?.idCard || "",
      licensePlate: item?.licensePlate || "",
      equipmentId: item?.equipmentId || "",
      vehicleType: item?.vehicleType || "",
      equipmentType: item?.equipmentType || "",
      reason: item?.reason || "",
      description: item?.description || "",
      status: item?.status || "pending",
    });

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedFile(file);
      }
    };

    return (
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {type === "person" && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Họ và tên *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Nhập họ tên..."
                />
              </div>
              <div>
                <Label htmlFor="idCard">Số CCCD/CMND</Label>
                <Input
                  id="idCard"
                  value={formData.idCard}
                  onChange={(e) =>
                    setFormData({ ...formData, idCard: e.target.value })
                  }
                  placeholder="123456789"
                />
              </div>
            </div>

            <div>
              <Label>Ảnh khuôn mặt (để nhận diện)</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Camera className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <div className="text-sm text-gray-600">
                  <label
                    htmlFor="photo-upload"
                    className="cursor-pointer text-hoa-phat-600 hover:text-hoa-phat-500"
                  >
                    Tải lên ảnh
                  </label>
                  <input
                    id="photo-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                  <p className="mt-1">hoặc kéo thả file vào đây</p>
                </div>
                {selectedFile && (
                  <div className="mt-2 text-sm text-green-600">
                    Đã chọn: {selectedFile.name}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {type === "vehicle" && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="licensePlate">Biển số xe *</Label>
                <Input
                  id="licensePlate"
                  value={formData.licensePlate}
                  onChange={(e) =>
                    setFormData({ ...formData, licensePlate: e.target.value })
                  }
                  placeholder="29A-12345"
                />
              </div>
              <div>
                <Label htmlFor="vehicleType">Loại phương tiện</Label>
                <Select
                  value={formData.vehicleType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, vehicleType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại xe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xe-tai">Xe tải</SelectItem>
                    <SelectItem value="xe-container">Xe container</SelectItem>
                    <SelectItem value="xe-con">Xe con</SelectItem>
                    <SelectItem value="xe-may">Xe máy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        {type === "equipment" && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="equipmentId">Mã thiết bị *</Label>
                <Input
                  id="equipmentId"
                  value={formData.equipmentId}
                  onChange={(e) =>
                    setFormData({ ...formData, equipmentId: e.target.value })
                  }
                  placeholder="CAM-001"
                />
              </div>
              <div>
                <Label htmlFor="equipmentType">Loại thiết bị</Label>
                <Select
                  value={formData.equipmentType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, equipmentType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại thiết bị" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camera">Camera an ninh</SelectItem>
                    <SelectItem value="access-control">
                      Kiểm soát ra vào
                    </SelectItem>
                    <SelectItem value="sensor">Cảm biến</SelectItem>
                    <SelectItem value="rfid">RFID Reader</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        <div>
          <Label htmlFor="reason">Lý do vi phạm *</Label>
          <Select
            value={formData.reason}
            onValueChange={(value) =>
              setFormData({ ...formData, reason: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Chọn lý do vi phạm" />
            </SelectTrigger>
            <SelectContent>
              {violationReasons.map((reason) => (
                <SelectItem key={reason} value={reason}>
                  {reason}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="description">Mô tả chi tiết</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Mô tả chi tiết về vi phạm..."
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="status">Trạng thái</Label>
          <Select
            value={formData.status}
            onValueChange={(value) =>
              setFormData({ ...formData, status: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Chờ duyệt</SelectItem>
              <SelectItem value="active">Đang chặn</SelectItem>
              <SelectItem value="review">Đang xem xét</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onClose}>
            Hủy
          </Button>
          <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
            {item ? "Cập nhật" : "Thêm vào blacklist"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Quản Lý Danh Sách Đen
            </h1>
            <p className="text-gray-600 mt-1">
              Quản lý đối tượng vi phạm và hạn chế truy cập
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tìm kiếm trong blacklist..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-64"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="active">Đang chặn</SelectItem>
                <SelectItem value="review">Đang xem xét</SelectItem>
                <SelectItem value="pending">Chờ duyệt</SelectItem>
              </SelectContent>
            </Select>
            <Dialog
              open={isAddBlacklistOpen}
              onOpenChange={setIsAddBlacklistOpen}
            >
              <DialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm vào blacklist
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Thêm Vào Danh Sách Đen</DialogTitle>
                </DialogHeader>
                <BlacklistForm
                  type={activeTab}
                  onClose={() => setIsAddBlacklistOpen(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Tổng mục trong blacklist
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {blacklistedPersons.length +
                      blacklistedVehicles.length +
                      blacklistedEquipment.length}
                  </p>
                </div>
                <Ban className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Người vi phạm
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {blacklistedPersons.length}
                  </p>
                </div>
                <User className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Phương tiện
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {blacklistedVehicles.length}
                  </p>
                </div>
                <Car className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Thiết bị</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {blacklistedEquipment.length}
                  </p>
                </div>
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blacklist Tables */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="person" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Người vi phạm ({blacklistedPersons.length})
            </TabsTrigger>
            <TabsTrigger value="vehicle" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              Phương tiện ({blacklistedVehicles.length})
            </TabsTrigger>
            <TabsTrigger value="equipment" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Thiết bị ({blacklistedEquipment.length})
            </TabsTrigger>
          </TabsList>

          {/* Blacklisted Persons Tab */}
          <TabsContent value="person">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Danh Sách Người Vi Phạm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã BL</TableHead>
                      <TableHead>Thông tin cá nhân</TableHead>
                      <TableHead>Lý do vi phạm</TableHead>
                      <TableHead>Người báo cáo</TableHead>
                      <TableHead>Ngày thêm</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Phát hiện cuối</TableHead>
                      <TableHead>Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blacklistedPersons.map((person) => (
                      <TableRow key={person.id}>
                        <TableCell className="font-medium">
                          {person.id}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="h-5 w-5 text-gray-500" />
                            </div>
                            <div>
                              <div className="font-medium">{person.name}</div>
                              <div className="text-sm text-gray-500">
                                CCCD: {person.idCard}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <p className="text-sm truncate">{person.reason}</p>
                        </TableCell>
                        <TableCell>{person.reportedBy}</TableCell>
                        <TableCell>{person.dateAdded}</TableCell>
                        <TableCell>{getStatusBadge(person.status)}</TableCell>
                        <TableCell>
                          <div className="text-sm">{person.lastDetected}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedItem(person)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Chi Tiết Vi Phạm</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label>Họ và tên</Label>
                                      <p className="font-medium">
                                        {selectedItem?.name}
                                      </p>
                                    </div>
                                    <div>
                                      <Label>Số CCCD</Label>
                                      <p className="font-medium">
                                        {selectedItem?.idCard}
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <Label>Lý do vi phạm</Label>
                                    <p className="font-medium">
                                      {selectedItem?.reason}
                                    </p>
                                  </div>
                                  <div>
                                    <Label>Mô tả chi tiết</Label>
                                    <p className="text-sm text-gray-600">
                                      {selectedItem?.description}
                                    </p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label>Người báo cáo</Label>
                                      <p className="font-medium">
                                        {selectedItem?.reportedBy}
                                      </p>
                                    </div>
                                    <div>
                                      <Label>Ngày thêm</Label>
                                      <p className="font-medium">
                                        {selectedItem?.dateAdded}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blacklisted Vehicles Tab */}
          <TabsContent value="vehicle">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Danh Sách Phương Tiện Vi Phạm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã BL</TableHead>
                      <TableHead>Thông tin phương tiện</TableHead>
                      <TableHead>Chủ sở hữu</TableHead>
                      <TableHead>Lý do vi phạm</TableHead>
                      <TableHead>Ngày thêm</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blacklistedVehicles.map((vehicle) => (
                      <TableRow key={vehicle.id}>
                        <TableCell className="font-medium">
                          {vehicle.id}
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium flex items-center gap-2">
                              <Car className="h-4 w-4" />
                              {vehicle.licensePlate}
                            </div>
                            <div className="text-sm text-gray-500">
                              {vehicle.vehicleType} - {vehicle.brand} -{" "}
                              {vehicle.color}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{vehicle.owner}</TableCell>
                        <TableCell className="max-w-xs">
                          <p className="text-sm truncate">{vehicle.reason}</p>
                        </TableCell>
                        <TableCell>{vehicle.dateAdded}</TableCell>
                        <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blacklisted Equipment Tab */}
          <TabsContent value="equipment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Danh Sách Thiết Bị Có Vấn Đề
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã BL</TableHead>
                      <TableHead>Thông tin thiết bị</TableHead>
                      <TableHead>Vị trí</TableHead>
                      <TableHead>Lý do</TableHead>
                      <TableHead>Ngày thêm</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blacklistedEquipment.map((equipment) => (
                      <TableRow key={equipment.id}>
                        <TableCell className="font-medium">
                          {equipment.id}
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium flex items-center gap-2">
                              <Settings className="h-4 w-4" />
                              {equipment.equipmentId}
                            </div>
                            <div className="text-sm text-gray-500">
                              {equipment.equipmentType}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{equipment.location}</TableCell>
                        <TableCell className="max-w-xs">
                          <p className="text-sm truncate">{equipment.reason}</p>
                        </TableCell>
                        <TableCell>{equipment.dateAdded}</TableCell>
                        <TableCell>
                          {getStatusBadge(equipment.status)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Upload className="h-8 w-8 text-red-600" />
                <div>
                  <h3 className="font-semibold">Import blacklist từ file</h3>
                  <p className="text-sm text-gray-600">
                    Thêm hàng loạt từ Excel/CSV
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Cấu hình cảnh báo</h3>
                  <p className="text-sm text-gray-600">
                    Thiết lập thông báo tự động
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Báo cáo vi phạm</h3>
                  <p className="text-sm text-gray-600">Xuất báo cáo thống kê</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlacklistManagement;
