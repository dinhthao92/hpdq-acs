const ResultsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-hoa-phat-600 mb-4">
        Kết quả Tìm kiếm & Lộ trình Phương tiện
      </h3>

      {/* Map/Tracking visualization area */}
      <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
        {/* Placeholder map with route visualization */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100">
          {/* Route line simulation */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
            {/* Grid background */}
            <defs>
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Route path */}
            <path
              d="M 50 150 Q 150 100 250 80 Q 350 60 380 40"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
            />

            {/* Location markers */}
            <g>
              {/* Start point - Kho A */}
              <circle cx="50" cy="150" r="6" fill="#ef4444" />
              <text
                x="60"
                y="155"
                fontSize="10"
                fill="#374151"
                fontWeight="500"
              >
                Kho A
              </text>

              {/* Middle point - Trạm cân */}
              <circle cx="200" cy="90" r="6" fill="#f59e0b" />
              <text
                x="210"
                y="95"
                fontSize="10"
                fill="#374151"
                fontWeight="500"
              >
                Trạm cân
              </text>

              {/* End point - Bãi xe */}
              <circle cx="360" cy="50" r="6" fill="#10b981" />
              <text
                x="300"
                y="45"
                fontSize="10"
                fill="#374151"
                fontWeight="500"
              >
                Bãi xe
              </text>
            </g>
          </svg>
        </div>

        {/* Map overlay info */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
          <div className="text-xs text-gray-600 space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Điểm xuất phát</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span>Trạm cân</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Điểm đích</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
