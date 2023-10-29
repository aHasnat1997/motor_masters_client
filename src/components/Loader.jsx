import Lottie from "lottie-react";
import loader from '../assets/lottie/loading.json';

export default function Loader() {
    return <div className="w-full h-screen flex items-center justify-center">
        <Lottie animationData={loader} className="w-1/2 lg:w-1/4" />
    </div>
}