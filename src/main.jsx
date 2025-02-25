import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Details from './Details.jsx';
import DetailsContext from './DetailsContext'


function Main() {
  const [details, setDetails] = useState({});

  return (
    <Router>
      <App/>
    </Router>
  )

// return (
//   <DetailsContext.Provider value={{ details, setDetails }}>
//   <Router>
//     <Routes>
//       <Route path='/Details' element={<Details />} />
//       <Route path='/' element={<App />} />
//     </Routes>
//   </Router>
//   </DetailsContext.Provider>
//   )
}


createRoot(document.getElementById('root')).render(<Main />);