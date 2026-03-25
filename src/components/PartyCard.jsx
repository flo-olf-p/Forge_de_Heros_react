import CharacterCard from "./CharacterCard.jsx";

export default function PartyCard({party, setRouting, setSelectedCharacter, setSelectedParty}) {  // props est ici la liste des membres du groupe
    return (
        <div className="card">
            <h2>{party.name}</h2> {/*nom du groupe*/}
            <p>{party.description}</p>{/*description du groupe*/}
            <p>Nombre de personnages maximum : {party.maxSize}</p> {/*places du groupe*/}
            <ul>
                {party.characters.map((character) => (
                    <li key={character.id}>
                        <CharacterCard character={character} setSelectedCharacter={setSelectedCharacter} setRouting={setRouting} />
                    </li>
                ))}
            </ul>
            <button onClick={ (e) => {
                e.preventDefault();
                setRouting("parties");
                setSelectedParty(null);
            }}>
                Retour à la liste des groupes
            </button>
        </div>
    );
}