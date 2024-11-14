import Navigation from "./Components/Navigation";
import LoginPage from "./Pages/LoginPage"
import RegistrationPage from "./Pages/RegistrationPage"
import RegisterComplaint from "./Pages/RegisterComplaint"
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/register-complaint" element={<RegisterComplaint />} />
          <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
