import React, { useState, useEffect } from "react";
import "./RightSide.css";
import filter from "../img/filter.png";
import Dropdown from "./Dropdown";

function RightSide(props) {
  const [selected, setSelected] = useState(0);
  const [filtered, setFiltered] = useState(props.data);
  const [show, setShow] = useState(false);

  const task = (index, item) => {
    setSelected(index);
    props.receiveData(item);
  };
  const showHandler = () => {
    setShow(!show);
  };
  const dropdownValue = (value) => {
    console.log(value);

    setFiltered(props.data.filter((item) => item.location === value));
  };

  return (
    <div className="rightSide">
      <div className="events">
        <h3>Events</h3>
        <div className="filterimg">
          <img src={filter} alt="filter" onClick={showHandler} />
          {show && <Dropdown getDropdownValue={dropdownValue} />}
        </div>
      </div>
      {!show &&
        props.data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                selected === index ? "information active" : "information"
              }
              onClick={() => task(index, item)}
            >
              <div className="person">
                <span>
                  {item.id}: {item.location}
                </span>

                <span>Person Detected</span>
              </div>
              <div className="date">
                <span>
                  {item.date} &nbsp; {item.time}
                </span>
              </div>
            </div>
          );
        })}
      {show &&
        filtered.map((item, index) => {
          return (
            <div
              key={index}
              className={
                selected === index ? "information active" : "information"
              }
              onClick={() => task(index, item)}
            >
              <div className="person">
                <span>
                  {item.id}: {item.location}
                </span>

                <span>Person Detected</span>
              </div>
              <div className="date">
                <span>
                  {item.date} &nbsp; {item.time}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default RightSide;
