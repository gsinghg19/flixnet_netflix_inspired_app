import "./App.css";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  // const user = {
  //   name: "tester",
  // };
  const user = null;

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            {/*add route for login page here */}
            {/*add sign up page here*/}
            {/*add route for checkout pay page with stripe api here*/}
            {/*add route for my fav movies page here*/}
            {/*add route for watch later page here*/}
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
