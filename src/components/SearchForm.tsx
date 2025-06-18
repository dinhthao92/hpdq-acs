import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, CalendarIcon } from "lucide-react";
import { useState } from "react";

const SearchForm = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Tìm kiếm & Truy vết Phương tiện
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* License plate number */}
        <div className="space-y-2">
          <Label
            htmlFor="license-plate"
            className="text-sm font-medium text-gray-700"
          >
            Biển số xe:
          </Label>
          <Input
            id="license-plate"
            placeholder="Nhập biển số xe (VD: 29A-12345)"
            className="w-full"
          />
        </div>

        {/* From date */}
        <div className="space-y-2">
          <Label
            htmlFor="from-date"
            className="text-sm font-medium text-gray-700"
          >
            Từ ngày:
          </Label>
          <div className="relative">
            <Input
              id="from-date"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* To date */}
        <div className="space-y-2">
          <Label
            htmlFor="to-date"
            className="text-sm font-medium text-gray-700"
          >
            Đến ngày:
          </Label>
          <div className="relative">
            <Input
              id="to-date"
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Vehicle model */}
        <div className="space-y-2">
          <Label
            htmlFor="vehicle-model"
            className="text-sm font-medium text-gray-700"
          >
            Mẫu phương tiện:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="-- Chọn --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="truck">Xe tải</SelectItem>
              <SelectItem value="car">Xe con</SelectItem>
              <SelectItem value="motorbike">Xe máy</SelectItem>
              <SelectItem value="bus">Xe khách</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* License plate color */}
        <div className="space-y-2">
          <Label
            htmlFor="plate-color"
            className="text-sm font-medium text-gray-700"
          >
            Màu biển số:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="-- Chọn --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="white">Trắng</SelectItem>
              <SelectItem value="yellow">Vàng</SelectItem>
              <SelectItem value="blue">Xanh</SelectItem>
              <SelectItem value="red">Đỏ</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Vehicle type */}
        <div className="space-y-2">
          <Label
            htmlFor="vehicle-type"
            className="text-sm font-medium text-gray-700"
          >
            Loại phương tiện:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="-- Chọn --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Cá nhân</SelectItem>
              <SelectItem value="commercial">Thương mại</SelectItem>
              <SelectItem value="government">Công quyền</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Vehicle brand */}
        <div className="space-y-2 md:col-span-2 lg:col-span-1">
          <Label
            htmlFor="vehicle-brand"
            className="text-sm font-medium text-gray-700"
          >
            Nhãn hiệu xe:
          </Label>
          <Input
            id="vehicle-brand"
            placeholder="Ví dụ: Hino, Ford..."
            className="w-full"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-end space-x-3 mt-6">
        <Button variant="outline" className="px-6">
          Reset
        </Button>
        <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700 text-white px-6">
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
