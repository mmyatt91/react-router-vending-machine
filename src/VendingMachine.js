import React from "react";
import { Link } from "react-router-dom";
import vendingMachineImg from "./VendingMachine.jpg";
import "./VendingMachine.css";


function VendingMachine() {
    return (
        <div className="VendingMachine"
            style={{ backgroundImage: `url(${vendingMachineImg})` }}>
            <h1>MeMe's Munchie Machine</h1>
            <h1><Link to="/Salty">Salty</Link></h1>
            <h1><Link to="/Savory">Savory</Link></h1>
            <h1><Link to="/Thirsty">Thirsty</Link></h1>
        </div>
    )

}

export default VendingMachine;