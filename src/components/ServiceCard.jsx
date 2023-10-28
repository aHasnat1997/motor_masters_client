import { AiOutlineArrowRight } from "react-icons/ai";

/**
 * ServiceCard component represents a card for displaying services.
 * @param {string} image - The URL of the service image.
 * @param {string} title - The title of the service.
 * @param {number} price - The price of the service.
 * @returns {JSX.Element} - The rendered ServiceCard component.
 */
export default function ServiceCard({ image, title, price }) {
    return (
        <div className="w-full border rounded-md group shadow-xl duration-300 hover:shadow-2xl overflow-hidden relative">
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt="service-image"
                    className="w-full h-60 md:h-80 duration-700 group-hover:scale-110"
                />
            </div>
            <div className="w-full bg-white flex items-end justify-center">
                <div className="w-[80%] bg-primary px-4 py-6 duration-700 group-hover:absolute group-hover:left-0 group-hover:rounded-tr-3xl">
                    <div className="text-white">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <div className="duration-700 scale-y-0 group-hover:scale-y-100">
                            <div className="mt-4 hidden group-hover:block">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam praesentium, obcaecati possimus nostrum odit suscipit,</p>
                                <p className="font-semibold text-lg">Price: $ {price}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[20%] my-5 ml-auto flex items-center justify-center">
                    <button className="text-4xl duration-300 active:translate-x-3 group-hover:text-primary">
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}