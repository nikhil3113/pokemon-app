import { useState } from 'react';
import axios from 'axios';


function App() {
  const [data,setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`;


  const searchPokemon = (event) =>{
    if(event.key === "Enter"){
      axios
      .get(url)
      .then((response) =>{
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) =>{
        console.log(error);
      })
      setSearchTerm('')
    }

  }
  return (
    <div className="app">
      <div className='search'>
        <input 
        className='search1'
          type='text'
          placeholder='Enter Pokemon name'
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          onKeyDown={searchPokemon}
        />
      </div>
     { data ? (<div className='details'>
        <h1 className='name'>{data.name}</h1>
        <img className='image' src={data.sprites.front_default} alt={data.name} />
        <p className='height'>Height: {data.height} </p>
        <p className='weight'>Weight: {data.weight} </p>
      </div>
     ) : (
      <h1>Pokemon not found</h1>
    ) }
    </div>
  );
}

export default App;
