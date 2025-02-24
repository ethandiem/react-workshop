import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Details from './Details.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/Details' element={<Details />} />
      <Route path='/' element={<App />} />
    </Routes>
  </Router>
)
