import "./HelloReact.css";
import React from "react";

const HelloReact = () => {
    const sum = (a, b) => a * b;

    return (
        <div>
            <h1 className="hello">Hello React 😁</h1>
            <h2>{sum(10, 10)}</h2>
        </div>
    );
};

export default HelloReact;
