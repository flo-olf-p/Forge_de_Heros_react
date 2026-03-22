import './App.css'
import PartyCard from "./components/PartyCard.jsx";
import {useState} from "react";
import PartiesList from "./components/PartiesList.jsx";

const party1 = {
    id: 1,
    name: 'group',
    description: 'Group description',
    maxSize: 5,
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
    name: 'group',
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
    name: 'group',
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

function App() {
    const [routing, setRouting] = useState("home")
    console.log(routing)

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
            </div>
        )
    }
    else if (routing.includes("parties")) {
        const id = routing.match(/(\d+)/);//regex pour parser l'id à la fin de routing
        if (id) {// si il y a bien un id dans routing (not null)
            const partyId = parseInt(id[0], 10);// on en fait un number
            console.log(partyId);
            if (partyId != null) {// si on arrive à en faire un nombre
                for (let i = 0; i < parties.length; i++) {// avec un for(... in ...), ça ne marche pas
                    console.log("party.id = "+parties[i].id);
                    if (parties[i].id === partyId) {
                        console.log("oui");
                        return (
                            <div>
                                <PartyCard party={parties[i]} setRouting={setRouting}/>
                            </div>
                        )
                    }
                }
            }
        }
        else {// si pas d'id, on rend la liste des parties
            return (
                <div>
                    <PartiesList parties={parties} setRouting={setRouting}/>
                </div>
            );
        }
    }
    // else if (routing.includes("character")) {
    //     const id = routing.match(/(\d+)/);//regex pour parser l'id à la fin de routing
    //     if (id) {// si il y a bien un id dans routing (not null)
    //         const characterId = parseInt(id[0], 10);// on en fait un number (base 10)
    //         console.log(characterId);
    //         if (characterId != null) {// si on arrive à en faire un nombre
    //             for (let i = 0; i < characters.length; i++) {// avec un for(... in ...), ça ne marche pas
    //                 console.log("party.id = "+characters[i].id);
    //                 if (characters[i].id === characterId) {
    //                     console.log("oui");
    //                     return (
    //                         <div>
    //                             <CharacterCard character={parties[i]} setRouting={setRouting}/>
    //                         </div>
    //                     )
    //                 }
    //             }
    //         }
    //     }
    //     else {// si pas d'id, on rend la liste des parties
    //         return (
    //             <div>
    //                 <CharactersList characters={characters} setRouting={setRouting}/>
    //             </div>
    //         );
    //     }
    // }
}

export default App
