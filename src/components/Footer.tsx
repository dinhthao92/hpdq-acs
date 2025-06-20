import React from "react";
import { Building, Copyright, Code, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-hoa-phat-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">HP</span>
              </div>
              <span className="font-bold text-lg">HÒA PHÁT</span>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              CTCP Thép Hòa Phát Dung Quất
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Building className="h-4 w-4" />
              <span>
                Khu kinh tế Dung Quất, xã Bình Đông, huyện Bình Sơn, tỉnh Quảng
                Ngãi
              </span>
            </div>
          </div>

          {/* System Info */}
          <div>
            <h3 className="font-semibold mb-4">Hệ thống quản lý</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Kiểm soát ra vào (ACS)</li>
              <li>• Quản lý phương tiện</li>
              <li>• Hệ thống cảnh báo</li>
              <li>• Báo cáo và thống kê</li>
              <li>• Quản trị hệ thống</li>
            </ul>
          </div>

          {/* Design Credit */}
          <div>
            <h3 className="font-semibold mb-4">Thông tin phát triển</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Code className="h-4 w-4 text-blue-400" />
                <span>
                  Design by{" "}
                  <span className="font-semibold text-blue-400">CMC TS</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="h-4 w-4 text-green-400" />
                <span>Phát hành năm 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Copyright className="h-4 w-4" />
                <span>All rights reserved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 CTCP Thép Hòa Phát Dung Quất. Hệ thống quản lý an ninh và
              kiểm soát truy cập.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Version 1.0.0</span>
              <span>•</span>
              <span>Build 2025.01</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
