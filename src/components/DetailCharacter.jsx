import { useEffect, useState } from "react";
import API from "../services/api";

export default function DetailCharacter({ idCharacter, back }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Mock data for testing
    const mockCharacters = [
      {
        id: 1,
        name: "Aragorn",
        image: "https://via.placeholder.com/150",
        characterClass: { name: "Guerrier" },
        race: { name: "Humain" },
        level: 10,
        strength: 16,
        dexterity: 14,
        constitution: 15,
        intelligence: 12,
        wisdom: 13,
        charisma: 17,
        healthPoints: 120,
        skills: [
          { id: 1, name: "Combat à l'épée", ability: "STR" },
          { id: 2, name: "Endurance", ability: "CON" }
        ],
        parties: [
          { id: 1, name: "La Communauté de l'Anneau" }
        ]
      },
      {
        id: 2,
        name: "Legolas",
        image: "https://via.placeholder.com/150",
        characterClass: { name: "Archer" },
        race: { name: "Elfe" },
        level: 9,
        strength: 12,
        dexterity: 18,
        constitution: 13,
        intelligence: 14,
        wisdom: 15,
        charisma: 16,
        healthPoints: 95,
        skills: [
          { id: 3, name: "Tir à l'arc", ability: "DEX" },
          { id: 4, name: "Furtivité", ability: "DEX" }
        ],
        parties: [
          { id: 1, name: "La Communauté de l'Anneau" }
        ]
      },
      {
        id: 3,
        name: "Gandalf",
        image: "https://via.placeholder.com/150",
        characterClass: { name: "Mage" },
        race: { name: "Humain" },
        level: 15,
        strength: 10,
        dexterity: 12,
        constitution: 14,
        intelligence: 18,
        wisdom: 17,
        charisma: 16,
        healthPoints: 110,
        skills: [
          { id: 5, name: "Magie", ability: "INT" },
          { id: 6, name: "Sagesse", ability: "WIS" }
        ],
        parties: [
          { id: 1, name: "La Communauté de l'Anneau" }
        ]
      }
    ];
    const foundCharacter = mockCharacters.find(c => c.id === idCharacter);
    setCharacter(foundCharacter);
  }, [idCharacter]);

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
      <button onClick={back}>Retour</button>

      <h1>{character.name}</h1>
      <img src={character.image} width="150" />

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
    </div>
  );
}