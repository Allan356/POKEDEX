import PokemonCard from './pokemoncard'

function pokemonlist({pokemons}){
    return(
        <div className="pokemon-list">
            {pokemons.map(function(pokemon){
                return(
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                )
            })}
        </div>
    )
}

export default PokemonList