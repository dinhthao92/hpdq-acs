import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  Clock,
  MapPin,
  Camera,
  User,
  Eye,
  Play,
  Download,
  Share,
  Edit,
  CheckCircle,
  XCircle,
  Phone,
  RadioIcon as Radio,
  ArrowLeft,
  Maximize,
  Volume2,
  FileText,
  Calendar,
  Shield,
} from "lucide-react";
import { useState } from "react";

const AlertDetail = () => {
  const [alertStatus, setAlertStatus] = useState("investigating");
  const [notes, setNotes] = useState("");

  const alertDetail = {
    id: "RT-001",
    type: "personnel",
    severity: "high",
    time: "2025-01-18 14:35:20",
    title: "Người thuộc danh sách hạn chế",
    subject: {
      name: "Nguyễn Văn X",
      id: "NV-123",
      department: "Bộ phận hành chính",
      position: "Nhân viên văn phòng",
      photo: "employee_photo.jpg",
    },
    location: {
      area: "Khu sản xuất",
      zone: "Dây chuyền 2",
      camera: "CAM-008",
      coordinates: "21.0285°N, 105.8542°E",
    },
    violation: {
      type: "Unauthorized access",
      description:
        "Nhân viên bộ phận hành chính vào khu sản xuất không được phép",
      accessLevel: "Level 1 - Văn phòng",
      requiredLevel: "Level 3 - Sản xuất",
      riskLevel: "Cao",
    },
    timeline: [
      {
        time: "14:35:20",
        action: "Phát hiện vi phạm",
        details: "Camera CAM-008 nhận diện khuôn mặt trong khu vực hạn chế",
        actor: "Hệ thống AI",
        confidence: 95,
      },
      {
        time: "14:35:25",
        action: "Cảnh báo tự động",
        details: "Gửi alert đến IOC và chốt bảo vệ gần nhất",
        actor: "Hệ thống",
        confidence: 100,
      },
      {
        time: "14:36:10",
        action: "Bảo vệ phản hồi",
        details: "Bảo vệ trạm 2 xác nhận nhận được cảnh báo",
        actor: "Trần Văn B (Bảo vệ)",
        confidence: 100,
      },
      {
        time: "14:37:30",
        action: "Tiếp cận đối tượng",
        details: "Bảo vệ đến vị trí và yêu cầu xuất trình giấy tờ",
        actor: "Trần Văn B (Bảo vệ)",
        confidence: 100,
      },
      {
        time: "14:40:15",
        action: "Đang xử lý",
        details: "Kiểm tra quyền truy cập và hướng dẫn rời khỏi khu vực",
        actor: "Trần Văn B (Bảo vệ)",
        confidence: 100,
      },
    ],
    evidence: [
      {
        type: "image",
        file: "face_detection_001.jpg",
        timestamp: "14:35:20",
        description: "Ảnh nhận diện khuôn mặt",
        size: "2.3 MB",
        camera: "CAM-008",
      },
      {
        type: "video",
        file: "access_violation_001.mp4",
        timestamp: "14:35:15-14:40:30",
        description: "Video toàn bộ sự việc",
        size: "45.7 MB",
        camera: "CAM-008",
      },
      {
        type: "image",
        file: "area_overview_001.jpg",
        timestamp: "14:35:20",
        description: "Ảnh tổng quan khu vực vi phạm",
        size: "1.8 MB",
        camera: "CAM-009",
      },
      {
        type: "document",
        file: "access_log_report.pdf",
        timestamp: "14:35:20",
        description: "Báo cáo log truy cập",
        size: "0.5 MB",
        camera: "SYSTEM",
      },
    ],
    response: {
      status: "investigating",
      assignedTo: "Trần Văn B (Bảo vệ)",
      priority: "High",
      estimatedResolution: "15 phút",
      actions: [
        "Xác thực danh tính",
        "Kiểm tra quyền truy cập",
        "Hướng dẫn rời khu vực",
        "Báo cáo cấp trên",
      ],
    },
  };

  const getSeverityBadge = (severity: string) => {
    const config = {
      critical: {
        className: "text-red-800 bg-red-100 border-red-300 animate-pulse",
        icon: <AlertTriangle className="h-3 w-3 mr-1" />,
      },
      high: {
        className: "text-red-700 bg-red-100 border-red-300",
        icon: <AlertTriangle className="h-3 w-3 mr-1" />,
      },
      medium: {
        className: "text-yellow-700 bg-yellow-100 border-yellow-300",
        icon: <Clock className="h-3 w-3 mr-1" />,
      },
      low: {
        className: "text-blue-700 bg-blue-100 border-blue-300",
        icon: <CheckCircle className="h-3 w-3 mr-1" />,
      },
    };
    const item = config[severity as keyof typeof config];
    return (
      <Badge className={item.className}>
        {item.icon}
        {severity.toUpperCase()}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const config = {
      active: "text-red-700 bg-red-100",
      investigating: "text-yellow-700 bg-yellow-100",
      resolved: "text-green-700 bg-green-100",
      dismissed: "text-gray-700 bg-gray-100",
    };
    return config[status as keyof typeof config] || "text-gray-700 bg-gray-100";
  };

  const getEvidenceIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4 text-blue-600" />;
      case "image":
        return <Camera className="h-4 w-4 text-green-600" />;
      case "document":
        return <FileText className="h-4 w-4 text-orange-600" />;
      default:
        return <Eye className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Chi tiết cảnh báo #{alertDetail.id}
              </h1>
              <p className="text-gray-600 mt-1">
                {alertDetail.title} - {alertDetail.time}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Chia sẻ
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Xuất báo cáo
            </Button>
            {getSeverityBadge(alertDetail.severity)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alert Overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Thông tin tổng quan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Thông tin cảnh báo
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">ID cảnh báo:</span>
                      <span className="font-mono font-medium">
                        {alertDetail.id}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loại vi phạm:</span>
                      <span className="font-medium">
                        {alertDetail.violation.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mức độ rủi ro:</span>
                      <Badge className="text-red-700 bg-red-100">
                        {alertDetail.violation.riskLevel}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Thời gian phát hiện:
                      </span>
                      <span className="font-mono">{alertDetail.time}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Thông tin đối tượng
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Họ tên:</span>
                      <span className="font-medium">
                        {alertDetail.subject.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mã nhân viên:</span>
                      <span className="font-mono">
                        {alertDetail.subject.id}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bộ phận:</span>
                      <span className="font-medium">
                        {alertDetail.subject.department}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chức vụ:</span>
                      <span className="font-medium">
                        {alertDetail.subject.position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Violation Details */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Chi tiết vi phạm
                </h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-red-800 mb-3">
                    {alertDetail.violation.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-red-700">Quyền hiện tại:</span>
                      <span className="ml-2 font-medium">
                        {alertDetail.violation.accessLevel}
                      </span>
                    </div>
                    <div>
                      <span className="text-red-700">Quyền yêu cầu:</span>
                      <span className="ml-2 font-medium">
                        {alertDetail.violation.requiredLevel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Thông tin vị trí
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-medium">
                        {alertDetail.location.area} -{" "}
                        {alertDetail.location.zone}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Camera className="h-4 w-4 mr-2 text-gray-400" />
                      <span>Camera: {alertDetail.location.camera}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    <div>Tọa độ: {alertDetail.location.coordinates}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold">
                <Shield className="h-5 w-5 mr-2 text-hoa-phat-600" />
                Thao tác xử lý
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Status */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Trạng thái hiện tại
                </h4>
                <div className="space-y-3">
                  <Badge
                    className={getStatusBadge(alertDetail.response.status)}
                  >
                    {alertDetail.response.status}
                  </Badge>
                  <div className="text-sm">
                    <div className="mb-2">
                      <span className="text-gray-600">Được giao cho:</span>
                      <span className="ml-2 font-medium">
                        {alertDetail.response.assignedTo}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-gray-600">Ưu tiên:</span>
                      <span className="ml-2 font-medium">
                        {alertDetail.response.priority}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Dự kiến giải quyết:</span>
                      <span className="ml-2 font-medium">
                        {alertDetail.response.estimatedResolution}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Actions */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Thao tác khẩn cấp
                </h4>
                <div className="space-y-2">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Gọi IOC Center
                  </Button>
                  <Button variant="outline" className="w-full text-orange-600">
                    <Radio className="h-4 w-4 mr-2" />
                    Alert bảo vệ gần nhất
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Volume2 className="h-4 w-4 mr-2" />
                    Phát loa cảnh báo
                  </Button>
                </div>
              </div>

              {/* Action Checklist */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Checklist xử lý
                </h4>
                <div className="space-y-2">
                  {alertDetail.response.actions.map((action, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Update */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Cập nhật trạng thái
                </h4>
                <div className="space-y-3">
                  <select
                    className="w-full p-2 border rounded"
                    value={alertStatus}
                    onChange={(e) => setAlertStatus(e.target.value)}
                  >
                    <option value="investigating">Đang điều tra</option>
                    <option value="resolved">Đã giải quyết</option>
                    <option value="dismissed">Loại bỏ</option>
                    <option value="escalated">Báo cáo cấp trên</option>
                  </select>
                  <Textarea
                    placeholder="Ghi chú xử lý..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-20"
                  />
                  <Button className="w-full bg-hoa-phat-600 hover:bg-hoa-phat-700">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Cập nhật trạng thái
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Clock className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Timeline xử lý
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertDetail.timeline.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sm">{event.action}</div>
                      <div className="text-xs text-gray-500">{event.time}</div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {event.details}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">
                        Thực hiện bởi: {event.actor}
                      </span>
                      {event.confidence < 100 && (
                        <span className="text-xs text-gray-500">
                          Độ tin cậy: {event.confidence}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Evidence Gallery */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Camera className="h-5 w-5 mr-2 text-hoa-phat-600" />
              Bằng chứng & Tài liệu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {alertDetail.evidence.map((evidence, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-3">
                    {getEvidenceIcon(evidence.type)}
                    <span className="text-xs text-gray-500">
                      {evidence.size}
                    </span>
                  </div>

                  {evidence.type === "image" && (
                    <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center mb-3">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </div>
                  )}

                  {evidence.type === "video" && (
                    <div className="bg-gray-900 rounded-lg h-32 flex items-center justify-center mb-3">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  )}

                  {evidence.type === "document" && (
                    <div className="bg-orange-50 rounded-lg h-32 flex items-center justify-center mb-3">
                      <FileText className="h-8 w-8 text-orange-600" />
                    </div>
                  )}

                  <div className="space-y-1">
                    <div className="font-medium text-sm">
                      {evidence.description}
                    </div>
                    <div className="text-xs text-gray-500">
                      <div>{evidence.timestamp}</div>
                      <div>{evidence.camera}</div>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      Xem
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Maximize className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AlertDetail;
