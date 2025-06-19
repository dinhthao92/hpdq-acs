import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  DollarSign,
  TrendingUp,
  Send,
  RefreshCw,
  Archive,
  AlertTriangle,
  Download,
  Eye,
  Edit,
  Calculator,
} from "lucide-react";
import { useState } from "react";

const FinalReconciliation = () => {
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);

  const deliverySteps = [
    {
      id: "access",
      name: "Cấp quyền ACS",
      icon: CheckCircle,
      status: "completed",
    },
    { id: "entry", name: "Vào cổng", icon: CheckCircle, status: "completed" },
    {
      id: "weighing",
      name: "Cân hàng",
      icon: CheckCircle,
      status: "completed",
    },
    {
      id: "delivery",
      name: "Giao nhận",
      icon: CheckCircle,
      status: "completed",
    },
    {
      id: "reconciliation",
      name: "Đối soát",
      icon: Clock,
      status: "in-progress",
    },
    {
      id: "revenue",
      name: "Xác nhận doanh thu",
      icon: Clock,
      status: "pending",
    },
  ];

  const tickets = [
    {
      id: "TT-001",
      orderId: "SO-2025-001",
      customer: "Công ty TNHH ABC",
      driver: "Nguyễn Văn A",
      vehicle: "29A-12345",
      product: "Thép cuộn",
      quantity: "50 tấn",
      orderValue: 2500000000, // 2.5 tỷ
      steps: {
        access: {
          status: "completed",
          time: "08:30",
          details: "Cấp quyền thành công",
        },
        entry: {
          status: "completed",
          time: "09:15",
          details: "Xác thực Face + LPR",
        },
        weighing: {
          status: "completed",
          time: "10:30",
          details: "Cân: 50.2 tấn (đạt yêu cầu)",
        },
        delivery: {
          status: "completed",
          time: "14:45",
          details: "50 tấn đã giao đầy đủ",
        },
        reconciliation: {
          status: "pending",
          time: "",
          details: "Chờ đối soát",
        },
        revenue: { status: "pending", time: "", details: "Chờ xác nhận" },
      },
      issues: [],
      ready: true,
    },
    {
      id: "TT-002",
      orderId: "SO-2025-002",
      customer: "Tập đoàn XYZ",
      driver: "Trần Văn B",
      vehicle: "30B-67890",
      product: "Thép tấm",
      quantity: "30 tấn",
      orderValue: 1800000000, // 1.8 tỷ
      steps: {
        access: {
          status: "completed",
          time: "07:45",
          details: "Cấp quyền thành công",
        },
        entry: {
          status: "completed",
          time: "08:20",
          details: "Xác thực Face + LPR",
        },
        weighing: {
          status: "completed",
          time: "09:30",
          details: "Cân: 29.8 tấn (đạt yêu cầu)",
        },
        delivery: {
          status: "warning",
          time: "13:20",
          details: "29 tấn giao (thiếu 1 tấn)",
        },
        reconciliation: {
          status: "pending",
          time: "",
          details: "Chờ xử lý thiếu hụt",
        },
        revenue: { status: "pending", time: "", details: "Chờ điều chỉnh" },
      },
      issues: ["Thiếu 1 tấn hàng", "Cần điều chỉnh giá trị đơn hàng"],
      ready: false,
    },
    {
      id: "TT-003",
      orderId: "SO-2025-003",
      customer: "Công ty DEF",
      driver: "Lê Văn C",
      vehicle: "51C-11111",
      product: "Thép hình",
      quantity: "25 tấn",
      orderValue: 1250000000, // 1.25 tỷ
      steps: {
        access: {
          status: "completed",
          time: "09:00",
          details: "Cấp quyền thành công",
        },
        entry: {
          status: "completed",
          time: "09:45",
          details: "Xác thực Face + LPR",
        },
        weighing: {
          status: "completed",
          time: "11:00",
          details: "Cân: 25.1 tấn (đạt yêu cầu)",
        },
        delivery: {
          status: "completed",
          time: "15:30",
          details: "25 tấn đã giao đầy đủ",
        },
        reconciliation: {
          status: "completed",
          time: "16:00",
          details: "Đối soát hoàn tất",
        },
        revenue: { status: "pending", time: "", details: "Sẵn sàng gửi SAP" },
      },
      issues: [],
      ready: true,
    },
  ];

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "pending":
        return <Clock className="h-4 w-4 text-gray-400" />;
      default:
        return <XCircle className="h-4 w-4 text-red-600" />;
    }
  };

  const getStepBadge = (status: string) => {
    const config = {
      completed: "text-green-700 bg-green-100",
      warning: "text-yellow-700 bg-yellow-100",
      "in-progress": "text-blue-700 bg-blue-100",
      pending: "text-gray-700 bg-gray-100",
      failed: "text-red-700 bg-red-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const handleTicketSelect = (ticketId: string) => {
    setSelectedTickets((prev) =>
      prev.includes(ticketId)
        ? prev.filter((id) => id !== ticketId)
        : [...prev, ticketId],
    );
  };

  const totalOrderValue = tickets
    .filter((ticket) => selectedTickets.includes(ticket.id))
    .reduce((total, ticket) => total + ticket.orderValue, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Đối soát & Xác nhận hoàn tất
            </h1>
            <p className="text-gray-600 mt-1">
              Kiểm tra trạng thái từng bước và xác nhận doanh thu
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <TrendingUp className="h-3 w-3 mr-1" />3 đơn hàng cần xử lý
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <DollarSign className="h-3 w-3 mr-1" />
              {(totalOrderValue / 1000000000).toFixed(1)}B VNĐ
            </Badge>
          </div>
        </div>

        {/* Process Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <FileText className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Quy trình VTTS - Tổng quan các bước
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              {deliverySteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        step.status === "completed"
                          ? "bg-green-100"
                          : step.status === "in-progress"
                            ? "bg-blue-100"
                            : "bg-gray-100"
                      }`}
                    >
                      <step.icon
                        className={`h-6 w-6 ${
                          step.status === "completed"
                            ? "text-green-600"
                            : step.status === "in-progress"
                              ? "text-blue-600"
                              : "text-gray-400"
                        }`}
                      />
                    </div>
                    <span className="text-sm font-medium mt-2 text-center max-w-20">
                      {step.name}
                    </span>
                  </div>
                  {index < deliverySteps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-4 ${
                        index < 3 ? "bg-green-200" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tickets Status Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Calculator className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Chi tiết trạng thái từng Ticket
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Chọn</TableHead>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead>Sản phẩm</TableHead>
                  <TableHead>Cấp quyền</TableHead>
                  <TableHead>Vào cổng</TableHead>
                  <TableHead>Cân hàng</TableHead>
                  <TableHead>Giao nhận</TableHead>
                  <TableHead>Đối soát</TableHead>
                  <TableHead>Doanh thu</TableHead>
                  <TableHead>Giá trị (VNĐ)</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedTickets.includes(ticket.id)}
                        onChange={() => handleTicketSelect(ticket.id)}
                        disabled={!ticket.ready}
                        className="w-4 h-4"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-semibold text-hoa-phat-700">
                          {ticket.id}
                        </div>
                        <div className="text-xs text-gray-500">
                          {ticket.orderId}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{ticket.customer}</div>
                        <div className="text-xs text-gray-500">
                          {ticket.driver} - {ticket.vehicle}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{ticket.product}</div>
                        <div className="text-xs text-gray-500">
                          {ticket.quantity}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        {getStepIcon(ticket.steps.access.status)}
                        <div className="text-xs">
                          <div>{ticket.steps.access.time}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        {getStepIcon(ticket.steps.entry.status)}
                        <div className="text-xs">
                          <div>{ticket.steps.entry.time}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        {getStepIcon(ticket.steps.weighing.status)}
                        <div className="text-xs">
                          <div>{ticket.steps.weighing.time}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        {getStepIcon(ticket.steps.delivery.status)}
                        <div className="text-xs">
                          <div>{ticket.steps.delivery.time}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={getStepBadge(
                          ticket.steps.reconciliation.status,
                        )}
                      >
                        {ticket.steps.reconciliation.status === "completed" &&
                          "Hoàn tất"}
                        {ticket.steps.reconciliation.status === "pending" &&
                          "Chờ xử lý"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={getStepBadge(ticket.steps.revenue.status)}
                      >
                        {ticket.steps.revenue.status === "completed" &&
                          "Đã gửi"}
                        {ticket.steps.revenue.status === "pending" && "Chờ gửi"}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {(ticket.orderValue / 1000000).toLocaleString()}M
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        {!ticket.ready && (
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Issues & Warnings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                Vấn đề cần xử lý
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tickets
                  .filter((ticket) => ticket.issues.length > 0)
                  .map((ticket) => (
                    <div
                      key={ticket.id}
                      className="border-l-4 border-yellow-400 bg-yellow-50 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-yellow-800">
                          {ticket.id}
                        </span>
                        <Badge className="text-yellow-700 bg-yellow-100">
                          Cần xử lý
                        </Badge>
                      </div>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        {ticket.issues.map((issue, index) => (
                          <li key={index}>• {issue}</li>
                        ))}
                      </ul>
                      <div className="flex space-x-2 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-yellow-700"
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Điều chỉnh
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-yellow-700"
                        >
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Xử lý
                        </Button>
                      </div>
                    </div>
                  ))}

                {tickets.every((ticket) => ticket.issues.length === 0) && (
                  <div className="text-center text-gray-500 py-8">
                    <CheckCircle className="h-12 w-12 mx-auto text-green-500 mb-3" />
                    <p>Không có vấn đề nào cần xử lý</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Summary & Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <DollarSign className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Tổng kết & Thao tác
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Financial Summary */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Tổng kết tài chính
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-700">
                      Đơn hàng được chọn:
                    </span>
                    <span className="font-semibold text-blue-900">
                      {selectedTickets.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-700">Tổng giá trị:</span>
                    <span className="font-bold text-blue-900">
                      {(totalOrderValue / 1000000000).toFixed(2)}B VNĐ
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-700">Trạng thái:</span>
                    <Badge className="text-green-700 bg-green-100">
                      Sẵn sàng gửi SAP
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Thống kê nhanh
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-green-700">
                      2
                    </div>
                    <div className="text-xs text-green-600">Hoàn tất</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-yellow-700">
                      1
                    </div>
                    <div className="text-xs text-yellow-600">Có vấn đề</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-blue-700">
                      95%
                    </div>
                    <div className="text-xs text-blue-600">Hiệu suất</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-purple-700">
                      8.5h
                    </div>
                    <div className="text-xs text-purple-600">Thời gian TB</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Thao tác chính
                </h3>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-hoa-phat-600 hover:bg-hoa-phat-700"
                    disabled={selectedTickets.length === 0}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Gửi kết quả về SAP ({selectedTickets.length} đơn)
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full"
                    disabled={selectedTickets.length === 0}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Xuất báo cáo Excel
                  </Button>

                  <Button variant="outline" className="w-full">
                    <Archive className="h-4 w-4 mr-2" />
                    Lưu trữ đơn hàng cũ
                  </Button>

                  <Button variant="outline" className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Đồng bộ lại với SAP
                  </Button>
                </div>
              </div>

              {/* Integration Status */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Trạng thái tích hợp
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Kết nối SAP:</span>
                    <Badge className="text-green-700 bg-green-100">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Hoạt động
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Đồng bộ cuối:</span>
                    <span className="font-medium">14:30 hôm nay</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Đơn hàng chờ:</span>
                    <span className="font-medium">0</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FinalReconciliation;
