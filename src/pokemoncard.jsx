function pokemoncard() {
    return (
        <div className="pokemon-card">
            <p className="pokemon-number">#{pokemon.id}</p>
            <img src={pokemon.img} alt={pokemon.name}/>
            <h2>{pokemon.name}</h2>
            <div className="types">
                {pokemon.types.map(function(type){
                    return(
                        <p className="type" key={type}>{type}</p>
                    )
                })}
            </div>    
        </div>
    )
}