import Title from './Title';
import uid from '../../../Utils/uid';
import { useState } from 'react';
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsTools, BsFillBoxSeamFill } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";

/**
 * Features section for the Home page.  
 * @returns Features.
 */
export default function Features() {
    const [white, setWhite] = useState(false);

    const boxData = [
        {
            id: uid(),
            icon: <RiTeamLine />,
            title: 'Expert Team'
        },
        {
            id: uid(),
            icon: <AiOutlineClockCircle />,
            title: 'Timely Delivery'
        },
        {
            id: uid(),
            icon: <BiSupport />,
            title: '24/7 Support'
        },
        {
            id: uid(),
            icon: <BsTools />,
            title: 'Best Equipment'
        },
        {
            id: uid(),
            icon: <MdOutlineVerifiedUser />,
            title: '100% Guaranty'
        },
        {
            id: uid(),
            icon: <BsFillBoxSeamFill />,
            title: 'Timely Delivery'
        },
    ];

    return (
        <section className='max-container flex flex-col gap-10'>
            <Title subTitle='Core Features' mainTitle='Why Choose Us' paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                {
                    boxData.map(data => <div
                        key={data.id}
                        className='border rounded-xl shadow-md duration-500 hover:bg-primary text-gray-400 hover:text-white p-8 flex flex-col items-center justify-center gap-2'
                    >
                        <span className='text-6xl'>{data.icon}</span>
                        <p className='font-bold'>{data.title}</p>
                    </div>)
                }
            </div>
        </section>
    );
}