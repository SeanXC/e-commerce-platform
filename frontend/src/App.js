import './App.css';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
             <NavBar />
              <Routes>            
                <Route path="/display" element={<DisplayContent />} />
                <Route path="/" element={<MainPage />} />
              </Routes>
      </div>
    </Router>
  );
}

export default App;
