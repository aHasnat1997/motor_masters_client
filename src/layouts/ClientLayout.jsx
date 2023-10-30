import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";


/**
 * Client Layout for the website.
 * @returns ClientLayout.
 */
export default function ClientLayout() {
    return (
        <main className="min-h-screen flex flex-col">
            <MainNav />
            <div>
                <Outlet />
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </main>

    );
}