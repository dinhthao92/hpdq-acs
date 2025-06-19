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
  FileText,
  Truck,
  User,
  Package,
  MapPin,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

const SalesOrderTickets = () => {
  const salesOrders = [
    {
      id: "SO-2025-001",
      customer: "Công ty TNHH ABC",
      product: "Thép cuộn",
      quantity: "50 tấn",
      status: "Chờ phân công",
      priority: "Cao",
      orderDate: "2025-01-15",
      deliveryDate: "2025-01-18",
    },
    {
      id: "SO-2025-002",
      customer: "Tập đoàn XYZ",
      product: "Thép tấm",
      quantity: "30 tấn",
      status: "Đã mapping",
      priority: "Trung bình",
      orderDate: "2025-01-14",
      deliveryDate: "2025-01-17",
    },
    {
      id: "SO-2025-003",
      customer: "Công ty DEF",
      product: "Thép hình",
      quantity: "25 tấn",
      status: "Đang vận chuyển",
      priority: "Thấp",
      orderDate: "2025-01-13",
      deliveryDate: "2025-01-16",
    },
  ];

  const transportTickets = [
    {
      id: "TT-001",
      driver: "Nguyễn Văn A",
      vehicle: "29A-12345",
      route: "HN → HCM",
      status: "Sẵn sàng",
      capacity: "40 tấn",
    },
    {
      id: "TT-002",
      driver: "Trần Văn B",
      vehicle: "30B-67890",
      route: "HN → ĐN",
      status: "Đang giao",
      capacity: "35 tấn",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Chờ phân công": {
        variant: "secondary" as const,
        color: "text-yellow-700 bg-yellow-100",
      },
      "Đã mapping": {
        variant: "default" as const,
        color: "text-blue-700 bg-blue-100",
      },
      "Đang vận chuyển": {
        variant: "default" as const,
        color: "text-green-700 bg-green-100",
      },
      "Sẵn sàng": {
        variant: "default" as const,
        color: "text-green-700 bg-green-100",
      },
      "Đang giao": {
        variant: "default" as const,
        color: "text-orange-700 bg-orange-100",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || {
      variant: "secondary" as const,
      color: "text-gray-700 bg-gray-100",
    };

    return <Badge className={config.color}>{status}</Badge>;
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Cao":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
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
              Lệnh xuất bán & Ticket vận chuyển
            </h1>
            <p className="text-gray-600 mt-1">
              Data Sync từ Bravo/SAP - Mapping thông tin vận chuyển
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="flex items-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Đồng bộ SAP
            </Button>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <CheckCircle className="h-3 w-3 mr-1" />
              Kết nối thành công
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Orders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <FileText className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Danh sách Lệnh xuất bán (Bravo/SAP)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Filters */}
                <div className="flex space-x-3">
                  <Input
                    placeholder="Tìm kiếm đơn hàng..."
                    className="flex-1"
                  />
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="pending">Chờ phân công</SelectItem>
                      <SelectItem value="mapped">Đã mapping</SelectItem>
                      <SelectItem value="shipping">Đang vận chuyển</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Orders List */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {salesOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-hoa-phat-700">
                              {order.id}
                            </span>
                            {getPriorityIcon(order.priority)}
                            {getStatusBadge(order.status)}
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Khách hàng:</strong> {order.customer}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Sản phẩm:</strong> {order.product} -{" "}
                            {order.quantity}
                          </p>
                          <p className="text-xs text-gray-500">
                            Ngày giao: {order.deliveryDate}
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          Mapping
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transport Tickets */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Truck className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Ticket vận chuyển khả dụng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-blue-700">8</div>
                    <div className="text-xs text-blue-600">Sẵn sàng</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-orange-700">
                      5
                    </div>
                    <div className="text-xs text-orange-600">Đang giao</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-gray-700">2</div>
                    <div className="text-xs text-gray-600">Bảo trì</div>
                  </div>
                </div>

                {/* Tickets List */}
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {transportTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="border rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-hoa-phat-700">
                          {ticket.id}
                        </span>
                        {getStatusBadge(ticket.status)}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1 text-gray-400" />
                          {ticket.driver}
                        </div>
                        <div className="flex items-center">
                          <Truck className="h-3 w-3 mr-1 text-gray-400" />
                          {ticket.vehicle}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                          {ticket.route}
                        </div>
                        <div className="flex items-center">
                          <Package className="h-3 w-3 mr-1 text-gray-400" />
                          {ticket.capacity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mapping Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Giao diện Mapping: Lệnh xuất bán ↔ Ticket vận chuyển
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Selected Order */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">
                  Đơn hàng được chọn
                </h3>
                <div className="border rounded-lg p-4 bg-blue-50">
                  <div className="space-y-2">
                    <div className="font-semibold text-hoa-phat-700">
                      SO-2025-001
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Khách:</strong> Công ty TNHH ABC
                      </p>
                      <p>
                        <strong>Hàng:</strong> Thép cuộn - 50 tấn
                      </p>
                      <p>
                        <strong>Tuyến:</strong> Hà Nội → TP.HCM
                      </p>
                      <p>
                        <strong>Giao hàng:</strong> 2025-01-18
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapping Arrow */}
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-hoa-phat-100 rounded-full flex items-center justify-center mb-2">
                    <RefreshCw className="h-6 w-6 text-hoa-phat-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Mapping</p>
                </div>
              </div>

              {/* Selected Ticket */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">
                  Ticket được chọn
                </h3>
                <div className="border rounded-lg p-4 bg-green-50">
                  <div className="space-y-2">
                    <div className="font-semibold text-hoa-phat-700">
                      TT-001
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Tài xế:</strong> Nguyễn Văn A
                      </p>
                      <p>
                        <strong>Xe:</strong> 29A-12345
                      </p>
                      <p>
                        <strong>Tải trọng:</strong> 40 tấn
                      </p>
                      <p>
                        <strong>Tuyến:</strong> HN → HCM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapping Details */}
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold text-gray-900 mb-4">
                Chi tiết mapping
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Thời gian dự kiến
                  </label>
                  <Input type="datetime-local" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Ghi chú đặc biệt
                  </label>
                  <Input placeholder="Ghi chú về vận chuyển..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Ưu tiên
                  </label>
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
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <Button variant="outline">Hủy mapping</Button>
                <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
                  Xác nhận mapping
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SalesOrderTickets;
