export default function PartyCard({party, setRouting}) {  // props est ici la liste des membres du groupe
    return (
        <div className="card">
            <h2>{party.name}</h2> {/*nom du groupe*/}
            <p>{party.description}</p>{/*description du groupe*/}
            <p>Nombre de personnages maximum : {party.maxSize}</p> {/*places du groupe*/}
            <ul>
                {party.members.map((member) => (
                    <li key={member.id}>
                        <button onClick={
                            (e) => {
                                e.preventDefault();
                                setRouting("user/"+member.id);
                            }
                        }>
                            {member.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}