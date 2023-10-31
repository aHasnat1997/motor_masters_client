import { Link } from 'react-router-dom';
import {
    BsGoogle,
    BsTwitter,
    BsInstagram,
    BsLinkedin,
    BsClock,
    BsTelephone,
    BsEnvelopeAt,
    BsFillSendFill
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import React from 'react';
import Logo from './Logo';
import footerBgImg from '../assets/footer.jpg';
import Button from './Button';

/**
 * Footer component for the website.
 * @returns {JSX.Element} Footer.
 */
export default function Footer() {
    // Array containing footer services data.
    const services = [
        {
            title: 'Our Services',
            lists: [
                {
                    name: 'Car Oil Change',
                    to: '/'
                },
                {
                    name: 'Auto Diagnostics',
                    to: '/'
                },
                {
                    name: 'Battery Problem',
                    to: '/'
                },
                {
                    name: 'Engine Repair',
                    to: '/'
                },
                {
                    name: 'Glasses Change',
                    to: '/'
                },
                {
                    name: 'Filters & Exhaust',
                    to: '/'
                },
            ]
        }
    ];
    // Array containing footer quick link data.
    const quickLink = [
        {
            title: 'Quick link',
            lists: [
                {
                    name: 'Why Choose Us',
                    to: '/'
                },
                {
                    name: 'Portfolio',
                    to: '/'
                },
                {
                    name: 'Blog & News',
                    to: '/'
                },
                {
                    name: 'Contact Us',
                    to: '/'
                },
                {
                    name: 'Privacy Policy',
                    to: '/'
                },
                {
                    name: 'Terms & Condition',
                    to: '/'
                },
            ]
        }
    ];

    /**
     * Generates list items for the footer lists.
     * @param {string} name - The text for the list item.
     * @param {string} path - The URL to navigate to.
     * @returns {JSX.Element} - The list item JSX.
     */
    const listItems = (name, path) => {
        return <li className='text-xl group'>
            <Link to={path} className='flex items-center gap-2'>
                <MdKeyboardDoubleArrowRight /> {name}
            </Link>
            <div className='w-full h-1 bg-white duration-700 origin-left scale-x-0 group-hover:scale-x-100' />
        </li>;
    };

    return (
        <footer className='mt-52 relative'>

            {/* Newsletter */}

            <div className='w-full absolute -top-24 z-10 overflow-hidden'>
                <div className='newsletter-lg' />
                <div className='w-full absolute top-0'>
                    <div className='w-[70%] mx-auto px-4 py-10 flex flex-col items-center justify-center gap-6'>
                        <div className='text-white text-center'>
                            <h3 className='lg:text-xl'>Subscribe for our</h3>
                            <h1 className='text-lg lg:text-5xl font-semibold'>Newsletter</h1>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-0'>
                            <input
                                type="text"
                                className='w-full outline-none p-2 lg:px-6 lg:py-4 text-xl'
                                placeholder='Enter your email'
                            />
                            <Button
                                title='Subscribe'
                                btnStyle='w-full lg:w-[40%] p-2 lg:p-4 btn-outline text-xl text-white flex items-center gap-4 duration-300 hover:border-gray-800'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    backgroundImage: `linear-gradient(#000000e3 , #000000e3), url(${footerBgImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                }}
                className='w-full pt-36'
            >
                <div className='max-container py-16 text-white flex flex-col items-center lg:flex-row lg:items-start lg:justify-between gap-16 lg:gap-32'>
                    <div className='lg:w-56 flex flex-col items-center gap-12'>
                        <Logo color='white' />
                        <p className='text-xl text-center lg:text-left'>Motor Masters blandit aliquet elit, eget tincidunt Nibh pulvinar a.</p>
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

                    <div className='w-full flex flex-col md:flex-row md:items-start md:justify-around gap-16'>
                        <div>
                            {
                                services.map((item, i) => <div
                                    key={i}
                                    className='flex flex-col items-center lg:items-start gap-6 lg:gap-12'
                                >
                                    <h3 className='text-3xl font-semibold'>{item.title}</h3>
                                    <ul className='flex flex-col items-start gap-2'>
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
                        <div>
                            {
                                quickLink.map((item, i) => <div
                                    key={i}
                                    className='flex flex-col items-center lg:items-start gap-6 lg:gap-12'
                                >
                                    <h3 className='text-3xl font-semibold'>{item.title}</h3>
                                    <ul className='flex flex-col items-start gap-2'>
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

                    <div
                        className='flex flex-col items-center lg:items-start gap-6 lg:gap-12'
                    >
                        <h3 className='text-3xl font-semibold'>Contact Us</h3>
                        <ul className='flex flex-col items-start gap-8'>
                            <li className='flex items-start gap-4'>
                                <BsClock className='text-primary text-4xl' />
                                <div>
                                    <p>Working Time</p>
                                    <p className='text-lg font-semibold'>Mon-Fri : 09.00 am - 05.00 pm</p>
                                </div>
                            </li>
                            <li className='flex items-start gap-4'>
                                <BsTelephone className='text-primary text-4xl' />
                                <div>
                                    <p>Phone</p>
                                    <p className='text-lg font-semibold'>+125 (405) 555-0128</p>
                                </div>
                            </li>
                            <li className='flex items-start gap-4'>
                                <BsEnvelopeAt className='text-primary text-4xl' />
                                <div>
                                    <p>Email</p>
                                    <p className='text-lg font-semibold'>quick.help@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bg-black py-6'>
                    <div className='max-container w-full text-white text-lg text-center'>
                        <p>&copy; {new Date().getFullYear()} All Rights Reserved By <span className='text-primary hover:text-white'>Motor Masters</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}