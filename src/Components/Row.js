import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get();
    }
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
