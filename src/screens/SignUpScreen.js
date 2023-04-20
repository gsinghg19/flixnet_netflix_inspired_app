import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1 className="signUpScreen_Header">Sign up here</h1>
        <input placeholder="Email Address" type="email" />
        <input placeholder="Password" type="Password" />
        <button className="signUpButton_Submit" type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to netflix?</span>
          <span className="signUpScreen_link" onClick={register}>
            Sign up now!
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
