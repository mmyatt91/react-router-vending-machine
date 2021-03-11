import React from "react";

import VendingMachine from "./VendingMachine";
import Salty from "./Salty";
import Savory from "./Savory";
import Thirsty from "./Thirsty";

import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/Salty">
          <Salty />
        </Route>
        <Route exact path="/Savory">
          <Savory />
        </Route>
        <Route exact path="/Thirsty">
          <Thirsty />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
