import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  User,
  Lock,
  Shield,
  Building,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to registration page after successful login
      navigate("/registration");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-hoa-phat-50 to-hoa-phat-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Company Information */}
        <div className="text-center lg:text-left">
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/assets/e26d8816248742eb95066a0839e5f198/image-be0400?format=webp&width=800"
              alt="Hòa Phát Logo"
              className="h-24 mx-auto lg:mx-0 mb-6"
            />
            <h1 className="text-4xl font-bold text-hoa-phat-900 mb-4">
              HỆ THỐNG QUẢN LÝ AN NINH
            </h1>
            <h2 className="text-2xl font-semibold text-hoa-phat-700 mb-6">
              CTCP Thép Hòa Phát Dung Quất
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hệ thống quản lý truy cập và an ninh thông minh cho nhà máy
            </p>
          </div>

          {/* Company Details */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Building className="h-5 w-5 text-hoa-phat-600" />
              Thông tin công ty
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-hoa-phat-500" />
                <span>Khu Công nghiệp Dung Quất, Hải Phòng</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-hoa-phat-500" />
                <span>Hotline: 1800-xxxx</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-hoa-phat-500" />
                <span>support@hoaphat.com.vn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 w-16 h-16 bg-hoa-phat-600 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Đăng nhập hệ thống
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Vui lòng nhập thông tin để truy cập
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Tên đăng nhập</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Nhập tên đăng nhập"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Mật khẩu</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Nhập mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={setRememberMe}
                    />
                    <Label
                      htmlFor="remember"
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      Ghi nhớ đăng nhập
                    </Label>
                  </div>
                  <Button
                    variant="link"
                    className="text-sm text-hoa-phat-600 hover:text-hoa-phat-700 p-0"
                  >
                    Quên mật khẩu?
                  </Button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-hoa-phat-600 hover:bg-hoa-phat-700 h-12 text-base font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Đang đăng nhập...
                    </div>
                  ) : (
                    "Đăng nhập"
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  Cần hỗ trợ? Liên hệ{" "}
                  <Button
                    variant="link"
                    className="text-hoa-phat-600 hover:text-hoa-phat-700 p-0 h-auto text-sm"
                  >
                    Phòng IT
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-yellow-800 mb-1">
                  Lưu ý bảo mật
                </h4>
                <p className="text-sm text-yellow-700">
                  Vui lòng không chia sẻ thông tin đăng nhập với người khác. Hệ
                  thống sẽ tự động đăng xuất sau 30 phút không hoạt động.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
