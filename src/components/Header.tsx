import { User, Bell, Settings, LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-hoa-phat-700 text-white">
      {/* Main header */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo and brand */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-hoa-phat-700 font-bold text-sm">HP</span>
            </div>
            <span className="font-bold text-lg">HÒA PHÁT</span>
          </div>
          <div className="hidden md:block text-lg font-medium">
            Module Tìm kiếm & Truy vết
          </div>
        </div>

        {/* Navigation and user info */}
        <div className="flex items-center space-x-6">
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a
              href="/dashboard"
              className={`hover:text-blue-200 transition-colors ${
                location.pathname === "/dashboard"
                  ? "text-blue-200 font-medium border-b-2 border-blue-200 pb-1"
                  : ""
              }`}
            >
              Dashboard
            </a>
            <a
              href="/"
              className={`hover:text-blue-200 transition-colors ${
                location.pathname === "/"
                  ? "text-blue-200 font-medium border-b-2 border-blue-200 pb-1"
                  : ""
              }`}
            >
              Tìm kiếm & Truy vết
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Báo cáo
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Cài đặt
            </a>
          </nav>

          {/* User section */}
          <div className="flex items-center space-x-3 text-sm">
            <span className="hidden md:inline">
              Xin chào, Nguyễn Văn A (Admin)
            </span>
            <button className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded text-xs transition-colors">
              Đăng xuất
            </button>
          </div>
        </div>
      </div>

      {/* Secondary navigation tabs */}
      <div className="border-t border-hoa-phat-600">
        <div className="px-6">
          <nav className="flex space-x-8 overflow-x-auto">
            <button className="py-3 px-1 text-sm whitespace-nowrap hover:text-blue-200 transition-colors">
              Nhà thầu/Khách/CBNV
            </button>
            <button className="py-3 px-1 text-sm whitespace-nowrap text-blue-200 border-b-2 border-blue-200 font-medium">
              Phương tiện
            </button>
            <button className="py-3 px-1 text-sm whitespace-nowrap hover:text-blue-200 transition-colors">
              VTTS
            </button>
            <button className="py-3 px-1 text-sm whitespace-nowrap hover:text-blue-200 transition-colors">
              Xuất bản thành phẩm
            </button>
            <button className="py-3 px-1 text-sm whitespace-nowrap hover:text-blue-200 transition-colors">
              Kế hoạch vận chuyển
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
