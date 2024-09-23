import React from "react";
import { IoGitCompare } from "react-icons/io5";
import { FaTrash, FaPlus } from "react-icons/fa";
import { addToCompare, setCurrentPokemon } from "../app/slices/PokemonSlice";
import { useAppDispatch } from "../app/hooks";
import { setPokemonTab, setToast } from "../app/slices/AppSlice";
import { addPokemonToList } from "../app/reducers/addPokemonToList";
import { pokemonTypeInterface, userPokemonsType } from "../utils/Types";
import { removePokemon } from "../app/reducers/removePokemonFromUserList";
import { pokemonTabs } from "../utils/Constants";
import { useLocation, useNavigate } from "react-router-dom";

function PokemonCardGrid({ pokemons }: { pokemons: userPokemonsType[] }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons?.map((data: userPokemonsType) => {
            const image = data.image || "path_to_fallback_image"; // Fallback in case image is undefined
            return (
              <div key={data.id} className="pokemon-card">
                <div className="pokemon-card-list">
                  {location.pathname.includes("/pokemon") ? (
                    <FaPlus
                      className="plus"
                      onClick={() => dispatch(addPokemonToList(data))}
                    />
                  ) : location.pathname.includes("/search") ? (
                    <FaPlus
                      className="plus"
                      onClick={() => dispatch(addPokemonToList(data))}
                    />
                  ) : (
                    <FaTrash
                      className="trash"
                      onClick={async () => {
                        await dispatch(removePokemon({ id: data.firebaseId! }));
                        dispatch(
                          setToast(`${data.name} Removed Successfully.`)
                        );
                      }}
                    />
                  )}
                </div>
                <div className="pokemon-card-compare">
                  <IoGitCompare
                    onClick={() => {
                      dispatch(addToCompare(data));
                      dispatch(
                        setToast(
                          `${data.name} has been added to compare queue.`
                        )
                      );
                    }}
                  />
                </div>
                <h3 className="pokemon-card-title">{data.name}</h3>
                <img
                  src={image} // Use the fallback image if the data.image is undefined
                  alt={data.name}
                  className="pokemon-card-image"
                  loading="lazy"
                  onClick={() => {
                    dispatch(setPokemonTab(pokemonTabs.description));
                    dispatch(setCurrentPokemon(undefined));
                    navigate(`/pokemon/${data.id}`);
                  }}
                />
                <div className="pokemon-card-types">
                  {data.types.map(
                    (type: pokemonTypeInterface, index: number) => {
                      const keys = Object.keys(type);
                      return (
                        <div className="pokemon-card-types-type" key={index}>
                          <img
                            src={
                              type[keys[0]].image ||
                              "path_to_fallback_type_image"
                            }
                            alt={keys[0]}
                            className="pokemon-card-types-type-image"
                            loading="lazy"
                          />
                          <h6 className="pokemon-card-types-type-text">
                            {keys[0]}
                          </h6>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PokemonCardGrid;
