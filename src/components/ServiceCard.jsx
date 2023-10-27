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
            <div className="w-full bg-white flex items-end justify-center absolute bottom-0 z-10">
                <div className="w-3/4 bg-primary p-6 group-hover:absolute group-hover:left-0">
                    <div className="text-white duration-700">
                        <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
                        <p className="mt-4 duration-700 hidden scale-0 group-hover:block group-hover:scale-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam praesentium, obcaecati possimus nostrum odit suscipit,</p>
                    </div>
                </div>
                <div className="w-1/4 my-5 ml-auto flex items-center justify-center">
                    <button className="text-4xl duration-300 hover:translate-x-3 click-effect group-hover:text-primary">
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}