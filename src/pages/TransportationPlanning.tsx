import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  CalendarDays,
  Truck,
  Package,
  MapPin,
  Clock,
  Plus,
  RefreshCw,
  FileText,
  CheckCircle,
  AlertTriangle,
  User,
  Building,
  Route,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const TransportationPlanning = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const transportationPlans = [
    {
      id: "TP-001",
      sapOrderId: "SO-2025-001",
      customer: "Công ty TNHH ABC",
      product: "Thép cuộn",
      quantity: "50 tấn",
      route: "HN → HCM",
      driver: "Nguyễn Văn A",
      vehicle: "29A-12345",
      planDate: "2025-01-18",
      timeSlot: "08:00 - 18:00",
      status: "Đã duyệt",
      priority: "Cao",
      warehouseSlot: "Kho 1 - Dock 2",
    },
    {
      id: "TP-002",
      sapOrderId: "SO-2025-002",
      customer: "Tập đoàn XYZ",
      product: "Thép tấm",
      quantity: "30 tấn",
      route: "HN → ĐN",
      driver: "Trần Văn B",
      vehicle: "30B-67890",
      planDate: "2025-01-18",
      timeSlot: "06:00 - 16:00",
      status: "Chờ duyệt",
      priority: "Trung bình",
      warehouseSlot: "Kho 2 - Dock 1",
    },
    {
      id: "TP-003",
      sapOrderId: "SO-2025-003",
      customer: "Công ty DEF",
      product: "Thép hình",
      quantity: "25 tấn",
      route: "HN → HP",
      driver: "Lê Văn C",
      vehicle: "51C-11111",
      planDate: "2025-01-19",
      timeSlot: "09:00 - 17:00",
      status: "Đang xử lý",
      priority: "Thấp",
      warehouseSlot: "Chưa phân công",
    },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      "Đã duyệt": "text-green-700 bg-green-100",
      "Chờ duyệt": "text-yellow-700 bg-yellow-100",
      "Đang xử lý": "text-blue-700 bg-blue-100",
      "Từ chối": "text-red-700 bg-red-100",
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
              Quản lý kế hoạch vận chuyển xuất/nhập kho
            </h1>
            <p className="text-gray-600 mt-1">
              Tích hợp SAP - Quản lý toàn bộ dòng logistics nội bộ
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
              <Plus className="h-4 w-4 mr-2" />
              Lập kế hoạch mới
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Đồng bộ SAP
            </Button>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <CheckCircle className="h-3 w-3 mr-1" />
              SAP Connected
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Statistics Cards */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Kế hoạch hôm nay
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +3 so với hôm qua
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Đã thực hiện
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">8</div>
              <p className="text-xs text-gray-600 mt-1">67% kế hoạch</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Đang xử lý
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <p className="text-xs text-blue-600 mt-1">25% kế hoạch</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Chậm tiến độ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">1</div>
              <p className="text-xs text-red-600 mt-1">Cần xử lý ngay</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <CalendarDays className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Lắp kế hoạch vận chuyển
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* SAP Integration */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  Tích hợp SAP
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-700">
                      Đơn hàng mới (SAP):
                    </span>
                    <Badge className="text-blue-700 bg-blue-100">5 đơn</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-700">
                      Thông tin xe/tài xế:
                    </span>
                    <Badge className="text-green-700 bg-green-100">
                      Đã cập nhật
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-700">Trọng lượng:</span>
                    <Badge className="text-green-700 bg-green-100">
                      Đã xác nhận
                    </Badge>
                  </div>
                  <Button className="w-full" size="sm">
                    <RefreshCw className="h-3 w-3 mr-2" />
                    Lấy dữ liệu SAP
                  </Button>
                </div>
              </div>

              {/* eOffice Integration */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Tích hợp eOffice
                </h3>
                <div className="bg-green-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-700">
                      Lịch trình giao hàng:
                    </span>
                    <Badge className="text-green-700 bg-green-100">
                      Đã đồng bộ
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-700">
                      Nhân lực tham gia:
                    </span>
                    <Badge className="text-green-700 bg-green-100">
                      Sẵn sàng
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-700">
                      Thời gian thực hiện:
                    </span>
                    <Badge className="text-blue-700 bg-blue-100">
                      Đang cập nhật
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <Clock className="h-3 w-3 mr-2" />
                    Xem lịch trình
                  </Button>
                </div>
              </div>

              {/* Warehouse Coordination */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <Package className="h-4 w-4 mr-2" />
                  Điều phối kho bãi
                </h3>
                <div className="bg-orange-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">
                      Slot trống hôm nay:
                    </span>
                    <Badge className="text-orange-700 bg-orange-100">
                      3 dock
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">
                      Xung đột lịch trình:
                    </span>
                    <Badge className="text-red-700 bg-red-100">
                      1 trường hợp
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">
                      Kế hoạch chính thức:
                    </span>
                    <Badge className="text-yellow-700 bg-yellow-100">
                      Đang lập
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <MapPin className="h-3 w-3 mr-2" />
                    Quản lý dock
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transportation Plans Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center text-lg font-semibold">
                <Route className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Danh sách kế hoạch vận chuyển
              </CardTitle>
              <div className="flex items-center space-x-3">
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-40"
                />
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Trạng thái" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="approved">Đã duyệt</SelectItem>
                    <SelectItem value="pending">Chờ duyệt</SelectItem>
                    <SelectItem value="processing">Đang xử lý</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kế hoạch</TableHead>
                  <TableHead>Đơn hàng SAP</TableHead>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead>Sản phẩm</TableHead>
                  <TableHead>Tuyến đường</TableHead>
                  <TableHead>Tài xế/Xe</TableHead>
                  <TableHead>Thời gian</TableHead>
                  <TableHead>Dock</TableHead>
                  <TableHead>Ưu tiên</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transportationPlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-semibold text-hoa-phat-700">
                          {plan.id}
                        </div>
                        <div className="text-xs text-gray-500">
                          {plan.planDate}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{plan.sapOrderId}</div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{plan.customer}</div>
                        <div className="text-xs text-gray-500">
                          {plan.quantity}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{plan.product}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Route className="h-3 w-3 mr-1 text-gray-400" />
                        {plan.route}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="flex items-center text-sm">
                          <User className="h-3 w-3 mr-1 text-gray-400" />
                          {plan.driver}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Truck className="h-3 w-3 mr-1" />
                          {plan.vehicle}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{plan.timeSlot}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{plan.warehouseSlot}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getPriorityIcon(plan.priority)}
                        <span className="ml-1 text-sm">{plan.priority}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(plan.status)}>
                        {plan.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          Sửa
                        </Button>
                        <Button size="sm" variant="outline">
                          Chi tiết
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

export default TransportationPlanning;
