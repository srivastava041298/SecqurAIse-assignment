import React, { useState, useEffect } from "react";
import "./Nav.css";
import { UilSearch } from "@iconscout/react-unicons";
import firebase from "../firebase";
import {
  getCountFromServer,
  collection,
  query,
  where,
} from "firebase/firestore";
function Nav() {
  const [males, setMales] = useState(0);
  const [females, setFemales] = useState(0);
  const getMale = async () => {
    const db = firebase.firestore();
    const ref = collection(db, "chennai");
    const query_male = query(ref, where("gender", "==", "Male"));
    const snapshot = await getCountFromServer(query_male);
    setMales(snapshot.data().count);
  };
  const getFemale = async () => {
    const db = firebase.firestore();
    const ref = collection(db, "chennai");
    const query_female = query(ref, where("gender", "==", "Female"));
    const snapshot = await getCountFromServer(query_female);
    setFemales(snapshot.data().count);
  };
  useEffect(() => {
    getMale();
    getFemale();
  }, []);

  return (
    <div className="navbar">
      <h1 className="heading">
        SECQUR<span>AI</span>SE
      </h1>
      <div className="listContainer">
        <UilSearch className="glass" />
        <ul className="list">
          <li className="item-1">{males}</li>
          <li className="item-2">{females}</li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
