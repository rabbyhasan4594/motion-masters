import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';
import useClasses from '../../../hooks/useClasses';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';


const PopularClass = ({data}) => {
    
    const{name,image,instructorName,price,availableSeats,_id}=data;

    const{user}=useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useClasses();

    const handleAddToSelected = data => {
       
        if(user && user.email){
             const selectedClass = {selectedId: _id,payment:"no", name, image,instructorName,availableSeats, price, email: user.email}
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
             <div className="card bg-base-100 shadow-xl mx-auto">
        <figure className="">
            <img src={image} alt="Image" className="rounded-se-xl h-44 w-full" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            
            <p className=" text-cyan-700 ">Instructor Name: {instructorName}</p>
            <p className=" text-cyan-700">Available Seats: {availableSeats}</p>
            <p className=" text-cyan-700">Price: ${price}</p>
            <div className="card-actions">
               
                <button  onClick={() => handleAddToSelected(data)} className="btn btn-active btn-secondary">Enroll Now</button>

               
               
            </div>
        </div>
    </div> 
        </div>
    );
};

export default PopularClass;