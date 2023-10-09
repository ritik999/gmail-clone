import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Mail from "./pages/Mail";
import MailList from "./pages/MailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import Login from "./pages/Login";

const App = () => {
  const { sendMessageIsOpen } = useSelector((state: any) => state.custome);

  const { user } = useSelector((state: any) => state.user);

  console.log(user);

  return (
    <div>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <Sidebar>
              <Routes>
                <Route path="/" element={<MailList />} />
                <Route path="/mail" element={<Mail />} />
              </Routes>
            </Sidebar>
            {sendMessageIsOpen && <SendMail />}
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
