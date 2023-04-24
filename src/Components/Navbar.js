import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showHeader, setShowHeader] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`Navbar ${showHeader && "nav_black"}`}>
      <div className="nav_Contents">
        <img
          className="nav_logo"
          src="https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0"
          alt="company logo"
          onClick={() => navigate("/")}
        />
        <img
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
          alt=""
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
}

export default Navbar;
