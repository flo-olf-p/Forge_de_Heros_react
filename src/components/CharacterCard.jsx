export default function CharacterCard({ character, onClick }) {
  return (
    <div
      onClick={() => onClick(character)}
      style={{ border: "1px solid #ccc", padding: 10, cursor: "pointer" }}
    >
      <img src={character.image} alt="" width="100" />
      <h3>{character.name}</h3>
      <p>{character.characterClass?.name}</p>
      <p>{character.race?.name}</p>
      <p>Niveau {character.level}</p>
    </div>
  );
}