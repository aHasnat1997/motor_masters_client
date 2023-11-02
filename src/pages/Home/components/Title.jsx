import PropTypes from "prop-types";

/**
 * Title component for Home page
 * @param {String} subTitle - subtitle for the Title component.  
 * @param {String} mainTitle - main title for the Title component.  
 * @param {String} paragraph - short paragraph title for the Title component.
 * @param {Boolean} subTitleCenter - subtitle position center true or false for the Title component.
 * @returns {JSX.Element} Title component 
 */
export default function Title({ subTitle, mainTitle, paragraph, subTitleCenter = true }) {
    return (
        <div className={`flex flex-col gap-4 ${subTitleCenter ? 'items-center text-center' : ''}`}>
            <h4 className="text-2xl font-semibold italic text-primary">{subTitle}</h4>
            <h2 className="text-secondary text-4xl lg:text-6xl font-bold leading-[3.5rem]">{mainTitle}</h2>
            <p className="lg:w-1/2 text-xl text-gray-500 flex flex-col gap-4 leading-9">{paragraph}</p>
        </div>
    );
}
Title.propTypes = {
    subTitle: PropTypes.string,
    mainTitle: PropTypes.string,
    paragraph: PropTypes.string,
    subTitleCenter: PropTypes.bool
}