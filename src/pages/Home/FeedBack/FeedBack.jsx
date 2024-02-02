import React from 'react';
import Swal from 'sweetalert2';

import { useForm } from 'react-hook-form';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const FeedBack = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {


              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })
    
    }
    return (
        <section>
           
           
            <div className=''>
                <div className=' lg:w-1/3 lg:mx-96 py-5 rounded-lg'>
                    
                    <form className='grid grid-cols-1 text-center' onSubmit={handleSubmit(onSubmit)}>

                        <div className=''>
                            <div className='mb-2'>
                                <input
                                    className="text-input px-10 py-2 rounded-lg h-20"
                                    {...register("feedback", { required: true })}
                                    placeholder="Feedback Please"
                                    type="text"
                                />
                            </div>


                            <div className='pt-2'>
                                <input className="btn text-white bg-orange-600" value="FeedBack" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FeedBack;