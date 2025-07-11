import { User, Bell, Settings, LogOut } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("userSession");

    // Navigate to login page
    navigate("/login");
  };

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
          <div className="hidden md:block text-lg font-medium" />
        </div>

        {/* Navigation and user info */}
        <div className="flex items-center space-x-6">
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button className="hover:text-blue-200 transition-colors">
                Đăng ký ra vào
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="/registration"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Nhà thầu/Khách
                  </a>
                  <a
                    href="/employee-registration"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Cán bộ nhân viên
                  </a>
                  <a
                    href="/vtts-registration"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    VTTS
                  </a>
                </div>
              </div>
            </div>
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
                    Lệnh xuất bán & Tickets
                  </a>
                  <a
                    href="/acs-access-control"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Phân quyền ACS
                  </a>
                  <a
                    href="/gate-monitoring"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Giám sát cổng
                  </a>
                  <a
                    href="/weighing-station"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Trạm cân
                  </a>
                  <a
                    href="/warehouse-delivery"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Giao/nhận kho
                  </a>
                  <a
                    href="/final-reconciliation"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Đối soát & Xác nhận
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
            <div className="relative group">
              <button className="hover:text-blue-200 transition-colors">
                Tìm kiếm & Truy vết
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="/person-search"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Nhà thầu/Khách/CBNV
                  </a>
                  <a
                    href="/employee-search"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Cán bộ nhân viên
                  </a>
                  <a
                    href="/vehicle-search"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Phương tiện
                  </a>
                  <a
                    href="/asset-search"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    VTTS
                  </a>
                  <a
                    href="/order-tracking"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Xuất bán thành phẩm
                  </a>
                  <a
                    href="/smart-map"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Bản đồ thông minh
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-blue-200 transition-colors">
                Thông báo cảnh báo
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="/alert-dashboard"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    C��nh báo thời gian thực
                  </a>
                  <a
                    href="/alert-history"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Lịch sử cảnh báo
                  </a>
                  <a
                    href="/alert-detail"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Chi tiết cảnh báo
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-blue-200 transition-colors">
                Thống kê & Báo cáo
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="/reports-overview"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Dashboard tổng quan
                  </a>
                  <a
                    href="/object-reports"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Báo cáo theo đối tượng
                  </a>
                  <a
                    href="/alert-reports"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Báo cáo cảnh báo
                  </a>
                  <a
                    href="/custom-reports"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Tùy chỉnh báo cáo
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-blue-200 transition-colors">
                Quản trị hệ thống
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="/user-management"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Quản lý người dùng
                  </a>
                  <a
                    href="/permission-management"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Phân quyền hệ thống
                  </a>
                  <a
                    href="/blacklist-management"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Danh sách đen
                  </a>
                  <a
                    href="/vehicle-card-management"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Quản lý thẻ xe
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* User section */}
          <div className="flex items-center space-x-3 text-sm">
            <span className="hidden md:inline">
              Xin chào, Nguyễn Văn A (Admin)
            </span>
            <button
              onClick={handleLogout}
              className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded text-xs transition-colors flex items-center gap-1"
            >
              <LogOut className="h-3 w-3" />
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
