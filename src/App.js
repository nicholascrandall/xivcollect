import './App.css';
import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
