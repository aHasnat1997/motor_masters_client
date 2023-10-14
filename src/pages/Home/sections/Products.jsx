import Title from "./Title";
import product1 from '../../../assets/products/1.png';
import product2 from '../../../assets/products/2.png';
import product3 from '../../../assets/products/3.png';
import product4 from '../../../assets/products/4.png';
import product5 from '../../../assets/products/5.png';
import product6 from '../../../assets/products/6.png';
import uid from "../../../Utils/uid";
import ProductsCard from "../../../components/ProductsCard";

/**
 * Products section for the Home page
 * @returns {JSX.Element} Products
 */
export default function Products() {
    // Product Data
    const productData = [
        {
            id: uid(),
            image: product1,
            title: 'Car Engine Plug',
            price: 20,
            ratting: 4
        },
        {
            id: uid(),
            image: product2,
            title: 'Car Air Filter',
            price: 25.6,
            ratting: 4.5
        },
        {
            id: uid(),
            image: product3,
            title: 'Cools Led Light',
            price: 20.5,
            ratting: 3.6
        },
        {
            id: uid(),
            image: product4,
            title: 'Cools Led Light',
            price: 50,
            ratting: 4
        },
        {
            id: uid(),
            image: product5,
            title: 'Car Engine Plug',
            price: 40.76,
            ratting: 5
        },
        {
            id: uid(),
            image: product6,
            title: 'Car Engine Plug',
            price: 20,
            ratting: 4.5
        },
    ]

    return (
        <section className="max-container flex flex-col gap-10">
            <Title subTitle='Popular Products' mainTitle='Browse Our Products' paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    productData.map(data => <div key={data.id}>
                        <ProductsCard
                            image={data.image}
                            title={data.title} price={data.price}
                            ratting={data.ratting}
                        />
                    </div>)
                }
            </div>
            <button className="mx-auto btn-primary-outline px-8 py-4">More Products</button>
        </section>
    )
}