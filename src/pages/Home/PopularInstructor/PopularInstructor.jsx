import React from 'react';

const PopularInstructor = ({data}) => {
    const{instructorImage,instructorName,instructorEmail,availableSeats}=data;
    // console.log(data);
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
            <img src={instructorImage} alt="Shoes" className="rounded-xl h-56" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Name: {instructorName}</h2>
            <p className="text-xl text-cyan-700">Available Seats: {availableSeats}</p>
            <p className="text-xl text-cyan-700">Email: {instructorEmail}</p>
        </div>
    </div> 
        </div>
    );
};

export default PopularInstructor;