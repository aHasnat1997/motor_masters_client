/**
 * Product and Service cart for the website.
 * @param {String} image - Cart image.
 * @param {String} title - Cart title.
 * @param {String} date - Cart order date.
 * @param {String} status - Cart order status.
 * @returns {JSX.Element} Cart component.
 */
export default function Cart({ image, title, price, date, status }) {
    return (
        <div className="w-full flex items-center justify-between text-lg lg:text-2xl gap-4">
            <div className="flex items-center gap-4">
                <button className="btn-cancel px-3 py-1">x</button>
                <div className="w-20 h-20 lg:w-40 lg:h-40 overflow-hidden rounded-xl">
                    <img src={image} alt="cart-image" className="w-full h-full" />
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-start">
                <h3 className="md:w-60 font-semibold">{title}</h3>
                <p>$ {price}</p>
                <p>{date}</p>
                <div className="bg-primary px-4 py-2 text-white font-semibold rounded-lg">{status}</div>
            </div>
        </div>
    );
}