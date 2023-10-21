import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Lazy from "./Lazy";

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Lazy name='App' />}>
            <Route path="/" element={<Lazy name='ClientLayout' />}>
                <Route path="/" element={<Lazy name='Home' />} />
                <Route path="/products" element={<Lazy name='AllProducts' />} />
            </Route>
            <Route path="/auth" element={<Lazy name='AuthLayout' />}>

            </Route>
            <Route path="/dashboard" element={<Lazy name='DashboardLayout' />}>

            </Route>
        </Route>
    )
);