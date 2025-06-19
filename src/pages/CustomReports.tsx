import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DatePicker } from "@/components/ui/date-picker";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Download,
  Filter,
  Calendar,
  Settings,
  Send,
  Save,
  QrCode,
  FileSpreadsheet,
  Printer,
  Mail,
  Clock,
  Users,
  Car,
  AlertTriangle,
  Package,
  BarChart3,
  PieChart,
  TrendingUp,
} from "lucide-react";

const CustomReports = () => {
  const [reportName, setReportName] = useState("");
  const [reportDescription, setReportDescription] = useState("");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState("custom");
  const [exportFormat, setExportFormat] = useState("pdf");
  const [includeCharts, setIncludeCharts] = useState(true);
  const [includeSignature, setIncludeSignature] = useState(false);
  const [autoSchedule, setAutoSchedule] = useState(false);
  const [emailRecipients, setEmailRecipients] = useState("");

  const reportModules = [
    {
      id: "personnel",
      name: "Nhân sự & Cán bộ",
      icon: Users,
      fields: ["Tổng lượt truy cập", "Sai quyền", "Sai giờ", "Hiệu suất"],
      description: "Thống kê hoạt động nhân sự",
    },
    {
      id: "vehicles",
      name: "Phương tiện",
      icon: Car,
      fields: ["Lượt ra/vào", "Cảnh báo", "Tuyến đường", "Thời gian"],
      description: "Theo dõi phương tiện ra vào",
    },
    {
      id: "alerts",
      name: "Cảnh báo",
      icon: AlertTriangle,
      fields: ["Tổng cảnh báo", "Loại cảnh báo", "Khu vực", "Mức độ"],
      description: "Phân tích cảnh báo hệ thống",
    },
    {
      id: "transport",
      name: "Vận chuyển",
      icon: Package,
      fields: ["Ticket vận chuyển", "Tuyến đường", "Trạng thái", "Thành công"],
      description: "Quản lý vận chuyển hàng hóa",
    },
    {
      id: "contractors",
      name: "Nhà thầu/Khách",
      icon: Users,
      fields: ["Đăng ký", "Lượt vào", "Cảnh báo", "Trùng lặp"],
      description: "Thống kê khách hàng",
    },
  ];

  const chartTypes = [
    { id: "bar", name: "Biểu đồ cột", icon: BarChart3 },
    { id: "pie", name: "Biểu đồ tròn", icon: PieChart },
    { id: "line", name: "Biểu đồ đường", icon: TrendingUp },
  ];

  const predefinedTemplates = [
    {
      id: "daily_summary",
      name: "Báo cáo tổng hợp hàng ngày",
      description: "Tổng quan hoạt động trong ngày",
      modules: ["personnel", "vehicles", "alerts"],
      schedule: "daily",
    },
    {
      id: "weekly_analysis",
      name: "Phân tích tuần",
      description: "Báo cáo chi tiết hoạt động tuần",
      modules: ["personnel", "vehicles", "alerts", "transport"],
      schedule: "weekly",
    },
    {
      id: "monthly_report",
      name: "Báo cáo tháng",
      description: "Tổng kết hoạt động tháng",
      modules: ["personnel", "vehicles", "alerts", "transport", "contractors"],
      schedule: "monthly",
    },
    {
      id: "security_audit",
      name: "Kiểm toán an ninh",
      description: "Báo cáo chuyên sâu về an ninh",
      modules: ["alerts", "personnel"],
      schedule: "on-demand",
    },
  ];

  const savedReports = [
    {
      id: "RPT-2024-001",
      name: "Báo cáo tuần 02/2024",
      created: "2024-01-15",
      status: "Hoàn thành",
      format: "PDF",
      size: "2.4 MB",
    },
    {
      id: "RPT-2024-002",
      name: "Phân tích cảnh báo tháng 1",
      created: "2024-01-10",
      status: "Đang xử lý",
      format: "Excel",
      size: "1.8 MB",
    },
    {
      id: "RPT-2024-003",
      name: "Tổng hợp vận chuyển Q1",
      created: "2024-01-05",
      status: "Hoàn thành",
      format: "PDF",
      size: "3.2 MB",
    },
  ];

  const handleModuleToggle = (moduleId: string) => {
    setSelectedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId],
    );
  };

  const handleTemplateSelect = (template: any) => {
    setReportName(template.name);
    setReportDescription(template.description);
    setSelectedModules(template.modules);
  };

  const generateReport = () => {
    // Mock report generation
    console.log("Generating report with:", {
      name: reportName,
      modules: selectedModules,
      dateRange,
      format: exportFormat,
      charts: includeCharts,
      signature: includeSignature,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Tùy Chỉnh Báo Cáo
            </h1>
            <p className="text-gray-600 mt-1">
              Tạo và quản lý báo cáo theo yêu cầu
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Save className="h-4 w-4 mr-2" />
              Lưu mẫu
            </Button>
            <Button
              className="bg-hoa-phat-600 hover:bg-hoa-phat-700"
              onClick={generateReport}
            >
              <FileText className="h-4 w-4 mr-2" />
              Tạo báo cáo
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="builder" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="builder">Tạo báo cáo</TabsTrigger>
            <TabsTrigger value="templates">Mẫu có sẵn</TabsTrigger>
            <TabsTrigger value="saved">Báo cáo đã lưu</TabsTrigger>
            <TabsTrigger value="schedule">Lập lịch</TabsTrigger>
          </TabsList>

          {/* Report Builder */}
          <TabsContent value="builder" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Report Configuration */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Thông Tin Báo Cáo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="reportName">Tên báo cáo</Label>
                      <Input
                        id="reportName"
                        value={reportName}
                        onChange={(e) => setReportName(e.target.value)}
                        placeholder="Nhập tên báo cáo..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="reportDescription">Mô tả</Label>
                      <Textarea
                        id="reportDescription"
                        value={reportDescription}
                        onChange={(e) => setReportDescription(e.target.value)}
                        placeholder="Mô tả nội dung báo cáo..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Filter className="h-5 w-5" />
                      Lọc Dữ Liệu
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Khoảng thời gian</Label>
                      <RadioGroup
                        value={dateRange}
                        onValueChange={setDateRange}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="today" id="today" />
                          <Label htmlFor="today">Hôm nay</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="week" id="week" />
                          <Label htmlFor="week">Tuần này</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="month" id="month" />
                          <Label htmlFor="month">Tháng này</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="custom" id="custom" />
                          <Label htmlFor="custom">Tùy chỉnh</Label>
                        </div>
                      </RadioGroup>
                      {dateRange === "custom" && (
                        <div className="flex gap-4 mt-2">
                          <div>
                            <Label>Từ ngày</Label>
                            <Input type="date" />
                          </div>
                          <div>
                            <Label>Đến ngày</Label>
                            <Input type="date" />
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chọn Module Dữ Liệu</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {reportModules.map((module) => (
                        <div
                          key={module.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedModules.includes(module.id)
                              ? "border-hoa-phat-500 bg-hoa-phat-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => handleModuleToggle(module.id)}
                        >
                          <div className="flex items-center gap-3">
                            <Checkbox
                              checked={selectedModules.includes(module.id)}
                              onChange={() => handleModuleToggle(module.id)}
                            />
                            <module.icon className="h-5 w-5 text-hoa-phat-600" />
                            <div>
                              <h4 className="font-medium">{module.name}</h4>
                              <p className="text-sm text-gray-600">
                                {module.description}
                              </p>
                            </div>
                          </div>
                          {selectedModules.includes(module.id) && (
                            <div className="mt-3 pl-8">
                              <p className="text-sm font-medium text-gray-700 mb-2">
                                Trường dữ liệu:
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {module.fields.map((field, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {field}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Report Preview & Export Options */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="h-5 w-5" />
                      Xuất Báo Cáo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Định dạng xuất</Label>
                      <Select
                        value={exportFormat}
                        onValueChange={setExportFormat}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                          <SelectItem value="word">Word (.docx)</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="charts">Bao gồm biểu đồ</Label>
                      <Switch
                        id="charts"
                        checked={includeCharts}
                        onCheckedChange={setIncludeCharts}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="signature">Chữ ký số</Label>
                      <Switch
                        id="signature"
                        checked={includeSignature}
                        onCheckedChange={setIncludeSignature}
                      />
                    </div>

                    {includeCharts && (
                      <div>
                        <Label>Loại biểu đồ</Label>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          {chartTypes.map((chart) => (
                            <Button
                              key={chart.id}
                              variant="outline"
                              size="sm"
                              className="h-auto p-2 flex flex-col items-center gap-1"
                            >
                              <chart.icon className="h-4 w-4" />
                              <span className="text-xs">{chart.name}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Xem trước</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-48">
                      <div className="text-center text-gray-500">
                        <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p>Xem trước báo cáo sẽ hiển thị ở đây</p>
                        <p className="text-sm mt-1">
                          Đã chọn {selectedModules.length} module
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Gửi Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="recipients">Người nhận</Label>
                      <Textarea
                        id="recipients"
                        value={emailRecipients}
                        onChange={(e) => setEmailRecipients(e.target.value)}
                        placeholder="Nhập email người nhận (cách nhau bằng dấu phẩy)"
                        rows={3}
                      />
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Gửi email
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Templates */}
          <TabsContent value="templates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {predefinedTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <FileText className="h-8 w-8 text-hoa-phat-600" />
                      <Badge variant="secondary">{template.schedule}</Badge>
                    </div>
                    <h3 className="font-semibold mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {template.modules.map((moduleId, index) => {
                        const module = reportModules.find(
                          (m) => m.id === moduleId,
                        );
                        return (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {module?.name}
                          </Badge>
                        );
                      })}
                    </div>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => handleTemplateSelect(template)}
                    >
                      Sử dụng mẫu
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Saved Reports */}
          <TabsContent value="saved" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Báo Cáo Đã Lưu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedReports.map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-hoa-phat-600" />
                        <div>
                          <h4 className="font-medium">{report.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>ID: {report.id}</span>
                            <span>Ngày tạo: {report.created}</span>
                            <span>Kích thước: {report.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={
                            report.status === "Hoàn thành"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {report.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Tải xuống
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Lập Lịch Báo Cáo Tự Động
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoSchedule">
                    Kích hoạt lập lịch tự động
                  </Label>
                  <Switch
                    id="autoSchedule"
                    checked={autoSchedule}
                    onCheckedChange={setAutoSchedule}
                  />
                </div>

                {autoSchedule && (
                  <div className="space-y-4 pt-4 border-t">
                    <div>
                      <Label>Tần suất</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn tần suất" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Hàng ngày</SelectItem>
                          <SelectItem value="weekly">Hàng tuần</SelectItem>
                          <SelectItem value="monthly">Hàng tháng</SelectItem>
                          <SelectItem value="quarterly">Hàng quý</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Thời gian gửi</Label>
                      <Input type="time" defaultValue="08:00" />
                    </div>

                    <div>
                      <Label>Email nhận</Label>
                      <Textarea
                        placeholder="Nhập danh sách email nhận báo cáo tự động"
                        rows={3}
                      />
                    </div>

                    <Button className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Lưu lịch báo cáo
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lịch Báo Cáo Hiện Tại</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Báo cáo hàng ngày</h4>
                      <p className="text-sm text-gray-600">
                        Mỗi ngày lúc 08:00
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Đang hoạt động
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Báo cáo tuần</h4>
                      <p className="text-sm text-gray-600">
                        Thứ 2 hàng tuần lúc 09:00
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Đang hoạt động
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomReports;
