import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase_handler";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {
        // Signed in
        console.log(
          "User registration is successful. Check firebase db for user details."
        );
      })
      .catch((error) => {
        alert(error);
      });
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1 className="signUpScreen_Header">Sign up here</h1>
        <input placeholder="Email Address" type="email" ref={emailRef} />
        <input placeholder="Password" type="Password" ref={passwordRef} />
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
