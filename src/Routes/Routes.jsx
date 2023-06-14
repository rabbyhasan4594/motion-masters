import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import PopularClasses from "../pages/Home/PopularClasses/PopularClasses";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";

import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/manageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <Classes></Classes>,
            
        },
        
        {
          path: '/instructors',
          element: <Instructors></Instructors>,
      },
        

      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
      children: [
        //admin
        {
          path: 'manageUsers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path: 'manageClasses',
          element:<ManageClasses></ManageClasses>
        },

        //Instructor
        {
          path: 'addAClass',
          element:<AddAClass></AddAClass>
        },
        {
          path: 'myClasses',
          element:<MyClasses></MyClasses>
        },

        //student
        {
          path: 'mySelectedClasses',
          element:<MySelectedClasses></MySelectedClasses>
        },
        {
          path: 'payment/:id',
          element:<Payment></Payment>,
          loader: ({params}) => fetch(`https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/dashboard/payment/${params.id}`)
        },
       
        {
          path: 'myEnrolledClasses',
          element:<MyEnrolledClasses></MyEnrolledClasses>,
          
        },
      ]
    }

  ])