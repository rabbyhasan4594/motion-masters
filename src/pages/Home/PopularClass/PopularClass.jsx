import React from 'react';
import { Link } from 'react-router-dom';

const PopularClass = ({data}) => {
    const{name,image,instructorName,price,availableSeats}=data;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl h-56" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            
            <p className="text-xl text-cyan-700 mb-2">Instructor Name: {instructorName}</p>
            <p className="text-xl text-cyan-700">Available Seats: ${availableSeats}</p>
            <p className="text-xl text-cyan-700">Price: ${price}</p>
            <div className="card-actions">
                <Link to={`/`}>
                <button className="btn btn-outline btn-accent">Enroll Now</button>

                </Link>
            </div>
        </div>
    </div> 
        </div>
    );
};

export default PopularClass;