import Title from '../components/Title';
import { useForm } from 'react-hook-form';
import appointmentImg from '../../../assets/home/appointment_1.png';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMessage, AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import Button from '../../../components/Button';

/**
 * Appointment section for the website home page.
 * @returns {JSX.Element} Appointment
 */
export default function Appointment() {
    const { register, handleSubmit, reset } = useForm();

    /**
     * Form Data
     * @param {JSON} data 
     */
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return <section className='max-container flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0'>
        <div className='w-full'>
            <img
                src={appointmentImg}
                alt="appointment-image"
                className='w-fill'
            />
        </div>
        <div className='w-full bg-secondary/5 px-2 py-6 md:px-16 md:py-12 rounded-xl'>
            <Title
                subTitle='Need Our Service'
                mainTitle='Make Appointment'
                subTitleCenter={false}
            />

            {/* to-do: fix service, date and message */}
            <form
                className='mt-8 flex flex-col gap-6'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                    <label className='text-primary'><FaRegUser /></label>
                    <input
                        type="text"
                        className='outline-none w-full'
                        placeholder='Enter Your Name'
                        {...register("name")}
                    />
                </div>
                <div className='flex flex-col md:flex-row items-center gap-6'>
                    <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                        <label className='text-primary'><MdOutlineEmail /></label>
                        <input
                            type="email"
                            className='outline-none w-full'
                            placeholder='Email Address'
                            {...register("email")}
                        />
                    </div>
                    <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                        <label className='text-primary'><MdKeyboardArrowDown /></label>
                        <input
                            type=""
                            className='outline-none w-full'
                            placeholder='Service Need'
                            {...register("service")}
                        />
                        {/* <select
                            className='outline-none w-full bg-white'
                            placeholder='Service Need'
                            {...register("service")}
                        >
                            <option className='text-gray-500'>Service Need</option>
                            <option value="Car Oil Change">Car Oil Change</option>
                            <option value="Auto Diagnostics">Auto Diagnostics</option>
                            <option value="Battery Problem">Battery Problem</option>
                            <option value="Engine Repair">Engine Repair</option>
                            <option value="Glasses Change">Glasses Change</option>
                            <option value="Filters & Exhaust">Engine Repair</option>
                        </select> */}
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-6'>
                    <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                        <label className='text-primary'><AiOutlineCalendar /></label>
                        <input
                            type="text"
                            className='outline-none w-full'
                            placeholder='Select Date'
                            {...register("date")}
                        />
                    </div>
                    <div className='w-full p-4 bg-white text-xl flex items-center gap-4 rounded-xl'>
                        <label className='text-primary'><AiOutlineClockCircle /></label>
                        <input
                            type="text"
                            className='outline-none w-full'
                            placeholder='Select Time'
                            {...register("time")}
                        />
                    </div>
                </div>
                <div className='w-full p-4 bg-white text-xl flex items-start gap-4 rounded-xl'>
                    <label className='text-primary mt-1'><AiOutlineMessage /></label>
                    <textarea
                        type="text"
                        className='outline-none w-full max-h-32 h-32'
                        placeholder='Message'
                        {...register("message")}
                    />
                </div>
                <Button title='Submit' />
            </form>
        </div>
    </section>
}