import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { signIn, signInWithGoogle, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const onSubmit = data => {

        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
        console.log(data);
       
    };
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle()
            .then(result => {
                const googleUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    
    

    

    return (
        <div>
            
            <div>
                <div className="hero min-h-screen bg-gray-400 ">
                    <div className="hero-content flex-col lg:flex-row lg:mt-14">
                        <div className="text-center lg:text-left lg:w-1/3 lg:me-10">

                            <img className='rounded-lg ' src="https://i.ibb.co/2h9ByVY/main.png" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-950 ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} 
                                        name="email" placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} 
                                        name="password"
                                        placeholder="password" className="input input-bordered" required/>
                                    <label className="label">
                                        <div className='text-orange-600'> Don't Have an Account? <Link to="/register" className='text-white'>Register</Link></div>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-orange-500" type="submit" value="Login" />
                                </div>

                                <div className='text-red-700' > <p>{error}</p></div>
                                <div className="form-control mt-6">
                                    <button onClick={handleGoogleSignIn}  className="btn bg-red-400" type="submit" >   Login with Google </button>
                                </div>


                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;