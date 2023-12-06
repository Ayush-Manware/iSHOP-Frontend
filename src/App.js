import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateComponent from "./components/PrivateComponent";
import Footer from "./components/footer/Footer";
import SignUp from "./components/navbar/SignUp";
import Login from "./components/navbar/Login";
import Home from "./components/home/Home";
import Fashion from "./components/fashion/Fashion";
import Grocerry from "./components/grocery/Grocerry";
import Electronic from "./components/electronic/Electronic";
import Beauty from "./components/beauty/Beauty";
import Navbar from "./components/navbar/Navbar";
import SubNavbar from "./components/subnavbar/SubNavbar";

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
