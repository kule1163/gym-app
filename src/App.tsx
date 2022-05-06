import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./styles/main.scss";
import Gym from "./pages/gym/Gym";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Home from "./layout/home/Home";
import Store from "./pages/store/Store";
import Blog from "./pages/blog/Blog";
import Faq from "./pages/faq/Faq";
import Contact from "./layout/contact/Contact";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  setCartToggle,
  setCurrentMenu,
  setCurrentMenuChild,
} from "./features/cocktails/xTreme";
import AllProducts from "./pages/store/filteredProducts/all/AllProducts";
import FeaturedProducts from "./pages/store/filteredProducts/featured/FeaturedProducts";
import Apparel from "./pages/store/filteredProducts/categories/apparel/Apparel";
import Footwear from "./pages/store/filteredProducts/categories/footwear/Footwear";
import Accessories from "./pages/store/filteredProducts/categories/accessories/Accessories";
import AllPosts from "./pages/store/filteredPosts/all/AllPosts";
import FeaturedPosts from "./pages/store/filteredPosts/featured/FeaturedPosts";
import Exercise from "./pages/store/filteredPosts/categories/exercise/Exercise";
import Habits from "./pages/store/filteredPosts/categories/habits/Habits";
import Nutrition from "./pages/store/filteredPosts/categories/nutration/Nutration";
import PostDetail from "./pages/postDetail/PostDeatail";
import PhotoLicenses from "./pages/faq/photolicenses/PhotoLicenses";
import Terms from "./pages/faq/terms/Terms";
import Cart from "./layout/cart/Cart";

function App() {
  const currentMenu = useAppSelector((state) => state.xTreme.currentMenu);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(setCurrentMenuChild(""));
  }, [currentMenu]);

  useEffect(() => {
    dispatch(setCartToggle(false));
  }, [pathname]);

  useEffect(() => {
    dispatch(setCurrentMenu("gym"));
  }, []);

  return (
    <div
      style={{
        maxWidth: "100vw !important",
        boxSizing: "border-box",
        backgroundColor: "#e6e9f0",
        position: "relative",
      }}
    >
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Gym />} />
        <Route path="store" element={<Store />}>
          <Route index element={<AllProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="apparel" element={<Apparel />} />
          <Route path="footwear" element={<Footwear />} />
          <Route path="accessories" element={<Accessories />} />
        </Route>
        <Route path="blog" element={<Blog />}>
          <Route index element={<AllPosts />} />
          <Route path="featured" element={<FeaturedPosts />} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="habits" element={<Habits />} />
          <Route path="nutrition" element={<Nutrition />} />
        </Route>
        <Route path="faq" element={<Faq />}>
          <Route index element={<PhotoLicenses />} />
          <Route path="terms" element={<Terms />} />
        </Route>
        <Route path="/product/:productID" element={<ProductDetail />} />
        <Route path="/post/:postID" element={<PostDetail />} />
      </Routes>
      <Contact />
      <Footer />
      <Cart />
    </div>
  );
}

export default App;
