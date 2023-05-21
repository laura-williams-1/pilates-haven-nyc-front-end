import axios from "axios";
import Studio from "./Studio";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

const Studios = () => {
  const [studios, setStudios] = useState([]);
  console.log(API);
  useEffect(() => {
    axios
      .get(`${API}/studios`)
      .then((res) => {
        setStudios(res.data);
        console.log(studios);
      })
      .catch((e) => {
        console.warn("error", e);
      });
  }, [API]);
  return (
    <div className="studios">
      <div className="all-studios">
        {studios.map((studio) => {
          return <Studio key={studio.id} studio={studio} />;
        })}
      </div>
    </div>
  );
};

export default Studios;
