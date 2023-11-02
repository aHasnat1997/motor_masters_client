import PropTypes from 'prop-types';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
// import { useState } from "react";

/**
 * Ratting component represents ratting stars.
 * @param {Number} ratting - Ratting number.
 * @returns {JSX.Element} Ratting stars
 */
export default function Ratting({ ratting = 0 }) {
    // const [open, setOpen] = useState(false);

    return (
        <div className="relative flex items-center text-2xl gap-6 text-[#FF912C] tooltip">
            {
                [...Array(Math.ceil(ratting - 1))].map((array, i) => <div key={i}>
                    <BsStarFill />
                </div>)
            }
            {
                ratting % 1 === 0 ? <BsStarFill /> : <BsStarHalf />
            }
            {/* <div className="tooltipText">
                {
                    ratting
                }
            </div> */}
        </div>
    );
}
Ratting.propTypes = {
    ratting: PropTypes.number
}