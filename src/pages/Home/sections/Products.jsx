import Title from "../components/Title";
import ProductsCard from "../../../components/ProductsCard";
import { useSelector } from "react-redux";
import Button from "../../../components/Button";

/**
 * Products section for the Home page
 * @returns {JSX.Element} Products
 */
export default function Products() {
    const productData = useSelector((state) => state.products.data);

    return (
        <section className="max-container flex flex-col gap-10">
            <Title subTitle='Popular Products' mainTitle='Browse Our Products' paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    productData.slice(0, 6).map(data => <div key={data.id}>
                        <ProductsCard
                            image={data.image}
                            title={data.title}
                            price={data.price}
                            ratting={data.ratting}
                        />
                    </div>)
                }
            </div>
            <Button
                title="More Products"
                btnStyle="mx-auto btn-primary-outline px-8 py-4 hover:text-white"
                bgHover="bg-primary"
            />
        </section>
    )
}