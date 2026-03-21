import { useState } from "react";
import CharacterList from "./components/CharacterList";
import DetailCharacter from "./components/DetailCharacter";
import "./App.css";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div>
      {!selectedCharacter ? (
        <CharacterList onClick={(p) => setSelectedCharacter(p.id)} />
      ) : (
        <DetailCharacter
          idCharacter={selectedCharacter}
          back={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}

export default App;