export default function PartyCard({party, setRouting, setSelectedParty}) {  // props est ici la liste des membres du groupe
    if (party.characters.length === party.maxSize) {
        return (
            <div className="card">
                <button onClick={(e) => {
                    e.preventDefault();
                    setRouting("parties/" + party.id);
                    setSelectedParty(party);
                }}>
                    {party.name} {/*nom du groupe*/}
                </button>
                <p>
                    Places occupées : {party.characters.length}/{party.maxSize}, PLEIN
                </p> {/*places du groupe*/}
            </div>
        );
    }
    else {
        return (
            <div className="card">
                <button onClick={(e) => {
                    e.preventDefault();
                    setRouting("parties/" + party.id);
                    setSelectedParty(party);
                }}>
                    {party.name} {/*nom du groupe*/}
                </button>
                <p>
                    Places occupées : {party.characters.length}/{party.maxSize}, PLACES LIBRES : {party.maxSize-party.characters.length}
                </p> {/*places du groupe*/}
            </div>
        );
    }
}