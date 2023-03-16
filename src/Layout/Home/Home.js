import React from "react";
import { useHistory } from "react-router-dom"
import Decks from "./Decks";

function Home() {
    const history = useHistory();
    return (
        <div>
            <button type="button" onClick={() => history.push("/decks/new") } className="btn btn-secondary my-2">Create Deck</button>
            <Decks />
        </div>
    )
}

export default Home;