import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./component/Layout";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
