import { useState } from "react";
import "./App.css";
import Course from "./Course";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  const handelChange = (event) => {
    setNewCourse(event.target.value);
  };

  const addCourse = () => {
    setCourseList([...courseList, newCourse]);
  };

  const deleteCourse = (courseName) => {
    setCourseList(courseList.filter((course) => courseName !== course));
  };

  return (
    <div className="App">
      <div className="add-course">
        <input type="text" onChange={handelChange}></input>
        <button onClick={addCourse}>add course</button>
      </div>

      <div className="list">
        {courseList.map((course, index) => {
          return (
            <Course key={index} course={course} deleteCourse={deleteCourse} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
