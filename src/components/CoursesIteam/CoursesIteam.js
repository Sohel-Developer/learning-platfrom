import React from 'react';
import { Link } from 'react-router-dom';

const CoursesIteam = ({ course }) => {
    const { name, id, description } = course;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/course/${id}`}> <button className="btn btn-primary">Start Course</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CoursesIteam;