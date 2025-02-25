import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Details from './Details.jsx';
import DetailsContext from './DetailsContext'
import './App.css'

function Main() {
  const [details, setDetails] = useState({});

  return (
    <Router>
      <App/>
    </Router>
  )
}


createRoot(document.getElementById('root')).render(<Main />);