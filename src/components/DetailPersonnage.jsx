import { useEffect, useState } from "react";
import API from "../services/api";

export default function DetailPersonnage({ idPersonnage, retour }) {
  const [personnage, setPersonnage] = useState(null);

  useEffect(() => {
    API.get(`/characters/${idPersonnage}`)
      .then(res => setPersonnage(res.data));
  }, [idPersonnage]);

  if (!personnage) return <p>Chargement...</p>;

  const stats = [
    { nom: "STR", valeur: personnage.strength },
    { nom: "DEX", valeur: personnage.dexterity },
    { nom: "CON", valeur: personnage.constitution },
    { nom: "INT", valeur: personnage.intelligence },
    { nom: "WIS", valeur: personnage.wisdom },
    { nom: "CHA", valeur: personnage.charisma },
  ];

  return (
    <div>
      <button onClick={retour}>Retour</button>

      <h1>{personnage.name}</h1>
      <img src={personnage.image} width="150" />

      <p>Classe : {personnage.characterClass?.name}</p>
      <p>Race : {personnage.race?.name}</p>
      <p>Niveau : {personnage.level}</p>
      <p>Points de vie : {personnage.healthPoints}</p>

      <h2>Statistiques</h2>
      {stats.map(stat => (
        <div key={stat.nom}>
          <span>{stat.nom}</span>
          <div className="barre"><div
          className="barre-remplie"
          style={{ width: `${(stat.valeur / 15) * 100}%` }}/>
            <div
              style={{
                background: "blue",
                width: `${(stat.valeur / 15) * 100}%`,
                height: "100%"
              }}
            />
          </div>
        </div>
      ))}

      <h2>Compétences</h2>
      <ul>
        {personnage.characterClass?.skills?.map(s => (
          <li key={s.id}>
            {s.name} ({s.ability})
          </li>
        ))}
      </ul>

      <h2>Groupes</h2>
      <ul>
        {personnage.parties?.map(g => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </div>
  );
}