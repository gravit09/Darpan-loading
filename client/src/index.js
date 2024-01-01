import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

// === === === importing pages === === === //
import ErrorPage from "./components/pages/Errorpage";
import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Createtest from "./components/pages/Createtest";
import Profilepage from "./components/pages/Profilepage";
import Nav from "./components/templates/Nav";
// === === === Ends here === === === //

const root = ReactDOM.createRoot(document.getElementById("root"));

// === === === configuring router === === === //
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/newtest" element={<Createtest />} />
            <Route exact path="/profile" element={<Profilepage />} />
            <Route path="*"element={<ErrorPage/>} />
          </Routes>
        </>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
