
import useClasses from '../../../hooks/useClasses';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MySelectedClasses = () => {
    const [selected] = useClasses()
   

    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/selected/class/${_id}`, {
                    method: "DELETE",

                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success',

                            )
                            setDeleteControl(!deleteControl)

                        }

                    });
            }
        })
    }



    const handleClick = user => {

    }
    

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
                                    <td> <Link to={`/dashboard/payment/${user._id}`}>
                                        <button className="btn btn-info">Pay</button>
                                    </Link> </td>
                                    <td><button onClick={() => handleDelete(user._id)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>

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