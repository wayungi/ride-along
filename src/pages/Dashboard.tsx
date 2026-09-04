import AdminDashboard from "../components/dashboads/admin/AdminDashbaord";
import CustomerDashboard from "../components/dashboads/customer/CustomerDashboard";
import OwnerDashboard from "../components/dashboads/customer/CustomerDashboard";


type UserRole = "ADMIN" | "CUSTOMER" | "OWNER";

const Dashboard = () => {

  /* will ge user role from auth context: const { user } = useAuth();*/
   const user: { roleCode: UserRole } = {
        roleCode: "OWNER"
    };

  switch (user?.roleCode) {
    case "ADMIN":
      return <AdminDashboard />;

    case "CUSTOMER":
      return <CustomerDashboard />;

    case "OWNER":
      return <OwnerDashboard />;

    default:
      return <div>Unauthorized</div>;
  }
};

export default Dashboard;