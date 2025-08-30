import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUsPage/AboutUs';
import Login from './Pages/LoginPage/Login';
import Header from './Components/Tissue/Header';
import Register from './Pages/RegisterPage/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/header" element={<Header/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register"element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
