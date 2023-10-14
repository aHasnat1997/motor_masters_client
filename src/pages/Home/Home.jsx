import About from "./sections/About";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import Products from "./sections/Products";
import Service from "./sections/Service";

/**
 * Home page of the website.
 * @returns {JSX.Element} Home
 */
export default function Home() {
    return (
        <div className="flex flex-col gap-40 mb-40">
            <Hero />
            <About />
            <Service />
            <Info />
            <Products />
            <Features />
        </div>
    );
}