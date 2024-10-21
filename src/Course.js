const Course = (props) => {
  return (
    <>
      <h1 >{props.course.courseName}</h1>
      <button onClick={() => props.deleteCourse(props.course.id)}>
        x
      </button>
    </>
  );
};
export default Course;
