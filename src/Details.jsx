import { useState, useEffect, useContext } from "react";
import DetailsContext from "./DetailsContext"
import Pokemon from "./Pokemon";

export default function Details() {
    const {details} = useContext(DetailsContext)
    const [pokeSprite, setPokeSprite] = useState('')
    const [type, setType] = useState('')
    const [moves, setMoves] = useState([])
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [hp, sethp] = useState('')
    const [attack, setAttack] = useState('')
    const [defense, setDefense] = useState('')
    const [special_attack, setSpecialAttack] = useState('')
    const [special_defence, setSpecialDefense] = useState('')
    const [speed, setSpeed] = useState('')


    useEffect(() =>{
        fetch(details.url)
        .then(res => res.json())
        .then(data => {
            setPokeSprite(data.sprites.front_default)
            setType(data.types[0].type.name)
            setMoves(data.moves)
            setHeight(data.height)
            setWeight(data.weight)
            sethp(data.stats[0].base_stat)
            setAttack(data.stats[1].base_stat)
            setDefense(data.stats[2].base_stat)
            setSpecialAttack(data.stats[3].base_stat)
            setSpecialDefense(data.stats[4].base_stat)
            setSpeed(data.stats[5].base_stat)

        })
    },[])

    return (
    <>
        <img className="picmon" key={details.name} alt={details.name} src={pokeSprite}/>
        <div className="name">Name: {details.name}</div>
        {/* <div className="moves">{moves}</div> */}
        <div className="height">Height: {height}</div>
        <div className="weight">Weight: {weight}</div>
        <div className="HP">HP: {hp}</div>
        <div className="Attack">Attack: {attack}</div>
        <div className="Defense">Defense: {defense}</div>
        <div className="SpecialAttack">Special Attack: {special_attack}</div>
        <div className="SpecialDefense">Special Defence: {special_defence}</div>
        <div className="Speed">Speed: {speed}</div>
        <div className="MoveDisplay">Moves: {moves.map(item => <div key={item.move.name}>{item.move.name}</div>)}</div>
    </>
    )
}