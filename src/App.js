import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import Home from './subnavbar/Home'
import Fashion from "./subnavbar/Fashion";
import Grocerry from "./subnavbar/Grocerry";
import Electronic from "./subnavbar/Electronic";
import Beauty from "./subnavbar/Beauty";
import SubNavbar from "./subnavbar/SubNavbar";

function App() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<p>Products</p>} />
          <Route path="/add" element={<p>Add Product Component</p>} />
          <Route path="/update" element={<p>update Listing Component</p>} />
          <Route path="/logout" element={<p>logout Listing Component</p>} />
          <Route path="/profile" element={<p>profile Listing Component</p>} />
          <Route path="/all" element={<Home/>} />
          <Route path="/fashion" element={<Fashion/>} />
          <Route path="/electronics" element={<Electronic/>} />
          <Route path="/grocerry" element={<Grocerry/>} />
          <Route path="/beauty" element={<Beauty/>} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
