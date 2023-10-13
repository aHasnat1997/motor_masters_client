import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/logo-white.png";

/**
 * Main Logo component for the website.
 * @param {String} position - where to place the logo.
 * @returns {JSX.Element} - website Logo.
 */
export default function Logo({ position }) {
    return (
        <div className="w-fit relative overflow-hidden group">
            <div className={`h-96 w-20 rotate-45 duration-[2000ms] absolute -top-40 -left-60 group-hover:left-96
            ${position === 'nav' ? 'bg-white/95' : position === 'footer' ? 'bg-white/30' : ''}`} />
            <Link to='/'>
                <img
                    src={position === 'nav' ? logo : position === 'footer' ? whiteLogo : ''}
                    alt="logo"
                    className={`click-effect ${position === 'nav' ? 'w-44' : position === 'footer' ? 'w-60' : ''}`}
                />
            </Link>
        </div>
    );
}