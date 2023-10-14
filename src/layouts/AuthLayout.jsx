import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

/**
 * Authentication Layout for the website.
 * @returns AuthLayout.
 */
export default function AuthLayout() {
    return (
        <main>
            <MainNav />
            <div className="max-container mt-20">
                <Outlet />
            </div>
            <h1>Authentication Layout for the website</h1>
        </main>
    )
}