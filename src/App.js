import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState("");
  const [tours, setTours] = useState([]);
  const removeIt = (id) => {
    const a = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(a);
  };
  const getNames = async () => {
    const a = await fetch(url);
    const tours = await a.json();
    setTours(tours);
    setLoading("1");
    console.log(tours);
  };
  useEffect(() => {
    getNames();
  }, []);

  return loading === "" ? (
    <Loading />
  ) : (
    <Tours tours={tours} removeIt={removeIt} />
  );
}

export default App;
