import uid from "../../../Utils/uid";
import Ratting from "../../../components/Ratting";
import Title from "./Title";
import { ImQuotesRight } from "react-icons/im";

/**
 * Testimonial section for the Home page.
 * @returns Testimonial.
 */
export default function Testimonial() {
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
    ]

    return (
        <section className="max-container">
            <Title subTitle='Testimonial' mainTitle='What Customer Says' paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-20">
                {
                    testimonialData.map(data => <div
                        key={data.id}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <img src={data.image} alt="user-image" className="w-20 h-20 rounded-full" />
                                <h2 className="text-2xl md:text-4xl font-semibold">{data.name}</h2>
                            </div>
                            <div className="text-6xl flex items-center text-primary/30">
                                <ImQuotesRight />
                            </div>
                        </div>
                        <p className="text-gray-600">{data.comment}</p>
                        <Ratting ratting={data.ratting} />
                    </div>)
                }
            </div>
        </section>
    );
}