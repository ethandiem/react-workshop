import { useState, useEffect, useContext } from "react";
import DetailsContext from "./DetailsContext"

export default function Details() {
    const {details} = useContext(DetailsContext)
    console.log({details})
    return (
    <>
        <div className="test">{details.name}</div>
    </>
    )
}