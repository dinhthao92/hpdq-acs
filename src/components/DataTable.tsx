import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TrackingRecord {
  time: string;
  vehicleId: string;
  location: string;
  direction: string;
}

const DataTable = () => {
  const trackingData: TrackingRecord[] = [
    {
      time: "2025-06-11 08:00:00",
      vehicleId: "29A-12345",
      location: "Cổng chính",
      direction: "Vào",
    },
    {
      time: "2025-06-11 08:15:00",
      vehicleId: "29A-12345",
      location: "Trạm cân",
      direction: "Vào",
    },
    {
      time: "2025-06-11 08:30:00",
      vehicleId: "29A-12345",
      location: "Kho NVL A",
      direction: "Ra",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">
          Lịch sử di chuyển của phương tiện
        </h3>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold text-gray-700">
                Thời gian
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Biển số xe
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Vị trí
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Hướng di chuyển
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trackingData.map((record, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="font-mono text-sm">
                  {record.time}
                </TableCell>
                <TableCell className="font-semibold text-hoa-phat-700">
                  {record.vehicleId}
                </TableCell>
                <TableCell>{record.location}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      record.direction === "Vào"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {record.direction}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
