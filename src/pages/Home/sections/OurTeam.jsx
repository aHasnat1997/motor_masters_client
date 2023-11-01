import uid from "../../../Utils/uid";
import Title from "../components/Title";
import team1 from "../../../assets/team/1.jpg";
import team2 from "../../../assets/team/2.jpg";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from "../../../components/Button";

/**
 * Team section for the Home page. 
 * @returns {JSX.Element} OurTeam.
 */
export default function OurTeam() {
    const teamData = [
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
        }
    ]

    return (
        <section className="max-container w-full flex flex-col lg:flex-row items-center justify-between gap-16">
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
                        title={<FaArrowLeft />}
                        btnStyle="btn-slider p-4"
                    />
                    <Button
                        title={<FaArrowRight />}
                        btnStyle="btn-slider p-4"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
                {
                    teamData.map(data => <div
                        key={data.id}
                        className="overflow-hidden border rounded-xl flex flex-col items-center gap-4 group"
                    >
                        <div className="overflow-hidden">
                            <img src={data.image} alt="user-image" className="w-full h-60 duration-500 group-hover:scale-110" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold">{data.name}</h3>
                            <p className="text-primary">{data.expert}</p>
                        </div>
                        <div className="overflow-hidden relative w-full border-t-2">
                            <div className="w-full absolute -z-10 h-20 bg-secondary duration-500 origin-bottom scale-y-0 group-hover:scale-y-100" />
                            <div className=" flex items-center justify-center gap-4 text-2xl py-4 duration-200 group-hover:text-white">
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
                    </div>)
                }
            </div>
        </section>
    );
}