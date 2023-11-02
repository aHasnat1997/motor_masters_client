import PropTypes from 'prop-types';
import { useEffect } from 'react';

/**
 * Carousel Component 
 * @param {String} btnRight Right button id.
 * @param {String} btnLeft Left button id.
 * @param {JSX.Element} child body of the Carousel.
 * @returns {JSX.Element} Carousel Component 
 * */
export default function Carousel({ btnRight, btnLeft, children }) {

    useEffect(() => {
        document.getElementById(btnRight).addEventListener('click', () => {
            document.getElementById('scroll').scrollBy(300, 0);
        })
        document.getElementById(btnLeft).addEventListener('click', () => {
            document.getElementById('scroll').scrollBy(-300, 0);
        })
    });

    return (
        <div
            id='scroll'
            className="w-full h-[25rem] px-2 flex items-center justify-start gap-6 overflow-x-scroll no-scrollbar duration-700 scroll-smooth"
        >
            {children}
        </div>
    )
}
Carousel.propTypes = {
    btnRight: PropTypes.string,
    btnLeft: PropTypes.string,
    children: PropTypes.any
};