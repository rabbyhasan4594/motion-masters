import React from 'react';
import useClasses from '../../../hooks/useClasses';
import { FaTrashAlt } from 'react-icons/fa';

const MySelectedClasses = () => {
    const [selected]=useClasses();
    console.log(selected);
    return (
        <div>
        <div className="w-full">   
           <div className="overflow-x-auto">
         <table className="table table-zebra w-full">
             <thead>
                 <tr>
                     <th>#</th>
                     <th>Picture</th>
                     <th>Dance Name</th>
                     <th>Instructor Name</th>
                     <th>Price</th>
                     <th>Payment</th>
                     <th>Delete</th>
                 </tr>
             </thead>
             <tbody>
                 {
                     selected.map((user, index) => <tr key={user._id}>
                         <th>{index + 1}</th>
                         <td><img className='h-[50px] w-[50px]' src={user.image} /></td>
                         <td>{user.name}</td>
                         
                         <td>{user.instructorName}</td>
                         <td>{user.price}</td>
                         <td> <button  className="btn btn-info">Pay</button> </td>
                         <td><button  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                         
                     </tr>)
                 }
                 
                 
             </tbody>
         </table>
         </div>
     </div>
     </div>
    );
};

export default MySelectedClasses;