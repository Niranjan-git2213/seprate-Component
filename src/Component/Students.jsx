import React from "react";

const students = [
    { id: 601, name: "Yash Nathile", age: 22, grade: "B.E", Clg: "Amravati Clg" },
    { id: 602, name: "Niranjan Patil", age: 23, grade: "BCA", Clg: "GACC.Sangli" },
];

function Students() {
    return (
        <>
        {students.map((student) => (
            <div key={student.id}>
                <h2>Name: {student.name}</h2>
                <p>Age: {student.age}</p>
                <p>Grade: {student.grade}</p>
                <p>Clg: {student.Clg}</p>
                <hr />
            </div>
        ))}
        </>
    );
}

export default Students;