import uid from "../../../Utils/uid";
import Title from "../components/Title";
import team1 from "../../../assets/team/1.jpg";
import team2 from "../../../assets/team/2.jpg";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from "../../../components/Button";
import { useEffect } from "react";
// import Carousel from "../../../components/Carousel";

/**
 * Team section for the Home page. 
 * @returns {JSX.Element} OurTeam.
 */
export default function OurTeam() {
    const teamData = [
        {
            id: uid(),
            name: 'John D. Morgan',
            image: team1,
            expert: 'Engine Expert'
        },
        {
            id: uid(),
            name: 'Alex John',
            image: team2,
            expert: 'Engine Expert'
        },
        {
            id: uid(),
            name: 'John D. Morgan',
            image: team1,
            expert: 'Engine Expert'
        },
        {
            id: uid(),
            name: 'Alex John',
            image: team2,
            expert: 'Engine Expert'
        },
    ];

    useEffect(() => {
        document.getElementById('scrollRight').addEventListener('click', () => {
            document.getElementById('scroll').scrollBy(300, 0);
        })
        document.getElementById('scrollLeft').addEventListener('click', () => {
            document.getElementById('scroll').scrollBy(-300, 0);
        })
    }, []);

    return (
        <section className="max-container flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full flex flex-col gap-8">
                <Title
                    subTitle='Expert Technician'
                    mainTitle='Meet Our Experts'
                    subTitleCenter={false}
                />
                <p className="lg:text-xl text-gray-500 text-justify">
                    Monotonically reinter mediate reliable outside the box thinking vis-à-vis multimedia base alignment. Intrinsically seize backend schemas vis-à-vis viral e commerce. Dramatically administrate innovative ideas after cross-media users. Rapaciously exploit resource maximizing.
                </p>
                <div className="flex items-center gap-6">
                    <Button
                        id='scrollLeft'
                        title={<FaArrowLeft />}
                        btnStyle="btn-slider p-4"
                    />
                    <Button
                        id='scrollRight'
                        title={<FaArrowRight />}
                        btnStyle="btn-slider p-4"
                    />
                </div>
            </div>

            <div
                id='scroll'
                className="w-full h-[25rem] px-2 flex items-center justify-start gap-6 overflow-x-scroll no-scrollbar duration-700 scroll-smooth"
            >
                {
                    teamData.map(data => <div
                        key={data.id}
                        className="w-fit h-full mt-8 flex-1 flex flex-col items-center gap-4 group"
                    >
                        <div className="w-60 md:w-[21.5rem] overflow-hidden">
                            <img
                                src={data.image}
                                alt="user-image"
                                className="w-full h-60 md:h-80 duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="w-[85%] relative mt-[-6.5rem] bg-white shadow-xl">
                            <div className="text-center py-4">
                                <h3 className="text-2xl font-semibold">{data.name}</h3>
                                <p className="text-primary">{data.expert}</p>
                            </div>
                            <div className="overflow-hidden relative w-full border-t border-secondary/30">
                                <div className="w-full absolute z-10 h-20 bg-secondary duration-500 origin-bottom scale-y-0 group-hover:scale-y-100" />
                                <div className="flex items-center justify-center gap-4 text-2xl py-4 duration-200 group-hover:text-white relative z-20">
                                    <span className="cursor-pointer bg-secondary/10 rounded-full p-2 duration-500 hover:bg-primary">
                                        <FaFacebookF />
                                    </span>
                                    <span className="cursor-pointer bg-secondary/10 rounded-full p-2 duration-500 hover:bg-primary">
                                        <FaTwitter />
                                    </span>
                                    <span className="cursor-pointer bg-secondary/10 rounded-full p-2 duration-500 hover:bg-primary">
                                        <FaLinkedinIn />
                                    </span>
                                    <span className="cursor-pointer bg-secondary/10 rounded-full p-2 duration-500 hover:bg-primary">
                                        <FaInstagram />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            {/* to-do: fix component */}
            {/* <div className="w-full">
                <Carousel
                    btnRight='scrollLeft'
                    btnLeft='scrollRight'
                >
                    {
                        teamData.map(data => <div
                            key={data.id}
                            className="w-fit h-full mt-8 flex-1 flex flex-col items-center gap-4 group"
                        >
                            <div className="w-60 md:w-[21.5rem] overflow-hidden">
                                <img
                                    src={data.image}
                                    alt="user-image"
                                    className="w-full h-60 md:h-80 duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="w-[85%] relative mt-[-6.5rem] bg-white shadow-xl">
                                <div className="text-center py-4">
                                    <h3 className="text-2xl font-semibold">{data.name}</h3>
                                    <p className="text-primary">{data.expert}</p>
                                </div>
                                <div className="overflow-hidden relative w-full border-t border-secondary/30">
                                    <div className="w-full absolute z-10 h-20 bg-secondary duration-500 origin-bottom scale-y-0 group-hover:scale-y-100" />
                                    <div className="flex items-center justify-center gap-4 text-2xl py-4 duration-200 group-hover:text-white relative z-20">
                                        <span className="cursor-pointer bg-secondary/10 rounded-full p-2 duration-500 hover:bg-primary">
                                            <FaFacebookF />
                                        </span>
                                        <span className="cursor-pointer bg-secondary/10 rounded-full p-2 duration-500 hover:bg-primary">
                                            <FaTwitter />
                                        </span>
                                        <span className="cursor-pointer bg-secondary/10 rounded-full p-2 duration-500 hover:bg-primary">
                                            <FaLinkedinIn />
                                        </span>
                                        <span className="cursor-pointer bg-secondary/10 rounded-full p-2 duration-500 hover:bg-primary">
                                            <FaInstagram />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </Carousel>
            </div> */}
        </section>
    );
}