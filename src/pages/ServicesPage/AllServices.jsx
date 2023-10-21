import uid from "../../Utils/uid";
import ServiceCard from "../../components/ServiceCard";
import service1 from '../../assets/services/1.jpg';
import service2 from '../../assets/services/2.jpg';
import service3 from '../../assets/services/3.jpg';
import service4 from '../../assets/services/4.jpg';
import service5 from '../../assets/services/5.jpg';
import service6 from '../../assets/services/6.jpg';

/**
 * All Services Page for the website. 
 * @returns {JSX.Element} AllServices 
 */
export default function AllServices() {
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
        <div className="max-container my-16">
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
        </div>
    );
};