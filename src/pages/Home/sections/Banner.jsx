import { useState } from 'react';
import banner1 from '../../../assets/banner/1.jpg';
import banner2 from '../../../assets/banner/2.jpg';
import banner3 from '../../../assets/banner/3.jpg';
import banner4 from '../../../assets/banner/4.jpg';
import banner5 from '../../../assets/banner/5.jpg';
import banner6 from '../../../assets/banner/6.jpg';

export default function Banner() {
    const images = [banner1, banner2, banner3, banner4, banner5, banner6];
    const [currentSlide, setCurrentSlide] = useState(0);
    const bannerImage = images[currentSlide];

    // setInterval(() => {
    //     setCurrentSlide((prev) => {
    //         if (prev > 7) {
    //             return 0;
    //         }
    //         return prev + 1;
    //     })
    // }, 2000);

    return (
        <section style={{
            width: '100%',
            height: '91vh',
            background: `radial-gradient(#0000005b, #000000), url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
            className='flex items-center'
        >
            <div className='max-container'>
                <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                    <h1 className='text-white text-4xl md:text-8xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p className='text-white md:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex flex-col md:flex-row items-center gap-2'>
                        <button className='btn-primary px-6 py-3'>Discover More</button>
                        <button className='btn-outline border-white text-white px-6 py-3'>Latest Project</button>
                    </div>
                </div>
            </div>
        </section>
    );
}