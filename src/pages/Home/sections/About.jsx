import parts from "../../../assets/about_us/parts.jpg";
import person from "../../../assets/about_us/person.jpg";
import Title from "./Title";

/**
 * About Us section for the Home page.
 * @returns {JSX.Element} About.
 */
export default function About() {
    return (
        <section className="max-container flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="w-full">
                <div className="overflow-hidden rounded-xl">
                    <img src={person} alt="person" className="w-full h-full" />
                </div>
            </div>
            <div className="w-full flex flex-col items-start gap-6">
                <Title subTitle='About Us' mainTitle='We are qualified & of experience in this field' paragraph='' />
                <div className="text-xl text-gray-500 flex flex-col gap-4 leading-9">
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>
                <button className="btn-primary px-6 py-3">Get More Info</button>
            </div>
        </section>
    );
}