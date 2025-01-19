import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import BMI from "./pages/Home/BMI";
import Aservices from "./pages/Home/Aservices";
import Banner from "./pages/Home/Banner";
import Trainers from "./pages/Home/Trainers";
import Popular from "./pages/Home/Popular";
import PricingPlan from "./pages/Home/PricingPlan";
import Contacts from "./pages/Home/Contacts";
import Footer from "./pages/Home/Footer";
// import LoginSignin from "./pages/Home/LoginSignin";
// import SignUp from "./pages/Home/Signin_Login/SignUp";
// import Login from "./pages/Home/Signin_Login/Login";
function App() {

  return (
    <Router>
      <Navbar />
          <Home />
          <About />
          <BMI />
          <Aservices />
          <Banner />
          <Trainers />
          <Popular />
          <PricingPlan />
          <Signup />
          <Routes>
              <Route path='/Login'   Component={Login}></Route>
              <Route path='/signup'  Component={Signup}></Route>
          </Routes><hr />
          <Contacts />
          <Footer />
    </Router>
  )
}

export default App
