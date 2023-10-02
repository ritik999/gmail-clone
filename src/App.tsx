import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
