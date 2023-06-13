import React from 'react';
import { FaBook, FaCalendarAlt, FaHome, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';


const Dashboard = () => {
     const [isAdmin] = useAdmin();
     const [isInstructor] = useInstructor();
    // const isAdmin =true;
    // const isInstructor =false;
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
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                           
                            <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink></li>
                            <li><NavLink to="/dashboard/manageClasses">Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageUsers"> Manage Users</NavLink></li>
                            
                        </> : <>
                        {
                            isInstructor?<>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Instructor Home</NavLink></li>
                            <li><NavLink to="/dashboard/addAClass">Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/myClasses"> My Classes</NavLink></li>
                            </>:<>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Student Home</NavLink></li>
                            <li><NavLink to="/dashboard/mySelectedClasses"> My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/myEnrolledClasses"> My Enrolled Classes</NavLink></li>
                            <li><NavLink to="/dashboard/payment">Payment</NavLink></li>
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