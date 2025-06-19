import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Warehouse,
  Truck,
  User,
  Package,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Camera,
  Scan,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Shield,
} from "lucide-react";
import { useState } from "react";

const WarehouseDelivery = () => {
  const [currentTicket, setCurrentTicket] = useState("TT-001");

  const incomingVehicles = [
    {
      ticket: "TT-001",
      orderId: "SO-2025-001",
      driver: "Nguyễn Văn A",
      vehicle: "29A-12345",
      estimatedArrival: "15:30",
      status: "Đang đến kho",
      priority: "Cao",
    },
    {
      ticket: "TT-002",
      orderId: "SO-2025-002",
      driver: "Trần Văn B",
      vehicle: "30B-67890",
      estimatedArrival: "16:00",
      status: "Đã xác thực",
      priority: "Trung bình",
    },
    {
      ticket: "TT-003",
      orderId: "SO-2025-003",
      driver: "Lê Văn C",
      vehicle: "51C-11111",
      estimatedArrival: "16:30",
      status: "Chờ xếp hàng",
      priority: "Thấp",
    },
  ];

  const deliveryItems = [
    {
      id: "item-1",
      productCode: "TP-001",
      productName: "Thép cuộn D8",
      specification: "Φ8mm x 100m",
      quantityOrdered: 100,
      quantityDelivered: 0,
      unit: "cuộn",
      weight: "50 tấn",
      location: "K1-A-01",
      checked: false,
    },
    {
      id: "item-2",
      productCode: "TP-002",
      productName: "Thép tấm dày",
      specification: "10mm x 2000 x 6000",
      quantityOrdered: 50,
      quantityDelivered: 0,
      unit: "tấm",
      weight: "30 tấn",
      location: "K1-B-05",
      checked: false,
    },
    {
      id: "item-3",
      productCode: "TP-003",
      productName: "Thép hình V",
      specification: "V200 x 12m",
      quantityOrdered: 25,
      quantityDelivered: 0,
      unit: "thanh",
      weight: "15 tấn",
      location: "K1-C-10",
      checked: false,
    },
  ];

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleItemCheck = (itemId: string, checked: boolean) => {
    setCheckedItems((prev) =>
      checked ? [...prev, itemId] : prev.filter((id) => id !== itemId),
    );
  };

  const getStatusBadge = (status: string) => {
    const config = {
      "Đang đến kho": "text-blue-700 bg-blue-100",
      "Đã xác thực": "text-green-700 bg-green-100",
      "Chờ xếp hàng": "text-yellow-700 bg-yellow-100",
      "Đang giao hàng": "text-orange-700 bg-orange-100",
      "Hoàn thành": "text-green-700 bg-green-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Cao":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "Trung bình":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Thấp":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
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
              Giao/nhận kho thành phẩm
            </h1>
            <p className="text-gray-600 mt-1">
              Quản lý giao nhận hàng hóa và xác thực tại kho
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Warehouse className="h-3 w-3 mr-1" />
              Kho đang hoạt động
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <Truck className="h-3 w-3 mr-1" />3 xe đang chờ
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Incoming Vehicles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Truck className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Phương tiện đến kho
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {incomingVehicles.map((vehicle) => (
                  <div
                    key={vehicle.ticket}
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      currentTicket === vehicle.ticket
                        ? "border-hoa-phat-400 bg-hoa-phat-50"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setCurrentTicket(vehicle.ticket)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-hoa-phat-700">
                        {vehicle.ticket}
                      </span>
                      <div className="flex items-center space-x-1">
                        {getPriorityIcon(vehicle.priority)}
                        <Badge className={getStatusBadge(vehicle.status)}>
                          {vehicle.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Đơn hàng:</strong> {vehicle.orderId}
                      </p>
                      <p>
                        <strong>Tài xế:</strong> {vehicle.driver}
                      </p>
                      <p>
                        <strong>Xe:</strong> {vehicle.vehicle}
                      </p>
                      <p>
                        <strong>Dự kiến đến:</strong> {vehicle.estimatedArrival}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Authentication & Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Shield className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Xác thực & Kiểm soát
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Vehicle Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Xe hiện tại: {currentTicket}
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Tài xế:</span>
                    <span className="font-medium">Nguyễn Văn A</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Xe:</span>
                    <span className="font-medium">29A-12345</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Đơn hàng:</span>
                    <span className="font-medium">SO-2025-001</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Trạng thái:</span>
                    <Badge className="text-blue-700 bg-blue-100">
                      Đang đến kho
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Authentication Status */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Trạng thái xác thực
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">Nhận diện khuôn mặt</span>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">Nhận diện biển số</span>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">Kiểm tra giấy tờ</span>
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">Xác nhận đơn hàng</span>
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
              </div>

              {/* Control Actions */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Thao tác điều khiển
                </h3>
                <div className="space-y-2">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Xác thực thành công
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Camera className="h-4 w-4 mr-2" />
                    Chụp ảnh xác thực
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Scan className="h-4 w-4 mr-2" />
                    Quét QR/Barcode
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-red-600 hover:text-red-700"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Từ chối (không đạt)
                  </Button>
                </div>
              </div>

              {/* Warehouse Assignment */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Phân công kho
                </h3>
                <div className="space-y-2">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Khu vực giao hàng
                    </label>
                    <select className="w-full mt-1 p-2 border rounded text-sm">
                      <option>Kho 1 - Khu A</option>
                      <option>Kho 1 - Khu B</option>
                      <option>Kho 2 - Khu C</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Dock số
                    </label>
                    <select className="w-full mt-1 p-2 border rounded text-sm">
                      <option>Dock 1</option>
                      <option>Dock 2</option>
                      <option>Dock 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warehouse Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <MapPin className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Trạng thái kho
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Warehouse Capacity */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Công suất kho
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-blue-700">
                      75%
                    </div>
                    <div className="text-xs text-blue-600">Kho 1</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-green-700">
                      45%
                    </div>
                    <div className="text-xs text-green-600">Kho 2</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-yellow-700">
                      3
                    </div>
                    <div className="text-xs text-yellow-600">Đang xếp</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-orange-700">
                      2
                    </div>
                    <div className="text-xs text-orange-600">Chờ xếp</div>
                  </div>
                </div>
              </div>

              {/* Active Docks */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Dock đang hoạt động
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                    <span className="text-sm font-medium">Dock 1</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-green-700">30B-67890</span>
                      <Badge className="text-xs text-green-700 bg-green-100">
                        Đang xếp
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                    <span className="text-sm font-medium">Dock 2</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-yellow-700">51C-11111</span>
                      <Badge className="text-xs text-yellow-700 bg-yellow-100">
                        Chuẩn bị
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">Dock 3</span>
                    <Badge className="text-xs text-gray-700 bg-gray-100">
                      Trống
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Thống kê hôm nay
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Đã giao:</span>
                    <span className="font-semibold text-green-700">12 đơn</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Đang xử lý:</span>
                    <span className="font-semibold text-blue-700">3 đơn</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tổng trọng lượng:</span>
                    <span className="font-semibold">450 tấn</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hiệu suất:</span>
                    <span className="font-semibold text-green-700">96%</span>
                  </div>
                </div>
              </div>

              {/* Emergency Actions */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Thao tác khẩn cấp
                </h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-red-600"
                  >
                    <AlertTriangle className="h-3 w-3 mr-2" />
                    Dừng tất cả hoạt động
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Camera className="h-3 w-3 mr-2" />
                    Báo cáo sự cố
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Items Checklist */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Package className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Danh sách hàng hóa - Ticket {currentTicket}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Progress Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Tiến độ kiểm tra:</span>
                  <span className="font-semibold text-hoa-phat-700">
                    {checkedItems.length}/{deliveryItems.length} mặt hàng
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-hoa-phat-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(checkedItems.length / deliveryItems.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Items Table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">✓</TableHead>
                    <TableHead>Mã SP</TableHead>
                    <TableHead>Tên sản phẩm</TableHead>
                    <TableHead>Quy cách</TableHead>
                    <TableHead>SL đặt</TableHead>
                    <TableHead>SL giao</TableHead>
                    <TableHead>Đơn vị</TableHead>
                    <TableHead>Trọng lượng</TableHead>
                    <TableHead>Vị trí</TableHead>
                    <TableHead>Trạng thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveryItems.map((item) => {
                    const isChecked = checkedItems.includes(item.id);
                    return (
                      <TableRow
                        key={item.id}
                        className={isChecked ? "bg-green-50" : ""}
                      >
                        <TableCell>
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={(checked) =>
                              handleItemCheck(item.id, checked as boolean)
                            }
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.productCode}
                        </TableCell>
                        <TableCell>{item.productName}</TableCell>
                        <TableCell className="text-sm">
                          {item.specification}
                        </TableCell>
                        <TableCell className="text-center">
                          {item.quantityOrdered}
                        </TableCell>
                        <TableCell className="text-center">
                          {isChecked
                            ? item.quantityOrdered
                            : item.quantityDelivered}
                        </TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.weight}</TableCell>
                        <TableCell className="font-mono text-sm">
                          {item.location}
                        </TableCell>
                        <TableCell>
                          {isChecked ? (
                            <Badge className="text-green-700 bg-green-100">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Đã kiểm tra
                            </Badge>
                          ) : (
                            <Badge className="text-yellow-700 bg-yellow-100">
                              <Clock className="h-3 w-3 mr-1" />
                              Chờ kiểm tra
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>

              {/* Final Actions */}
              <div className="flex justify-end space-x-3 pt-4 border-t">
                <Button variant="outline">
                  <Camera className="h-4 w-4 mr-2" />
                  Chụp ảnh xác nhận
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Xuất biên bản
                </Button>
                <Button
                  className="bg-hoa-phat-600 hover:bg-hoa-phat-700"
                  disabled={checkedItems.length !== deliveryItems.length}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Xác nhận giao hàng hoàn tất
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default WarehouseDelivery;
