import Title from "../components/Title";
import about1 from '../../../assets/home/about_4_1.jpg';
import about2 from '../../../assets/home/about_4_2.jpg';
import { useState } from "react";
import Button from "../../../components/Button";

/**
 * About Us section for the Home page.
 * @returns {JSX.Element} About.
 */
export default function About() {
    const [currentTab, setCurrentTab] = useState(1);

    // About tab data
    const tabData = [
        {
            id: 1,
            title: 'About Us',
            description: 'Nostra habitasse inceptos placerat vivamus vestibulum blandit odio dignissim aliquet nunc taciti, cubilia aenean lobortis class sollicitudin conubia urna acter elementum mauris porttitor mus commodo tortor leo litora etiam orci varius nibh. Sagittis class nascetur euismod dui sed justo.',
            progressBar: [
                {
                    title: 'Engine Solution',
                    percentage: 90
                },
                {
                    title: 'Engine Diagnostics',
                    percentage: 85
                },
            ]
        },
        {
            id: 2,
            title: 'Our Mission',
            description: 'Nostra habitasse inceptos placerat vivamus vestibulum blandit odio dignissim aliquet nunc taciti, cubilia aenean lobortis class sollicitudin conubia urna acter elementum mauris porttitor mus commodo tortor leo litora etiam orci varius nibh. Sagittis class nascetur euismod dui sed justo.',
            progressBar: [
                {
                    title: 'Solution Any Car',
                    percentage: 80
                },
                {
                    title: 'Engine Problems',
                    percentage: 85
                },
            ]
        },
        {
            id: 3,
            title: 'Our Vision',
            description: 'Nostra habitasse inceptos placerat vivamus vestibulum blandit odio dignissim aliquet nunc taciti, cubilia aenean lobortis class sollicitudin conubia urna acter elementum mauris porttitor mus commodo tortor leo litora etiam orci varius nibh. Sagittis class nascetur euismod dui sed justo.',
            progressBar: [
                {
                    title: 'Build Relationship',
                    percentage: 90
                },
                {
                    title: 'Customer Satisfaction',
                    percentage: 99
                },
            ]
        },
    ];

    // current tab data
    const currentData = tabData.find(data => data.id === currentTab);

    return (
        <section className="max-container flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
            <div className="w-full flex flex-col items-start gap-6">
                <Title
                    subTitle='About Company'
                    mainTitle='We Are Qualified In Every Car Departments'
                    subTitleCenter={false}
                />
                <div className="w-full my-4 md:my-8">
                    <div className="w-full flex items-center justify-center md:justify-between gap-4">
                        {
                            tabData.map(data => <div key={data.id}>
                                <Button
                                    title={data.title}
                                    btnStyle={`w-full btn border px-2 md:px-10 py-4 rounded-md md:text-2xl hover:text-white ${currentTab === data.id ? 'bg-primary text-white' : ''}`}
                                    onClick={() => setCurrentTab(data.id)}
                                />
                            </div>)
                        }
                    </div>
                    <div className="w-full mt-8">
                        <p className="text-justify text-xl text-gray-500">{currentData.description}</p>
                        <div className="w-full mt-8 flex flex-col gap-6">
                            {
                                currentData.progressBar.map(({ title, percentage }, i) => <div
                                    key={i}
                                    className="w-full flex flex-col gap-4"
                                >
                                    <div className="w-full text-xl md:text-2xl flex items-center justify-between">
                                        <p>{title}</p>
                                        <p>{percentage}%</p>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full">
                                        <div
                                            className='h-4 rounded-full bg-secondary/80 duration-1000'
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <Button
                    title="Get More Info"
                    btnStyle="btn-primary px-6 py-4"
                />
            </div>
            <div className="w-full">
                <img src={about1} alt="about-image" className="ml-auto w-96 lg:w-fit" />
                <div className="w-52 md:w-fit -mt-24 md:-mt-60 relative">
                    <h4 className="w-full bg-primary text-center py-4 md:py-6 md:text-xl text-white font-semibold">
                        <span className="text-xl md:text-4xl">20+</span> Years Of Experience
                    </h4>
                    <img src={about2} alt="about-image" className="" />
                </div>
            </div>
        </section>
    );
}