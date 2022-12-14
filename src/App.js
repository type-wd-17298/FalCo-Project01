import Axios from 'axios'
import { useState } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './Navbar';
import Showuser from './showuser';
import Updateuser from './updateuser';
import UserDelete from './showuser';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Showuser />} />
        <Route path="adduser" element={<Updateuser/>} />
        <Route path="delete" element={<UserDelete/>} />
      </Routes>
    </div>
  );
}

export default App;
