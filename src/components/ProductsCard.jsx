import PropTypes from 'prop-types';
import Ratting from "./Ratting";

/**
 * ProductsCard component represents a card for displaying products.
 * @param {string} image - The URL of the product image.
 * @param {string} title - The title of the product.
 * @param {number} price - The price of the product.
 * @param {number} ratting - The ratting of the product.
 * @returns {JSX.Element} - The rendered ProductsCard component.
 */
export default function ProductsCard({ image, title, price, ratting }) {
    return (
        <div className="cursor-pointer w-full rounded-xl p-6 group shadow-xl duration-300 hover:shadow-2xl click-effect">
            <div className="rounded-xl overflow-hidden">
                <img
                    src={image}
                    alt="product-image"
                    className="w-full h-60 md:h-80 duration-700 group-hover:scale-110"
                />
            </div>
            <div className="mt-8 flex flex-col items-center gap-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <h4 className="text-xl text-primary">Price : ${price.toFixed(2)}</h4>
                <Ratting ratting={ratting} />
            </div>
        </div>
    );
}
ProductsCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    ratting: PropTypes.number
}