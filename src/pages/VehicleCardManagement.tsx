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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  CreditCard,
  Car,
  Search,
  Plus,
  Edit,
  Ban,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  FileText,
  QrCode,
  Calendar,
  User,
  Building,
  MapPin,
  Key,
  RefreshCw,
  Printer,
  Download,
} from "lucide-react";

const VehicleCardManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [cardTypeFilter, setCardTypeFilter] = useState("all");
  const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  // Mock data for vehicle cards
  const vehicleCards = [
    {
      id: "VHC-001",
      cardNumber: "123456789",
      cardType: "RFID",
      licensePlate: "29A-12345",
      vehicleType: "Xe tải",
      ownerName: "Nguyễn Văn A",
      ownerType: "Nhân viên",
      department: "Kho vận",
      issueDate: "2024-01-15",
      expiryDate: "2024-12-31",
      status: "active",
      lastUsed: "2024-01-20 14:30",
      useCount: 45,
      zones: ["Cổng chính", "Khu kho A", "Bãi đỗ xe"],
    },
    {
      id: "VHC-002",
      cardNumber: "987654321",
      cardType: "NFC",
      licensePlate: "30B-67890",
      vehicleType: "Xe container",
      ownerName: "Công ty ABC",
      ownerType: "Nhà thầu",
      department: "Đối tác",
      issueDate: "2024-01-10",
      expiryDate: "2024-06-30",
      status: "suspended",
      lastUsed: "2024-01-18 09:15",
      useCount: 23,
      zones: ["Cổng chính", "Khu kho B"],
    },
    {
      id: "VHC-003",
      cardNumber: "456789123",
      cardType: "Barcode",
      licensePlate: "51C-11111",
      vehicleType: "Xe con",
      ownerName: "Trần Thị B",
      ownerType: "Nhân viên",
      department: "Hành chính",
      issueDate: "2024-01-20",
      expiryDate: "2024-12-31",
      status: "pending",
      lastUsed: "Chưa sử dụng",
      useCount: 0,
      zones: ["Cổng chính", "Bãi đỗ xe"],
    },
    {
      id: "VHC-004",
      cardNumber: "789123456",
      cardType: "RFID",
      licensePlate: "92D-22222",
      vehicleType: "Xe máy",
      ownerName: "Lê Văn C",
      ownerType: "Nhân viên",
      department: "Kỹ thuật",
      issueDate: "2024-01-05",
      expiryDate: "2024-12-31",
      status: "expired",
      lastUsed: "2024-01-15 17:45",
      useCount: 78,
      zones: ["Cổng chính", "Bãi đỗ xe"],
    },
  ];

  // Mock data for card usage logs
  const usageLogs = [
    {
      id: "LOG-001",
      cardNumber: "123456789",
      licensePlate: "29A-12345",
      action: "Vào",
      gate: "Cổng chính",
      timestamp: "2024-01-20 14:30:15",
      status: "success",
      operator: "Hệ thống",
    },
    {
      id: "LOG-002",
      cardNumber: "123456789",
      licensePlate: "29A-12345",
      action: "Ra",
      gate: "Cổng chính",
      timestamp: "2024-01-20 18:15:30",
      status: "success",
      operator: "Hệ thống",
    },
    {
      id: "LOG-003",
      cardNumber: "987654321",
      licensePlate: "30B-67890",
      action: "Vào",
      gate: "Cổng chính",
      timestamp: "2024-01-18 09:15:45",
      status: "failed",
      operator: "Bảo vệ",
      note: "Thẻ đã bị tạm khóa",
    },
  ];

  const cardTypes = ["RFID", "NFC", "Barcode", "QR Code"];
  const vehicleTypes = [
    "Xe tải",
    "Xe container",
    "Xe con",
    "Xe máy",
    "Xe buýt",
  ];
  const availableZones = [
    "Cổng chính",
    "Cổng phụ",
    "Khu kho A",
    "Khu kho B",
    "Khu sản xuất",
    "Bãi đỗ xe",
    "Khu văn phòng",
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Hoạt động
          </Badge>
        );
      case "suspended":
        return (
          <Badge className="bg-red-100 text-red-800">
            <Ban className="h-3 w-3 mr-1" />
            Tạm khóa
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Chờ kích hoạt
          </Badge>
        );
      case "expired":
        return (
          <Badge className="bg-gray-100 text-gray-800">
            <XCircle className="h-3 w-3 mr-1" />
            Hết hạn
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-100 text-gray-800">Không xác định</Badge>
        );
    }
  };

  const getActionBadge = (action: string, status: string) => {
    const baseClass =
      action === "Vào"
        ? "bg-blue-100 text-blue-800"
        : "bg-orange-100 text-orange-800";
    const failedClass =
      status === "failed" ? "bg-red-100 text-red-800" : baseClass;

    return (
      <Badge className={failedClass}>
        {action} {status === "failed" && "(Thất bại)"}
      </Badge>
    );
  };

  const CardForm = ({ card, onClose }: { card?: any; onClose: () => void }) => {
    const [formData, setFormData] = useState({
      cardNumber: card?.cardNumber || "",
      cardType: card?.cardType || "RFID",
      licensePlate: card?.licensePlate || "",
      vehicleType: card?.vehicleType || "",
      ownerName: card?.ownerName || "",
      ownerType: card?.ownerType || "Nhân viên",
      department: card?.department || "",
      expiryDate: card?.expiryDate || "",
      status: card?.status || "pending",
    });

    const [selectedZones, setSelectedZones] = useState<string[]>(
      card?.zones || [],
    );

    const handleZoneToggle = (zone: string) => {
      setSelectedZones((prev) =>
        prev.includes(zone) ? prev.filter((z) => z !== zone) : [...prev, zone],
      );
    };

    return (
      <div className="space-y-4 max-h-96 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="cardNumber">Số thẻ *</Label>
            <Input
              id="cardNumber"
              value={formData.cardNumber}
              onChange={(e) =>
                setFormData({ ...formData, cardNumber: e.target.value })
              }
              placeholder="123456789"
            />
          </div>
          <div>
            <Label htmlFor="cardType">Loại thẻ</Label>
            <Select
              value={formData.cardType}
              onValueChange={(value) =>
                setFormData({ ...formData, cardType: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {cardTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

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
                {vehicleTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="ownerName">Tên chủ sở hữu *</Label>
            <Input
              id="ownerName"
              value={formData.ownerName}
              onChange={(e) =>
                setFormData({ ...formData, ownerName: e.target.value })
              }
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div>
            <Label htmlFor="ownerType">Loại chủ sở hữu</Label>
            <Select
              value={formData.ownerType}
              onValueChange={(value) =>
                setFormData({ ...formData, ownerType: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Nhân viên">Nhân viên</SelectItem>
                <SelectItem value="Nhà thầu">Nhà thầu</SelectItem>
                <SelectItem value="Khách">Khách</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="department">Bộ phận/Công ty</Label>
            <Input
              id="department"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              placeholder="Kho vận"
            />
          </div>
          <div>
            <Label htmlFor="expiryDate">Ngày hết hạn</Label>
            <Input
              id="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={(e) =>
                setFormData({ ...formData, expiryDate: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <Label>Khu vực được phép truy cập</Label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {availableZones.map((zone) => (
              <div key={zone} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`zone-${zone}`}
                  checked={selectedZones.includes(zone)}
                  onChange={() => handleZoneToggle(zone)}
                  className="rounded"
                />
                <Label htmlFor={`zone-${zone}`} className="text-sm">
                  {zone}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="status">Trạng thái thẻ</Label>
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
              <SelectItem value="pending">Chờ kích hoạt</SelectItem>
              <SelectItem value="active">Hoạt động</SelectItem>
              <SelectItem value="suspended">Tạm khóa</SelectItem>
              <SelectItem value="expired">Hết hạn</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onClose}>
            Hủy
          </Button>
          <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
            {card ? "Cập nhật thẻ" : "Cấp phát thẻ"}
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
              Quản Lý Cấp Phát Thẻ Phương Tiện
            </h1>
            <p className="text-gray-600 mt-1">
              Quản lý thẻ truy cập cho phương tiện
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tìm kiếm thẻ, biển số..."
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
                <SelectItem value="active">Hoạt động</SelectItem>
                <SelectItem value="suspended">Tạm khóa</SelectItem>
                <SelectItem value="pending">Chờ kích hoạt</SelectItem>
                <SelectItem value="expired">Hết hạn</SelectItem>
              </SelectContent>
            </Select>
            <Dialog open={isCreateCardOpen} onOpenChange={setIsCreateCardOpen}>
              <DialogTrigger asChild>
                <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Cấp phát thẻ mới
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Cấp Phát Thẻ Mới</DialogTitle>
                </DialogHeader>
                <CardForm onClose={() => setIsCreateCardOpen(false)} />
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
                    Tổng thẻ đã cấp
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {vehicleCards.length}
                  </p>
                </div>
                <CreditCard className="h-8 w-8 text-hoa-phat-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Đang hoạt động
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {
                      vehicleCards.filter((card) => card.status === "active")
                        .length
                    }
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tạm khóa</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {
                      vehicleCards.filter((card) => card.status === "suspended")
                        .length
                    }
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
                    Sắp hết hạn
                  </p>
                  <p className="text-3xl font-bold text-gray-900">2</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="cards" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cards" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Quản lý thẻ
            </TabsTrigger>
            <TabsTrigger value="usage" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Lịch sử sử dụng
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Báo cáo
            </TabsTrigger>
          </TabsList>

          {/* Cards Management Tab */}
          <TabsContent value="cards">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Danh Sách Thẻ Phương Tiện
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Select
                      value={cardTypeFilter}
                      onValueChange={setCardTypeFilter}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Loại thẻ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tất cả</SelectItem>
                        {cardTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Printer className="h-4 w-4 mr-1" />
                      In thẻ
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã thẻ</TableHead>
                      <TableHead>Thông tin xe</TableHead>
                      <TableHead>Chủ sở hữu</TableHead>
                      <TableHead>Loại thẻ</TableHead>
                      <TableHead>Hạn sử dụng</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Lần cuối SD</TableHead>
                      <TableHead>Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vehicleCards.map((card) => (
                      <TableRow key={card.id}>
                        <TableCell className="font-medium">
                          <div>
                            <div className="font-mono">{card.cardNumber}</div>
                            <Badge variant="outline" className="text-xs">
                              {card.id}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4 text-gray-500" />
                            <div>
                              <div className="font-medium">
                                {card.licensePlate}
                              </div>
                              <div className="text-sm text-gray-500">
                                {card.vehicleType}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{card.ownerName}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              {card.ownerType === "Nhân viên" ? (
                                <User className="h-3 w-3" />
                              ) : (
                                <Building className="h-3 w-3" />
                              )}
                              {card.department}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{card.cardType}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3" />
                            {card.expiryDate}
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(card.status)}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {card.lastUsed}
                            <div className="text-xs text-gray-500">
                              {card.useCount} lần
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedCard(card)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Chỉnh Sửa Thẻ</DialogTitle>
                                </DialogHeader>
                                <CardForm
                                  card={selectedCard}
                                  onClose={() => setSelectedCard(null)}
                                />
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <QrCode className="h-4 w-4" />
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

          {/* Usage History Tab */}
          <TabsContent value="usage">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Lịch Sử Sử Dụng Thẻ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã log</TableHead>
                      <TableHead>Số thẻ</TableHead>
                      <TableHead>Biển số</TableHead>
                      <TableHead>Hành động</TableHead>
                      <TableHead>Cổng</TableHead>
                      <TableHead>Thời gian</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Ghi chú</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usageLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.id}</TableCell>
                        <TableCell className="font-mono">
                          {log.cardNumber}
                        </TableCell>
                        <TableCell>{log.licensePlate}</TableCell>
                        <TableCell>
                          {getActionBadge(log.action, log.status)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {log.gate}
                          </div>
                        </TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              log.status === "success"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {log.status === "success"
                              ? "Thành công"
                              : "Thất bại"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          {log.note || "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Báo cáo thẻ hoạt động</h3>
                      <p className="text-sm text-gray-600">
                        Thống kê thẻ đang sử dụng
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Xuất báo cáo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold">
                        Báo cáo sử dụng theo thời gian
                      </h3>
                      <p className="text-sm text-gray-600">
                        Thống kê theo ngày/tháng
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Xuất báo cáo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold">Báo cáo thẻ sắp hết hạn</h3>
                      <p className="text-sm text-gray-600">
                        Cảnh báo thẻ cần gia hạn
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Xuất báo cáo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <User className="h-8 w-8 text-orange-600" />
                    <div>
                      <h3 className="font-semibold">Báo cáo theo chủ sở hữu</h3>
                      <p className="text-sm text-gray-600">
                        Thống kê theo CBNV/Nhà thầu
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Xuất báo cáo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Ban className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Báo cáo vi phạm</h3>
                      <p className="text-sm text-gray-600">
                        Thẻ bị khóa và lý do
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Xuất báo cáo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Key className="h-8 w-8 text-indigo-600" />
                    <div>
                      <h3 className="font-semibold">Báo cáo quyền truy cập</h3>
                      <p className="text-sm text-gray-600">
                        Phân quyền khu vực theo thẻ
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Xuất báo cáo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VehicleCardManagement;
