import React from 'react';
import { FaBook, FaCalendarAlt, FaHome, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';


const Dashboard = () => {
     const [isAdmin] = useAdmin();
     const [isInstructor] = useInstructor();
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
    {
                        isAdmin ? <>
                            <li><p className=' text-xl'><FaHome></FaHome> Admin</p></li>
                           
                            <li><NavLink to="/dashboard/manageUsers"><FaUsers></FaUsers> All Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/manageClasses">Manage Classes</NavLink></li>
                           
                            
                        </> : <>
                        {
                            isInstructor?<>
                            <li ><p className=' text-xl'><FaHome></FaHome> Instructor</p></li>
                            <li><NavLink to="/dashboard/addAClass">Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/myClasses"> My Classes</NavLink></li>
                            </>:<>
                            <li><p className=' text-xl'><FaHome></FaHome> Student</p></li>
                            <li><NavLink to="/dashboard/mySelectedClasses"> My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/myEnrolledClasses"> My Enrolled Classes</NavLink></li>
                            {/* <li><NavLink to="/dashboard/payments">Payments</NavLink></li> */}
                            </>
                        }
                        
                           
                            
                        </>
                    }




                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;