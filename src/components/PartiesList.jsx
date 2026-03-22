export default function PartiesList({parties, setRouting}) {  // props est ici la liste des membres du groupe
    return (
        <div className="card">
            <ul>
                {parties.map((party) => (
                    <li key={party.id}>
                        <button onClick={ (e) => {
                            e.preventDefault();
                            setRouting("parties/"+party.id);
                        }}>
                            {party.name} {/*nom du groupe*/}
                        </button>
                        <p>
                            Places occupées : {party.characters.length}/{party.maxSize}
                        </p> {/*places du groupe*/}
                    </li>
                ))}
            </ul>
            <button onClick={ (e) => {
                e.preventDefault();
                setRouting("home");
            }}>
                Accueil
            </button>
        </div>
    );
}