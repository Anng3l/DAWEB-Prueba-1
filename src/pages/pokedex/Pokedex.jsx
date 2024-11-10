import React, { useEffect, useState } from 'react'

import Card from '../../components/card/card';

import "./pokedexStyle.css"
import { MdPhonelinkOff } from 'react-icons/md';

export default function Pokedex() {
  
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(()=>{
    const fetchData = async () => {
      try
      {
        let pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
        let data = await pokedex.json();
        
        let x = await Promise.all(
          data.results.map(async (pokemon)=>{
            let x = await fetch(pokemon.url);
            let data = await x.json();
            return data;
          })
        )
        setPoke(x);
        setLoading(false);
      }
      catch(error)
      {
        console.log(error);
      }      
    }
    fetchData();
  }, [])
  
  const pokemonInfo = async (url) => {
    let x = await fetch(url);
    let data = await x.json();

    return data;
  }



  return (
    <div className='container'>
      {/* Título y buscador */}
      <div>
        asd
      </div>
  
      {/* Pokedex */}
      {
        loading ? "Cargando..."
        :
        <div className='contenedorPokedex' id='pokedex'>
        {poke.map((pokemon, index) => (
          <Card
            key={index}
            pokeImagen={ pokemon.sprites.other?.["official-artwork"].front_default //Los corchetes son para acceder a la clave official-artwork,
                                                                                    //pues al ser el guión medio un carácter especial, éste lanza error sin este tratamiento.
              
              /*
              ()=>
                {
                  let j = pokemon.url;
                  let x = pokemonInfo(j);
                  return x.sprites.other.official-artwork.front_default;
                }
              */
            }
            nombre={pokemon.name}
            /*tipo1={() => {
              let j = pokemon.url;
              let x = pokemonInfo(j);
              let url = x.types[0].type.url;
              const verificacion = url ? url.match(/(\d+)\/?$/) : null;
              let numero = verificacion ? verificacion[1] : "";
              return numero
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${numero}.png`
                : "";
            }}
            mostrar={pokemon.types ? { display: 'block' } : { display: 'none' }}
            tipo2={() => {
              let j = pokemon.url;
              let x = pokemonInfo(j);
              if (x.types.length == 2)
              {
                let url = x.types[1].type.url;
                const verificacion = url ? url.match(/(\d+)\/?$/) : null;
                let numero = verificacion ? verificacion[1] : "";
                return numero
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${numero}.png`
                : "";
              }
            }}*/
          />
        ))}
      </div>
      }
    </div>
  );  
}
