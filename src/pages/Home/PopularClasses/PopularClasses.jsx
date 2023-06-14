import React, { useEffect, useState } from 'react';
import PopularClass from '../PopularClass/PopularClass';
import usePopular from '../Home/usePopular/usePopular';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';


const PopularClasses = () => {
    const [data] = usePopular();
    const classes = data;
   

    return (
        <section className="mb-12">
            <SectionTitle
                heading="Popular Classes"
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    classes.map(data => <PopularClass
                        key={data._id}
                        data={data}
                    ></PopularClass>)
                }
            </div>

        </section>
    );
};

export default PopularClasses;