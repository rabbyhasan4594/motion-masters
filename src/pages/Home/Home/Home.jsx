import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    return (
        <div className='bg-slate-200'>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;