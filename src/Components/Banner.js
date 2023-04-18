import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        /* this banner is a test image*/ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie name here</h1>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">pause</button>
        </div>
        <h1 className="banner_description">
          This is where the film descriptions will go.
        </h1>
      </div>
      <div className="banner--faceBottom" />
    </header>
  );
}

export default Banner;
