import React, { useEffect, useState } from 'react';
import PopularClass from '../PopularClass/PopularClass';


const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/popularClasses`)
          .then((res) => res.json())
          .then((result) => {
            setClasses(result);
            
          });
      }, []);
       console.log(classes);
    return (
        <section className="mb-12">
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