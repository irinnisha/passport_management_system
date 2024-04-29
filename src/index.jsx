import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import User_dashboard from "./User_dashboard";
import Apply_page_1 from "./Apply_page_1";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/User_dashboard" element={<User_dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Apply_page_1" element={<Apply_page_1 />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
