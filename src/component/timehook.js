
import { useState } from "react";



const Timehook=()=>{



const[date,setDate]=useState(new Date().toLocaleDateString())
const[heure,setHeure]=useState(new Date().toLocaleTimeString())
setTimeout(()=>{
    setDate(new Date().toLocaleDateString())
    setHeure(new Date().toLocaleTimeString())

},1000)

    return (<div>
        <h1>Bonjour !
            time version hook
        </h1>
       
        <h2>Aujourdh'ui : {date}.</h2>
        <h2>Il est  {heure}.</h2>
        </div>);

} 
        

 
export default Timehook;
