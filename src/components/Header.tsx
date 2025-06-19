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
            <a
              href="/registration"
              className={`hover:text-blue-200 transition-colors ${
                location.pathname === "/registration"
                  ? "text-blue-200 font-medium border-b-2 border-blue-200 pb-1"
                  : ""
              }`}
            >
              Đăng ký ra vào
            </a>
            <div className="relative group">
              <button className="hover:text-blue-200 transition-colors">
                Quản lý VTTS
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="/sales-order-tickets"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    1. Lệnh xuất bán & Tickets
                  </a>
                  <a
                    href="/acs-access-control"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    2. Phân quyền ACS
                  </a>
                  <a
                    href="/gate-monitoring"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    3. Giám sát cổng
                  </a>
                  <a
                    href="/weighing-station"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    4. Trạm cân
                  </a>
                  <a
                    href="/warehouse-delivery"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    5. Giao/nhận kho
                  </a>
                  <a
                    href="/final-reconciliation"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    6. Đối soát & Xác nhận
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-blue-200 transition-colors">
                Kế hoạch vận chuyển
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="/transportation-planning"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Quản lý kế hoạch
                  </a>
                  <a
                    href="/create-transport-plan"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Lập kế hoạch mới
                  </a>
                  <a
                    href="/warehouse-schedule"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Lịch trình kho bãi
                  </a>
                </div>
              </div>
            </div>
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
            <a
              href="/person-search"
              className={`py-3 px-1 text-sm whitespace-nowrap hover:text-blue-200 transition-colors ${
                location.pathname === "/person-search"
                  ? "text-blue-200 border-b-2 border-blue-200 font-medium"
                  : ""
              }`}
            >
              Nhà thầu/Khách/CBNV
            </a>
            <a
              href="/employee-registration"
              className={`py-3 px-1 text-sm whitespace-nowrap hover:text-blue-200 transition-colors ${
                location.pathname === "/employee-registration"
                  ? "text-blue-200 border-b-2 border-blue-200 font-medium"
                  : ""
              }`}
            >
              Cán bộ nhân viên
            </a>
            <a
              href="/vehicle-search"
              className={`py-3 px-1 text-sm whitespace-nowrap hover:text-blue-200 transition-colors ${
                location.pathname === "/vehicle-search"
                  ? "text-blue-200 border-b-2 border-blue-200 font-medium"
                  : ""
              }`}
            >
              Phương tiện
            </a>
            <a
              href="/vtts-registration"
              className={`py-3 px-1 text-sm whitespace-nowrap hover:text-blue-200 transition-colors ${
                location.pathname === "/vtts-registration"
                  ? "text-blue-200 border-b-2 border-blue-200 font-medium"
                  : ""
              }`}
            >
              VTTS
            </a>
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
