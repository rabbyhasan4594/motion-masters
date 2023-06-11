import React, { useEffect, useState } from 'react';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/popularClasses`)
          .then((res) => res.json())
          .then((result) => {
            setInstructors(result);
            
          });
      }, []);
     console.log(instructors);
    return (

        <section className="mb-12">
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