/**
 * Banner component represent banner for pages.
 * @param {String} image - banner image.
 * @param {String} title - banner title.
 * @param {String} route - banner route name.
 * @returns {JSX.Element} Banner component.
 */
export default function Banner({ image, title, route }) {
    return (
        <div style={{
            width: '100%',
            backgroundImage: `linear-gradient(to right, #000000fb , #00000034), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            position: 'relative',
        }}
            className="h-[30rem] md:h-[40rem] shadow-2xl"
        >
            <div className="max-container h-full flex items-center">
                <h1 className="text-white text-4xl md:text-7xl font-semibold">{title}</h1>
            </div>
            <div className="w-full absolute bottom-0 flex items-center justify-center">
                <div className="trapezoid"></div>
                <h4 className="px-12 py-6 text-lg md:text-2xl font-semibold text-white absolute">Home / {route}</h4>
            </div>
        </div>
    );
}