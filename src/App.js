import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";

function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<p>Products</p>} />
          <Route path="/add" element={<p>Add Product Component</p>} />
          <Route path="/update" element={<p>update Listing Component</p>} />
          <Route path="/logout" element={<p>logout Listing Component</p>} />
          <Route path="/profile" element={<p>profile Listing Component</p>} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
