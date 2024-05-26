import Sidebar from '@/layouts/Sidebar';
import { Outlet } from 'react-router-dom';
import userStore from '../../store/userStore';

const Dashboard = () => {
    const { user } = userStore((state) => state);
    console.log(user);
    return (
        <div className="h-screen w-screen grid grid-cols-[1fr_6fr] gap-x-4 lg:gap-x-8 bg-gray-100">
            <Sidebar />
            <div className="bg-white px-6 overflow-auto">
                <h2 className="h-20"></h2>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
