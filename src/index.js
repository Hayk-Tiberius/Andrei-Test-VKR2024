import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Legal from './Legal';
import LogIn from './firebase/LogIn';
import TestReact from './TestReact';
import ComputerList from './List/ComputerList';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Nav />} />
      <Route path="/Legal.jsx" element={<Legal />} />
      <Route path="/LogIn.jsx" element={<LogIn />} />
      <Route path="/TestReact.jsx" element={<TestReact />} />
      <Route path="/ComputerList.jsx" element={<ComputerList />} />
    </Routes>
  </Router>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


