import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { EntryPage } from './Pages/EntryPage';
import Footer from './Components/Footer/Footer';
import RegisterComplaint from './Pages/RegisterComplaint';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<EntryPage/>} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/register-complaint" element={<RegisterComplaint />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;