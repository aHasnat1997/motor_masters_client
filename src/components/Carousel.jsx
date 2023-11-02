import PropTypes from 'prop-types';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

/**
 * Carousel Component * @param {Number} page Current Page Number 
 * @param {Number} setPage Set Current Page Number 
 * @param {Number} pageLimit Max Page Number * 
 * @returns Carousel Component 
 * */
export default function Carousel({ page, setPage, pageLimit }) {
    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= pageLimit; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();
    const maxVisibleButtons = 2;
    const buttonsToShow = [];
    buttonsToShow.push(...pageNumbers.slice(0, maxVisibleButtons));

    return (
        <div className="flex items-center gap-1 lg:gap-2">
            <button
                className="btn-slider"
                onClick={() => page > 1 && setPage(page - 1)} >
                <AiOutlineArrowLeft />
            </button>
            {
                buttonsToShow.map((num, i) => (<div
                    key={i}
                >
                    <button
                        key={i}
                        className="h-full w-full"
                        onClick={() => num !== "..." && setPage(num)}
                    >
                        {num}
                    </button>
                </div>))
            }
            <button
                className="btn-slider"
                onClick={() => page < pageLimit && setPage(page + 1)}
            >
                <AiOutlineArrowRight />
            </button>
        </div>);
}
Carousel.propTypes = {
    page: PropTypes.number,
    setPage: PropTypes.number,
    pageLimit: PropTypes.number
};