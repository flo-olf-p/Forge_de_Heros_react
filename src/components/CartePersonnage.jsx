export default function CartePersonnage({ personnage, auClic }) {
  return (
    <div
      onClick={() => auClic(personnage)}
      style={{ border: "1px solid #ccc", padding: 10, cursor: "pointer" }}
    >
      <img src={personnage.image} alt="" width="100" />
      <h3>{personnage.name}</h3>
      <p>{personnage.characterClass?.name}</p>
      <p>{personnage.race?.name}</p>
      <p>Niveau {personnage.level}</p>
    </div>
  );
}