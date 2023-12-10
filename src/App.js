import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateComponent from "./components/PrivateComponent";
import Footer from "./components/footer/Footer";
import SignUp from "./components/navbar/SignUp";
import Login from "./components/navbar/Login";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import SubNavbar from "./components/subnavbar/SubNavbar";
import MensFashion from "./components/fashion/MensFashion";
import LadiesFashion from "./components/fashion/LadiesFashion";
import KidsFashion from "./components/fashion/KidsFashion";
import Mobiles from "./components/electronic/Mobiles";
import Laptop from "./components/electronic/Laptop";
import Watch from "./components/electronic/Watch";
import Beverages from "./components/grocery/Beverages";
import IndianRegular from "./components/grocery/IndianRegular";
import Snacks from "./components/grocery/Snacks";
import Mac from "./components/beauty/Mac";
import Swiss from "./components/beauty/Swiss";
import OtherBeauty from "./components/beauty/OtherBeauty";
import Dynamic from "./Dynamic";
import AddToCart from "./components/navbar/AddToCart";
import { BrowserRouter } from "react-router-dom";
import AddToCartUI from "./components/cart/AddToCartUI";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <SubNavbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<p>Products</p>} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/update" element={<p>update Listing Component</p>} />
            <Route path="/logout" element={<p>logout Listing Component</p>} />
            <Route path="/profile" element={<p>profile Listing Component</p>} />
            <Route path="/all" element={<Home />} />
            <Route path="/mensFashion" element={<MensFashion />} />
            <Route path="/ladiesFashion" element={<LadiesFashion />} />
            <Route path="/kidsFashion" element={<KidsFashion />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/laptops" element={<Laptop />} />
            <Route path="/watches" element={<Watch />} />
            <Route path="/beverages" element={<Beverages />} />
            <Route path="/indianFood" element={<IndianRegular />} />
            <Route path="/snacks" element={<Snacks />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/swissBeauty" element={<Swiss />} />
            <Route path="/otherBeauty" element={<OtherBeauty />} />
            <Route path="/dynamic/:id" element={<Dynamic />} />
            <Route path="/cartProducts" element={<AddToCartUI/>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
