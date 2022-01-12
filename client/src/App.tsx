import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ClientMenu from "./Pages/ClientMenu";
import ClientLogin from "./Pages/ClientLogin";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/liveview" element={<ClientMenu />} />
          <Route path="/clientlogin" element={<ClientLogin />} />
          <Route path="/adminlogin" element={<>Report Login</>} />
          <Route path="/reports" element={<>Reports</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
