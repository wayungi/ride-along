import {
  FaMoneyBillWave,
  FaCar,
  FaTools,
  FaWarehouse,
} from "react-icons/fa";

interface DashboardStatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const DashboardStatCard = ({
  title,
  value,
  icon,
}: DashboardStatCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 min-h-[150px] flex flex-col justify-between shadow-sm">

      {/* Top */}
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-medium text-gray-500">
          {title}
        </h3>

        <div className="text-xl text-blue-600 bg-blue-50 p-3 rounded-lg">
          {icon}
        </div>
      </div>

      {/* Value */}
      <div className="flex justify-center mt-4">
        <p className="text-2xl font-bold text-gray-900">
          {value}
        </p>
      </div>

    </div>
  );
};

const OwnerMiniDashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

      <DashboardStatCard
        title="Total Revenue"
        value="UGX 8,450,000"
        icon={<FaMoneyBillWave />}
      />

      <DashboardStatCard
        title="Rented Cars"
        value={12}
        icon={<FaCar />}
      />

      <DashboardStatCard
        title="Faulty Cars"
        value={3}
        icon={<FaTools />}
      />

      <DashboardStatCard
        title="Cars Owned"
        value={24}
        icon={<FaWarehouse />}
      />

    </div>
  );
};

export default OwnerMiniDashboard;