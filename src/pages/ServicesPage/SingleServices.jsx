import bgImg from '../../assets/banner/4.jpg';
import Banner from '../../components/Banner';

/**
 * Single Services details page of the website.
 * @returns {JSX.Element} SingleServices
 */
export default function SingleServices() {
    return (
        <div className="flex flex-col gap-20 mb-20">
            {/* to-do: dynamic title */}
            <Banner image={bgImg} title='Engine Diagnostics' route='Services details' />

        </div>
    )
}