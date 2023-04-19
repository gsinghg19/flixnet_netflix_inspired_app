import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
  return (
    <div className="signUpScreen">
      <form>
        <h1 className="signUpScreen_Header">Sign up here</h1>
        <input placeholder="Email Address" type="email" />
        <input placeholder="Password" type="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignUpScreen;
