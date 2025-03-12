const courses = [
    { id: 101, name: "React for Beginners", instructor: "Apana clg", duration: "72 Hourse", price: "$70" },
    { id: 102, name: "Python for Data Science", instructor: "Code with Hary", duration: "72 Hourse", price: "$50" },
  ];
  
  function Courses() {
    return (
        <>
        {courses.map((course) => (
            <div key={course.id}>
                <h2>Course Name: {course.name}</h2>
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
                <p>Price: {course.price}</p>
                <hr />
            </div>
        ))}
        </>
    );
  }
  
  export default Courses;