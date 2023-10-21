import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
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
            to: '/services'
        },
        {
            menu: 'Blog',
            to: '/'
        },
        {
            menu: 'Contact',
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
        <div className="flex justify-between items-center">
            <Logo position='nav' />
            <ul className="flex items-center gap-10">
                {menuItems.map(item => (
                    <React.Fragment key={item.menu}>
                        {menuList(item.menu, item.to, false)}
                    </React.Fragment>
                ))}
            </ul>
            <div className="flex items-center gap-3">
                <button className="btn-primary-outline px-4 py-2">Log In</button>
                <button className="btn-primary px-4 py-2">Sign Up</button>
            </div>
        </div>
    );

    // Small screen navigation JSX.
    const smNav = (
        <div className="flex justify-between items-center">
            <Logo position='nav' />
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
        <nav className="w-full bg-white fixed top-0 z-40 shadow-xl">
            <div className="max-container py-3">
                <div className="hidden lg:block">{lgNav}</div>
                <div className="lg:hidden">{smNav}</div>
            </div>
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
        </nav>
    );
}