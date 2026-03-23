import { useState } from "react";
import CharacterList from "./components/CharacterList";
import DetailCharacter from "./components/DetailCharacter";
import "./App.css";
import './App.css'
import PartyCard from "./components/PartyCard.jsx";
import PartiesList from "./components/PartiesList.jsx";

const party1 = {
    id: 1,
    name: 'party1',
    description: 'Group description',
    maxSize: 3,
    characters: [
        {
            id: 10,
            name: 'member10',
        },
        {
            id: 2,
            name: 'member2',
        },
        {
            id: 3,
            name: 'member3',
        }
    ]
};

const party2 = {
    id: 2,
    name: 'myParty',
    description: 'Group description',
    maxSize: 8,
    characters: [
        {
            id: 20,
            name: 'member20',
        },
        {
            id: 4,
            name: 'member4',
        },
        {
            id: 15,
            name: 'member15',
        }
    ]
};

const party3 = {
    id: 3,
    name: 'my_party',
    description: 'Group description',
    maxSize: 10,
    characters: [
        {
            id: 5,
            name: 'member5',
        },
        {
            id: 6,
            name: 'member6',
        },
        {
            id: 9,
            name: 'member9',
        }
    ]
};

const parties = [party1, party2, party3];

//TODO - utiliser un state pour l'id de la party aussi plutôt que du parsing
function App() {
    const [routing, setRouting] = useState("home")
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    console.log(routing)

    let origin = "home";//pour savoir comment changer routing quand on clique sur un "retour" (la route précédente).

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
        const id = routing.match(/(\d+)/);//regex pour parser l'id à la fin de routing
        if (id) {// si il y a bien un id dans routing (not null)
            const partyId = parseInt(id[0], 10);// on en fait un number
            if (partyId != null) {// si on arrive à en faire un nombre
                for (let i = 0; i < parties.length; i++) {// avec un for(... in ...), ça ne marche pas
                    if (parties[i].id === partyId) {
                        console.log(origin);
                        return (
                            <div>
                                <PartyCard party={parties[i]} setRouting={setRouting} setCharacter={setSelectedCharacter}/>
                            </div>
                        )
                    }
                }
            }
        }
        else {// si pas d'id, on rend la liste des parties
            origin = "parties";
            console.log(origin);
            return (
                <div>
                    <PartiesList parties={parties} setRouting={setRouting}/>
                </div>
            );
        }
    }
    else if (routing.includes("characters")) {
        return (
            <div>
                {!selectedCharacter ? (
                    origin="characters",
                    <CharacterList onClick={(p) => setSelectedCharacter(p.id)}/>
                ) : (
                    origin="characters/"+selectedCharacter.id,
                    <DetailCharacter
                        idCharacter={selectedCharacter}
                        setSelectedCharacter={setSelectedCharacter}
                        setRouting={setRouting}
                        origin={origin}
                    />
                )}
            </div>
        );
    }
}

export default App;