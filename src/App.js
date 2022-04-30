import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Navber from './components/Shared/Navber/Navber';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Navber/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/inventory/:id' element={<Inventory/>}/>
   </Routes>
   
    </div>
  );
}

export default App;
