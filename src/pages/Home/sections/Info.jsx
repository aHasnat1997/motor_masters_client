import uid from '../../../Utils/uid';
import icon1 from '../../../assets/icons/icon1.png';
import icon2 from '../../../assets/icons/icon2.png';
import icon3 from '../../../assets/icons/icon3.png';

/**
 * Info section for the Home page
 * @returns {JSX.Element} Info
 */
export default function Info() {
    const allData = [
        {
            id: uid(),
            icon: icon1,
            subtitle: 'We are open monday-friday',
            title: '7:00 am - 9:00 pm'
        },
        {
            id: uid(),
            icon: icon2,
            subtitle: 'Have a question?',
            title: '+2546 251 2658'
        },
        {
            id: uid(),
            icon: icon3,
            subtitle: 'Need a repair? our address',
            title: 'Liza Street, New York'
        },
    ];

    return (
        <section className='max-container w-full py-28 bg-gray-900 flex flex-col lg:flex-row items-center justify-around rounded-2xl gap-8 lg:gap-4'>
            {
                allData.map(data => <div
                    key={data.id}
                    className='flex flex-col lg:flex-row items-center gap-6'
                >
                    <img src={data.icon} alt="icon" />
                    <div className='text-white text-center lg:text-left'>
                        <h5 className='text-2xl'>{data.subtitle}</h5>
                        <h3 className='text-4xl font-semibold'>{data.title}</h3>
                    </div>
                </div>)
            }
        </section>
    );
}