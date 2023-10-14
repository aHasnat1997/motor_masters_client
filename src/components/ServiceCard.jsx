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
        <div className="w-full border rounded-xl p-6 group shadow-xl duration-300 hover:shadow-2xl">
            <div className="rounded-xl overflow-hidden">
                <img
                    src={image}
                    alt="service-image"
                    className="w-full h-60 md:h-80 duration-700 group-hover:scale-110"
                />
            </div>
            <h3 className="text-2xl font-semibold mt-8">{title}</h3>
            <div className="mt-2 text-primary flex justify-between">
                <h4 className="text-xl">Price : ${price.toFixed(2)}</h4>
                <button className="text-4xl px-4 duration-300 hover:translate-x-3 click-effect">
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    );
}