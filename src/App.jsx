import {useEffect, useState} from "react";
import CharacterList from "./components/CharacterList";
import DetailCharacter from "./components/DetailCharacter";
import "./App.css";
import PartyCard from "./components/PartyCard.jsx";
import PartiesList from "./components/PartiesList.jsx";

function App() {
    const [routing, setRouting] = useState("home")
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [selectedParty, setSelectedParty] = useState(null);
    console.log("routing="+routing);

    const [characters, setCharacters] = useState([]);
    const [parties, setParties] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {// pour charger les characters depuis l'API
        fetch("http://127.0.0.1:8000/api/v1/characters")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur réseau");
                }
                return response.json();
            })
            .then((data) => {
                setCharacters(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [characters]); // [] = une seule fois au chargement

    useEffect(() => {// pour charger les parties depuis l'API
        fetch("http://127.0.0.1:8000/api/v1/parties")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur réseau");
                }
                return response.json();
            })
            .then((data) => {
                setParties(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [parties]); // [] = une seule fois au chargement

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    if (routing === "home") {
        return (
            <div>
                <h2>Bienvenue !</h2>
                <button onClick={(e) => {
                    e.preventDefault();
                    setRouting("parties");
                }}>
                    Liste des groupes
                </button>
                <button onClick={(e) => {
                    e.preventDefault();
                    setRouting("characters");
                }}>
                    Liste des personnages
                </button>
            </div>
        )
    }
    else if (routing.includes("parties")) {
        return (
            <div>
                {!selectedParty ? (
                    <PartiesList
                        parties={parties}
                        setRouting={setRouting}
                        setSelectedParty={setSelectedParty}
                    />
                ) : (
                    <PartyCard
                        party={selectedParty}
                        setRouting={setRouting}
                        setSelectedCharacter={setSelectedCharacter}
                        setSelectedParty={setSelectedParty}
                    />
                )}
            </div>
        );
    }
    else if (routing.includes("characters")) {
        return (
            <div>
                {!selectedCharacter ? (
                    <CharacterList
                        characters={characters}
                        setSelectedCharacter={setSelectedCharacter}
                        setRouting={setRouting}
                    />
                ) : (
                    <DetailCharacter
                        character={selectedCharacter}
                        setSelectedCharacter={setSelectedCharacter}
                        setSelectedParty={setSelectedParty}
                        setRouting={setRouting}
                    />
                )}
            </div>
        );
    }
}

export default App;