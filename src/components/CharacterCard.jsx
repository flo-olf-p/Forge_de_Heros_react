export default function CharacterCard({ character, onClick }) {
  return (
    <div
      onClick={() => onClick(character)}
    >
      <img src={character.image} alt=""/>
      <h3>{character.name}</h3>
      <p>{character.characterClass?.name}</p>
      <p>{character.race?.name}</p>
      <p>Niveau {character.level}</p>
    </div>
  );
}