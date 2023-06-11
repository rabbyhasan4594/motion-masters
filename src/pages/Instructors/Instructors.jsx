
import Instructor from '../Home/Instructor/Instructor';
import usePopular from '../Home/Home/usePopular/usePopular';


const Instructors = () => {
   
   
     const [data]=usePopular();
    const instructors =data;
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