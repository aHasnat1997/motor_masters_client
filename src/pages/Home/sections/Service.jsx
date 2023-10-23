import Title from "./Title";
import ServiceCard from "../../../components/ServiceCard";
import { useSelector } from "react-redux";

/**
 * Service section from Home page
 * @returns {JSX.Element} Service
 */
export default function Service() {
    const serviceData = useSelector(state => state.services.data)

    return (
        <section className="max-container flex flex-col gap-10">
            <Title subTitle='Service' mainTitle='Our Service Area' paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    serviceData.map(data => <div key={data.id}>
                        <ServiceCard
                            image={data.image}
                            title={data.title}
                            price={data.price}
                        />
                    </div>)
                }
            </div>
            <button className="mx-auto btn-primary-outline px-8 py-4">More Services</button>
        </section>
    );
}