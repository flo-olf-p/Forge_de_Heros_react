import PartyOverview from './PartyOverview.jsx';

export default function PartiesList({parties, setRouting}) {  // props est ici la liste des membres du groupe

    return (
        <div className="card">
            <ul>
                {parties.map((party) => (
                    <li key={party.id}>
                        <PartyOverview party={party} setRouting={setRouting}/>
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