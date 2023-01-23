import React, {useState, useEffect} from 'react';
// npm install axios
import axios from 'axios';

const Pokeaxios = () => {
    const [listPoke,setListPoke]=useState([])

// con useEffect 
/* useEffect(()=>{ // se ejecuta como side effect cada vez que se renderiza 
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then((res)=>{
        setListPoke(res.data.results) 
    }).catch(error=>{console.log(error)})
},[])// el segundo argumento de sensibilidad en caso de que pongamos listPoke al haber un cambio se volvera a ejecutar useEffect, por defecto se comporta asi */

//solicitud mediante una funcion sync utilizando axios y promises 

/* const getPoke= ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then((res)=>{
        setListPoke(res.data.results) 
    }).catch(error=>{console.log(error)})
} */


//usando async/await con try/catch

const getPoke = async () => {
    try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        console.log(res.data.results);
        setListPoke(res.data.results);
    } catch (error) {
        console.log(error);
    }
}


  return (
    <div className='container col-2'>
        <button type='button' className='btn btn-outline-info my-2' onClick={getPoke}>Fetch Pokemon</button>
        <ul className='list-group'>
            {
            listPoke.map((e,index)=><li key={index} className='list-group-item'>{e.name}</li>)
            }
        </ul>
    </div>
  )
}

export default Pokeaxios