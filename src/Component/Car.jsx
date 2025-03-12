import React from "react";

const students = [
    { id: 101, name: "FORD", Model: "Model S", Price: "$150", Gare: "Manual" },
    { id: 202, name: "TESLA", Model: "T-X5", Price: "$500", Gare: "Auto" },


];

function Car() {
    return (
        <>
        {students.map((Car) => (
            <div key={Car.id}>
                <h2>Car Name: {Car.name}</h2>
                <p>Model: {Car.Model}</p>
                <p>Price: {Car.Price}</p>
                <p>Gear: {Car.Gare}</p>
                <hr />
            </div>
        ))}
        </>
    );
}

export default Car;