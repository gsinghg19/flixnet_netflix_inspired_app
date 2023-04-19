import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0"
          alt="test"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere and cancel at any time.</h2>
            <h3>Ready to watch? Enter you email address here.</h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
