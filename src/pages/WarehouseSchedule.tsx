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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  Package,
  Truck,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Users,
  BarChart3,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

const WarehouseSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [selectedWarehouse, setSelectedWarehouse] = useState("all");

  const warehouseSchedule = [
    {
      timeSlot: "08:00 - 09:00",
      dock1: {
        planId: "TP-001",
        vehicle: "29A-12345",
        operation: "Xuất hàng",
        product: "Thép cuộn",
        quantity: "50 tấn",
        status: "Đang thực hiện",
        progress: 75,
      },
      dock2: {
        planId: "TP-002",
        vehicle: "30B-67890",
        operation: "Nhập hàng",
        product: "Nguyên liệu",
        quantity: "30 tấn",
        status: "Hoàn thành",
        progress: 100,
      },
      dock3: null,
    },
    {
      timeSlot: "09:00 - 10:00",
      dock1: {
        planId: "TP-003",
        vehicle: "51C-11111",
        operation: "Xuất hàng",
        product: "Thép tấm",
        quantity: "25 tấn",
        status: "Chờ xe đến",
        progress: 0,
      },
      dock2: null,
      dock3: {
        planId: "TP-004",
        vehicle: "29D-22222",
        operation: "Xuất hàng",
        product: "Thép hình",
        quantity: "15 tấn",
        status: "Đã lên lịch",
        progress: 0,
      },
    },
    {
      timeSlot: "10:00 - 11:00",
      dock1: null,
      dock2: {
        planId: "TP-005",
        vehicle: "52E-33333",
        operation: "Nhập hàng",
        product: "Phế liệu",
        quantity: "40 tấn",
        status: "Xung đột lịch",
        progress: 0,
        conflict: true,
      },
      dock3: null,
    },
  ];

  const warehouseStats = {
    totalSlots: 24,
    occupiedSlots: 18,
    conflicts: 2,
    efficiency: 85,
  };

  const getStatusBadge = (status: string, conflict = false) => {
    if (conflict) {
      return (
        <Badge className="text-red-700 bg-red-100">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Xung đột
        </Badge>
      );
    }

    const config = {
      "Đang thực hiện": "text-blue-700 bg-blue-100",
      "Hoàn thành": "text-green-700 bg-green-100",
      "Chờ xe đến": "text-yellow-700 bg-yellow-100",
      "Đã lên lịch": "text-gray-700 bg-gray-100",
      "Xung đột lịch": "text-red-700 bg-red-100",
    };
    return (
      <Badge
        className={
          config[status as keyof typeof config] || "text-gray-700 bg-gray-100"
        }
      >
        {status}
      </Badge>
    );
  };

  const getDockSlot = (slot: any) => {
    if (!slot) {
      return (
        <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg text-center text-gray-400">
          <Package className="h-6 w-6 mx-auto mb-1" />
          <div className="text-xs">Trống</div>
        </div>
      );
    }

    return (
      <div
        className={`p-3 border rounded-lg ${
          slot.conflict
            ? "border-red-300 bg-red-50"
            : slot.status === "Hoàn thành"
              ? "border-green-300 bg-green-50"
              : slot.status === "Đang thực hi��n"
                ? "border-blue-300 bg-blue-50"
                : "border-gray-300 bg-gray-50"
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">{slot.planId}</span>
            {getStatusBadge(slot.status, slot.conflict)}
          </div>
          <div className="text-xs space-y-1">
            <div className="flex items-center">
              <Truck className="h-3 w-3 mr-1 text-gray-400" />
              {slot.vehicle}
            </div>
            <div>{slot.operation}</div>
            <div className="font-medium">{slot.product}</div>
            <div className="text-gray-600">{slot.quantity}</div>
          </div>
          {slot.progress > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Tiến độ</span>
                <span>{slot.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${slot.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Lịch trình kho bãi
            </h1>
            <p className="text-gray-600 mt-1">
              Quản lý lịch trình xuất/nhập kho - Tránh xung đột thời gian
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Cập nhật lịch
            </Button>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <Clock className="h-3 w-3 mr-1" />
              Realtime
            </Badge>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Tổng số slot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {warehouseStats.totalSlots}
              </div>
              <p className="text-xs text-gray-600 mt-1">Slot/ngày</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Đã sử dụng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {warehouseStats.occupiedSlots}
              </div>
              <p className="text-xs text-blue-600 mt-1">
                {Math.round(
                  (warehouseStats.occupiedSlots / warehouseStats.totalSlots) *
                    100,
                )}
                % công suất
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Xung đột
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {warehouseStats.conflicts}
              </div>
              <p className="text-xs text-red-600 mt-1">Cần xử lý ngay</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Hiệu suất
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {warehouseStats.efficiency}%
              </div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5% so với hôm qua
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filter Controls */}
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <label className="text-sm font-medium">Ngày:</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="border rounded px-3 py-1 text-sm"
                />
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <label className="text-sm font-medium">Kho:</label>
                <Select
                  value={selectedWarehouse}
                  onValueChange={setSelectedWarehouse}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả kho</SelectItem>
                    <SelectItem value="warehouse1">Kho 1</SelectItem>
                    <SelectItem value="warehouse2">Kho 2</SelectItem>
                    <SelectItem value="warehouse3">Kho 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Grid */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <BarChart3 className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Lịch trình {selectedDate} - Kho 1
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Khung giờ</TableHead>
                    <TableHead className="min-w-[200px]">Dock 1</TableHead>
                    <TableHead className="min-w-[200px]">Dock 2</TableHead>
                    <TableHead className="min-w-[200px]">Dock 3</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {warehouseSchedule.map((schedule, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          {schedule.timeSlot}
                        </div>
                      </TableCell>
                      <TableCell>{getDockSlot(schedule.dock1)}</TableCell>
                      <TableCell>{getDockSlot(schedule.dock2)}</TableCell>
                      <TableCell>{getDockSlot(schedule.dock3)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Conflict Resolution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
              Xử lý xung đột lịch trình
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 bg-red-50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-red-800">
                      Xung đột: TP-005 - Dock 2 (10:00-11:00)
                    </h4>
                    <p className="text-sm text-red-700">
                      Xe 52E-33333 - Nhập 40 tấn phế liệu
                    </p>
                  </div>
                  <Badge className="text-red-700 bg-red-100">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Cần xử lý
                  </Badge>
                </div>
                <div className="text-sm text-red-700 mb-3">
                  <strong>Nguyên nhân:</strong> Dock 2 đã được đặt cho TP-002
                  trong khung giờ này
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="text-red-600">
                    Chuyển sang Dock 1
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600">
                    Dời sang 11:00-12:00
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600">
                    Hủy kế hoạch
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resource Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Users className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Phân công nhân lực
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <div>
                    <div className="font-medium">Ca sáng (08:00-16:00)</div>
                    <div className="text-sm text-gray-600">15 công nhân</div>
                  </div>
                  <Badge className="text-green-700 bg-green-100">Đủ</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                  <div>
                    <div className="font-medium">Ca chiều (16:00-24:00)</div>
                    <div className="text-sm text-gray-600">8 công nhân</div>
                  </div>
                  <Badge className="text-yellow-700 bg-yellow-100">
                    Thiếu 2 người
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">Ca đêm (24:00-08:00)</div>
                    <div className="text-sm text-gray-600">5 công nhân</div>
                  </div>
                  <Badge className="text-green-700 bg-green-100">Đủ</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Package className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Dự báo tải kho
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Xuất hàng hôm nay</span>
                    <span>450 tấn</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">75% mục tiêu</div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Nhập hàng hôm nay</span>
                    <span>320 tấn</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">85% mục tiêu</div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Công suất kho</span>
                    <span>2,800/4,000 tấn</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    70% công suất
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

export default WarehouseSchedule;
