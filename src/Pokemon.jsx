import { useState, useEffect, useContext } from "react";
import Details from "./Details";
import { Routes, Route, Link } from "react-router-dom";
import DetailsContext from "./DetailsContext";

export default function Pokemon({data}){
    const [detail, setDetail] = useState({})
    const [pokeSprite, setPokeSprite] = useState('')
    const [type, setType] = useState('')
    const {setDetails} = useContext(DetailsContext)


    useEffect(() =>{
        fetch(data.url)
        .then(res => res.json())
        .then(data => {
            setDetail(data)
            setPokeSprite(data.sprites.other.home.front_default)
            setType(data.types[0].type.name)
        })
    },[])

    return (
        <>
            <div className = {`pokemon ${type}`}>
                <h2 className="listName">{detail.name}</h2>
                <Link to='/Details' details={detail}>
                <img className="picmon" key={detail.name} alt={detail.name} src={pokeSprite}
                    onClick={() => setDetails(detail)}/>
                </Link>
            </div>
        </>
    )
}
