import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Lazy from "./Lazy";

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Lazy name='App' />}>
            <Route path="/" element={<Lazy name='ClientLayout' />} />
        </Route>
    )
);
