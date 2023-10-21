import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Lazy from "./Lazy";

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Lazy name='App' />}>
            <Route path="/" element={<Lazy name='ClientLayout' />}>
                <Route path="/" element={<Lazy name='Home' />} />
                <Route path="/services" element={<Lazy name='AllServices' />} />
                {/* to-do: dynamic id */}
                <Route path="/services/123" element={<Lazy name='SingleServices' />} />
            </Route>
            <Route path="/auth" element={<Lazy name='AuthLayout' />}>

            </Route>
            <Route path="/dashboard" element={<Lazy name='DashboardLayout' />}>

            </Route>
        </Route>
    )
);