import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import Details from "./Details";
import DetailsContext from "./DetailsContext";


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
    <>
    <DetailsContext.Provider value={value}>
      <div className = "title">Gen1 PokeList</div>
      <div className = "pokeDisplay">{pokeList.map(pokemon => <Pokemon key={pokemon.name} data={pokemon}/>)}</div>
    </DetailsContext.Provider>
    </>
  )
}

// {pokeList.map(pokemon => <Pokemon key={pokemon.name} pokePic={callPic(pokemon.url)}/>)}

export default App
