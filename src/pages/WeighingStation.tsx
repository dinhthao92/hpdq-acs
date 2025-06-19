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
  Scale,
  Truck,
  User,
  FileText,
  Printer,
  CheckCircle,
  AlertTriangle,
  Package,
  Activity,
  Calculator,
  Camera,
  Clock,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const WeighingStation = () => {
  const [currentWeight, setCurrentWeight] = useState(0);
  const [isWeighing, setIsWeighing] = useState(false);
  const [ticketInfo, setTicketInfo] = useState({
    id: "TT-001",
    orderId: "SO-2025-001",
    driver: "Nguyễn Văn A",
    vehicle: "29A-12345",
    product: "Thép cuộn",
    expectedWeight: 50000, // kg
    tolerance: 5, // %
  });

  const recentWeighings = [
    {
      time: "14:20:15",
      ticket: "TT-002",
      vehicle: "30B-67890",
      grossWeight: 48500,
      tareWeight: 12000,
      netWeight: 36500,
      expected: 35000,
      status: "approved",
      variance: "+4.3%",
    },
    {
      time: "13:45:30",
      ticket: "TT-001",
      vehicle: "29A-12345",
      grossWeight: 62000,
      tareWeight: 12000,
      netWeight: 50000,
      expected: 50000,
      status: "approved",
      variance: "0%",
    },
    {
      time: "13:15:45",
      ticket: "TT-003",
      vehicle: "51C-11111",
      grossWeight: 28000,
      tareWeight: 8000,
      netWeight: 20000,
      expected: 25000,
      status: "rejected",
      variance: "-20%",
    },
  ];

  const startWeighing = () => {
    setIsWeighing(true);
    // Simulate weighing process
    let weight = 0;
    const interval = setInterval(() => {
      weight += Math.random() * 1000;
      setCurrentWeight(Math.round(weight));
      if (weight >= ticketInfo.expectedWeight + 12000) {
        // Expected + tare weight
        clearInterval(interval);
        setCurrentWeight(ticketInfo.expectedWeight + 12000);
        setIsWeighing(false);
      }
    }, 100);
  };

  const calculateVariance = (actual: number, expected: number) => {
    const variance = ((actual - expected) / expected) * 100;
    return variance.toFixed(1);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="text-green-700 bg-green-100">Đạt yêu cầu</Badge>
        );
      case "rejected":
        return <Badge className="text-red-700 bg-red-100">Không đạt</Badge>;
      case "warning":
        return (
          <Badge className="text-yellow-700 bg-yellow-100">Cảnh báo</Badge>
        );
      default:
        return <Badge variant="secondary">Chờ xử lý</Badge>;
    }
  };

  const netWeight = currentWeight - 12000; // Assuming 12000kg tare weight
  const variance = calculateVariance(netWeight, ticketInfo.expectedWeight);
  const isWithinTolerance =
    Math.abs(parseFloat(variance)) <= ticketInfo.tolerance;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Trạm cân - Weighing Station
            </h1>
            <p className="text-gray-600 mt-1">
              Kiểm tra trọng lượng và xác nhận hàng hóa
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Activity className="h-3 w-3 mr-1" />
              Cân hoạt động bình thường
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <Scale className="h-3 w-3 mr-1" />
              Độ chính xác: ±0.1%
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Ticket Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <FileText className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Thông tin Ticket hiện tại
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Ticket ID:</span>
                  <span className="font-semibold text-hoa-phat-700">
                    {ticketInfo.id}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Đơn hàng:</span>
                  <span className="font-medium">{ticketInfo.orderId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tài xế:</span>
                  <span className="font-medium">{ticketInfo.driver}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Xe:</span>
                  <span className="font-medium">{ticketInfo.vehicle}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sản phẩm:</span>
                  <span className="font-medium">{ticketInfo.product}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Trọng lượng dự kiến:
                  </span>
                  <span className="font-semibold text-green-700">
                    {ticketInfo.expectedWeight.toLocaleString()} kg
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Dung sai:</span>
                  <span className="font-medium">±{ticketInfo.tolerance}%</span>
                </div>
              </div>

              {/* Driver Photo */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">��nh tài xế</h4>
                <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
              </div>

              {/* Vehicle Photo */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Ảnh xe tải</h4>
                <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                  <Truck className="h-12 w-12 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weighing Interface */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Scale className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Cân điện tử
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Weight Display */}
              <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-center">
                <div className="text-4xl font-bold mb-2">
                  {currentWeight.toLocaleString()}
                </div>
                <div className="text-lg">KG</div>
                {isWeighing && (
                  <div className="text-sm mt-2 animate-pulse">Đang cân...</div>
                )}
              </div>

              {/* Weight Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-sm text-gray-600">
                    Tổng trọng lượng (Gross):
                  </span>
                  <span className="font-semibold">
                    {currentWeight.toLocaleString()} kg
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-sm text-gray-600">
                    Trọng lượng xe (Tare):
                  </span>
                  <span className="font-semibold">12,000 kg</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-2 border-blue-200">
                  <span className="text-sm text-blue-700">
                    Trọng lượng thực (Net):
                  </span>
                  <span className="font-bold text-blue-900">
                    {Math.max(0, netWeight).toLocaleString()} kg
                  </span>
                </div>
              </div>

              {/* Variance Display */}
              {netWeight > 0 && (
                <div
                  className={`p-4 rounded-lg ${
                    isWithinTolerance
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  } border-2`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Độ lệch:</span>
                    <span
                      className={`font-bold ${
                        isWithinTolerance ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {variance > 0 ? "+" : ""}
                      {variance}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isWithinTolerance ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-700">
                          Trong dung sai cho phép
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span className="text-sm text-red-700">
                          Vượt quá dung sai
                        </span>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Control Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={startWeighing}
                  disabled={isWeighing}
                  className="w-full bg-hoa-phat-600 hover:bg-hoa-phat-700"
                >
                  {isWeighing ? (
                    <>
                      <Activity className="h-4 w-4 mr-2 animate-spin" />
                      Đang cân...
                    </>
                  ) : (
                    <>
                      <Scale className="h-4 w-4 mr-2" />
                      Bắt đầu cân
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  disabled={currentWeight === 0}
                >
                  <Calculator className="h-4 w-4 mr-2" />
                  Tính toán lại
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Actions & Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <CheckCircle className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Xác nhận & In phiếu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quality Check */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Kiểm tra chất lượng
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">Trọng lượng đạt yêu cầu</span>
                    {isWithinTolerance ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">Tài xế xác thực</span>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">Xe đúng quy định</span>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Weight Certificate Preview */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Phiếu cân điện tử
                </h4>
                <div className="border rounded-lg p-4 bg-white text-xs">
                  <div className="text-center font-bold mb-3">
                    PHIẾU CÂN ĐIỆN TỬ
                  </div>
                  <div className="space-y-1">
                    <div>Ticket: {ticketInfo.id}</div>
                    <div>Tài xế: {ticketInfo.driver}</div>
                    <div>Xe: {ticketInfo.vehicle}</div>
                    <div>Hàng: {ticketInfo.product}</div>
                    <div>Tổng TL: {currentWeight.toLocaleString()} kg</div>
                    <div>TL xe: 12,000 kg</div>
                    <div className="font-bold">
                      TL thực: {Math.max(0, netWeight).toLocaleString()} kg
                    </div>
                    <div>Thời gian: {new Date().toLocaleString("vi-VN")}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={currentWeight === 0 || !isWithinTolerance}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Xác nhận cân
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  disabled={currentWeight === 0}
                >
                  <Printer className="h-4 w-4 mr-2" />
                  In phiếu cân
                </Button>

                <Button
                  variant="outline"
                  className="w-full text-red-600 hover:text-red-700"
                  disabled={currentWeight === 0}
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Từ chối (không đạt)
                </Button>
              </div>

              {/* Additional Notes */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Ghi chú thêm
                </h4>
                <textarea
                  className="w-full p-2 border rounded text-sm"
                  rows={3}
                  placeholder="Ghi chú về quá trình cân..."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Weighings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <TrendingUp className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Lịch sử cân gần đây
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Thời gian</TableHead>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Phương tiện</TableHead>
                  <TableHead>Tổng TL (kg)</TableHead>
                  <TableHead>TL xe (kg)</TableHead>
                  <TableHead>TL thực (kg)</TableHead>
                  <TableHead>Dự kiến (kg)</TableHead>
                  <TableHead>Độ lệch</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentWeighings.map((weighing, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-sm">
                      {weighing.time}
                    </TableCell>
                    <TableCell className="font-medium">
                      {weighing.ticket}
                    </TableCell>
                    <TableCell>{weighing.vehicle}</TableCell>
                    <TableCell>
                      {weighing.grossWeight.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {weighing.tareWeight.toLocaleString()}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {weighing.netWeight.toLocaleString()}
                    </TableCell>
                    <TableCell>{weighing.expected.toLocaleString()}</TableCell>
                    <TableCell
                      className={
                        weighing.status === "approved"
                          ? "text-green-700"
                          : "text-red-700"
                      }
                    >
                      {weighing.variance}
                    </TableCell>
                    <TableCell>{getStatusBadge(weighing.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Printer className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Camera className="h-3 w-3" />
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

export default WeighingStation;
