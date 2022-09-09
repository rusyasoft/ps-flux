import React, { useState} from 'react';
import { Prompt } from 'react-router-dom';
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = props => {
    const [ course, setCourse ] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    function handleChange({target}) {
        const updatedCourse = {...course, [target.name]: target.value};
        setCourse(updatedCourse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        courseApi.saveCourse(course).then( () => {
            props.history.push("/courses");
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
            <Prompt when={true} message="Are you sure you want to leave" />
            { props.match.params.slug }
        </>
    );
}

export default ManageCoursePage;
