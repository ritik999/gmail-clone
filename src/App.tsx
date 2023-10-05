import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Mail from "./pages/Mail";
import MailList from "./pages/MailList";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Sidebar>
        <Routes>
          <Route path="/" element={<MailList />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
        </Sidebar>
      </Router>
    </div>
  );
};

export default App;
