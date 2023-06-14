import React from 'react';
import useMyEnrolledClasses from '../../../hooks/useMyEnrolledClasses';

const MyEnrolledClasses = () => {
    const [selectedPayment] = useMyEnrolledClasses()
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
                                
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedPayment.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td><img className='h-[50px] w-[50px]' src={user.image} /></td>
                                    <td>{user.name}</td>

                                    <td>{user.instructorName}</td>
                                   
                                    <td>{user.price}</td>
                                    
                                    

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;