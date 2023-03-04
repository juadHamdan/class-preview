import "./dashboard.css";
import DashboardImg from './sources/Dashboard.png'

const Dashboard = ({onClick}) => {
    return (
        <img
        className="dashboard"
        onClick={onClick}
        src={DashboardImg}
        alt="Dashboard"
      />
    );
};

export default Dashboard;