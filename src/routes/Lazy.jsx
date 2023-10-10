import { Suspense, lazy } from "react";
import CompLocations from "./CompLocations";

export default function Lazy({ name }) {
    const Component = lazy(CompLocations[name])
    return (
        // until spinner design is given
        <Suspense fallback="Loading....">
            <Component />
        </Suspense>
    );
}
