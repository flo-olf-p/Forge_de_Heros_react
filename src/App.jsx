import {useEffect, useState} from "react";
import CharacterList from "./components/CharacterList";
import DetailCharacter from "./components/DetailCharacter";
import "./App.css";
import './App.css'
import PartyCard from "./components/PartyCard.jsx";
import PartiesList from "./components/PartiesList.jsx";

// const party1 = {
//     id: 1,
//     name: 'party1',
//     description: 'Group description',
//     maxSize: 3,
//     characters: [
//         {
//             id: 1,
//             name: 'member1',
//         },
//         {
//             id: 2,
//             name: 'member2',
//         },
//         {
//             id: 3,
//             name: 'member3',
//         }
//     ]
// };
// const party2 = {
//     id: 2,
//     name: 'myParty',
//     description: 'Group description',
//     maxSize: 8,
//     characters: [
//         {
//             id: 20,
//             name: 'member20',
//         },
//         {
//             id: 4,
//             name: 'member4',
//         },
//         {
//             id: 15,
//             name: 'member15',
//         }
//     ]
// };
// const party3 = {
//     id: 3,
//     name: 'my_party',
//     description: 'Group description',
//     maxSize: 10,
//     characters: [
//         {
//             id: 5,
//             name: 'member5',
//         },
//         {
//             id: 6,
//             name: 'member6',
//         },
//         {
//             id: 9,
//             name: 'member9',
//         }
//     ]
// };
// const parties = [party1, party2, party3];

// const characters = [
//     {
//         id: 1,
//         name: "Aragorn",
//         image: "https://via.placeholder.com/150",
//         characterClass: { name: "Guerrier" },
//         race: { name: "Humain" },
//         level: 10,
//         strength: 16,
//         dexterity: 14,
//         constitution: 15,
//         intelligence: 12,
//         wisdom: 13,
//         charisma: 17,
//         healthPoints: 120,
//         skills: [
//             { id: 1, name: "Combat à l'épée", ability: "STR" },
//             { id: 2, name: "Endurance", ability: "CON" }
//         ],
//         parties: [
//             { id: 1, name: "La Communauté de l'Anneau" }
//         ]
//     },
//     {
//         id: 2,
//         name: "Legolas",
//         image: "https://via.placeholder.com/150",
//         characterClass: { name: "Archer" },
//         race: { name: "Elfe" },
//         level: 9,
//         strength: 12,
//         dexterity: 18,
//         constitution: 13,
//         intelligence: 14,
//         wisdom: 15,
//         charisma: 16,
//         healthPoints: 95,
//         skills: [
//             { id: 3, name: "Tir à l'arc", ability: "DEX" },
//             { id: 4, name: "Furtivité", ability: "DEX" }
//         ],
//         parties: [
//             { id: 1, name: "La Communauté de l'Anneau" }
//         ]
//     },
//     {
//         id: 3,
//         name: "Gandalf",
//         image: "https://via.placeholder.com/150",
//         characterClass: { name: "Mage" },
//         race: { name: "Humain" },
//         level: 15,
//         strength: 10,
//         dexterity: 12,
//         constitution: 14,
//         intelligence: 18,
//         wisdom: 17,
//         charisma: 16,
//         healthPoints: 110,
//         skills: [
//             { id: 5, name: "Magie", ability: "INT" },
//             { id: 6, name: "Sagesse", ability: "WIS" }
//         ],
//         parties: [
//             { id: 1, name: "La Communauté de l'Anneau" }
//         ]
//     }
// ];

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
    }, []); // [] = une seule fois au chargement

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
    }, []); // [] = une seule fois au chargement

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
                        setSelectedParty={setSelectedParty}
                    />
                ) : (
                    <DetailCharacter
                        character={selectedCharacter}
                        setSelectedCharacter={setSelectedCharacter}
                        setRouting={setRouting}
                    />
                )}
            </div>
        );
    }
}

export default App;