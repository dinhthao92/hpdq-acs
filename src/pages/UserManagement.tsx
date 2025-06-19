import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Edit,
  Trash2,
  RotateCcw,
  Shield,
  Building,
  Phone,
  Mail,
  Calendar,
  Key,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Mock data for staff users
  const staffUsers = [
    {
      id: "USR-001",
      name: "Nguyễn Văn An",
      email: "an.nguyen@hoaphat.com",
      department: "Sản xuất",
      position: "Trưởng ca",
      phone: "0912345678",
      status: "active",
      lastLogin: "2024-01-15 08:30",
      role: "Vận hành",
      createdDate: "2023-06-15",
    },
    {
      id: "USR-002",
      name: "Trần Thị Bình",
      email: "binh.tran@hoaphat.com",
      department: "Kỹ thuật",
      position: "Kỹ sư",
      phone: "0912345679",
      status: "active",
      lastLogin: "2024-01-15 09:15",
      role: "Kỹ thuật",
      createdDate: "2023-08-20",
    },
    {
      id: "USR-003",
      name: "Lê Văn Cường",
      email: "cuong.le@hoaphat.com",
      department: "An ninh",
      position: "Bảo vệ",
      phone: "0912345680",
      status: "suspended",
      lastLogin: "2024-01-10 18:45",
      role: "An ninh",
      createdDate: "2023-03-10",
    },
  ];

  // Mock data for contractor users
  const contractorUsers = [
    {
      id: "CTR-001",
      name: "Công ty TNHH ABC",
      contact: "Phạm Văn Đông",
      email: "contact@abc.com",
      phone: "0987654321",
      status: "active",
      lastLogin: "2024-01-14 16:20",
      role: "Nhà thầu",
      contractEnd: "2024-12-31",
      createdDate: "2023-09-01",
    },
    {
      id: "CTR-002",
      name: "Công ty Cổ phần XYZ",
      contact: "Hoàng Thị Mai",
      email: "info@xyz.com",
      phone: "0987654322",
      status: "pending",
      lastLogin: "Chưa đăng nhập",
      role: "Đối tác",
      contractEnd: "2024-06-30",
      createdDate: "2024-01-10",
    },
  ];

  const departments = [
    "Sản xuất",
    "Kỹ thuật",
    "An ninh",
    "Hành chính",
    "Kho vận",
    "Tài chính",
  ];

  const roles = [
    { id: "admin", name: "Quản trị viên", color: "red" },
    { id: "operator", name: "Vận hành", color: "blue" },
    { id: "technical", name: "Kỹ thuật", color: "green" },
    { id: "security", name: "An ninh", color: "orange" },
    { id: "contractor", name: "Nhà thầu", color: "purple" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Hoạt động
          </Badge>
        );
      case "suspended":
        return (
          <Badge className="bg-red-100 text-red-800">
            <XCircle className="h-3 w-3 mr-1" />
            Tạm khóa
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Chờ duyệt
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-100 text-gray-800">Không xác định</Badge>
        );
    }
  };

  const getRoleBadge = (role: string) => {
    const roleInfo = roles.find((r) => r.name === role);
    if (!roleInfo) return <Badge>{role}</Badge>;

    const colorClass = {
      red: "bg-red-100 text-red-800",
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      orange: "bg-orange-100 text-orange-800",
      purple: "bg-purple-100 text-purple-800",
    }[roleInfo.color];

    return <Badge className={colorClass}>{role}</Badge>;
  };

  const UserForm = ({ user, onClose }: { user?: any; onClose: () => void }) => {
    const [formData, setFormData] = useState({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      department: user?.department || "",
      position: user?.position || "",
      role: user?.role || "",
      status: user?.status || "active",
    });

    return (
      <div className="space-y-4 max-h-96 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Họ và tên *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Nhập họ tên..."
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="email@hoaphat.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="0912345678"
            />
          </div>
          <div>
            <Label htmlFor="department">Bộ phận</Label>
            <Select
              value={formData.department}
              onValueChange={(value) =>
                setFormData({ ...formData, department: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn bộ phận" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="position">Chức vụ</Label>
            <Input
              id="position"
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
              placeholder="Nhập chức vụ..."
            />
          </div>
          <div>
            <Label htmlFor="role">Vai trò hệ thống</Label>
            <Select
              value={formData.role}
              onValueChange={(value) =>
                setFormData({ ...formData, role: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn vai trò" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.name}>
                    {role.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="status">Trạng thái tài khoản</Label>
          <Select
            value={formData.status}
            onValueChange={(value) =>
              setFormData({ ...formData, status: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Hoạt động</SelectItem>
              <SelectItem value="suspended">Tạm khóa</SelectItem>
              <SelectItem value="pending">Chờ duyệt</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onClose}>
            Hủy
          </Button>
          <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
            {user ? "Cập nhật" : "Tạo tài khoản"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Quản Lý Tài Khoản Người Dùng
            </h1>
            <p className="text-gray-600 mt-1">
              Quản lý tài khoản CBNV và nhà thầu
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tìm kiếm người dùng..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-64"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="active">Hoạt động</SelectItem>
                <SelectItem value="suspended">Tạm khóa</SelectItem>
                <SelectItem value="pending">Chờ duyệt</SelectItem>
              </SelectContent>
            </Select>
            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
              <DialogTrigger asChild>
                <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Thêm người dùng
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Thêm Người Dùng Mới</DialogTitle>
                </DialogHeader>
                <UserForm onClose={() => setIsAddUserOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Tổng người dùng
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {staffUsers.length + contractorUsers.length}
                  </p>
                </div>
                <Users className="h-8 w-8 text-hoa-phat-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Cán bộ nhân viên
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {staffUsers.length}
                  </p>
                </div>
                <Building className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Nhà thầu</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {contractorUsers.length}
                  </p>
                </div>
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Chờ phê duyệt
                  </p>
                  <p className="text-3xl font-bold text-gray-900">1</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Tables */}
        <Tabs defaultValue="staff" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="staff" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Cán bộ nhân viên ({staffUsers.length})
            </TabsTrigger>
            <TabsTrigger
              value="contractors"
              className="flex items-center gap-2"
            >
              <Shield className="h-4 w-4" />
              Nhà thầu ({contractorUsers.length})
            </TabsTrigger>
          </TabsList>

          {/* Staff Users Tab */}
          <TabsContent value="staff">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Danh Sách Cán Bộ Nhân Viên
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Select
                      value={departmentFilter}
                      onValueChange={setDepartmentFilter}
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Bộ phận" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tất cả</SelectItem>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã NV</TableHead>
                      <TableHead>Họ và tên</TableHead>
                      <TableHead>Bộ phận</TableHead>
                      <TableHead>Chức vụ</TableHead>
                      <TableHead>Vai trò</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Đăng nhập cuối</TableHead>
                      <TableHead>Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {staffUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>{user.position}</TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{user.lastLogin}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedUser(user)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>
                                    Chỉnh Sửa Người Dùng
                                  </DialogTitle>
                                </DialogHeader>
                                <UserForm
                                  user={selectedUser}
                                  onClose={() => setSelectedUser(null)}
                                />
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Key className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contractor Users Tab */}
          <TabsContent value="contractors">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Danh Sách Nhà Thầu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã CT</TableHead>
                      <TableHead>Tên công ty</TableHead>
                      <TableHead>Người liên hệ</TableHead>
                      <TableHead>Liên lạc</TableHead>
                      <TableHead>Vai trò</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Hết hạn HĐ</TableHead>
                      <TableHead>Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contractorUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>
                          <div className="font-medium">{user.name}</div>
                        </TableCell>
                        <TableCell>{user.contact}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {user.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3" />
                            {user.contractEnd}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Key className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Import từ file Excel</h3>
                  <p className="text-sm text-gray-600">
                    Thêm hàng loạt người dùng
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Quản lý phân quyền</h3>
                  <p className="text-sm text-gray-600">
                    Cấu hình quyền hệ thống
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Key className="h-8 w-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Reset mật khẩu hàng loạt</h3>
                  <p className="text-sm text-gray-600">
                    Đặt lại mật khẩu nhiều người
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
