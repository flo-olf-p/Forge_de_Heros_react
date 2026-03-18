import { useEffect, useState } from "react";
import API from "../services/api";
import CartePersonnage from "./CartePersonnage";

export default function ListePersonnages({ auClic }) {
  const [personnages, setPersonnages] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [classeSelectionnee, setClasseSelectionnee] = useState("");
  const [raceSelectionnee, setRaceSelectionnee] = useState("");
  const [tri, setTri] = useState("");

  useEffect(() => {
    API.get("/characters").then(res => setPersonnages(res.data));
  }, []);

  const filtres = personnages
    .filter(p =>
      p.name.toLowerCase().includes(recherche.toLowerCase())
    )
    .filter(p =>
      classeSelectionnee ? p.characterClass?.name === classeSelectionnee : true
    )
    .filter(p =>
      raceSelectionnee ? p.race?.name === raceSelectionnee : true
    )
    .sort((a, b) => {
      if (tri === "nom") return a.name.localeCompare(b.name);
      if (tri === "niveau") return b.level - a.level;
      return 0;
    });

  const classes = [...new Set(personnages.map(p => p.characterClass?.name))];
  const races = [...new Set(personnages.map(p => p.race?.name))];

  return (
    <div>
      <h1>Personnages</h1>

      <input
        placeholder="Rechercher..."
        onChange={(e) => setRecherche(e.target.value)}
      />

      <select onChange={(e) => setClasseSelectionnee(e.target.value)}>
        <option value="">Toutes les classes</option>
        {classes.map(c => <option key={c}>{c}</option>)}
      </select>

      <select onChange={(e) => setRaceSelectionnee(e.target.value)}>
        <option value="">Toutes les races</option>
        {races.map(r => <option key={r}>{r}</option>)}
      </select>

      <select onChange={(e) => setTri(e.target.value)}>
        <option value="">Pas de tri</option>
        <option value="nom">Trier par nom</option>
        <option value="niveau">Trier par niveau</option>
      </select>

      <div className="grid"></div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {filtres.map(p => (
          <CartePersonnage key={p.id} personnage={p} auClic={auClic} />
        ))}
      </div>
    </div>
  );
}