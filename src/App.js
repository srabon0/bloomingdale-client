import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/pages/Blog/Blog';
import Home from './components/pages/Home/Home';
import Header from './components/Shared/Header/Header';
function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
    </Routes>
    </>
  );
}

export default App;
