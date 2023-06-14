import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import usePopular from '../Home/usePopular/usePopular';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const PopularInstructors = () => {

    const [data]=usePopular();
    const instructors =data;
    
    return (

        <section className="mb-12">
             <SectionTitle
                heading="Popular Classes"
            ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                instructors.map(data => <PopularInstructor
                    key={data.instructorId
                    }
                    data={data}
                ></PopularInstructor>)
            }
        </div>
       
    </section>
    );
};

export default PopularInstructors;