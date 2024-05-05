
function PokemonCard(props) {
    const pokemon = { name: "mew" };

    console.log(props);
    return (
     <figure>
        {pokemon.imgSrc != null ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
            <p>???</p>
        )}    
        <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
}

export default PokemonCard;