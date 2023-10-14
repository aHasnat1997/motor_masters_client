import About from "./sections/About";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import Service from "./sections/Service";

/**
 * Home page of the website.
 * @returns {JSX.Element} Home
 */
export default function Home() {
    return (
        <div className="flex flex-col gap-20 mb-20">
            <Hero />
            <About />
            <Service />
            <Info />
        </div>
    );
}