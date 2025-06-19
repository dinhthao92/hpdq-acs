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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  Download,
  Eye,
  Play,
  Camera,
  Clock,
  MapPin,
  AlertTriangle,
  Users,
  Truck,
  Package,
  FileText,
  Calendar,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

const AlertHistory = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterSeverity, setFilterSeverity] = useState("all");

  const alertHistory = [
    {
      id: "AH-001",
      time: "2025-01-18 14:35:20",
      type: "personnel",
      category: "Nhân sự",
      severity: "high",
      title: "Vào sai quyền ACS",
      subject: "Nguyễn Văn X",
      subjectId: "NV-123",
      location: "Khu sản xuất - Dây chuyền 2",
      camera: "CAM-008",
      violation: "Unauthorized access",
      description:
        "Nhân viên bộ phận hành chính vào khu sản xuất không được phép",
      status: "resolved",
      resolvedBy: "Bảo vệ - Trạm 2",
      resolvedTime: "2025-01-18 14:45:00",
      evidence: [
        {
          type: "image",
          file: "face_detection_001.jpg",
          timestamp: "14:35:20",
        },
        {
          type: "video",
          file: "access_violation_001.mp4",
          timestamp: "14:35:15-14:36:00",
        },
      ],
    },
    {
      id: "AH-002",
      time: "2025-01-18 13:20:30",
      type: "vehicle",
      category: "Phương tiện",
      severity: "critical",
      title: "Xe blacklist cố gắng vào",
      subject: "51C-11111",
      subjectId: "VH-BLACKLIST-001",
      location: "Cổng chính",
      camera: "LPR-001",
      violation: "Blacklist vehicle",
      description: "Phương tiện trong danh sách đen cố gắng vào khu vực",
      status: "resolved",
      resolvedBy: "Bảo vệ - Cổng chính",
      resolvedTime: "2025-01-18 13:22:00",
      evidence: [
        { type: "image", file: "license_plate_001.jpg", timestamp: "13:20:30" },
        {
          type: "video",
          file: "gate_rejection_001.mp4",
          timestamp: "13:20:25-13:22:30",
        },
      ],
    },
    {
      id: "AH-003",
      time: "2025-01-18 12:15:45",
      type: "vtts",
      category: "VTTS",
      severity: "medium",
      title: "Thiết bị không đăng ký",
      subject: "GPS-UNKNOWN-001",
      subjectId: "UNREGISTERED",
      location: "Trạm cân",
      camera: "CAM-005",
      violation: "Unregistered equipment",
      description: "Phát hiện thiết bị GPS không có trong hệ thống đăng ký",
      status: "investigating",
      resolvedBy: null,
      resolvedTime: null,
      evidence: [
        {
          type: "image",
          file: "equipment_scan_001.jpg",
          timestamp: "12:15:45",
        },
      ],
    },
    {
      id: "AH-004",
      time: "2025-01-18 11:30:15",
      type: "transport",
      category: "Vận chuyển",
      severity: "medium",
      title: "Ticket trùng lặp",
      subject: "TT-002",
      subjectId: "DUPLICATE",
      location: "Hệ thống",
      camera: "SYSTEM",
      violation: "Duplicate ticket",
      description: "Phát hiện ticket vận chuyển bị trùng lặp trong hệ thống",
      status: "resolved",
      resolvedBy: "Admin - Hệ thống",
      resolvedTime: "2025-01-18 11:45:00",
      evidence: [
        {
          type: "document",
          file: "ticket_duplicate_report.pdf",
          timestamp: "11:30:15",
        },
      ],
    },
    {
      id: "AH-005",
      time: "2025-01-18 10:45:30",
      type: "personnel",
      category: "Nhân sự",
      severity: "low",
      title: "Ra vào ngoài giờ",
      subject: "Trần Thị Y",
      subjectId: "NV-456",
      location: "Cổng phụ",
      camera: "CAM-003",
      violation: "Outside hours",
      description: "Nhân viên ra vào ngoài giờ làm việc quy định",
      status: "noted",
      resolvedBy: "Phòng nhân sự",
      resolvedTime: "2025-01-18 16:00:00",
      evidence: [
        {
          type: "image",
          file: "timestamp_violation_001.jpg",
          timestamp: "10:45:30",
        },
      ],
    },
  ];

  const getSeverityBadge = (severity: string) => {
    const config = {
      critical: "text-red-800 bg-red-100 border-red-300",
      high: "text-red-700 bg-red-100 border-red-300",
      medium: "text-yellow-700 bg-yellow-100 border-yellow-300",
      low: "text-blue-700 bg-blue-100 border-blue-300",
    };
    return (
      config[severity as keyof typeof config] || "text-gray-700 bg-gray-100"
    );
  };

  const getStatusBadge = (status: string) => {
    const config = {
      resolved: "text-green-700 bg-green-100",
      investigating: "text-yellow-700 bg-yellow-100",
      noted: "text-blue-700 bg-blue-100",
      dismissed: "text-gray-700 bg-gray-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      personnel: <Users className="h-4 w-4 text-blue-600" />,
      vehicle: <Truck className="h-4 w-4 text-green-600" />,
      vtts: <Package className="h-4 w-4 text-orange-600" />,
      transport: <FileText className="h-4 w-4 text-purple-600" />,
    };
    return (
      icons[type as keyof typeof icons] || (
        <AlertTriangle className="h-4 w-4 text-gray-600" />
      )
    );
  };

  const getEvidenceIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-3 w-3 text-blue-600" />;
      case "image":
        return <Camera className="h-3 w-3 text-green-600" />;
      case "document":
        return <FileText className="h-3 w-3 text-orange-600" />;
      default:
        return <Eye className="h-3 w-3 text-gray-600" />;
    }
  };

  const filteredAlerts = alertHistory.filter((alert) => {
    if (selectedTab !== "all" && alert.type !== selectedTab) return false;
    if (filterType !== "all" && alert.type !== filterType) return false;
    if (filterSeverity !== "all" && alert.severity !== filterSeverity)
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Lịch sử cảnh báo
            </h1>
            <p className="text-gray-600 mt-1">
              Tìm kiếm - Tra cứu lịch sử cảnh báo an ninh
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Làm mới
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Xuất báo cáo
            </Button>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <TrendingUp className="h-3 w-3 mr-1" />
              {alertHistory.length} bản ghi
            </Badge>
          </div>
        </div>

        {/* Search and Filter Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Search className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Tìm kiếm & Lọc cảnh báo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search by Subject */}
              <div>
                <Label htmlFor="search-subject">Tìm theo đối tượng</Label>
                <Input
                  id="search-subject"
                  placeholder="Tên, biển số, mã lệnh..."
                  className="mt-2"
                />
              </div>

              {/* Filter by Type */}
              <div>
                <Label>Loại cảnh báo</Label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả loại</SelectItem>
                    <SelectItem value="personnel">Nhân sự</SelectItem>
                    <SelectItem value="vehicle">Phương tiện</SelectItem>
                    <SelectItem value="vtts">VTTS</SelectItem>
                    <SelectItem value="transport">Vận chuyển</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Filter by Severity */}
              <div>
                <Label>Mức độ nghiêm trọng</Label>
                <Select
                  value={filterSeverity}
                  onValueChange={setFilterSeverity}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả mức độ</SelectItem>
                    <SelectItem value="critical">Nghiêm trọng</SelectItem>
                    <SelectItem value="high">Cao</SelectItem>
                    <SelectItem value="medium">Trung bình</SelectItem>
                    <SelectItem value="low">Thấp</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div>
                <Label>Khoảng thời gian</Label>
                <div className="grid grid-cols-2 gap-1 mt-2">
                  <Input type="date" className="text-xs" />
                  <Input type="date" className="text-xs" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Location Filter */}
              <div>
                <Label>Vị trí/Camera</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn vị trí" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả vị trí</SelectItem>
                    <SelectItem value="gate">Cổng chính</SelectItem>
                    <SelectItem value="production">Khu sản xuất</SelectItem>
                    <SelectItem value="warehouse">Khu kho</SelectItem>
                    <SelectItem value="weighing">Trạm cân</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status Filter */}
              <div>
                <Label>Trạng thái xử lý</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn trạng thái" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="resolved">Đã xử lý</SelectItem>
                    <SelectItem value="investigating">Đang điều tra</SelectItem>
                    <SelectItem value="noted">Đã ghi nhận</SelectItem>
                    <SelectItem value="dismissed">Đã loại bỏ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button className="w-full bg-hoa-phat-600 hover:bg-hoa-phat-700">
                  <Search className="h-4 w-4 mr-2" />
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabbed Alert Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Filter className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Danh sách cảnh báo theo loại
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">
                  Tất cả ({alertHistory.length})
                </TabsTrigger>
                <TabsTrigger value="personnel">
                  Nhân sự (
                  {alertHistory.filter((a) => a.type === "personnel").length})
                </TabsTrigger>
                <TabsTrigger value="vehicle">
                  Phương tiện (
                  {alertHistory.filter((a) => a.type === "vehicle").length})
                </TabsTrigger>
                <TabsTrigger value="vtts">
                  VTTS ({alertHistory.filter((a) => a.type === "vtts").length})
                </TabsTrigger>
                <TabsTrigger value="transport">
                  Vận chuyển (
                  {alertHistory.filter((a) => a.type === "transport").length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value={selectedTab} className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Thời gian</TableHead>
                      <TableHead>Loại</TableHead>
                      <TableHead>Mức độ</TableHead>
                      <TableHead>Tiêu đề</TableHead>
                      <TableHead>Đối tượng</TableHead>
                      <TableHead>Vị trí</TableHead>
                      <TableHead>Lý do</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Bằng chứng</TableHead>
                      <TableHead>Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAlerts.map((alert) => (
                      <TableRow key={alert.id}>
                        <TableCell className="font-mono text-sm">
                          <div>{alert.time.split(" ")[1]}</div>
                          <div className="text-xs text-gray-500">
                            {alert.time.split(" ")[0]}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getTypeIcon(alert.type)}
                            <span className="text-sm">{alert.category}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getSeverityBadge(alert.severity)}>
                            {alert.severity.toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{alert.title}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            ID: {alert.id}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{alert.subject}</div>
                          <div className="text-xs text-gray-500">
                            {alert.subjectId}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                            {alert.location}
                          </div>
                          <div className="text-xs text-gray-500">
                            {alert.camera}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm max-w-32">
                            {alert.description}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadge(alert.status)}>
                            {alert.status}
                          </Badge>
                          {alert.resolvedBy && (
                            <div className="text-xs text-gray-500 mt-1">
                              {alert.resolvedBy}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            {alert.evidence.map((evidence, index) => (
                              <Button key={index} size="sm" variant="outline">
                                {getEvidenceIcon(evidence.type)}
                              </Button>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
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
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Statistics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Thời gian xử lý TB
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">15 phút</div>
              <p className="text-xs text-blue-600 mt-1">
                -5 phút so với tuần trước
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Tỷ lệ xử lý
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">94.5%</div>
              <p className="text-xs text-green-600 mt-1">
                +2.3% so với tháng trước
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                False Alarm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-700">5.2%</div>
              <p className="text-xs text-yellow-600 mt-1">
                -1.1% so với tháng trước
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Trung bình/ngày
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">23.4</div>
              <p className="text-xs text-purple-600 mt-1">cảnh báo/ngày</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AlertHistory;
