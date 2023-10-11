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

export default function ClientLayout() {
    return (
        <>
            <MainNav />
            <main className="max-container">
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe natus odit omnis excepturi recusandae quas ex placeat, nostrum iste incidunt, deserunt esse, minus itaque. Tenetur a corporis odio ipsum illum doloremque est necessitatibus laudantium minus officiis laborum voluptatum sed exercitationem facere placeat aliquam rem voluptate, commodi culpa sint fugit. Iure explicabo rerum odit unde inventore nesciunt, doloremque magnam facere corporis eveniet accusamus at sint accusantium doloribus repudiandae alias non nostrum, sequi facilis distinctio? Dolores in cupiditate corrupti odio velit quos, magnam deleniti aut. Ipsum animi odio officiis dicta hic, facilis tempora consequatur delectus molestiae excepturi libero quidem, voluptatum suscipit accusantium reprehenderit ipsam illo eveniet aut, in temporibus aliquid. Laborum ut explicabo tempora nesciunt ab, doloribus exercitationem iste labore neque? Fuga sequi vitae, quia dolore veniam amet, omnis tempora eaque aliquid placeat dolores! Ab natus fugiat modi alias adipisci. Quas molestias rerum minima omnis a similique aspernatur quae modi, voluptatibus ullam illum! Deleniti praesentium voluptatum eos, quidem maiores repellendus facilis, cupiditate minus maxime doloribus ullam quod modi quisquam sint quo accusamus nobis tempore numquam in corrupti voluptatem! Expedita accusamus itaque vero voluptate inventore magni nisi explicabo, eveniet provident amet cum vel laborum totam ratione nemo eligendi pariatur id quas assumenda, autem harum iusto dolore! Perspiciatis, qui iusto. Eius veniam ut deleniti quo quas a cum ab mollitia omnis rem, ducimus et? Repellat vero dolor ducimus ut laboriosam atque iste libero a corporis nihil, suscipit qui iusto sequi rem quam nesciunt vitae, beatae, quos eos repudiandae magnam tenetur corrupti! Repudiandae, voluptates pariatur incidunt debitis, commodi vero cumque vel eligendi sit laboriosam velit! Exercitationem accusamus temporibus praesentium, blanditiis dolores perspiciatis laborum ad nesciunt sequi neque corporis quas, architecto eveniet asperiores tempore. Suscipit sed esse illo ex odio voluptas, inventore quidem? Corrupti numquam eveniet, sit aut quae rerum fugit nihil sed nostrum voluptas, vel voluptatibus rem recusandae accusamus error perspiciatis esse soluta, similique alias. Iusto quasi, debitis obcaecati voluptatibus id doloribus, illum quas sequi rerum in iure ea sunt itaque mollitia incidunt minus ab deserunt. Doloribus ipsam excepturi eligendi libero earum est culpa velit voluptatum? Cupiditate, est dolorum sed consequuntur, corporis quae quasi, dicta nam dolore doloribus et incidunt hic officia harum. Beatae ratione minima cumque et veniam tempore eos, omnis exercitationem quam quod adipisci aut eum iste saepe reprehenderit sit voluptatibus est necessitatibus, veritatis possimus perferendis! Id necessitatibus consectetur sequi quae! Quasi modi, a velit sit at, maiores aperiam quaerat architecto alias labore cupiditate laborum iste eaque provident doloribus? Quod cupiditate similique quidem quisquam rerum minus. Voluptates hic nobis sequi eum sint facilis suscipit ad incidunt pariatur, culpa maxime! Cumque molestiae ipsam recusandae totam. Aliquid eveniet culpa iste exercitationem quis itaque accusantium dolores! Laborum delectus laudantium natus maiores quidem facilis, provident, minima animi maxime alias ad, distinctio corporis libero deserunt repudiandae illum vitae commodi. Necessitatibus dolore et corrupti, perferendis animi nam ipsa odio cumque unde fuga fugit reiciendis itaque blanditiis iure asperiores, error voluptatibus quasi! Hic amet eius quo minima et, praesentium dolore libero, ipsam adipisci ea placeat, repellat recusandae! Fugiat, quis error!</p>


                <div className="my-8 flex items-center justify-center gap-4">
                    <button className="btn-primary px-6 py-3">Button</button>
                    <button className="btn-primary-outline px-6 py-3">Button</button>
                    <button className="btn-slider p-3">{'=>'}</button>
                    <button className="btn-cancel px-3 py-1">x</button>
                </div>

                <div className="my-8 lg:flex gap-8">
                    <ServiceCard image={serviceOne} title='Electrical System' price='20.00' />
                    <ServiceCard image={serviceTwo} title='Electrical System' price='20.00' />
                    <ServiceCard image={serviceThree} title='Electrical System' price='20.00' />
                </div>

                <div className="my-8 lg:flex gap-8">
                    <ProductsCard image={productOne} title='Car Engine Plug' price='20.00' ratting={4} />
                    <ProductsCard image={productTwo} title='Car Engine Plug' price='20.00' ratting={3.5} />
                    <ProductsCard image={productThree} title='Car Engine Plug' price='20.00' ratting={5} />
                </div>

            </main>
            <Footer />
        </>
    );
}