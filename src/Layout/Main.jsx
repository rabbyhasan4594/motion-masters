import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Footer from '../pages/Shared/Footer/Footer';



const Main = () => {
    return (
        <> 
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;