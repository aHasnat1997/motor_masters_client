
/**
 * Title component for Home page
 * @param {String} subTitle - subtitle for the Title component.  
 * @param {String} mainTitle - main title for the Title component.  
 * @param {String} paragraph - short paragraph title for the Title component.
 * @returns {JSX.Element} Title component 
 */
export default function Title({ subTitle, mainTitle, paragraph }) {
    return (
        <div className={`flex flex-col gap-4 ${paragraph ? 'items-center text-center' : ''}`}>
            <h4 className="text-2xl font-semibold italic text-primary">{subTitle}</h4>
            <h2 className="md:w-1/2 text-4xl md:text-6xl font-bold leading-[3.5rem]">{mainTitle}</h2>
            <p className="text-xl text-gray-500 flex flex-col gap-4 leading-9">{paragraph}</p>
        </div>
    );
}