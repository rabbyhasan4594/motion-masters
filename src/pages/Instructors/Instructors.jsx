import React, { useEffect, useState } from 'react';
import Instructor from '../Home/Instructor/Instructor';


const Instructors = () => {
    // const instructors = useLoaderData();
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch(`https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/instructors`)
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
                instructors.map(data => <Instructor
                    key={data.instructorId
                    }
                    data={data}
                ></Instructor>)
            }
        </div>
       
    </section>
    );
};

export default Instructors;