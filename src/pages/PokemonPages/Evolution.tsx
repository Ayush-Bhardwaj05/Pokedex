import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPokemonsData } from "../../app/reducers/getPokemonsData";
import PokemonCardGrid from "../../components/PokemonCardGrid";

function Evolution() {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const pokemonData = useAppSelector(({ pokemon }) => pokemon);
  const { currentPokemon } = useAppSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = currentPokemon?.evolution.map(({ pokemon }) => pokemon);
      await dispatch(getPokemonsData(pokemons!));
      setIsLoaded(true);
    };
    fetchData();
  }, [dispatch, pokemonData.currentPokemon]);

  return (
    <div className="page">
      {isLoaded && <PokemonCardGrid pokemons={pokemonData.randomPokemons!} />}
    </div>
  );
}

export default Evolution;
