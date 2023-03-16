import React, {useState, useEffect} from "react";
import { useParams, useRouteMatch, useHistory } from "react-router-dom"
import CardView from "./CardView"
import { readDeck } from "../../../utils/api/index"

function View() {
    const { deckId } = useParams();
    const [Deck, setDeck] = useState({})
    const { url } = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        setDeck({});
        async function loadDeck() {
            const response = await readDeck(deckId)
            setDeck(response);
        }
        loadDeck();
    }, [deckId])

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{Deck.name}</li>
                </ol>
            </nav>
            <h3>{Deck.name}</h3>
            <p>{Deck.description}</p>
            <button type="button" className="btn btn-secondary mr-2" onClick={() => history.push(`${url}/edit`)}>Edit</button>
            <button type="button" className="btn btn-primary mr-2" onClick={() => history.push(`${url}/study`)}>Study</button>
            <button type="button" className="btn btn-primary mr-2" onClick={() => history.push(`${url}/cards/new`)}>Add Cards</button>
            <ul>
                { Deck.cards && Deck.cards.length ? Deck.cards.map((card, index) => <CardView card={card} key={index} url={url}/>) : null }
            </ul>
        </div>
    )
}

export default View;