import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import User_dashboard from "./User_dashboard";
import Apply_page_1 from "./Apply_page_1";
import Apply_page_2 from "./Apply_page_2";
import Apply_page_3 from "./Apply_page_3";
import Admin_dashboard from "./Admin_dashboard";
import Faq from "./Faq";

const App = () => {
  const [user, setLoginUser] = useState({});

  return (
    <Routes>
      <Route path="/" exact element={<Signup />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
      <Route path="/User_dashboard" element={<User_dashboard user={user} />} />
      <Route path="/Apply_page_1" element={<Apply_page_1 />} />
      <Route path="/Apply_page_2" element={<Apply_page_2 />} />
      <Route path="/Apply_page_3" element={<Apply_page_3 />} />
      <Route path="/Admin_dashboard" element={<Admin_dashboard/>}/>
      <Route path="/Faq" element={<Faq />} />
    </Routes>
  );
};

export default App;
