import React, { useState } from 'react';
import useAdmin from '../../../hooks/useAdmin';
import useClassesAndInstructorsPending from '../../../hooks/useClassesAndInstructorsPending';

const ManageClasses = () => {
    const [isAdmin] = useAdmin();
    const [users,refetch] =useClassesAndInstructorsPending();
    const [disabled, setDisabled] = useState(true);
    

    


    const handleClassApprove = user =>{
        fetch(`http://localhost:5000/classesAndInstructors/approve/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `class is an approve Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleClassDeny = user =>{
        fetch(`http://localhost:5000/classesAndInstructors/deny/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
           
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    return (
        <div>
           <div className="w-full">
           
            
            <div className="overflow-x-auto">
               {
                isAdmin? <> <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Current Role</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.instructorName}</td>
                            <td>{user.status}</td>
                            <td>{ user.status === 'approved'||user.status === 'denied' ? <button disabled={disabled} className="btn btn-info">Approve</button>  :
                                <button onClick={() => handleClassApprove(user)} className="btn btn-info">Approve</button> 
                                }</td>
                            <td>{ user.status === 'approved'||user.status === 'denied' ? <button disabled={disabled} className="btn btn-info">Deny</button>  :
                                <button onClick={() => handleClassDeny(user)} className="btn btn-info">Deny</button> 
                                }</td>
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
            }
export default ManageClasses;