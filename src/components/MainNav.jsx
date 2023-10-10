import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function MainNav() {
    return (
        <nav className="w-full max-container py-8 flex justify-between">
            <img
                src={logo}
                alt="logo"
                className="w-36"
            />
            {/* <div>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Services</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Contact</Link>
            </div> */}
            <ul className="flex items-center gap-10">
                <li className="text-xl font-semibold hover:text-primary">Home</li>
                <li className="text-xl font-semibold hover:text-primary">About</li>
                <li className="text-xl font-semibold hover:text-primary">Services</li>
                <li className="text-xl font-semibold hover:text-primary">Blog</li>
                <li className="text-xl font-semibold hover:text-primary">Contact</li>
            </ul>
            <div>
                <button className="btn-primary-outline px-4 py-2">Log in</button>
            </div>
        </nav>
    );
}
