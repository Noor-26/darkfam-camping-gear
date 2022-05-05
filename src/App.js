import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Navber from './components/Shared/Navber/Navber';
import Inventory from './components/Inventory/Inventory';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddInventory from './components/AddInventory/AddInventory';
import Login from './components/Login/Login/Login';
import Ragister from './components/Login/Register/Ragister';
import { ToastContainer } from 'react-toastify';
import Myitems from './components/MyItems/Myitems';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import Blogs from './components/Blogs/Blogs';
import AOS from "aos";
import { useEffect } from 'react'
import "aos/dist/aos.css";
import Footer from './components/Shared/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init();
      },[])
  return (
    <div className="App">
      <Navber/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/inventory/:id' element={<Inventory/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Ragister/>}/>
     <Route path='/blog' element={<Blogs/>}/>
     <Route path='/manageInventory' element={
     <RequireAuth> 
       <ManageInventory/>
     </RequireAuth>
     }/>
     <Route path='/addInventory' element={
     <RequireAuth>
       <AddInventory/>
     </RequireAuth>
     }/>
     <Route path='/myItems' element={
       <RequireAuth>
         <Myitems/>
       </RequireAuth>
     }/>
   </Routes>
   <Footer/>
   <ToastContainer/>

    </div>
  );
}

export default App;
