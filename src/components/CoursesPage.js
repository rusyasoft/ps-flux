import React, { useEffect, useState } from 'react';
//import { getCourses } from '../api/courseApi';
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
    const [courses, setCourses] = useState(courseStore.getCourses());
    

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) {
            loadCourses();
        }
        // getCourses().then( _courses => {
        //     setCourses(_courses);
        // });

        return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
    }, []);

    function onChange() {
        setCourses(courseStore.getCourses());
    }
    
    return (
        <><h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">
                Add Course
            </Link>
            <CourseList courses={courses} deleteCourse={deleteCourse} />
        </>
    )
}

export default CoursesPage;