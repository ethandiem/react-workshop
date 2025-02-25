import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import Details from "./Details";
import DetailsContext from "./DetailsContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [home, setHome] = useState('https://pokeapi.co/api/v2/pokemon?limit=151')
  const [pokeList, setPokeList] = useState([])
  const [pokePic, setPokePic] = useState('')
  const [details, setDetails] = useState({})
  const value = {details,setDetails}

  useEffect(() => {
    fetch(home)
      .then(res => res.json())
      .then(data => {
        setPokeList(data.results)
      })
  }, [home])

  return (
  <DetailsContext.Provider value = {value}>
      <h1 className = "title">Gen1 PokeList</h1>
    <Routes>
      <Route path='/Details' element={<Details />} />
      <Route path='/' element= {pokeList.map(pokemon => <Pokemon key={pokemon.name} data={pokemon}/>)}/>
    </Routes>
  </DetailsContext.Provider>
  )
}

// {pokeList.map(pokemon => <Pokemon key={pokemon.name} pokePic={callPic(pokemon.url)}/>)}

export default App


// return (
//   <DetailsContext.Provider value={{ details, setDetails }}>
//   <Router>
//   </Router>
//   </DetailsContext.Provider>
//   )