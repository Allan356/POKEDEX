import {useState,useEffect} from 'react'
import PokemonList from './components/PokemonList'

function App(){
    const [pokemons,setPokemons]=useState([])
    useEffect(function(){
        let liste=[];

        for(let i=1;i<=100;i++){
            fetch("https://pokeapi.co/api/v2/pokemon/"+i)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                let pokemon={
                    id:data.id,
                    name:data.name,
                    image:data.sprites.front_default,
                    types:[]
                }

                for(let i=0; i<data.types.length;i++){
                    pokemon.types.push(data.types[i].type.name)
                }
                liste.push(pokemon)

                if(liste.length === 100){
                    liste.sort(function(a,b){
                        return a.id-b.id
                    })
                    setPokemons(liste)
                }
            })
            .catch(function(error){
                console.log("Erreur :",error)
            })
        }
    },[])

    return(
        <div className="app">
            <div className="header">
                <h1>Pokédex</h1>
                <p>Les 100 Pokémon</p>
            </div>
            <PokemonList pokemons={pokemons}/>
        </div>
    )
}

export default App