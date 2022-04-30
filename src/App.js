import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Navber from './components/Shared/Navber/Navber';
import Inventory from './components/Inventory/Inventory';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddInventory from './components/AddInventory/AddInventory';

function App() {
  return (
    <div className="App">
      <Navber/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/inventory/:id' element={<Inventory/>}/>
     <Route path='/manageInventory' element={<ManageInventory/>}/>
     <Route path='/addInventory' element={<AddInventory/>}/>
   </Routes>
   
    </div>
  );
}

export default App;
