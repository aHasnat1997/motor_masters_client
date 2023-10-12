import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import ServiceCard from "../components/ServiceCard";
import serviceOne from "../assets/services/1.jpg";
import serviceTwo from "../assets/services/2.jpg";
import serviceThree from "../assets/services/3.jpg";
import productOne from "../assets/products/1.png";
import productTwo from "../assets/products/2.png";
import productThree from "../assets/products/3.png";
import ProductsCard from "../components/ProductsCard";
import Banner from "../components/Banner";
import bannerImg from "../assets/banner/4.jpg";

export default function ClientLayout() {
    return (
        <>
            <MainNav />
            <main>

                <div>
                    <Banner image={bannerImg} title='Service Details' route='Service Details' />
                </div>

                <div className="max-container my-8 flex items-center justify-center gap-4">
                    <button className="btn-primary px-6 py-3">Button</button>
                    <button className="btn-primary-outline px-6 py-3">Button</button>
                    <button className="btn-slider p-3">{'=>'}</button>
                    <button className="btn-cancel px-3 py-1">x</button>
                </div>

                <div className="max-container my-8 lg:flex gap-8">
                    <ServiceCard image={serviceOne} title='Electrical System' price='20.00' />
                    <ServiceCard image={serviceTwo} title='Electrical System' price='20.00' />
                    <ServiceCard image={serviceThree} title='Electrical System' price='20.00' />
                </div>

                <div className="max-container my-8 lg:flex gap-8">
                    <ProductsCard image={productOne} title='Car Engine Plug' price='20.00' ratting={4.4} />
                    <ProductsCard image={productTwo} title='Car Engine Plug' price='20.00' ratting={2.3} />
                    <ProductsCard image={productThree} title='Car Engine Plug' price='20.00' ratting={5} />
                </div>

            </main>
            <Footer />
        </>
    );
}