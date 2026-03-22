export default function PartyCard({party, setRouting}) {  // props est ici la liste des membres du groupe
    return (
        <div className="card">
            <h2>{party.name}</h2> {/*nom du groupe*/}
            <p>{party.description}</p>{/*description du groupe*/}
            <p>Nombre de personnages maximum : {party.maxSize}</p> {/*places du groupe*/}
            <ul>
                {party.characters.map((character) => (
                    <li key={character.id}>
                        <button onClick={ (e) => {
                            e.preventDefault();
                            setRouting("character/"+character.id);
                        }}>
                            {character.name}
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={ (e) => {
                e.preventDefault();
                setRouting("parties");
            }}>
                Retour
            </button>
        </div>
    );
}