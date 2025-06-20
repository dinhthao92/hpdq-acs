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
import { Upload, UserCheck, Building, Users, IdCard } from "lucide-react";
import { useState } from "react";

const EmployeeRegistration = () => {
  const [selectedNewEmployeeOptions, setSelectedNewEmployeeOptions] = useState<
    string[]
  >([]);
  const [selectedTransferOptions, setSelectedTransferOptions] = useState<
    string[]
  >([]);

  const handleNewEmployeeChange = (value: string, checked: boolean) => {
    setSelectedNewEmployeeOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleTransferChange = (value: string, checked: boolean) => {
    setSelectedTransferOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            ĐĂNG KÝ CÁN BỘ NHÂN VIÊN
          </h1>
          <div className="flex items-center justify-center mt-4">
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              <Building className="h-4 w-4 mr-2" />
              You are our partner
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Form - Left Side */}
          <div className="lg:col-span-3 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Thông tin Cá nhân
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Họ và tên *</Label>
                    <Input id="full-name" placeholder="Nhập họ và tên đầy đủ" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employee-id">Mã nhân viên *</Label>
                    <Input id="employee-id" placeholder="Mã nhân viên" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="id-number">Số CMND/CCCD/Passport *</Label>
                    <Input id="id-number" placeholder="Nhập số căn cước" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birth-date">Ngày sinh</Label>
                    <Input id="birth-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại liên hệ *</Label>
                    <Input id="phone" placeholder="+84" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email liên lạc</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="department">Bộ phận/Phòng ban *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn bộ phận/phòng ban" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hr">Phòng Nhân sự</SelectItem>
                        <SelectItem value="it">
                          Phòng Công nghệ thông tin
                        </SelectItem>
                        <SelectItem value="finance">Phòng Tài chính</SelectItem>
                        <SelectItem value="production">
                          Phòng Sản xuất
                        </SelectItem>
                        <SelectItem value="security">Phòng An ninh</SelectItem>
                        <SelectItem value="logistics">
                          Phòng Logistics
                        </SelectItem>
                        <SelectItem value="admin">Phòng Hành chính</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Face Recognition */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Hình ảnh Khuôn mặt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Tải ảnh khuôn mặt *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-hoa-phat-400 transition-colors">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        Click để tải ảnh hoặc kéo thả file vào đây
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG tối đa 5MB
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Hướng dẫn chụp ảnh</Label>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Chụp thẳng, nhìn thẳng vào camera</li>
                        <li>• Đầy đủ ánh sáng, không bị che mặt</li>
                        <li>• Không đeo kính, mũ hoặc khẩu trang</li>
                        <li>• Khuôn mặt chiếm 60-70% khung hình</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description/Reason */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Mô tả / Lý do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="description">
                    Lý do đăng ký / Ghi chú thêm
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Mô tả chi tiết lý do đăng ký, yêu cầu đặc biệt..."
                    className="min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Registration Options */}
          <div className="space-y-6">
            {/* New Employee Registration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-green-700 flex items-center">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Đăng ký Cán bộ nhân viên mới
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="hr-register"
                    checked={selectedNewEmployeeOptions.includes("hr-register")}
                    onCheckedChange={(checked) =>
                      handleNewEmployeeChange("hr-register", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="hr-register"
                    className="text-sm leading-relaxed"
                  >
                    HR đăng ký thông tin nhân viên mới để cấp thẻ và quyền ACS
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="vehicle-register"
                    checked={selectedNewEmployeeOptions.includes(
                      "vehicle-register",
                    )}
                    onCheckedChange={(checked) =>
                      handleNewEmployeeChange(
                        "vehicle-register",
                        checked as boolean,
                      )
                    }
                  />
                  <Label
                    htmlFor="vehicle-register"
                    className="text-sm leading-relaxed"
                  >
                    Đăng ký thông tin xe có cùng nếu có
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Transfer Employee Registration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-green-700 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Đăng ký Cán bộ nhân viên có nhu cầu đi lại giữa các bộ phận
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="card-reissue"
                    checked={selectedTransferOptions.includes("card-reissue")}
                    onCheckedChange={(checked) =>
                      handleTransferChange("card-reissue", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="card-reissue"
                    className="text-sm leading-relaxed"
                  >
                    Đăng ký cấp phát lại thẻ
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="acs-access"
                    checked={selectedTransferOptions.includes("acs-access")}
                    onCheckedChange={(checked) =>
                      handleTransferChange("acs-access", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="acs-access"
                    className="text-sm leading-relaxed"
                  >
                    Đăng ký cấp quyền ACS theo nhu cầu đi lại giữa các bộ phận
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Submit */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="employee-terms" />
                    <Label
                      htmlFor="employee-terms"
                      className="text-xs text-gray-600 leading-relaxed"
                    >
                      Tôi xác nhận thông tin nhân viên được cung cấp là chính
                      xác và đồng ý với các quy định an ninh của công ty. Tôi
                      cam kết sử dụng thẻ và quyền truy cập đúng mục đích.
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

            {/* Quick Actions */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-blue-700 flex items-center">
                  <IdCard className="h-4 w-4 mr-2" />
                  Thao tác nhanh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start"
                >
                  Danh sách nhân viên đã đăng ký
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start"
                >
                  Tra cứu thẻ nhân viên
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start"
                >
                  Báo cáo quyền ACS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeRegistration;
