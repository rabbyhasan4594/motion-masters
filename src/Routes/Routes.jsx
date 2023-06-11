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
            loader: () => fetch(`https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/classes`)
        },
        {
            
          element: <PopularClasses></PopularClasses>,
            loader: () => fetch(`https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/popularClasses`)
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>,
      },

      ]
    },
  ]);