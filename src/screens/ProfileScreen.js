import React from "react";
import "./ProfileScreen.css";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "../firebase_handler";
import PlansScreens from "./PlansScreens";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen_body">
        <h1>Edit profile</h1>
        <div className="profileScreen_Info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3 className="profileScreens_plans">Plans</h3>
              <PlansScreens />
              <button
                className="profileScreen_signout"
                onClick={() => auth.signOut()}
              >
                sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
