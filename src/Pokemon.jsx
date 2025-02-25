import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DetailsContext from "./DetailsContext";

export default function Pokemon({data}){
    const [pokeSprite, setPokeSprite] = useState('')
    const [type, setType] = useState('')
    const {setDetails} = useContext(DetailsContext)


    useEffect(() =>{
        fetch(data.url)
        .then(res => res.json())
        .then(data => {
            setPokeSprite(data.sprites.other.home.front_default)
            setType(data.types[0].type.name)
        })
    },[])

    return (
        <>
            <div className = {`pokemon ${type}`}>
                <h2 className="listName">{data.name}</h2>
                <Link to='/Details'>
                <img className="picmon" key={data.name} alt={data.name} src={pokeSprite}
                    onClick={() => setDetails(data)}/>
                </Link>
            </div>
        </>
    )
}
