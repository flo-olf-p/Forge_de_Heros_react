export default function CharacterCard({ character, setSelectedCharacter }) {
  return (
    <div>
      <img src={character.image} alt={"Portrait de "+character.name} />
      <button onClick={() => setSelectedCharacter(character)}>
        <h3>{character.name}</h3>
      </button>
      <p>{character.characterClass?.name}</p>
      <p>{character.race?.name}</p>
      <p>Niveau {character.level}</p>
    </div>
  );
}