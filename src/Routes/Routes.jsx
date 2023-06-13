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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import Payments from "../pages/Dashboard/Payments/Payments";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/manageClasses";





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
          path: 'allUsers',
          element:<AllUsers></AllUsers>
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
          loader: ({params}) => fetch(`http://localhost:5000/dashboard/payment/${params.id}`)
        },
        {
          path: 'payments',
          element:<Payments></Payments>,
          
        },
        {
          path: 'myEnrolledClasses',
          element:<MyEnrolledClasses></MyEnrolledClasses>,
          
        },
      ]
    }

  ])