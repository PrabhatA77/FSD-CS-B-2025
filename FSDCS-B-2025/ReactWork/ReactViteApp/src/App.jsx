import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from './pages/Registration.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import MainLayout from './pages/MainLayout.jsx';
import Cart from './pages/Cart.jsx';
import { CartProvider } from './context/CartContext.jsx';

function App() {

  return (
    // <div className='container'>
    //   <h2>Welcome to react vite</h2>
    //   {/* <Gallery/> */}

    //   <StateHandling/>
    // </div>

    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
