import React from "react";
import { Link } from "react-router-dom";
import "./Salty.css"

function Salty() {
    return (
        <div>
            <h1 className="salty">Cheez-Its!</h1>
            <img
                src="https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0024100705660_CF_default_default_large.jpeg"
                alt="Salty Snack Choice"
                className="center"
            />
            <h1 className="salty">Betta get this chedda!</h1>
            <p className="salty">
                <Link to="/">Back to Vending Machine</Link>
            </p>
        </div>
    )
}

export default Salty;