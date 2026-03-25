export default function CharacterCard({ character, setSelectedCharacter, setRouting }) {
  return (
    <div>
      <img src={character.image} alt={"Portrait de "+character.name} />
      <button onClick={(e) => {
          e.preventDefault();
          setSelectedCharacter(character)
          setRouting("characters");
      }}>
        <h3>{character.name}</h3>
      </button>
      <p>{character.class_character?.name}</p>
      <p>{character.race?.name}</p>
      <p>Niveau {character.level}</p>
    </div>
  );
}