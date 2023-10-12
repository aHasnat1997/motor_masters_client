import { BsStarFill, BsStarHalf } from "react-icons/bs";

/**
 * Ratting component represents ratting stars.
 * @param {Number} ratting - Ratting number.
 * @returns {JSX.Element} Ratting stars
 */
export default function Ratting({ ratting = 0 }) {
    return (
        <div className="flex items-center text-2xl gap-6 text-[#FF912C]">
            {
                [...Array(Math.ceil(ratting - 1))].map((array, i) => <div key={i}>
                    <BsStarFill />
                </div>)
            }
            {
                ratting % 1 === 0 ? <BsStarFill /> : <BsStarHalf />
            }
        </div>
    );
}