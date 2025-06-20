import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, Truck, Navigation, MapPin, FileText } from "lucide-react";
import { useState } from "react";

const VTTSRegistration = () => {
  const [selectedVTTSInOptions, setSelectedVTTSInOptions] = useState<string[]>(
    [],
  );
  const [selectedVTTSOutOptions, setSelectedVTTSOutOptions] = useState<
    string[]
  >([]);

  const handleVTTSInChange = (value: string, checked: boolean) => {
    setSelectedVTTSInOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleVTTSOutChange = (value: string, checked: boolean) => {
    setSelectedVTTSOutOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
            ĐĂNG KÝ VTTS NHÀ THẦU/KHÁCH ONLINE
          </h1>
          <h2 className="text-lg text-hoa-phat-700 font-semibold">
            ĐỂ KIÊM DUYỆT THỦ TỤC TRƯỚC KHI MANG VTTS VÀO/RA
          </h2>
          <div className="flex items-center justify-center mt-4">
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <Navigation className="h-4 w-4 mr-2" />
              You are our partner
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Form - Left Side */}
          <div className="lg:col-span-3 space-y-6">
            {/* Driver Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Thông tin Về tài xế
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="driver-name">Tên VTTS *</Label>
                    <Input
                      id="driver-name"
                      placeholder="Nhập tên thiết bị VTTS"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vtts-serial">Mã VTTS (Mã code) *</Label>
                    <Input id="vtts-serial" placeholder="Nhập mã VTTS" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-license">Bằng lái xe *</Label>
                    <Input
                      id="driver-license"
                      placeholder="Số bằng lái xe tài xế"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-phone">
                      Số điện thoại liên hệ *
                    </Label>
                    <Input id="driver-phone" placeholder="+84" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description">Mô tả, ghi chú VTTS *</Label>
                    <Textarea
                      id="description"
                      placeholder="Mô tả chi tiết về thiết bị VTTS, ghi chú đặc biệt..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registration Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Thông tin Đăng ký
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="registration-date">Ngày đăng ký *</Label>
                    <Input id="registration-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="entry-exit-date">
                      Đến / ra thời gian *
                    </Label>
                    <Input id="entry-exit-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shift-time">Số điện thoại liên hệ *</Label>
                    <Input id="shift-time" placeholder="+84" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="work-shift">Ngày làm việc *</Label>
                    <Input id="work-shift" type="date" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="shift-description">
                      Nội dung công việc / Thành lý mang ra *
                    </Label>
                    <Textarea
                      id="shift-description"
                      placeholder="Mô tả chi tiết công việc, thiết bị mang ra, lý do sử dụng VTTS..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Thông tin bổ sung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="equipment-model">
                      Đơn vị kiểm soát vào / ra VTTS
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn đơn vị kiểm soát" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="security-1">
                          Phòng An ninh - Gate 1
                        </SelectItem>
                        <SelectItem value="security-2">
                          Phòng An ninh - Gate 2
                        </SelectItem>
                        <SelectItem value="logistics">
                          Phòng Logistics
                        </SelectItem>
                        <SelectItem value="production">
                          Phòng Sản xuất
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="authorization">
                      Cán bộ kiểm soát và ủy quyền cho bộ phận
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn cán bộ ủy quyền" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manager-1">
                          Trưởng phòng An ninh
                        </SelectItem>
                        <SelectItem value="manager-2">
                          Trưởng phòng Logistics
                        </SelectItem>
                        <SelectItem value="supervisor">
                          Giám sát hiện trường
                        </SelectItem>
                        <SelectItem value="guard">Bảo vệ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="approval-reason">
                      Đơn vị kiểm soát và ủy quyền
                    </Label>
                    <Textarea
                      id="approval-reason"
                      placeholder="Ghi rõ lý do cần sử dụng VTTS, đơn vị chấp thuận..."
                      className="min-h-[80px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vtts-type">Tình trạng VTTS *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn tình trạng" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Mới</SelectItem>
                        <SelectItem value="used">Đã sử dụng</SelectItem>
                        <SelectItem value="maintenance">Bảo trì</SelectItem>
                        <SelectItem value="damaged">Hỏng hóc</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - VTTS Registration Options */}
          <div className="space-y-6">
            {/* VTTS Entry Registration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-green-700 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Đăng ký VTTS mang vào
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="vtts-bring-in"
                    checked={selectedVTTSInOptions.includes("vtts-bring-in")}
                    onCheckedChange={(checked) =>
                      handleVTTSInChange("vtts-bring-in", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="vtts-bring-in"
                    className="text-sm leading-relaxed"
                  >
                    Đăng ký thông tin với VTTS mang vào, không mang ra
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="vtts-both-way"
                    checked={selectedVTTSInOptions.includes("vtts-both-way")}
                    onCheckedChange={(checked) =>
                      handleVTTSInChange("vtts-both-way", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="vtts-both-way"
                    className="text-sm leading-relaxed"
                  >
                    Đăng ký thông tin với VTTS mang vào, có mang ra
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* VTTS Exit Registration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-green-700 flex items-center">
                  <Truck className="h-4 w-4 mr-2" />
                  Đăng ký VTTS mang ra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="vtts-normal-out"
                    checked={selectedVTTSOutOptions.includes("vtts-normal-out")}
                    onCheckedChange={(checked) =>
                      handleVTTSOutChange("vtts-normal-out", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="vtts-normal-out"
                    className="text-sm leading-relaxed"
                  >
                    Đăng ký VTTS thông thường
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="vtts-destroy-out"
                    checked={selectedVTTSOutOptions.includes(
                      "vtts-destroy-out",
                    )}
                    onCheckedChange={(checked) =>
                      handleVTTSOutChange(
                        "vtts-destroy-out",
                        checked as boolean,
                      )
                    }
                  />
                  <Label
                    htmlFor="vtts-destroy-out"
                    className="text-sm leading-relaxed"
                  >
                    Đăng ký VTTS tháo rời
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="vtts-special-out"
                    checked={selectedVTTSOutOptions.includes(
                      "vtts-special-out",
                    )}
                    onCheckedChange={(checked) =>
                      handleVTTSOutChange(
                        "vtts-special-out",
                        checked as boolean,
                      )
                    }
                  />
                  <Label
                    htmlFor="vtts-special-out"
                    className="text-sm leading-relaxed"
                  >
                    Đăng ký VTTS mang ra khó xác định nguồn gốc
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Document Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-gray-700 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Tài liệu đính kèm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-hoa-phat-400 transition-colors">
                    <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                    <p className="text-xs text-gray-600">
                      Tải lên giấy tờ liên quan
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, PNG, JPG tối đa 10MB
                    </p>
                  </div>
                  <div className="text-xs text-gray-600">
                    <p className="font-medium mb-1">Tài liệu cần thiết:</p>
                    <ul className="space-y-1">
                      <li>• Giấy phép sử dụng VTTS</li>
                      <li>• Bằng lái xe tài xế</li>
                      <li>• Giấy ủy quyền (nếu có)</li>
                      <li>• Thông số kỹ thuật VTTS</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Submit */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="vtts-terms" />
                    <Label
                      htmlFor="vtts-terms"
                      className="text-xs text-gray-600 leading-relaxed"
                    >
                      Tôi cam kết thông tin về VTTS là chính xác và tuân thủ các
                      quy định an ninh. Tôi chịu trách nhiệm về việc sử dụng và
                      bảo quản thiết bị.
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-hoa-phat-600 hover:bg-hoa-phat-700">
                      Đăng ký
                    </Button>
                    <Button variant="outline" className="w-full">
                      Quay lại
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VTTSRegistration;
