import "./App.css";
import React from "react";
import HomeScreen from "./HomeScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/*add route for login page here */}
        {/*add route for checkout pay page with stripe api here*/}
        {/*add route for my fav movies page here*/}
        {/*add route for watch later page here*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
