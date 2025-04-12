import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Addblog from './components/Addblog';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/addblog" element={<Addblog />} />
      </Routes>
    </Router>
  );
};

export default App;