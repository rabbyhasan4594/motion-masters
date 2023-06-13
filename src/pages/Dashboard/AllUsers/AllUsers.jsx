import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [disabled, setDisabled] = useState(true);
    const {data:users=[], refetch}=useQuery(['users'],async()=>{
        const res =await fetch('http://localhost:5000/users')
        return res.json();
    })

    const isAdmin =true;


    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{ user.role === 'admin' ? <button disabled={disabled} className="btn btn-info">Make Admin</button>  :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-info">Make Admin</button> 
                                }</td>
                            <td>{ user.role === 'instructor' ? <button disabled={disabled} className="btn btn-info">Make Instructor</button>  :
                                <button onClick={() => handleMakeInstructor(user)} className="btn btn-info">Make Instructor</button> 
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
};

export default AllUsers;