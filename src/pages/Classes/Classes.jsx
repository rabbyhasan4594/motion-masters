import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Classes = () => {
    const classes = useLoaderData();
    console.log(classes);
    return (
        <div>
            
        </div>
    );
};

export default Classes;