import React from "react";
import "./Middle.css";
import img from "../img/Female16.jpg";
function Middle(props) {
  return (
    <div className="middle">
      <h3 className="gender">{props.obj.gender}</h3>
      <div className="section">
        <div className="content">
          <div className="head">
            <h3>{props.obj.id}</h3>
            <h3>Person Deteted</h3>
          </div>

          <div className="personDetail">
            <div className="p">
              <span>Name</span>
              <span>Location</span>
              <span>Date</span>
              <span>Time</span>
            </div>
            <div className="d">
              <span>: {props.obj.name}</span>
              <span>: {props.obj.location}</span>
              <span>: {props.obj.date}</span>
              <span>: {props.obj.time}</span>
            </div>
            <div></div>
          </div>
          <div className="description">
            <span> Description: </span>
            <span> {props.obj.name} detected at </span>
            <span>
              {" "}
              {props.obj.location} on {props.obj.date}.
            </span>
            {/* <span> 2023.</span> */}
          </div>
        </div>
        <div className="image">
          <img src={props.obj.img} alt="img" />
        </div>
      </div>
    </div>
  );
}
export default Middle;
