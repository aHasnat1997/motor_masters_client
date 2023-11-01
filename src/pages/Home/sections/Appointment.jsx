import appointmentImg from '../../../assets/home/appointment_1.png';
import Title from '../components/Title';

export default function Appointment() {
    return <section className='max-container flex items-center justify-between'>
        <div className='w-full'>
            <img
                src={appointmentImg}
                alt="appointment-image"
                className='w-fill'
            />
        </div>
        <div className='w-full'>
            <Title
                subTitle='Need Our Service'
                mainTitle='Make Appointment'
                subTitleCenter={false}
            />
        </div>
    </section>
}