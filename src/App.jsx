import { useState } from "react";
import ListePersonnages from "./components/ListePersonnages";
import DetailPersonnage from "./components/DetailPersonnage";
import "./App.css";

function App() {
  const [personnageSelectionne, setPersonnageSelectionne] = useState(null);

  return (
    <div>
      {!personnageSelectionne ? (
        <ListePersonnages auClic={(p) => setPersonnageSelectionne(p.id)} />
      ) : (
        <DetailPersonnage
          idPersonnage={personnageSelectionne}
          retour={() => setPersonnageSelectionne(null)}
        />
      )}
    </div>
  );
}

export default App;