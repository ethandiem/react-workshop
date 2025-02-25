// import { useState, useEffect, useContext } from "react";
// import DetailsContext from "./DetailsContext"
// import Pokemon from "./Pokemon";
// import { Link } from "react-router-dom";
// import loadingGif from './assets/Ripple.gif'


// export default function Loading(){;
//   const Loading = () => {

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       window.location.href = '/Details'
//     }, 1000)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <>
//       <div className = "loading">
//         <img src = {loadingGif} alt = "Loading..." />
//       </div>
//     </>
//   )
// }
// }