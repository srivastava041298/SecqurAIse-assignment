import React, { useState } from "react";
import "./Dropdown.css";
function Dropdown(props) {
  const [select, setSelect] = useState();
  const dropdownHandler = (e) => {
    const value = e.target.value;
    props.getDropdownValue(value);
  };
  return (
    <div className="dropdown">
      <select value={select} onChange={dropdownHandler}>
        <option>Choose:</option>
        <option>Bangalore</option>
        <option>Chennai</option>
        <option>Hyderabad</option>
      </select>
    </div>
  );
}
export default Dropdown;
