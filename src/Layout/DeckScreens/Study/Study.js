import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import Cards from "./Cards"
import { readDeck } from "../../../utils/api/index"

function Study() {
    const { deckId } = useParams();
    const [Deck, setDeck] = useState([])
    const history = useHistory();

    useEffect(() => {
        setDeck([]);
        async function loadDeck() {
            const response = await readDeck(deckId)
            setDeck(response);
        }
        loadDeck();
    }, [deckId])

    const numberOfCards = Deck.cards ? Deck.cards.length : 0;

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>{Deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
            <h2>Study: {Deck.name}</h2>
            { numberOfCards > 2 ? <Cards cards={Deck.cards}/> : (
                <div>
                    <h3>Not enough cards</h3>
                    <p>You need at least 3 cards to study. There are {numberOfCards} cards in this deck.</p>
                    <button type="button" className="btn btn-primary mr-2" onClick={() => history.push(`/decks/${deckId}/cards/new`)}>Add Card</button>
                </div>
            )}
        </div>
    )
}

export default Study;