
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const{user}=useAuth();
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    console.log(user.displayName);
    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name,instructorName ,instructorEmail,availableSeats, price,instructorImage } = data;
                const newClass = {name, price: parseFloat(price), instructorName ,instructorEmail,availableSeats:parseInt(availableSeats), price:parseInt(price),instructorImage,status :'pending',image:imgURL}
                axiosSecure.post('/classesAndInstructors', newClass)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    
    
    return (
        <div className="w-full px-10">
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true,  })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className='form-control w-full my-4'>
                <span className="label-text">Instructor Image</span>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    value={user?.photoURL}
                                    {...register("instructorImage", { required: true })}
                                    placeholder="image link"
                                    type="url"
                                />
                            </div>
            <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" placeholder="instructorName"
                         value={user?.displayName}
                        {...register("instructorName", { required: true,  })}
                        className="input input-bordered w-full " />
                </div>
            <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="email" placeholder="Email"
                         value={user?.email}
                        {...register("instructorEmail", { required: true,  })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available seats</span>
                    </label>
                    <input type="text" placeholder="Available seats"
                        {...register("availableSeats", { required: true,  })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="text" placeholder="Price"
                        {...register("price", { required: true,  })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Status</span>
                    </label>
                    <input type="text" placeholder="Status"
                         value='pending'
                        {...register("status", { required: true,  })}
                        className="input input-bordered w-full " />
                </div>
                
                <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddItem;