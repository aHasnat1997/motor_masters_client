import { useEffect, useState } from 'react';
import banner1 from '../../../assets/banner/1.jpg';
import banner2 from '../../../assets/banner/2.jpg';
import banner3 from '../../../assets/banner/3.jpg';
import banner4 from '../../../assets/banner/4.jpg';
import banner5 from '../../../assets/banner/5.jpg';
import banner6 from '../../../assets/banner/6.jpg';
import Button from '../../../components/Button';

// Images array for background
const images = [banner1, banner2, banner3, banner4, banner5, banner6];

// Headings for the Hero
const headings = [
    'Affordable Price For Car Servicing',
    'Good Customer Service',
    'Best Quality Products',
    'Good Technicians',
    'Best Equipment for Proper Servicing',
    'Honesty and Truthfulness in Service',
];

/**
 * Hero section of the website.
 * @returns {JSX.Element} Hero.
 */
export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Change contents every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className='relative h-[92vh] overflow-hidden'>
            <div style={{
                backgroundImage: `radial-gradient(#0000005b, #000000), url(${images[currentSlide]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
                className='w-full h-full animate-imgBlur'
            />
            <div className='w-full h-full absolute top-0 flex items-center'>
                <div className='max-container'>
                    <div className='w-full lg:w-1/2 flex flex-col gap-8'>
                        <h1 className='text-white text-4xl md:text-8xl font-bold animate-textSlid'>
                            {headings[currentSlide]}
                        </h1>
                        <div className='animate-slideTop'>
                            <p className='text-white md:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex flex-col md:flex-row items-center gap-2 mt-4'>
                                <Button
                                    title='Discover More'
                                    btnStyle='btn-primary px-6 py-4'
                                />
                                <Button
                                    title='Latest Project'
                                    btnStyle='btn-outline border-white text-white px-6 py-4 hover:text-black'
                                    bgHover='bg-white'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}