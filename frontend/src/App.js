import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUsPage/AboutUs';
import Login from './Pages/LoginPage/Login';
import Header from './Components/Tissue/Header';
import Register from './Pages/RegisterPage/Register';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import { AuthProvider } from './Context/AuthContext';
import CSStudentHub from './Pages/YearBasedPage/Year';
import Roadmap from './Pages/RoadMaps/RoadMap';
import HelpAndSupportPage from './Pages/HelpAndSupport/HelpAndSupport';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/header" element={<Header/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register"element={<Register />}/>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/yearbased" element={<CSStudentHub />}/>
        <Route path="/roadmaps" element={<Roadmap />}/>
        <Route path="/helpandsupport" element={<HelpAndSupportPage />}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
