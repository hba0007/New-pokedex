function NavBar ({ pokemonIndex, setPokemonIndex, pokemonList }) {
    const previousIndex = () => {
        setPokemonIndex(pokemonIndex - 1);
       };

       const nextIndex = () => {
        setPokemonIndex(pokemonIndex + 1);
       };
    


return (
    <div className="button-container">
        <button onClick={previousIndex}>Précédent</button>
        
        <button onClick={nextIndex}>Suivant</button>
    </div>
)
}

export default NavBar;