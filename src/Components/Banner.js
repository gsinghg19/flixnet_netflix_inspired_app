import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);
  console.log("The movie data is: ----->", movie);

  //this truncate function will shorten movie descriptions when character lenght is too long.
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">pause</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `This is a test for the truncate function,This is a test for the truncate function,
                This is a test for the truncate function,This is a test for the truncate function,
                This is a test for the truncate function,This is a test for the truncate function,
                This is a test for the truncate function,This is a test for the truncate function,
                This is a test for the truncate function,This is a test for the truncate function,
                This is a test for the truncate function,This is a test for the truncate function,
                This is a test for the truncate function,This is a test for the truncate function`,
            150
          )}
        </h1>
      </div>
      <div className="banner--faceBottom" />
    </header>
  );
}

export default Banner;
