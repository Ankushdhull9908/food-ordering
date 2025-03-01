
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';

import { Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/cart' element={<Cart/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile/:name' element={<Profile/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
