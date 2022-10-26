import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesIteam from '../CoursesIteam/CoursesIteam';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='grid justify-items-center grid-cols-3 gap-8 my-8'>
            {
                courses.map((course) => <CoursesIteam
                    key={course.id}
                    course={course}
                ></CoursesIteam>)
            }
        </div>
    );
};

export default Courses;