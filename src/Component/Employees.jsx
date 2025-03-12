import React from "react";

const employees = [
    { id: 101, name: "Athrav Nanvare", position: "Software Engineer", department: "IT", experience: 1 },
    { id: 102, name: "Omkar Patil", position: "Product Manager", department: "Marketing", experience: 3 },
    { id: 103, name: "Yash Nathile", position: "Rect Developer", department: "IT", experience: 2 }
];

function Employees() {
    return (
        <>
        {employees.map((emp) => (
            <div key={emp.id}>
                <h2>Employeep Name: {emp.name}</h2>
                <p>Position: {emp.position}</p>
                <p>Department: {emp.department}</p>
                <p>Experience: {emp.experience} years</p>
                <hr />
            </div>
        ))}
        </>
    );
}

export default Employees;