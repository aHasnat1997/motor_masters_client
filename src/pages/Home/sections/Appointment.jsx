import Title from '../components/Title';
import { useForm } from 'react-hook-form';
import appointmentImg from '../../../assets/home/appointment_1.png';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import Button from '../../../components/Button';

/**
 * Appointment section for the website home page.
 * @returns {JSX.Element} Appointment
 */
export default function Appointment() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return <section className='max-container flex items-center justify-between'>
        <div className='w-full'>
            <img
                src={appointmentImg}
                alt="appointment-image"
                className='w-fill'
            />
        </div>
        <div className='w-full bg-secondary/10 px-16 py-12 rounded-xl'>
            <Title
                subTitle='Need Our Service'
                mainTitle='Make Appointment'
                subTitleCenter={false}
            />
            <form
                className='mt-8 flex flex-col gap-6'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                    <span className='text-primary'><FaRegUser /></span>
                    <input
                        type="text"
                        className='outline-none w-full'
                        placeholder='Enter Your Name'
                        {...register("name")}
                    />
                </div>
                <div className='flex items-center gap-6'>
                    <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                        <span className='text-primary'><MdOutlineEmail /></span>
                        <input
                            type="email"
                            className='outline-none w-full'
                            placeholder='Email Address'
                            {...register("email")}
                        />
                    </div>
                    <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                        <span className='text-primary'><MdKeyboardArrowDown /></span>
                        <input
                            type="text"
                            className='outline-none w-full'
                            placeholder='Service Need'
                            {...register("service")}
                        />
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                        <input
                            type="date"
                            className='outline-none w-full'
                            placeholder='Select Date'
                            {...register("date")}
                        />
                    </div>
                    <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                        <input
                            type="time"
                            className='outline-none w-full'
                            placeholder='Select Time'
                            {...register("time")}
                        />
                    </div>
                </div>
                <div className='w-full p-4 bg-white text-xl flex items-start gap-4 rounded-xl'>
                    <span className='text-primary mt-1'><AiOutlineMessage /></span>
                    <textarea
                        type="text"
                        className='outline-none w-full h-40'
                        placeholder='Message'
                        {...register("message")}
                    />
                </div>
                <Button title='Submit' />
            </form>
        </div>
    </section>
}