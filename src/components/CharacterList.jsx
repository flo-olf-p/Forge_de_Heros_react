import { useState } from "react";
import API from "../services/api";
import CharacterCard from "./CharacterCard";

export default function CharacterList({ characters, setSelectedCharacter, setRouting }) {
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredCharacters = characters
    .filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(character =>
      selectedClass ? character.characterClass?.name === selectedClass : true
    )
    .filter(character =>
      selectedRace ? character.race?.name === selectedRace : true
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "level") return b.level - a.level;
      return 0;
    });

  const classes = [...new Set(characters.map(character => character.characterClass?.name))];
  const races = [...new Set(characters.map(character => character.race?.name))];

  return (
    <div>
      <h1>Personnages</h1>

      <input
        placeholder="Rechercher..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSelectedClass(e.target.value)}>
        <option value="">Toutes les classes</option>
        {classes.map(className => <option key={className}>{className}</option>)}
      </select>

      <select onChange={(e) => setSelectedRace(e.target.value)}>
        <option value="">Toutes les races</option>
        {races.map(raceName => <option key={raceName}>{raceName}</option>)}
      </select>

      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Pas de tri</option>
        <option value="name">Trier par nom</option>
        <option value="level">Trier par niveau</option>
      </select>

      <button onClick={ (e) => {
          e.preventDefault();
          setRouting("home");
      }}>
          Accueil
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {filteredCharacters.map(character => (
          <CharacterCard character={character} setSelectedCharacter={setSelectedCharacter} />
        ))}
      </div>
    </div>
  );
}