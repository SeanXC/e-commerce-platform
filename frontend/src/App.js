import './App.css';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Checkout from './Components/Checkout/Checkout';
import UserProfile from './Components/User/UserProfile';
import CartContextProvider from './Components/CartContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
             <NavBar />
              <Routes>            
                <Route path="/display" element={<DisplayContent />} />
                <Route path="/order/:id" element={<PlaceOrder />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/" element={<MainPage />} />
              </Routes>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
