import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/courses/";

export function getCourses() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCourseBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(courses => {
        if (courses.length !== 1) throw new Error("Course not found: " + slug);
        return courses[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveCourse(course) {
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...course,
      // Parse authorId to a number (in case it was sent as a string).
      authorId: parseInt(course.authorId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

let promise1000 = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done1000"), 1000);
});

let promise3000 = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done3000"), 3000);
});

let promise8000 = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done8000"), 8000);
});

let promise15000 = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done15000"), 15000);
});

export function callPromise() {
  //let resPromise = await promise1();
  /*
  promise1000.then((resPromise) => console.log("resPromise: " + resPromise));
  promise3000.then((resPromise) => console.log("resPromise: " + resPromise));
  */

  Promise.all([promise1000, promise3000, promise8000, promise15000]).then((values) => {
    console.log(values);
  });

  promise8000.then((resPromise) => console.log("resPromise: " + resPromise));
}