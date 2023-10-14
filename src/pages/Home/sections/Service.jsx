import Title from "./Title";
import service1 from '../../../assets/services/1.jpg';
import service2 from '../../../assets/services/2.jpg';
import service3 from '../../../assets/services/3.jpg';
import service4 from '../../../assets/services/4.jpg';
import service5 from '../../../assets/services/5.jpg';
import service6 from '../../../assets/services/6.jpg';
import ServiceCard from "../../../components/ServiceCard";
import uid from "../../../Utils/uid";

/**
 * Service section from Home page
 * @returns {JSX.Element} Service
 */
export default function Service() {
    const serviceData = [
        {
            id: uid(),
            title: 'Electrical System',
            image: service1,
            price: 20
        },
        {
            id: uid(),
            title: 'Engine Diagnostics',
            image: service2,
            price: 25
        },
        {
            id: uid(),
            title: 'Auto Car Repair',
            image: service3,
            price: 50.5
        },
        {
            id: uid(),
            title: 'Electrical System',
            image: service4,
            price: 35.5
        },
        {
            id: uid(),
            title: 'Engine Diagnostics',
            image: service5,
            price: 35.5
        },
        {
            id: uid(),
            title: 'Auto Car Repair',
            image: service6,
            price: 60
        },
    ];

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