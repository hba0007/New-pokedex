import Proptypes from "prop-types";
import PokemonCard from "./PokemonCard";


function NavBar ({  pokemonIndex, setPokemonIndex , pokemonList  }) {

    const previousIndex = () =>{setPokemonIndex(pokemonIndex -1 )};
    const nextIndex = () =>{setPokemonIndex(pokemonIndex +1 )}
    console.log(pokemonIndex);
    return (
        <div>
  {pokemonIndex >0 && <button onClick={previousIndex}>Précédent</button>}
  {pokemonIndex< pokemonList.length-1 && <button onClick={nextIndex}>Suivant</button>}
     </div>
    )
}





//return (
//<div className="button-container">

    //<button >Précédent</button>

    //<button>Suivant</button>

       //{pokemonList.map((pokemon, index) => (
        //<button key={pokemon.name} onClick={() =>setPokemonIndex(index)}>
           // {pokemon.name}</button>
       //))}
       //</div>
       //);
    //}

//NavBar.propTypes = {
    //PokemonCard: PokemonCard.number.isRequired,
//     setPokemonIndex: Proptypes.func.isRequired,
//     pokemonList: Proptypes.arrayOf(
        
//         PokemonCard.shape({
//          name: Proptypes.string.isRequired,
//          imgSrc: Proptypes.string,
//         })
// ).isRequired,
// };

export default NavBar;