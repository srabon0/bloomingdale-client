import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/pages/Blog/Blog';
import Home from './components/pages/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Signup from './components/pages/Authentication/Signup/Signup';
import Login from './components/pages/Authentication/Login/Login';
function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
