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
  FileText,
  Search,
  Package,
  Truck,
  User,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle,
  Eye,
  Download,
  Route,
  Building,
  Calendar,
  TrendingUp,
} from "lucide-react";

const OrderTracking = () => {
  const orderTrackingData = [
    {
      orderId: "SO-2025-001",
      ticketId: "TT-001",
      customer: "Công ty TNHH ABC",
      product: "Thép cuộn D8",
      quantity: "50 tấn",
      orderDate: "2025-01-15",
      deliveryDate: "2025-01-18",
      driver: "Nguyễn Văn A",
      vehicle: "29A-12345",
      receiver: "Trần Văn X",
      currentStatus: "Đã giao",
      completionRate: 100,
      timeline: [
        {
          step: "Tạo đơn hàng",
          time: "2025-01-15 09:00",
          status: "completed",
          user: "Phòng kinh doanh",
        },
        {
          step: "Xuất kho",
          time: "2025-01-18 08:30",
          status: "completed",
          user: "Kho 1",
        },
        {
          step: "Vào cổng",
          time: "2025-01-18 09:15",
          status: "completed",
          user: "Cổng chính",
        },
        {
          step: "Cân hàng",
          time: "2025-01-18 10:30",
          status: "completed",
          user: "Trạm cân",
        },
        {
          step: "Giao hàng",
          time: "2025-01-18 14:45",
          status: "completed",
          user: "Khách hàng",
        },
        {
          step: "Xác nhận",
          time: "2025-01-18 15:00",
          status: "completed",
          user: "Trần Văn X",
        },
      ],
    },
    {
      orderId: "SO-2025-002",
      ticketId: "TT-002",
      customer: "Tập đoàn XYZ",
      product: "Thép tấm dày",
      quantity: "30 tấn",
      orderDate: "2025-01-16",
      deliveryDate: "2025-01-19",
      driver: "Trần Văn B",
      vehicle: "30B-67890",
      receiver: "Lê Văn Y",
      currentStatus: "Đang giao",
      completionRate: 75,
      timeline: [
        {
          step: "Tạo đơn hàng",
          time: "2025-01-16 10:00",
          status: "completed",
          user: "Phòng kinh doanh",
        },
        {
          step: "Xuất kho",
          time: "2025-01-19 07:45",
          status: "completed",
          user: "Kho 2",
        },
        {
          step: "Vào cổng",
          time: "2025-01-19 08:20",
          status: "completed",
          user: "Cổng chính",
        },
        {
          step: "Cân hàng",
          time: "2025-01-19 09:30",
          status: "completed",
          user: "Trạm cân",
        },
        {
          step: "Giao hàng",
          time: "",
          status: "in-progress",
          user: "",
        },
        {
          step: "Xác nhận",
          time: "",
          status: "pending",
          user: "",
        },
      ],
    },
    {
      orderId: "SO-2025-003",
      ticketId: "TT-003",
      customer: "Công ty DEF",
      product: "Thép hình V",
      quantity: "25 tấn",
      orderDate: "2025-01-17",
      deliveryDate: "2025-01-20",
      driver: "Lê Văn C",
      vehicle: "51C-11111",
      receiver: "Nguyễn Văn Z",
      currentStatus: "Chờ xuất kho",
      completionRate: 20,
      timeline: [
        {
          step: "Tạo đơn hàng",
          time: "2025-01-17 11:00",
          status: "completed",
          user: "Phòng kinh doanh",
        },
        {
          step: "Xuất kho",
          time: "",
          status: "pending",
          user: "",
        },
        {
          step: "Vào cổng",
          time: "",
          status: "pending",
          user: "",
        },
        {
          step: "Cân hàng",
          time: "",
          status: "pending",
          user: "",
        },
        {
          step: "Giao hàng",
          time: "",
          status: "pending",
          user: "",
        },
        {
          step: "Xác nhận",
          time: "",
          status: "pending",
          user: "",
        },
      ],
    },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      "Đã giao": "text-green-700 bg-green-100",
      "Đang giao": "text-blue-700 bg-blue-100",
      "Chờ xuất kho": "text-yellow-700 bg-yellow-100",
      "Đã hủy": "text-red-700 bg-red-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const getTimelineStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "pending":
        return <Clock className="h-4 w-4 text-gray-400" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
    }
  };

  const getTimelineStepBadge = (status: string) => {
    const config = {
      completed: "text-green-700 bg-green-100",
      "in-progress": "text-blue-700 bg-blue-100",
      pending: "text-gray-700 bg-gray-100",
      failed: "text-red-700 bg-red-100",
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
              Truy xuất lệnh xuất kho/thành phẩm
            </h1>
            <p className="text-gray-600 mt-1">
              Theo dõi đối soát lịch sử luân chuyển hàng hóa
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <FileText className="h-3 w-3 mr-1" />
              256 Đơn hàng
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <TrendingUp className="h-3 w-3 mr-1" />
              98.5% Hoàn thành
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search Interface */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Search className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Tìm kiếm đơn hàng
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search by Order ID */}
              <div>
                <Label htmlFor="order-id">Mã đơn hàng (SAP)</Label>
                <Input
                  id="order-id"
                  placeholder="VD: SO-2025-001"
                  className="mt-2"
                />
              </div>

              {/* Search by Ticket ID */}
              <div>
                <Label htmlFor="ticket-id">Mã Ticket</Label>
                <Input
                  id="ticket-id"
                  placeholder="VD: TT-001"
                  className="mt-2"
                />
              </div>

              {/* Search by Customer */}
              <div>
                <Label htmlFor="customer">Khách hàng</Label>
                <Input
                  id="customer"
                  placeholder="Tên công ty khách hàng..."
                  className="mt-2"
                />
              </div>

              {/* Search by Product */}
              <div>
                <Label>Sản phẩm</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn sản phẩm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả sản phẩm</SelectItem>
                    <SelectItem value="steel-coil">Thép cuộn</SelectItem>
                    <SelectItem value="steel-plate">Thép tấm</SelectItem>
                    <SelectItem value="steel-beam">Thép hình</SelectItem>
                    <SelectItem value="steel-bar">Thép thanh</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search by Driver/Vehicle */}
              <div>
                <Label htmlFor="driver-vehicle">Tài xế / Xe vận chuyển</Label>
                <Input
                  id="driver-vehicle"
                  placeholder="Tên tài xế hoặc biển số..."
                  className="mt-2"
                />
              </div>

              {/* Status Filter */}
              <div>
                <Label>Trạng thái đơn hàng</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn trạng thái" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="completed">Đã giao</SelectItem>
                    <SelectItem value="in-transit">Đang giao</SelectItem>
                    <SelectItem value="processing">Chờ xuất kho</SelectItem>
                    <SelectItem value="cancelled">Đã hủy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div className="space-y-3">
                <Label>Khoảng thời gian</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="date" />
                  <Input type="date" />
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
                Kết quả tìm kiếm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Đơn hàng</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Sản phẩm</TableHead>
                    <TableHead>Vận chuyển</TableHead>
                    <TableHead>Người nhận</TableHead>
                    <TableHead>Tiến độ</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderTrackingData.map((order) => (
                    <TableRow key={order.orderId}>
                      <TableCell>
                        <div>
                          <div className="font-semibold text-hoa-phat-700">
                            {order.orderId}
                          </div>
                          <div className="text-sm text-gray-500">
                            Ticket: {order.ticketId}
                          </div>
                          <div className="text-xs text-gray-400">
                            {order.deliveryDate}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{order.customer}</div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.product}</div>
                          <div className="text-sm text-gray-500">
                            {order.quantity}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1 text-gray-400" />
                            {order.driver}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Truck className="h-3 w-3 mr-1" />
                            {order.vehicle}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{order.receiver}</div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm font-medium">
                            {order.completionRate}%
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                order.completionRate === 100
                                  ? "bg-green-500"
                                  : order.completionRate >= 50
                                    ? "bg-blue-500"
                                    : "bg-yellow-500"
                              }`}
                              style={{ width: `${order.completionRate}%` }}
                            ></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(order.currentStatus)}>
                          {order.currentStatus}
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
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3" />
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

        {/* Order Timeline Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Route className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Chi tiết lịch sử luân chuyển - SO-2025-001
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Order Information */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Thông tin đơn hàng
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Đơn hàng:</span>
                    <span className="font-semibold text-blue-900">
                      SO-2025-001
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Ticket:</span>
                    <span className="font-semibold text-blue-900">TT-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Khách hàng:</span>
                    <span className="font-medium text-blue-900">
                      Công ty TNHH ABC
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Sản phẩm:</span>
                    <span className="font-medium text-blue-900">
                      Thép cuộn D8
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Số lượng:</span>
                    <span className="font-semibold text-blue-900">50 tấn</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Người giao:</span>
                    <span className="font-medium text-blue-900">
                      Nguyễn Văn A
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Người nhận:</span>
                    <span className="font-medium text-blue-900">
                      Trần Văn X
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="lg:col-span-2">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Timeline xử lý
                </h3>
                <div className="space-y-4">
                  {orderTrackingData[0].timeline.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                          {getTimelineStepIcon(step.status)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">{step.step}</div>
                          <div className="text-xs text-gray-500">
                            {step.time}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {step.user && `Thực hiện bởi: ${step.user}`}
                        </div>
                        <div className="mt-2">
                          <Badge className={getTimelineStepBadge(step.status)}>
                            {step.status === "completed" && "Hoàn thành"}
                            {step.status === "in-progress" && "Đang thực hiện"}
                            {step.status === "pending" && "Chờ xử lý"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Tổng đơn hàng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">256</div>
              <p className="text-xs text-gray-600 mt-1">Tháng này</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Đã hoàn thành
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">243</div>
              <p className="text-xs text-green-600 mt-1">94.9% tỷ lệ</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Đang xử lý
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">8</div>
              <p className="text-xs text-blue-600 mt-1">3.1% đang giao</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Có vấn đề
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-700">5</div>
              <p className="text-xs text-red-600 mt-1">Cần xử lý ngay</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default OrderTracking;
