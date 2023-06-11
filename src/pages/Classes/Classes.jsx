import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Class from './Class/Class';
import usePopular from '../Home/Home/usePopular/usePopular';

const Classes = () => {
    const [data]=usePopular();
    const classes =data;
    console.log(classes);
    return (
        <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                classes.map(data => <Class
                    key={data._id}
                    data={data}
                ></Class>)
            }
        </div>
       
    </section>
    );
};

export default Classes;