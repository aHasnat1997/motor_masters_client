import uid from "../../../Utils/uid";
import Ratting from "../../../components/Ratting";
import Title from "../components/Title";
import { BiSolidQuoteRight } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import bgImg from "../../../assets/home/testi_bg_1-1.png";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";

/**
 * Testimonial section for the Home page.
 * @returns Testimonial.
 */
export default function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonialData = [
        {
            id: uid(),
            name: 'Awlad Hossain',
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            ratting: 4.5
        },
        {
            id: uid(),
            name: 'Awlad Hossain',
            image: 'https://img.freepik.com/premium-photo/caucasian-handsome-man-beige-wall-laughing_1368-97190.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais',
            comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            ratting: 4
        },
        {
            id: uid(),
            name: 'Awlad Hossain',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            ratting: 4.5
        },
        {
            id: uid(),
            name: 'Awlad Hossain',
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            ratting: 4.5
        },
        {
            id: uid(),
            name: 'Awlad Hossain',
            image: 'https://img.freepik.com/premium-photo/caucasian-handsome-man-beige-wall-laughing_1368-97190.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais',
            comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            ratting: 4
        },
        {
            id: uid(),
            name: 'Awlad Hossain',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            ratting: 4.5
        },
    ];

    const currentTestimonialData = testimonialData.find((data, i) => i === currentSlide);

    // Change contents every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonialData.length);
        }, 8000);

        return () => {
            clearInterval(interval);
        };
    }, [testimonialData.length]);

    return (
        <section
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right'

            }}
            className="py-36 relative bg-secondary/10"
        >
            <div className="absolute top-0 w-[100%] lg:w-[70%] mt-20 border-solid border-t-[50rem] md:border-t-[38rem] border-t-white/90 lg:border-t-white lg:border-r-[16rem] border-x-transparent" />
            <div className="max-container relative z-10">
                <Title
                    subTitle='Testimonial'
                    mainTitle='What Customer Says?'
                    subTitleCenter={false}
                />
                <div className="w-full">
                    <div className="w-fit mt-8 flex items-center justify-center gap-20">
                        <div
                            className="w-full md:w-[43rem] flex flex-col gap-6"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <img src={currentTestimonialData?.image} alt="user-image" className="w-20 h-20 rounded-full" />
                                    <h2 className="text-2xl md:text-4xl font-semibold">{currentTestimonialData?.name}</h2>
                                </div>
                                <div className="text-6xl flex items-center text-primary/50">
                                    <BiSolidQuoteRight />
                                </div>
                            </div>
                            <p className="text-gray-600">{currentTestimonialData?.comment}</p>
                            <Ratting ratting={currentTestimonialData?.ratting} />
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex gap-8">
                    <Button
                        id='scrollLeft'
                        title={<FaArrowLeft />}
                        btnStyle="btn-slider p-4"
                        onClick={() => currentSlide >= 1 && setCurrentSlide(currentSlide - 1)}
                    />
                    <Button
                        id='scrollRight'
                        title={<FaArrowRight />}
                        btnStyle="btn-slider p-4"
                        onClick={() => currentSlide < testimonialData.length - 1 && setCurrentSlide(currentSlide + 1)}
                    />
                </div>
            </div>
        </section>
    );
}