import React from "react";
import { Link } from "react-router-dom";
import "./Savory.css";

function Savory() {
    return (
        <div>
            <h1 className="savory">Snickers!</h1>
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/41NT7YN956L.jpg"
                alt="Savory Snack Choice"
                className="center"
            />
            <h1 className="savory">You're not you when you're hungry!</h1>
            <p className="savory">
                <Link to="/">Back to Vending Machine</Link>
            </p>
        </div>
    )
}

export default Savory;