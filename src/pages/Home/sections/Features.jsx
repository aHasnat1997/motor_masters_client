import box from '../../../assets/icons/box.svg';
import boxW from '../../../assets/icons/box-w.svg';
import clock from '../../../assets/icons/clock.svg';
import clockW from '../../../assets/icons/clock-w.svg';
import group from '../../../assets/icons/group.svg';
import groupW from '../../../assets/icons/group-w.svg';
import shield from '../../../assets/icons/shield.svg';
import shieldW from '../../../assets/icons/shield-w.svg';
import support from '../../../assets/icons/support.svg';
import supportW from '../../../assets/icons/support-w.svg';
import wrench from '../../../assets/icons/wrench.svg';
import wrenchW from '../../../assets/icons/wrench-w.svg';
import Title from './Title';
import uid from '../../../Utils/uid';
import { useState } from 'react';

/**
 * Features section for the Home page.  
 * @returns Features.
 */
export default function Features() {
    const [white, setWhite] = useState(false);

    const boxData = [
        {
            id: uid(),
            icon: group,
            hoverIcon: groupW,
            title: 'Expert Team'
        },
        {
            id: uid(),
            icon: clock,
            hoverIcon: clockW,
            title: 'Timely Delivery'
        },
        {
            id: uid(),
            icon: support,
            hoverIcon: supportW,
            title: '24/7 Support'
        },
        {
            id: uid(),
            icon: wrench,
            hoverIcon: wrenchW,
            title: 'Best Equipment'
        },
        {
            id: uid(),
            icon: shield,
            hoverIcon: shieldW,
            title: '100% Guaranty'
        },
        {
            id: uid(),
            icon: box,
            hoverIcon: boxW,
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
                        className='border rounded-xl shadow-md duration-500 hover:bg-primary hover:text-white p-8 flex flex-col items-center justify-center'
                        onMouseEnter={() => setWhite(true)}
                        onMouseLeave={() => setWhite(false)}
                    >
                        <img src={white ? data.hoverIcon : data.icon} alt="icon" />
                        <p className='font-bold'>{data.title}</p>
                    </div>)
                }
            </div>
        </section>
    );
}