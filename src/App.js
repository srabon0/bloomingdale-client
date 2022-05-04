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
import Manage from "./components/Manage/Manage";
import { createContext, useState } from "react";
import RequireAuth from "./components/pages/Authentication/RequreAuth/RequireAuth";
export const ItemContext = createContext();

function App() {
  const [items,setItems] = useState([]);
  return (
    <ItemContext.Provider value={[items,setItems]}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={
          <RequireAuth>
            <Profile></Profile>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        

        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ManageProduct></ManageProduct>
            </RequireAuth>
          }
        ></Route>

        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
      <Route path='/delete' element={<AddProduct></AddProduct>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </ItemContext.Provider>
  );
}

export default App;
