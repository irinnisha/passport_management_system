import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import User_dashboard from "./User_dashboard";
import Apply_page_1 from "./Apply_page_1";
import Apply_page_2 from "./Apply_page_2";
import Apply_page_3 from "./Apply_page_3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/User_dashboard" element={<User_dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Apply_page_1" element={<Apply_page_1 />} />
        <Route path="/Apply_page_2" element={<Apply_page_2 />} />
        <Route path="/Apply_page_3" element={<Apply_page_3 />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
