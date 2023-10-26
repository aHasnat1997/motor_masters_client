import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/logo-white.png";

/**
 * Main Logo component for the website.
 * @param {String} color - color of the logo.
 * @returns {JSX.Element} - website Logo.
 */
export default function Logo({ color }) {
    return (
        <div className="w-fit relative overflow-hidden group">
            <div className={`h-96 w-20 rotate-45 duration-[2000ms] absolute -top-40 -left-60 group-hover:left-96
            ${color === 'main' ? 'bg-white/95' : color === 'white' ? 'bg-white/30' : ''}`} />
            <Link to='/'>
                <img
                    src={color === 'main' ? logo : color === 'white' ? whiteLogo : ''}
                    alt="logo"
                    className={`click-effect ${color === 'main' ? 'w-44' : color === 'white' ? 'w-60' : ''}`}
                />
            </Link>
        </div>
    );
}