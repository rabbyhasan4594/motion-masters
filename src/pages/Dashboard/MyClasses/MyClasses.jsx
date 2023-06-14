import React from 'react';
import useMyClasses from '../../../hooks/useMyClasses';

const MyClasses = () => {
    const isInstructor =true;
    const [myClasses]=useMyClasses();
    
    
    return (
        <div>
         <div className="w-full">
           
            
           <div className="overflow-x-auto">
              {
               isInstructor? <> <table className="table table-zebra w-full">
               <thead>
                   <tr>
                       <th>#</th>
                       <th>Image</th>
                       <th>Name</th>
                       <th>Total Student</th>
                      
                       <th>Status</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       myClasses.map((user, index) => <tr key={user._id}>
                           <th>{index + 1}</th>
                           <td><img className='w-[40px] h-[40px]' src={user.image} /></td>
                           <td>{user.name}</td>
                           <td>{user.totalStudents}</td>
                           
                           <td>{user.status}</td>

                       </tr>)
                   }
                   
                   
               </tbody>
           </table></>:
           <></>
              }
           </div>
       </div>
     </div>
    );
};

export default MyClasses;