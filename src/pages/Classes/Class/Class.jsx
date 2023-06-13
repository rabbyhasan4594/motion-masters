import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useClasses from '../../../hooks/useClasses';

const Class = ({data}) => {
    const{name,image,instructorName,price,availableSeats,_id}=data;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useClasses();
    const handleAddToSelected = data => {
        if(user && user.email){
             const selectedClass = {selectedId: _id, name, image,instructorName,availableSeats, price, email: user.email}
            fetch('https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/selected', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Selected Class added.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Please'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }


    return (
        <div>
             <div className="card w-[370px] sm:w-[350px] bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
            <img src={image} alt="Image" className="rounded-xl h-56" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            
            <p className=" text-cyan-700 mb-2">Instructor Name: {instructorName}</p>
            <p className=" text-cyan-700">Available Seats: {availableSeats}</p>
            <p className=" text-cyan-700">Price: ${price}</p>
            <div className="card-actions">
                <Link to={`/`}>
                <button onClick={() => handleAddToSelected(data)} className="btn btn-outline btn-accent">Enroll Now</button>

                </Link>
            </div>
        </div>
    </div> 
        </div>
    );
};

export default Class;