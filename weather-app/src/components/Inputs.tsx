import React from "react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";

function Inputs() {
  return (
    <div>
      <div id="search-container">
        <AiOutlineSearch />
        <input id="search-bar" type="text" placeholder="Search.."></input>
        <GrLocation />
        <div className="temperature">
          <button name="metric" id="fahrenheit-button">
            &deg;F
          </button>
          <p>|</p>
          <button name="imperial" id="celcius-button">
            &deg;C
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
