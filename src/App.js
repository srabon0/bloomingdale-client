import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/pages/Blog/Blog";
import Home from "./components/pages/Home/Home/Home";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Signup from "./components/pages/Authentication/Signup/Signup";
import Login from "./components/pages/Authentication/Login/Login";
import Profile from "./components/Profile/Profile";
import AddProduct from "./components/AddProduct/AddProduct";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Notfound from "./components/Shared/Notfound/Notfound";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        

        <Route
          path="/inventory/:id"
          element={<ManageProduct></ManageProduct>}
        ></Route>

        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
      <Route path='/delete' element={<AddProduct></AddProduct>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
