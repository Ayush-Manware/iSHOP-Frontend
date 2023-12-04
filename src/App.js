import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Product Listing Component</p>} />
        <Route path="/add" element={<p>Add Product Component</p>} />
        <Route path="/update" element={<p>update Listing Component</p>} />
        <Route path="/logout" element={<p>logout Listing Component</p>} />
        <Route path="/profile" element={<p>profile Listing Component</p>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
