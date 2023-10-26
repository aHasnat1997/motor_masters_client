import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa6";
import { OutSideClick } from "./OutSideClick";
import Logo from "./Logo";

/**
 * Main navigation bar component for the website.
 * @returns {JSX.Element} Main navigation.
 */
export default function MainNav() {
    // State to manage the mobile menu's open/close state.
    const [open, setOpen] = useState(false);

    // Navigation menu items.
    const menuItems = [
        {
            menu: 'Home',
            to: '/'
        },
        {
            menu: 'About',
            to: '/'
        },
        {
            menu: 'Services',
            to: '/'
        },
        {
            menu: 'Products',
            to: '/'
        }
    ];

    /**
     * Generates a list item for the navigation menu.
     * @param {string} menuName - The menu item's text.
     * @param {string} path - The URL to navigate to.
     * @param {boolean} isSmNav - Indicates whether it's for small screen navigation.
     * @returns {JSX.Element} - The menu item JSX.
     */
    const menuList = (menuName, path, isSmNav) => {
        return (
            <li className={`font-semibold duration-200 hover:text-primary click-effect ${isSmNav ? 'text-4xl' : 'text-2xl'}`}>
                <Link
                    to={path}
                    onClick={() => isSmNav ? setOpen(false) : null}
                >
                    {menuName}
                </Link>
            </li>
        );
    };

    // Large screen navigation JSX.
    const lgNav = (
        <div className="relative h-full">
            <div className="w-[35%] h-full absolute z-20">
                <div className="w-full h-full border-solid border-t-[7rem] border-t-primary border-r-[4rem] border-x-transparent" />
                <div className="w-full absolute z-20 top-0 flex items-center justify-center bg-transparent">
                    <Logo color='white' width='w-[18rem]' />
                </div>
            </div>
            <div className="w-full h-full ">
                <div className="w-full flex items-center">
                    <div className="w-[36.5%] h-full border-solid border-b-[2.5rem] border-b-primary/70 border-r-[1.5rem] border-x-transparent" />
                    <div className="w-[63.5%] flex items-center justify-between">
                        <h5>Welcome To Car Repair & Service Center</h5>
                        <div className="mr-[15%] flex items-end gap-6">
                            <p>Follow Us : </p>
                            <div className="flex items-center gap-4">
                                <FaFacebookF className="hover:text-primary" />
                                <FaInstagram className="hover:text-primary" />
                                <FaLinkedinIn className="hover:text-primary" />
                                <FaTwitter className="hover:text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 w-full h-full flex items-center">
                    <div className="w-[35%]" />
                    <div className="w-[65%] flex items-center justify-between">
                        <ul className="flex items-center gap-10 text-white p-5">
                            {menuItems.map(item => (
                                <React.Fragment key={item.menu}>
                                    {menuList(item.menu, item.to, false)}
                                </React.Fragment>
                            ))}
                        </ul>
                        <div className="mr-[15%]">
                            <button className="btn-outline border-white hover:border-primary hover:bg-primary text-white px-4 py-2">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Small screen navigation JSX.
    const smNav = (
        <div className="flex justify-between items-center">
            <Logo color='white' />
            <div>
                <button
                    className="px-3 py-1 click-effect"
                    onClick={() => setOpen(true)}
                    aria-label="Open Menu" // Accessibility label for screen readers.
                >
                    <FaBarsStaggered className="text-4xl font-semibold" />
                </button>
            </div>
        </div>
    );

    // Mobile sidebar JSX.
    const sideBar = (
        <div className="relative h-screen bg-white py-12">
            <div className="px-12 flex items-center gap-3">
                <button
                    className="btn-primary-outline w-full py-2"
                    onClick={() => setOpen(false)}
                >
                    Log In
                </button>
                <button
                    className="btn-primary w-full py-2"
                    onClick={() => setOpen(false)}
                >
                    Sign Up
                </button>
            </div>
            <div className="my-8">
                <hr />
            </div>
            <ul className="px-12 flex flex-col gap-8">
                {menuItems.map(item => (
                    <React.Fragment key={item.menu}>
                        {menuList(item.menu, item.to, true)}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );

    return (
        <div>
            <nav className="w-full lg:h-28 fixed top-0 right-0 left-0 z-40 bg-white shadow-xl">
                <div className="hidden lg:block">{lgNav}</div>
                <div className="lg:hidden">{smNav}</div>
            </nav>
            <div
                className={`lg:hidden fixed top-0 z-50 w-[75%] duration-1000 
                ${open ? 'right-0' : '-right-[100rem]'}`}
            >
                <OutSideClick
                    show={open}
                    onClickOutside={() => setOpen(false)}
                    body={sideBar}
                />
            </div>
        </div>
    );
}