import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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
  Plus,
  Truck,
  User,
  Package,
  MapPin,
  Clock,
  FileText,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Route,
  Scale,
  Building,
} from "lucide-react";
import { useState } from "react";

const CreateTransportPlan = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const availableProducts = [
    {
      id: "PRD-001",
      sapId: "SO-2025-001",
      name: "Thép cuộn D8",
      quantity: 100,
      unit: "cuộn",
      weight: 50000, // kg
      customer: "Công ty TNHH ABC",
      deadline: "2025-01-20",
      priority: "Cao",
      location: "Kho 1-A-15",
    },
    {
      id: "PRD-002",
      sapId: "SO-2025-002",
      name: "Thép tấm dày",
      quantity: 50,
      unit: "tấm",
      weight: 30000,
      customer: "Tập đoàn XYZ",
      deadline: "2025-01-19",
      priority: "Trung bình",
      location: "Kho 2-B-08",
    },
    {
      id: "PRD-003",
      sapId: "SO-2025-003",
      name: "Thép hình V",
      quantity: 25,
      unit: "thanh",
      weight: 15000,
      customer: "Công ty DEF",
      deadline: "2025-01-22",
      priority: "Thấp",
      location: "Kho 1-C-22",
    },
  ];

  const availableVehicles = [
    {
      id: "VH-001",
      licensePlate: "29A-12345",
      type: "Xe tải 40 tấn",
      capacity: 40000,
      driver: "Nguyễn Văn A",
      driverLicense: "B2-123456",
      status: "Sẵn sàng",
      currentLocation: "Garage chính",
    },
    {
      id: "VH-002",
      licensePlate: "30B-67890",
      type: "Xe tải 35 tấn",
      capacity: 35000,
      driver: "Trần Văn B",
      driverLicense: "B2-789012",
      status: "Sẵn sàng",
      currentLocation: "Garage chính",
    },
    {
      id: "VH-003",
      licensePlate: "51C-11111",
      type: "Xe tải 25 tấn",
      capacity: 25000,
      driver: "Lê Văn C",
      driverLicense: "B2-345678",
      status: "Bảo trì",
      currentLocation: "Xưởng sửa chữa",
    },
  ];

  const handleProductSelect = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const calculateTotalWeight = () => {
    return selectedProducts.reduce((total, productId) => {
      const product = availableProducts.find((p) => p.id === productId);
      return total + (product?.weight || 0);
    }, 0);
  };

  const getPriorityBadge = (priority: string) => {
    const config = {
      Cao: "text-red-700 bg-red-100",
      "Trung bình": "text-yellow-700 bg-yellow-100",
      Thấp: "text-green-700 bg-green-100",
    };
    return (
      config[priority as keyof typeof config] || "text-gray-700 bg-gray-100"
    );
  };

  const getStatusBadge = (status: string) => {
    const config = {
      "Sẵn sàng": "text-green-700 bg-green-100",
      "Bảo trì": "text-red-700 bg-red-100",
      "Đang giao": "text-blue-700 bg-blue-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Lập kế hoạch vận chuyển
            </h1>
            <p className="text-gray-600 mt-1">
              Xây dựng kế hoạch vận chuyển từ thông tin sản phẩm
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">Hủy</Button>
            <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              Lưu kế hoạch
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Selection */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Package className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Chọn sản phẩm xuất kho
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">Chọn</TableHead>
                    <TableHead>Sản phẩm</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Số lượng</TableHead>
                    <TableHead>Trọng lượng</TableHead>
                    <TableHead>Vị trí</TableHead>
                    <TableHead>Hạn giao</TableHead>
                    <TableHead>Ưu tiên</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {availableProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => handleProductSelect(product.id)}
                          className="w-4 h-4"
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xs text-gray-500">
                            {product.sapId}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{product.customer}</TableCell>
                      <TableCell>
                        {product.quantity} {product.unit}
                      </TableCell>
                      <TableCell>
                        {(product.weight / 1000).toFixed(1)} tấn
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {product.location}
                      </TableCell>
                      <TableCell>{product.deadline}</TableCell>
                      <TableCell>
                        <Badge className={getPriorityBadge(product.priority)}>
                          {product.priority}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Plan Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <FileText className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Tóm tắt kế hoạch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-700">
                    Sản phẩm đã chọn:
                  </span>
                  <Badge className="text-blue-700 bg-blue-100">
                    {selectedProducts.length} loại
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-700">
                    Tổng trọng lượng:
                  </span>
                  <span className="font-semibold text-blue-900">
                    {(calculateTotalWeight() / 1000).toFixed(1)} tấn
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-700">Xe cần thiết:</span>
                  <span className="font-semibold text-blue-900">
                    {Math.ceil(calculateTotalWeight() / 35000)} xe
                  </span>
                </div>
              </div>

              {selectedProducts.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Sản phẩm đã chọn:
                  </h4>
                  <div className="space-y-2">
                    {selectedProducts.map((productId) => {
                      const product = availableProducts.find(
                        (p) => p.id === productId,
                      );
                      return (
                        <div
                          key={productId}
                          className="bg-gray-50 p-2 rounded text-sm"
                        >
                          <div className="font-medium">{product?.name}</div>
                          <div className="text-gray-600">
                            {product?.quantity} {product?.unit} -{" "}
                            {((product?.weight || 0) / 1000).toFixed(1)} tấn
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Vehicle Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Truck className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Chọn phương tiện và tài xế
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Chọn</TableHead>
                  <TableHead>Biển số</TableHead>
                  <TableHead>Loại xe</TableHead>
                  <TableHead>Tải trọng</TableHead>
                  <TableHead>Tài xế</TableHead>
                  <TableHead>Bằng lái</TableHead>
                  <TableHead>Vị trí hiện tại</TableHead>
                  <TableHead>Trạng thái</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {availableVehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell>
                      <input
                        type="radio"
                        name="selectedVehicle"
                        disabled={vehicle.status !== "Sẵn sàng"}
                        className="w-4 h-4"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {vehicle.licensePlate}
                    </TableCell>
                    <TableCell>{vehicle.type}</TableCell>
                    <TableCell>{vehicle.capacity / 1000} tấn</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1 text-gray-400" />
                        {vehicle.driver}
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {vehicle.driverLicense}
                    </TableCell>
                    <TableCell>{vehicle.currentLocation}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(vehicle.status)}>
                        {vehicle.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Transportation Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Route className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Thông tin vận chuyển
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Route Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">
                  Thông tin tuyến đường
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="departure">Điểm xuất phát</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn kho xuất phát" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="warehouse1">
                          Kho 1 - Hà Nội
                        </SelectItem>
                        <SelectItem value="warehouse2">
                          Kho 2 - Hà Nội
                        </SelectItem>
                        <SelectItem value="warehouse3">
                          Kho 3 - Hải Phòng
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="destination">Điểm đến</Label>
                    <Input
                      id="destination"
                      placeholder="Nhập địa chỉ giao hàng..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="distance">Khoảng cách ước tính</Label>
                    <Input id="distance" placeholder="km" />
                  </div>
                </div>
              </div>

              {/* Timing */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Lịch trình</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="departure-date">Ngày khởi hành</Label>
                    <Input id="departure-date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="departure-time">Giờ khởi hành</Label>
                    <Input id="departure-time" type="time" />
                  </div>
                  <div>
                    <Label htmlFor="arrival-time">Giờ dự kiến đến</Label>
                    <Input id="arrival-time" type="time" />
                  </div>
                  <div>
                    <Label htmlFor="duration">Thời gian vận chuyển</Label>
                    <Input id="duration" placeholder="giờ" />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">
                  Thông tin bổ sung
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="priority">Mức độ ưu tiên</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn mức ưu tiên" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">Cao</SelectItem>
                        <SelectItem value="medium">Trung bình</SelectItem>
                        <SelectItem value="low">Thấp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="estimated-cost">Chi phí ước tính</Label>
                    <Input id="estimated-cost" placeholder="VNĐ" />
                  </div>
                  <div>
                    <Label htmlFor="special-requirements">
                      Yêu cầu đặc biệt
                    </Label>
                    <Textarea
                      id="special-requirements"
                      placeholder="Ghi chú về yêu cầu đặc biệt..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Linked Ticket Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Building className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Thông tin Ticket liên kết
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">
                  Ticket sẽ được tạo tự động
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Ticket ID:</span>
                    <span className="font-medium">TT-AUTO-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Loại ticket:</span>
                    <span className="font-medium">Vận chuyển xuất kho</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Trạng thái:</span>
                    <Badge className="text-blue-700 bg-blue-100">
                      Sẽ tạo sau khi lưu
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">
                  Quyền ACS tự động
                </h3>
                <div className="bg-green-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-700">
                      Quyền truy cập tự động cho tài xế
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-700">
                      Quyền ra/vào cho phương tiện
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-700">
                      Lịch trình cổng và trạm cân
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CreateTransportPlan;
