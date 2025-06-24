// src/components/admin/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import AdminHome from "../AdminHome";

const AdminLayout = () => {
    return (
        <AdminHome>
            <Outlet />
        </AdminHome>
    );
};

export default AdminLayout;
