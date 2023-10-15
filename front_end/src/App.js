import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./component/Layout";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import UserDash from "./pages/User/Dashboard";
import Services from "./pages/User/Services";
import Messages from "./pages/User/Messages";
import Profile from "./pages/User/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Dashboard" element={<UserDash />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
