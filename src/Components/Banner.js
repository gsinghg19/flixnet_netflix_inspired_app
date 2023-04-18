import React from "react";
import "./Banner.css";

function Banner() {
  //this truncate function will shorten movie descriptions when character lenght is too long.
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

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
