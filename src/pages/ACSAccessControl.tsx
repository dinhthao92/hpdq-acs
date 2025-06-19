import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
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
  Shield,
  User,
  Truck,
  Clock,
  MapPin,
  Eye,
  CreditCard,
  Fingerprint,
  Camera,
  KeyRound,
  CheckCircle,
  XCircle,
  Settings,
} from "lucide-react";

const ACSAccessControl = () => {
  const tickets = [
    {
      id: "TT-001",
      orderId: "SO-2025-001",
      driver: "Nguyễn Văn A",
      vehicle: "29A-12345",
      status: "Chờ cấp quyền",
      timeSlot: "08:00 - 18:00",
      validDate: "2025-01-18",
    },
    {
      id: "TT-002",
      orderId: "SO-2025-002",
      driver: "Trần Văn B",
      vehicle: "30B-67890",
      status: "Đã cấp quyền",
      timeSlot: "06:00 - 16:00",
      validDate: "2025-01-17",
    },
  ];

  const accessZones = [
    { id: "zone-1", name: "Cổng chính", description: "Lối vào chính công ty" },
    {
      id: "zone-2",
      name: "Khu sản xuất",
      description: "Khu vực sản xuất thép",
    },
    {
      id: "zone-3",
      name: "Kho thành phẩm",
      description: "Kho lưu trữ sản phẩm",
    },
    { id: "zone-4", name: "Trạm cân", description: "Khu vực cân xe tải" },
    {
      id: "zone-5",
      name: "Khu hành chính",
      description: "Văn phòng hành chính",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Phân quyền ra/vào ACS
            </h1>
            <p className="text-gray-600 mt-1">
              Cấu hình quyền truy cập theo từng Ticket vận chuyển
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Cấu hình ACS
            </Button>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Shield className="h-3 w-3 mr-1" />
              Hệ thống hoạt động
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tickets List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Truck className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Danh sách Tickets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-hoa-phat-700">
                        {ticket.id}
                      </span>
                      <Badge
                        className={
                          ticket.status === "Đã cấp quyền"
                            ? "text-green-700 bg-green-100"
                            : "text-yellow-700 bg-yellow-100"
                        }
                      >
                        {ticket.status}
                      </Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Đơn hàng:</strong> {ticket.orderId}
                      </p>
                      <p>
                        <strong>Tài xế:</strong> {ticket.driver}
                      </p>
                      <p>
                        <strong>Xe:</strong> {ticket.vehicle}
                      </p>
                      <p>
                        <strong>Ngày:</strong> {ticket.validDate}
                      </p>
                      <p>
                        <strong>Giờ:</strong> {ticket.timeSlot}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Access Configuration */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <KeyRound className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Cấu hình quyền truy cập - Ticket TT-001
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Access */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Quyền truy cập cá nhân
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Tài xế
                      </label>
                      <p className="text-sm text-gray-900">Nguyễn Văn A</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        CMND/CCCD
                      </label>
                      <p className="text-sm text-gray-900">123456789</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Thời gian có hiệu lực
                      </label>
                      <Input
                        type="datetime-local"
                        defaultValue="2025-01-18T08:00"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Thời gian hết hạn
                      </label>
                      <Input
                        type="datetime-local"
                        defaultValue="2025-01-18T18:00"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Access */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Truck className="h-4 w-4 mr-2" />
                  Quyền truy cập phương tiện
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Biển số xe
                      </label>
                      <p className="text-sm text-gray-900">29A-12345</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Loại xe
                      </label>
                      <p className="text-sm text-gray-900">Xe tải 40 tấn</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Số lần ra/vào tối đa
                      </label>
                      <Input type="number" defaultValue="2" min="1" max="10" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Trọng tải cho phép
                      </label>
                      <Input defaultValue="40 tấn" disabled />
                    </div>
                  </div>
                </div>
              </div>

              {/* Access Zones */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Khu vực được phép truy cập
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 gap-3">
                    {accessZones.map((zone) => (
                      <div
                        key={zone.id}
                        className="flex items-center justify-between p-3 bg-white rounded border"
                      >
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={zone.id}
                            defaultChecked={zone.id !== "zone-5"}
                          />
                          <div>
                            <label
                              htmlFor={zone.id}
                              className="font-medium text-gray-900 cursor-pointer"
                            >
                              {zone.name}
                            </label>
                            <p className="text-sm text-gray-600">
                              {zone.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Input
                            type="time"
                            defaultValue="08:00"
                            className="w-20 text-xs"
                          />
                          <span className="text-xs text-gray-500">-</span>
                          <Input
                            type="time"
                            defaultValue="18:00"
                            className="w-20 text-xs"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Authentication Methods */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Phương thức xác thực
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <div className="flex items-center space-x-3">
                        <Eye className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">FaceID</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <div className="flex items-center space-x-3">
                        <Camera className="h-4 w-4 text-green-600" />
                        <span className="font-medium">LPR (Biển số)</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-4 w-4 text-purple-600" />
                        <span className="font-medium">Thẻ RFID</span>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <div className="flex items-center space-x-3">
                        <Fingerprint className="h-4 w-4 text-orange-600" />
                        <span className="font-medium">Vân tay</span>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-4 border-t">
                <Button variant="outline">Hủy</Button>
                <Button variant="outline">Lưu nháp</Button>
                <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Cấp quyền ACS
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Access Rights Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Tổng quan quyền truy cập đã cấp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Tài xế</TableHead>
                  <TableHead>Phương tiện</TableHead>
                  <TableHead>Thời gian hiệu lực</TableHead>
                  <TableHead>Khu vực</TableHead>
                  <TableHead>Xác thực</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">TT-002</TableCell>
                  <TableCell>Trần Văn B</TableCell>
                  <TableCell>30B-67890</TableCell>
                  <TableCell>2025-01-17 06:00-16:00</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Cổng chính
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Trạm cân
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Kho
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Eye className="h-3 w-3 text-blue-600" />
                      <Camera className="h-3 w-3 text-green-600" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="text-green-700 bg-green-100">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Hoạt động
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline">
                        Sửa
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                      >
                        Thu hồi
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">TT-001</TableCell>
                  <TableCell>Nguyễn Văn A</TableCell>
                  <TableCell>29A-12345</TableCell>
                  <TableCell>2025-01-18 08:00-18:00</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Cổng chính
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Khu sản xuất
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Trạm cân
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Kho
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Eye className="h-3 w-3 text-blue-600" />
                      <Camera className="h-3 w-3 text-green-600" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="text-yellow-700 bg-yellow-100">
                      <Clock className="h-3 w-3 mr-1" />
                      Chờ kích hoạt
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline">
                        Sửa
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                      >
                        Hủy
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ACSAccessControl;
