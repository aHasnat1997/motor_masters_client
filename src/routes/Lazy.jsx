import { Suspense, lazy } from "react";
import CompLocations from "./CompLocations";
import Loader from "../components/Loader";

export default function Lazy({ name }) {
    const Component = lazy(CompLocations[name])
    return (
        // until spinner design is given
        <Suspense fallback={<Loader />}>
            <Component />
        </Suspense>
    );
}
