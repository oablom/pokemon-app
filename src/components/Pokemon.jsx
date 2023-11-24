// //skriv ut
// Namn
// Bild på en Pokemon
// Vilken/Vilka typer din pokemon har (dvs “types” i API:et)
// Vikt
// Längd

// hp, attack, special attack, defense, special defense, speed
export default function Pokemon({
  image,
  name,
  types,
  weight,
  height,
  abilities,
  hp,
  attack,
  specialAttack,
  defense,
  specialDefense,
  speed,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className="pokemon-info-container">
        <div className="pokemon-info">
          <p>Type:</p>
          <ul>{types}</ul>
          <p>
            Weight: <span>{weight}</span>
          </p>
          <p>
            Height: <span>{height}</span>
          </p>
          <p>Special skills: {abilities}</p>
        </div>

        <div className="pokemon-info2">
          <h3>Stats</h3>
          <p>
            HP: <span>{hp}</span>
          </p>
          <p>
            Attack: <span>{attack}</span>
          </p>
          <p>
            Special attack: <span>{specialAttack}</span>
          </p>
          <p>
            Defense: <span>{defense}</span>
          </p>
          <p>
            Special defense: <span>{specialDefense}</span>
          </p>
          <p>
            Speed: <span>{speed}</span>
          </p>
        </div>
      </div>{" "}
    </div>
  );
}
