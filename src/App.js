import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Uplaod from './components/Uplaod';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';





function App() {
  return (
    <Router>
      <Header />
      <Routes >

        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Uplaod />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
