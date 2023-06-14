import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Class from './Class/Class';

import useClassesAndInstructors from '../useClassesAndInstructors/useClassesAndInstructors';
import SectionTitle from '../../component/SectionTitle/SectionTitle';

const Classes = () => {
    const [data] = useClassesAndInstructors();
    const user = useLoaderData();
    



    const classes = data;
   
    return (
        <section className="mb-12">
            <div className="lg:pt-20"></div>
            <SectionTitle  
                heading="All Classes"
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    classes.map(data => <Class
                        key={data._id}
                        data={data}
                        user={user}
                    ></Class>)
                }
            </div>

        </section>
    );
};

export default Classes;