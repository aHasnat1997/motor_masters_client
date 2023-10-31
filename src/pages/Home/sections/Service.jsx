import Title from "../components/Title";
import { useSelector } from "react-redux";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import roadShape from "../../../assets/services/road_shape.png";
import icon1 from "../../../assets/services/service_2_1.svg";
import icon2 from "../../../assets/services/service_2_2.svg";
import icon3 from "../../../assets/services/service_2_3.svg";
import icon4 from "../../../assets/services/service_2_4.svg";
import icon5 from "../../../assets/services/service_2_5.svg";
import icon6 from "../../../assets/services/service_2_6.svg";
import Button from "../../../components/Button";

/**
 * Service section from Home page
 * @returns {JSX.Element} Service
 */
export default function Service() {
    const icons = [icon6, icon2, icon5, icon1, icon3, icon4];
    const [currentService, setCurrentService] = useState(0);

    // service data from redux
    const serviceData = useSelector(state => state.services.data);

    // current service data
    const currentServiceData = serviceData.find((data, i) => i === currentService);

    return (
        <section
            className="w-full"
            style={{
                backgroundImage: `url(${roadShape})`,
                backgroundPosition: 'top right',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="max-container flex flex-col gap-8">
                <Title
                    subTitle='Service'
                    mainTitle='Our Service Area'
                    paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                />
                <div className="w-full flex flex-wrap items-center justify-center gap-2 md:gap-6 lg:gap-8">
                    {
                        icons.map((icon, i) => <button
                            key={i}
                            className={`w-fit btn rounded-full p-3 md:p-4 lg:p-6 duration-700 hover:bg-primary/50 
                            ${currentService === i ? 'bg-primary/70' : 'bg-primary/10'}`}
                            onClick={() => setCurrentService(i)}
                        >
                            <div className="w-fit bg-white border-2 border-primary rounded-full p-2 lg:p-4">
                                <img src={icon} alt="icon" className="w-8 md:w-10 lg:w-full" />
                            </div>
                        </button>)
                    }
                </div>
                <div className="w-full flex flex-col md:flex-row gap-8">
                    <div className="w-full">
                        <img src={currentServiceData.image} alt="service image" className="w-full md:h-[32rem] rounded-xl" />
                    </div>
                    <div className="w-full flex flex-col gap-6 items-start">
                        <h3 className="text-2xl md:text-4xl lg:text-6xl font-semibold">{currentServiceData.title}</h3>
                        <p className="lg:text-xl text-gray-500">{currentServiceData.description}</p>
                        <ul>
                            {
                                currentServiceData.serviceList.map((data, i) => <li
                                    key={i}
                                    className="flex items-start gap-2 text-lg lg:text-2xl"
                                >
                                    <TiTick className="text-primary" /> {data}
                                </li>)
                            }
                        </ul>
                        <Button
                            title="Book This Service"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};