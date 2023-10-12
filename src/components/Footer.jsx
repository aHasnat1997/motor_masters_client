import { Link } from 'react-router-dom';
import { BsGoogle, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import React from 'react';
import Logo from './Logo';

/**
 * Footer component for the website.
 */
export default function Footer() {
    // Array containing footer navigation data.
    const footerNav = [
        {
            title: 'About',
            lists: [
                {
                    name: 'Home',
                    to: '/'
                },
                {
                    name: 'Service',
                    to: '/'
                },
                {
                    name: 'Contact',
                    to: '/'
                }
            ]
        },
        {
            title: 'Company',
            lists: [
                {
                    name: 'Why Car Doctor',
                    to: '/'
                },
                {
                    name: 'About',
                    to: '/'
                }
            ]
        },
        {
            title: 'Support',
            lists: [
                {
                    name: 'Support Center',
                    to: '/'
                },
                {
                    name: 'Feedback',
                    to: '/'
                },
                {
                    name: 'Accessibility',
                    to: '/'
                },
            ]
        },
    ];

    /**
     * Generates list items for the footer navigation.
     * @param {string} name - The text for the list item.
     * @param {string} path - The URL to navigate to.
     * @returns {JSX.Element} - The list item JSX.
     */
    const listItems = (name, path) => {
        return <li className='text-xl'>
            <Link to={path}>{name}</Link>
        </li>;
    };

    return (
        <footer className="bg-gray-800 w-full">
            <div className='max-container py-16 text-white flex flex-col items-center lg:flex-row lg:items-start lg:justify-between gap-16'>
                <div className='w-80 flex flex-col gap-12'>
                    <Logo />
                    <p className='text-xl'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className='flex items-center gap-8 text-2xl'>
                        <div className='p-3 bg-white/20 rounded-full'><BsGoogle /></div>
                        <div className='p-3 bg-white/20 rounded-full'><BsTwitter /></div>
                        <div className='p-3 bg-white/20 rounded-full'><BsInstagram /></div>
                        <div className='p-3 bg-white/20 rounded-full'><BsLinkedin /></div>
                    </div>
                </div>

                {
                    footerNav.map((item, i) => <div
                        key={i}
                        className='flex flex-col items-center lg:items-start gap-6 lg:gap-12'
                    >
                        <h3 className='text-3xl font-semibold'>{item.title}</h3>
                        <ul className='flex flex-col items-center lg:items-start gap-6'>
                            {
                                item.lists.map((list, i) => <React.Fragment key={i}>
                                    {
                                        listItems(list.name, list.to)
                                    }
                                </React.Fragment>)
                            }
                        </ul>
                    </div>)
                }
            </div>
        </footer>
    );
}
