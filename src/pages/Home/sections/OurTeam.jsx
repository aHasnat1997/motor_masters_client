import uid from "../../../Utils/uid";
import Title from "../components/Title";
import team1 from "../../../assets/team/1.jpg";
import team2 from "../../../assets/team/2.jpg";
import team3 from "../../../assets/team/3.jpg";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

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
        },
        {
            id: uid(),
            name: 'Keven Hunt',
            image: team3,
            expert: 'Engine Expert'
        },
    ]

    return (
        <section className="max-container">
            <Title subTitle='Team' mainTitle='Meet Our Team' paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
                {
                    teamData.map(data => <div
                        key={data.id}
                        className="border rounded-xl p-4 flex flex-col items-center gap-4"
                    >
                        <div className="overflow-hidden rounded-xl">
                            <img src={data.image} alt="user-image" className="w-full h-60" />
                        </div>
                        <h3 className="text-2xl font-semibold">{data.name}</h3>
                        <p>{data.expert}</p>
                        <div className="flex items-center gap-4 text-4xl">
                            <BsFacebook />
                            <BsInstagram />
                            <BsLinkedin />
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
}