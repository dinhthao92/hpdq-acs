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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Shield,
  Users,
  Settings,
  Search,
  Plus,
  Edit,
  Trash2,
  Copy,
  Eye,
  Lock,
  Unlock,
  Camera,
  Car,
  Building,
  MapPin,
  Clock,
  FileText,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const PermissionManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateRoleOpen, setIsCreateRoleOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any>(null);
  const [selectedModule, setSelectedModule] = useState("all");

  // Mock data for permission groups
  const permissionGroups = [
    {
      id: "ADMIN",
      name: "Quản trị viên",
      description: "Quyền truy cập toàn bộ hệ thống",
      userCount: 2,
      status: "active",
      createdDate: "2023-01-15",
      permissions: ["ALL"],
    },
    {
      id: "OPERATOR",
      name: "Vận hành",
      description: "Quyền vận hành hệ thống ACS và giám sát",
      userCount: 15,
      status: "active",
      createdDate: "2023-02-20",
      permissions: ["VIEW_CAMERA", "ACS_CONTROL", "TRANSPORT_VIEW"],
    },
    {
      id: "SECURITY",
      name: "An ninh",
      description: "Quyền giám sát an ninh và xử lý cảnh báo",
      userCount: 8,
      status: "active",
      createdDate: "2023-03-10",
      permissions: ["VIEW_CAMERA", "ALERT_MANAGE", "BLACKLIST_MANAGE"],
    },
    {
      id: "TECH",
      name: "Kỹ thuật",
      description: "Quyền cấu hình kỹ thuật và bảo trì hệ thống",
      userCount: 5,
      status: "active",
      createdDate: "2023-04-01",
      permissions: ["SYSTEM_CONFIG", "DEVICE_MANAGE", "REPORT_VIEW"],
    },
    {
      id: "GUEST",
      name: "Khách",
      description: "Quyền xem giới hạn cho khách tham quan",
      userCount: 0,
      status: "inactive",
      createdDate: "2023-05-15",
      permissions: ["BASIC_VIEW"],
    },
  ];

  // System modules and functions
  const systemModules = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: Building,
      functions: [
        { id: "view_overview", name: "Xem tổng quan", type: "view" },
        { id: "view_statistics", name: "Xem thống kê", type: "view" },
        { id: "export_reports", name: "Xuất báo cáo", type: "action" },
      ],
    },
    {
      id: "user_management",
      name: "Quản lý người dùng",
      icon: Users,
      functions: [
        { id: "view_users", name: "Xem danh sách", type: "view" },
        { id: "create_users", name: "Tạo người dùng", type: "create" },
        { id: "edit_users", name: "Sửa người dùng", type: "edit" },
        { id: "delete_users", name: "Xóa người dùng", type: "delete" },
        { id: "reset_password", name: "Reset mật khẩu", type: "action" },
      ],
    },
    {
      id: "access_control",
      name: "Kiểm soát ra vào",
      icon: Shield,
      functions: [
        { id: "view_access", name: "Xem lịch sử ra vào", type: "view" },
        { id: "control_gates", name: "Điều khiển cổng", type: "control" },
        { id: "manual_override", name: "Can thiệp thủ công", type: "action" },
        { id: "zone_config", name: "Cấu hình khu vực", type: "config" },
      ],
    },
    {
      id: "camera_system",
      name: "Hệ thống camera",
      icon: Camera,
      functions: [
        { id: "view_live", name: "Xem trực tiếp", type: "view" },
        { id: "view_playback", name: "Xem lại", type: "view" },
        { id: "control_ptz", name: "Điều khiển PTZ", type: "control" },
        { id: "export_video", name: "Xuất video", type: "action" },
      ],
    },
    {
      id: "vehicle_management",
      name: "Quản lý phương tiện",
      icon: Car,
      functions: [
        { id: "view_vehicles", name: "Xem danh sách", type: "view" },
        { id: "register_vehicle", name: "Đăng ký xe", type: "create" },
        { id: "edit_vehicle", name: "Sửa thông tin", type: "edit" },
        { id: "track_vehicle", name: "Theo dõi xe", type: "view" },
      ],
    },
    {
      id: "alert_system",
      name: "Hệ thống cảnh báo",
      icon: AlertTriangle,
      functions: [
        { id: "view_alerts", name: "Xem cảnh báo", type: "view" },
        { id: "handle_alerts", name: "Xử lý cảnh báo", type: "action" },
        { id: "config_alerts", name: "Cấu hình cảnh báo", type: "config" },
        { id: "alert_reports", name: "Báo cáo cảnh báo", type: "view" },
      ],
    },
  ];

  // Zone restrictions
  const zones = [
    { id: "main_gate", name: "Cổng chính", type: "entry" },
    { id: "production_a", name: "Khu sản xuất A", type: "restricted" },
    { id: "production_b", name: "Khu sản xuất B", type: "restricted" },
    { id: "warehouse_1", name: "Kho hàng 1", type: "storage" },
    { id: "warehouse_2", name: "Kho hàng 2", type: "storage" },
    { id: "office", name: "Khu văn phòng", type: "office" },
    { id: "parking", name: "Bãi đỗ xe", type: "parking" },
  ];

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-green-100 text-green-800">
        <CheckCircle className="h-3 w-3 mr-1" />
        Hoạt động
      </Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-800">
        <Lock className="h-3 w-3 mr-1" />
        Không hoạt động
      </Badge>
    );
  };

  const getPermissionTypeColor = (type: string) => {
    switch (type) {
      case "view":
        return "bg-blue-100 text-blue-800";
      case "create":
        return "bg-green-100 text-green-800";
      case "edit":
        return "bg-yellow-100 text-yellow-800";
      case "delete":
        return "bg-red-100 text-red-800";
      case "control":
        return "bg-purple-100 text-purple-800";
      case "config":
        return "bg-indigo-100 text-indigo-800";
      case "action":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const RoleForm = ({ role, onClose }: { role?: any; onClose: () => void }) => {
    const [formData, setFormData] = useState({
      name: role?.name || "",
      description: role?.description || "",
      status: role?.status || "active",
    });

    const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
      role?.permissions || [],
    );
    const [selectedZones, setSelectedZones] = useState<string[]>([]);

    const handlePermissionToggle = (permission: string) => {
      setSelectedPermissions((prev) =>
        prev.includes(permission)
          ? prev.filter((p) => p !== permission)
          : [...prev, permission],
      );
    };

    return (
      <div className="space-y-6 max-h-96 overflow-y-auto">
        <div className="space-y-4">
          <div>
            <Label htmlFor="roleName">Tên nhóm quyền *</Label>
            <Input
              id="roleName"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Nhập tên nhóm quyền..."
            />
          </div>

          <div>
            <Label htmlFor="roleDescription">Mô tả</Label>
            <Textarea
              id="roleDescription"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Mô tả chi tiết về nhóm quyền..."
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="roleStatus">Trạng thái hoạt động</Label>
            <Switch
              id="roleStatus"
              checked={formData.status === "active"}
              onCheckedChange={(checked) =>
                setFormData({
                  ...formData,
                  status: checked ? "active" : "inactive",
                })
              }
            />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Phân quyền chức năng</h4>
          <div className="space-y-4">
            {systemModules.map((module) => (
              <Card key={module.id} className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <module.icon className="h-5 w-5 text-hoa-phat-600" />
                  <span className="font-medium">{module.name}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {module.functions.map((func) => (
                    <div key={func.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={func.id}
                        checked={selectedPermissions.includes(func.id)}
                        onCheckedChange={() => handlePermissionToggle(func.id)}
                      />
                      <Label htmlFor={func.id} className="text-sm">
                        {func.name}
                      </Label>
                      <Badge
                        className={`${getPermissionTypeColor(func.type)} text-xs`}
                      >
                        {func.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Giới hạn khu vực</h4>
          <div className="grid grid-cols-2 gap-3">
            {zones.map((zone) => (
              <div key={zone.id} className="flex items-center space-x-2">
                <Checkbox
                  id={zone.id}
                  checked={selectedZones.includes(zone.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedZones([...selectedZones, zone.id]);
                    } else {
                      setSelectedZones(
                        selectedZones.filter((z) => z !== zone.id),
                      );
                    }
                  }}
                />
                <Label htmlFor={zone.id} className="text-sm">
                  {zone.name}
                </Label>
                <Badge variant="outline" className="text-xs">
                  {zone.type}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onClose}>
            Hủy
          </Button>
          <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
            {role ? "Cập nhật" : "Tạo nhóm quyền"}
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
              Quản Lý Nhóm Quyền & Chức Năng
            </h1>
            <p className="text-gray-600 mt-1">
              Cấu hình phân quyền truy cập hệ thống
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tìm kiếm nhóm quyền..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-64"
              />
            </div>
            <Dialog open={isCreateRoleOpen} onOpenChange={setIsCreateRoleOpen}>
              <DialogTrigger asChild>
                <Button className="bg-hoa-phat-600 hover:bg-hoa-phat-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Tạo nhóm quyền
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Tạo Nhóm Quyền Mới</DialogTitle>
                </DialogHeader>
                <RoleForm onClose={() => setIsCreateRoleOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="roles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="roles">Nhóm quyền</TabsTrigger>
            <TabsTrigger value="permissions">Ma tr��n phân quyền</TabsTrigger>
            <TabsTrigger value="zones">Quản lý khu vực</TabsTrigger>
          </TabsList>

          {/* Permission Groups Tab */}
          <TabsContent value="roles">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Tổng nhóm quyền
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {permissionGroups.length}
                      </p>
                    </div>
                    <Shield className="h-8 w-8 text-hoa-phat-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Đang hoạt động
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {
                          permissionGroups.filter(
                            (group) => group.status === "active",
                          ).length
                        }
                      </p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Tổng người dùng
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {permissionGroups.reduce(
                          (sum, group) => sum + group.userCount,
                          0,
                        )}
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Chức năng hệ thống
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {systemModules.reduce(
                          (sum, module) => sum + module.functions.length,
                          0,
                        )}
                      </p>
                    </div>
                    <Settings className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Danh Sách Nhóm Quyền
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã nhóm</TableHead>
                      <TableHead>Tên nhóm quyền</TableHead>
                      <TableHead>Mô tả</TableHead>
                      <TableHead>Số người dùng</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Ngày tạo</TableHead>
                      <TableHead>Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {permissionGroups.map((group) => (
                      <TableRow key={group.id}>
                        <TableCell className="font-medium">
                          {group.id}
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{group.name}</div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <p className="text-sm text-gray-600 truncate">
                            {group.description}
                          </p>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{group.userCount}</Badge>
                        </TableCell>
                        <TableCell>{getStatusBadge(group.status)}</TableCell>
                        <TableCell>{group.createdDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedRole(group)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>
                                    Chỉnh Sửa Nhóm Quyền
                                  </DialogTitle>
                                </DialogHeader>
                                <RoleForm
                                  role={selectedRole}
                                  onClose={() => setSelectedRole(null)}
                                />
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
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

          {/* Permission Matrix Tab */}
          <TabsContent value="permissions">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Ma Trận Phân Quyền</h3>
                <Select
                  value={selectedModule}
                  onValueChange={setSelectedModule}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Chọn module" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả module</SelectItem>
                    {systemModules.map((module) => (
                      <SelectItem key={module.id} value={module.id}>
                        {module.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="text-left p-3 border-b font-medium">
                            Chức năng
                          </th>
                          {permissionGroups.map((group) => (
                            <th
                              key={group.id}
                              className="text-center p-3 border-b font-medium min-w-24"
                            >
                              {group.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {systemModules.map((module) => (
                          <React.Fragment key={module.id}>
                            <tr className="bg-gray-50">
                              <td
                                colSpan={permissionGroups.length + 1}
                                className="p-3 font-semibold flex items-center gap-2"
                              >
                                <module.icon className="h-4 w-4" />
                                {module.name}
                              </td>
                            </tr>
                            {module.functions.map((func) => (
                              <tr key={func.id}>
                                <td className="p-3 border-b">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm">{func.name}</span>
                                    <Badge
                                      className={`${getPermissionTypeColor(func.type)} text-xs`}
                                    >
                                      {func.type}
                                    </Badge>
                                  </div>
                                </td>
                                {permissionGroups.map((group) => (
                                  <td
                                    key={group.id}
                                    className="p-3 border-b text-center"
                                  >
                                    <Switch
                                      checked={group.permissions.includes(
                                        func.id,
                                      )}
                                      size="sm"
                                    />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Zone Management Tab */}
          <TabsContent value="zones">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Quản Lý Khu Vực
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {zones.map((zone) => (
                      <div
                        key={zone.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-hoa-phat-600" />
                          <div>
                            <div className="font-medium">{zone.name}</div>
                            <Badge variant="outline" className="text-xs">
                              {zone.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Phân Quyền Theo Khu Vực</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label>Chọn nhóm quyền</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn nhóm quyền" />
                        </SelectTrigger>
                        <SelectContent>
                          {permissionGroups.map((group) => (
                            <SelectItem key={group.id} value={group.id}>
                              {group.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Khu vực được phép truy cập</Label>
                      <div className="mt-2 space-y-2">
                        {zones.map((zone) => (
                          <div
                            key={zone.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={`zone-${zone.id}`} />
                            <Label
                              htmlFor={`zone-${zone.id}`}
                              className="text-sm"
                            >
                              {zone.name}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full">Cập nhật phân quyền</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PermissionManagement;
