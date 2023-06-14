
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import Instructor from '../Home/Instructor/Instructor';
import useClassesAndInstructors from '../useClassesAndInstructors/useClassesAndInstructors';



const Instructors = () => {


    const [data] = useClassesAndInstructors();
    const instructors = data;
    
    return (

        <section className="mb-12">
            <div className="lg:pt-20"></div>
            <SectionTitle
                heading="All Instructors"
            ></SectionTitle>
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