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
import Cart from "../components/Cart";

export default function ClientLayout() {
    return (
        <>
            <MainNav />
            <main>

                <div>
                    <Banner image={bannerImg} title='Service Details' route='Service Details' />
                </div>

                <div className="max-container my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard image={serviceOne} title='Electrical System' price='20.00' />
                    <ServiceCard image={serviceTwo} title='Electrical System' price='20.00' />
                    <ServiceCard image={serviceThree} title='Electrical System' price='20.00' />
                    <ServiceCard image={serviceThree} title='Electrical System' price='20.00' />
                </div>

                <div className="max-container my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductsCard image={productOne} title='Car Engine Plug' price='20.00' ratting={4.4} />
                    <ProductsCard image={productTwo} title='Car Engine Plug' price='20.00' ratting={2.3} />
                    <ProductsCard image={productThree} title='Car Engine Plug' price='20.00' ratting={5} />
                    <ProductsCard image={productThree} title='Car Engine Plug' price='20.00' ratting={5} />
                </div>

                <div className="max-container my-8 flex flex-col gap-8">
                    <Cart
                        image={productOne}
                        title='Title of the Product or Service'
                        price='525.67'
                        date='25/10/2034'
                        status='Pending'
                    />
                    <Cart
                        image={serviceTwo}
                        title='Title of the Product or Service'
                        price='525.67'
                        date='25/10/2034'
                        status='Pending'
                    />
                </div>

            </main>
            {/* <Footer /> */}
        </>
    );
}