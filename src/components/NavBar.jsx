import Proptypes from "prop-types";


function NavBar ({  setPokemonIndex , pokemonList  }) {
    return (
        <div className="button-container">
        {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
                {pokemon.name}
            </button>
        ))}
        </div>
    );
    }

// //    const previousIndex = () =>{setPokemonIndex(pokemonIndex -1 )};
//     const nextIndex = () =>{setPokemonIndex(pokemonIndex +1 )}
//     console.log(pokemonIndex);
//     return (
//         <div>
//   {pokemonIndex >0 && <button onClick={previousIndex}>Précédent</button>}
//   {pokemonIndex< pokemonList.length-1 && <button onClick={nextIndex}>Suivant</button>}
//      </div>
//     )
// }





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

NavBar.propTypes = {
   
    setPokemonIndex: Proptypes.func.isRequired,
    pokemonList: Proptypes.arrayOf(
        Proptypes.shape({
         name: Proptypes.string.isRequired,
         imgSrc: Proptypes.string,
        })
)
};

export default NavBar;