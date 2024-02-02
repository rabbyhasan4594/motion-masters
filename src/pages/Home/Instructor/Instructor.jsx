import React from 'react';

const Instructor = ({data}) => {
    const{instructorImage,instructorName,instructorEmail,availableSeats}=data;
    
    return (
        <div>
             <div className="card  bg-base-100 shadow-xl mx-auto">
        <figure className="">
            <img src={instructorImage} alt="Image" className="rounded-se-xl h-56 w-full" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Name: {instructorName}</h2>
            <p className="text-xl text-cyan-700">Available Seats: {availableSeats}</p>
            <p className=" text-cyan-700">Email: {instructorEmail}</p>
        </div>
    </div> 
        </div>
    );
};

export default Instructor;