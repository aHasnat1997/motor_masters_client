import { Link } from 'react-router-dom';
import { BsGoogle, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import React from 'react';
import Logo from './Logo';

/**
 * Footer component for the website.
 * @returns {JSX.Element} Footer.
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
        return <li className='text-xl group'>
            <Link to={path}>{name}</Link>
            <div className='w-full h-1 bg-white duration-700 origin-left scale-x-0 group-hover:scale-x-100' />
        </li>;
    };

    return (
        <footer className="bg-gray-800 w-full">
            <div className='max-container py-16 text-white flex flex-col items-center lg:flex-row lg:items-start lg:justify-between gap-16 lg:gap-32'>
                <div className='w-80 flex flex-col items-center gap-12'>
                    <Logo color='white' />
                    <p className='text-xl'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className='flex items-center gap-8 text-2xl'>
                        <div className='cursor-pointer p-3 bg-white/20 rounded-full duration-200 hover:bg-white/50'>
                            <BsGoogle />
                        </div>
                        <div className='cursor-pointer p-3 bg-white/20 rounded-full duration-200 hover:bg-white/50'>
                            <BsTwitter />
                        </div>
                        <div className='cursor-pointer p-3 bg-white/20 rounded-full duration-200 hover:bg-white/50'>
                            <BsInstagram />
                        </div>
                        <div className='cursor-pointer p-3 bg-white/20 rounded-full duration-200 hover:bg-white/50'>
                            <BsLinkedin />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col md:flex-row md:items-start md:justify-between gap-16'>
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
            </div>
        </footer>
    );
}