import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

/**
 * Dashboard Layout for the website.
 * @returns DashboardLayout.
 */
export default function DashboardLayout() {
    return (
        <main>
            <MainNav />
            <div className="max-container mt-20">
                <Outlet />
            </div>
            <h1>Dashboard Layout for the website</h1>
        </main>
    )
}