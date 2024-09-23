// import React, { useEffect, useState } from "react";
// import Wrapper from "../section/Wrapper";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
// import { getPokemonsData } from "../app/reducers/getPokemonsData";
// import PokemonCardGrid from "../components/PokemonCardGrid";
// import { FiSearch } from "react-icons/fi";
// import { debounce } from "../utils/Debounce";

// function Search() {
//   const handleChange = debounce((value: string) => getPokemon(value), 300);
//   const dispatch = useAppDispatch();
//   const { allPokemon, randomPokemons } = useAppSelector(
//     ({ pokemon }) => pokemon
//   );
//   useEffect(() => {
//     dispatch(getInitialPokemonData());
//   }, [dispatch]);

//   useEffect(() => {
//     if (allPokemon) {
//       const clonedPokemons = [...allPokemon];
//       const randomPokemonsId = clonedPokemons
//         .sort(() => Math.random() - Math.random())
//         .slice(0, 20);
//       dispatch(getPokemonsData(randomPokemonsId));
//     }
//   }, [allPokemon, dispatch]);

//   const getPokemon = async (value: string) => {
//     if (value.length) {
//       const pokemons = allPokemon?.filter((pokemon) =>
//         pokemon.name.includes(value.toLowerCase())
//       );
//       dispatch(getPokemonsData(pokemons!));
//     } else {
//       const clonedPokemons = [...(allPokemon as [])];
//       const randomPokemonsId = clonedPokemons
//         .sort(() => Math.random() - Math.random())
//         .slice(0, 20);
//       dispatch(getPokemonsData(randomPokemonsId));
//     }
//   };
//   const [searchVisible, setSearchVisible] = useState(false);
//   const toggleSearch = () => {
//     setSearchVisible(!searchVisible);
//   };
//   // <Head>
//   //   <title>Ayush Bhardwaj</title>
//   //   <link rel="shortcut icon" href="/favicon.png" />
//   // </Head>
//   return (
//     <div className="search">
//       <div className="search-container">
//         <FiSearch onClick={toggleSearch} className="search-icon" />
//         {searchVisible && (
//           <input
//             type="text"
//             className={`pokemon-searchbar ${
//               searchVisible ? "search-active" : ""
//             }`}
//             placeholder="Search Pokemon"
//             onChange={(e) => handleChange(e.target.value)}
//           />
//         )}
//       </div>
//       <PokemonCardGrid pokemons={randomPokemons!} />
//     </div>
//   );
// }

// export default Wrapper(Search);
import React, { useEffect, useState } from "react";
import Wrapper from "../section/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
import { getPokemonsData } from "../app/reducers/getPokemonsData";
import PokemonCardGrid from "../components/PokemonCardGrid";
import Loader from "./Loader"; // Import your loader component
import { FiSearch } from "react-icons/fi";
import { debounce } from "../utils/Debounce";

function Search() {
  const [loading, setLoading] = useState(false); // Add loading state
  const handleChange = debounce((value: string) => getPokemon(value), 300);
  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true
      await dispatch(getInitialPokemonData());
      setLoading(false); // Set loading to false
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  const getPokemon = async (value: string) => {
    if (value.length) {
      setLoading(true); // Set loading to true
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonsData(pokemons!));
      setLoading(false); // Set loading to false
    } else {
      const clonedPokemons = [...(allPokemon as [])];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemonsId));
    }
  };

  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="search">
      <div className="search-container">
        <FiSearch onClick={toggleSearch} className="search-icon" />
        {searchVisible && (
          <input
            type="text"
            className={`pokemon-searchbar ${searchVisible ? "search-active" : ""}`}
            placeholder="Search Pokemon"
            onChange={(e) => handleChange(e.target.value)}
          />
        )}
      </div>
      {loading ? <Loader /> : <PokemonCardGrid pokemons={randomPokemons!} />}
    </div>
  );
}

export default Wrapper(Search);
