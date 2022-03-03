import { Sidebar } from "../../components/admin/Sidebar";
import { Header } from "../../components/admin/Header";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/admin/Navbar";
function Layout() {
    return (
        <>
            <Navbar />
            <div className="content-wrapper">
                <Outlet />
            </div>
            <Sidebar />
        </>
    );
}

export default Layout;
