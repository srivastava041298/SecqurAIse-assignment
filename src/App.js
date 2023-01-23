import "./App.css";
import React, { useState, useEffect } from "react";
import Middle from "./components/Middle";
import Nav from "./components/Nav";
import RightSide from "./components/RightSide";
import Sidebar from "./components/Sidebar";
import firebase from "./firebase";

function App() {
  const [males, setMales] = useState(0);
  const [females, setFemales] = useState(0);
  const [data, setData] = useState([]);
  const [object, setObject] = useState({
    id: "EVT0031",
    location: "Chennai",
    gender: "Female",
    name: "Female16",
    date: "07-Jan-23",
    time: "02:25:57",
    img: "https://firebasestorage.googleapis.com/v0/b/chennai-f2935.appspot.com/o/img%2FFemale16.jpg?alt=media&token=d4cda289-fe2a-48a2-9ee6-d295febbcab4",
  });

  const ref = firebase.firestore().collection("chennai");
  const ref2 = firebase
    .firestore()
    .collection("chennai")
    .where("gender", "=", "Male");
  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const itemHandler = (item) => {
    // console.log(item);
    setObject(item);
  };

  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Sidebar />
        <Middle obj={object} />
        <RightSide data={data} setData={setData} receiveData={itemHandler} />
      </div>
    </div>
  );
}

export default App;
