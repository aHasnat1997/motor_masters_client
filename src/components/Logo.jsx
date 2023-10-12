import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

/**
 * Main Logo component for the website.
 * @returns {JSX.Element} - website Logo.
 */
export default function Logo() {
    return (
        <div className="w-fit relative overflow-hidden group">
            <div className="bg-white/70 h-56 w-20 rotate-45 duration-1000 absolute -top-24 -left-32 group-hover:left-56" />
            <Link to='/'>
                <img
                    src={logo}
                    alt="logo"
                    className="w-36 click-effect"
                />
            </Link>
        </div>
    );
}