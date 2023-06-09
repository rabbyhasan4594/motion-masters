import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { createUser,setProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setProfile(data.name, data.photoURL)
                    .then(() => {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');

                    })
                    .catch(error => console.error(error))
            })
    };
    return (
        <div>
            <div className="hero min-h-screen bg-slate-200 pt-14">
                <div className="hero-content flex-col lg:flex-row lg:mt-14">
                    <div className="text-center lg:text-left lg:w-1/2">

                        <img className='rounded-lg ' src="https://i.ibb.co/JjXTNgc/register-01.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-500 lg:me-20">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })}
                                    name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })}
                                    name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })}
                                    placeholder="Photo URL" className="input input-bordered" />
                               {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                    name="password"
                                    placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <div>
                                        Already Have an Account? <Link to="/login" className='text-white'>Login</Link>
                                    </div>
                                </label>


                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-orange-500" type="submit" value="Register" />
                            </div>
                            {/* <div className='text-green-700'><p>{success}</p></div>
                        <div className='  text-red-700'><p>{error}</p></div> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;