import API from "../services/api";

export default function DetailCharacter({ character, setSelectedCharacter, setRouting }) {

  if (!character) return <p>Chargement...</p>;

  const stats = [
    { name: "STR", value: character.strength },
    { name: "DEX", value: character.dexterity },
    { name: "CON", value: character.constitution },
    { name: "INT", value: character.intelligence },
    { name: "WIS", value: character.wisdom },
    { name: "CHA", value: character.charisma },
  ];

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} width="150" alt={"Portrait de "+character.name} />

      <p>Classe : {character.characterClass?.name}</p>
      <p>Race : {character.race?.name}</p>
      <p>Niveau : {character.level}</p>
      <p>Points de vie : {character.healthPoints}</p>

      <h2>Statistiques</h2>
      {stats.map(stat => (
        <div key={stat.name}>
          <span>{stat.name}</span>
          <div className="barre"><div
          className="barre-remplie"
          style={{ width: `${(stat.value / 15) * 100}%` }}/>
            <div
              style={{
                background: "blue",
                width: `${(stat.value / 15) * 100}%`,
                height: "100%"
              }}
            />
          </div>
        </div>
      ))}

      <h2>Compétences</h2>
      <ul>
        {character.characterClass?.skills?.map(skill => (
          <li key={skill.id}>
            {skill.name} ({skill.ability})
          </li>
        ))}
      </ul>

      <h2>Groupes</h2>
      <ul>
        {character.parties?.map(group => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>

      <button onClick={ (e) => {
        e.preventDefault();
        setRouting("characters");
        setSelectedCharacter(null);
      }}>
        Retour à la liste des personnages
      </button>
    </div>
  );
}