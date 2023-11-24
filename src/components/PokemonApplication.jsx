import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
export default function PokemonApplication() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      setPokemon(data.results);
    };
    fetchPokemons();
  }, []);

  return (
    <div className="pokemon-container">
      <select
        onChange={(e) => setPokemonData(e.target.value)}
        name="pokemons"
        id="pokemons"
      >
        <option value="">Choose a pokemon</option>
        {pokemon.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          const fetchPokemon = async () => {
            const response = await fetch(pokemonData);
            const data = await response.json();
            setPokemonInfo(data);
          };
          fetchPokemon();
        }}
      >
        get pokemon data{" "}
      </button>
      {console.log(pokemonInfo.types)}
      {pokemonInfo.sprites && (
        <Pokemon
          image={
            pokemonInfo.sprites.back_default
              ? pokemonInfo.sprites.back_default
              : pokemonInfo.sprites.front_default
          }
          name={pokemonInfo.name.toUpperCase()}
          types={
            pokemonInfo.types &&
            pokemonInfo.types.map((item) => (
              <li key={item.type.name}>{item.type.name}</li>
            ))
          }
          weight={pokemonInfo.weight}
          height={pokemonInfo.height}
          abilities={
            pokemonInfo.abilities &&
            pokemonInfo.abilities.map((item) => (
              <li key={item.ability.name}>{item.ability.name}</li>
            ))
          }
          pokemonInfo
          hp={pokemonInfo.stats[0].base_stat}
          attack={pokemonInfo.stats[1].base_stat}
          specialAttack={pokemonInfo.stats[2].base_stat}
          defense={pokemonInfo.stats[3].base_stat}
          specialDefense={pokemonInfo.stats[4].base_stat}
          speed={pokemonInfo.stats[5].base_stat}
        />
      )}
    </div>
  );
}
