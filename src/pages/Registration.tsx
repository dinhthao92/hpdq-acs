import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Upload, UserCheck, Building, FileText } from "lucide-react";
import { useState } from "react";

const Registration = () => {
  const [selectedRegistrationType, setSelectedRegistrationType] = useState<
    string[]
  >([]);
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([]);
  const [selectedInfoTypes, setSelectedInfoTypes] = useState<string[]>([]);

  const handleRegistrationTypeChange = (value: string, checked: boolean) => {
    setSelectedRegistrationType((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleProcedureChange = (value: string, checked: boolean) => {
    setSelectedProcedures((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleInfoTypeChange = (value: string, checked: boolean) => {
    setSelectedInfoTypes((prev) =>
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
            ĐĂNG KÝ THÔNG TIN NHÀ THẦU/KHÁCH ONLINE
          </h1>
          <h2 className="text-lg text-hoa-phat-700 font-semibold">
            KIÊM DUYỆT THỦ TỤC TRƯỚC KHI VÀO CÔNG AN NINH
          </h2>
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
                  <div className="space-y-2">
                    <Label htmlFor="position">Chức vụ</Label>
                    <Input id="position" placeholder="Vị trí công việc" />
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

            {/* Vehicle Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Thông tin Phương tiện (Nếu có)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="license-plate">Biển kiểm soát</Label>
                    <Input id="license-plate" placeholder="VD: 29A-12345" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-type">Loại phương tiện</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại xe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Xe ô tô</SelectItem>
                        <SelectItem value="motorbike">Xe máy</SelectItem>
                        <SelectItem value="truck">Xe tải</SelectItem>
                        <SelectItem value="other">Khác</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-brand">Mẫu xe</Label>
                    <Input
                      id="vehicle-brand"
                      placeholder="VD: Toyota, Honda..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-color">Màu sắc</Label>
                    <Input id="vehicle-color" placeholder="Màu xe" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visit Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Thông tin Thời gian ra vào
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="entry-date">Ngày dự định *</Label>
                    <Input id="entry-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="visit-purpose">Mục đích *</Label>
                    <Textarea
                      id="visit-purpose"
                      placeholder="Mô tả mục đích đến thăm..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Registration Options */}
          <div className="space-y-6">
            {/* Registration Types */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-green-700 flex items-center">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Đăng ký theo đối tượng đăng ký
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="contractor"
                    checked={selectedRegistrationType.includes("contractor")}
                    onCheckedChange={(checked) =>
                      handleRegistrationTypeChange(
                        "contractor",
                        checked as boolean,
                      )
                    }
                  />
                  <Label htmlFor="contractor" className="text-sm">
                    NV Nhà thầu
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="customer"
                    checked={selectedRegistrationType.includes("customer")}
                    onCheckedChange={(checked) =>
                      handleRegistrationTypeChange(
                        "customer",
                        checked as boolean,
                      )
                    }
                  />
                  <Label htmlFor="customer" className="text-sm">
                    Khách
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Procedure Types */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-green-700 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Với các thủ tục đăng ký
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="daily-register"
                    checked={selectedProcedures.includes("daily")}
                    onCheckedChange={(checked) =>
                      handleProcedureChange("daily", checked as boolean)
                    }
                  />
                  <Label htmlFor="daily-register" className="text-sm">
                    Đăng ký ra vào đài ngày
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="short-term"
                    checked={selectedProcedures.includes("short-term")}
                    onCheckedChange={(checked) =>
                      handleProcedureChange("short-term", checked as boolean)
                    }
                  />
                  <Label htmlFor="short-term" className="text-sm">
                    Đăng ký ra vào ngắn ngày
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Information Types */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-green-700 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Với các thông tin đăng ký
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="personal-info"
                    checked={selectedInfoTypes.includes("personal")}
                    onCheckedChange={(checked) =>
                      handleInfoTypeChange("personal", checked as boolean)
                    }
                  />
                  <Label htmlFor="personal-info" className="text-sm">
                    Thông tin cá nhân
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="face-info"
                    checked={selectedInfoTypes.includes("face")}
                    onCheckedChange={(checked) =>
                      handleInfoTypeChange("face", checked as boolean)
                    }
                  />
                  <Label htmlFor="face-info" className="text-sm">
                    Hình ảnh khuôn mặt
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vehicle-info"
                    checked={selectedInfoTypes.includes("vehicle")}
                    onCheckedChange={(checked) =>
                      handleInfoTypeChange("vehicle", checked as boolean)
                    }
                  />
                  <Label htmlFor="vehicle-info" className="text-sm">
                    Thông tin phương tiện
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Submit */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <Label
                      htmlFor="terms"
                      className="text-xs text-gray-600 leading-relaxed"
                    >
                      Tôi đồng ý với các điều khoản và chính sách bảo mật. Tôi
                      cam kết thông tin cung cấp là chính xác và chịu trách
                      nhiệm về tính xác thực.
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
    </div>
  );
};

export default Registration;
