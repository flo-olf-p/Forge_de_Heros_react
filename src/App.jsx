import './App.css'
import PartyCard from "./components/PartyCard.jsx";
import {useState} from "react";

const group = {
    id: 1,
    name: 'group',
    description: 'Group description',
    maxSize: 5,
    members: [
        {
            id: 10,
            name: 'member1',
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

function App() {
    const [routing, setRouting] = useState("home")

    console.log(routing)

    if (routing === "home") {
        return (
            <div>
                <h1>Mon application</h1>
                <PartyCard party={group} setRouting={setRouting}/>
            </div>
        );
    }
    else if (routing.includes("user")) {
        const user_id = routing.at(5);
        console.log(user_id);
    }
}

export default App
