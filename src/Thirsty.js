import React from "react";
import { Link } from "react-router-dom";
import "./Thirsty.css"

function Thirsty() {
    return (
        <div>
            <h1 className="thirsty">A & W Cream Soda!</h1>
            <img
                src="https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0a3e1f2e-2ed8-46e2-9235-477c655ddbb9.jpg"
                alt="Drink Choice"
                className="center"
            />
            <h1 className="thirsty">Quench your thirst!</h1>
            <p className="thirsty">
                <Link to="/">Back to Vending Machine</Link>
            </p>
        </div>
    )
}

export default Thirsty;