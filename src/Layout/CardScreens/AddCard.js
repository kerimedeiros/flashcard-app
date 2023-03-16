import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { readDeck } from "../../utils/api/index";
import CardForm from "./CardForm"

function AddCard() {
    const { deckId } = useParams();
    const [Deck, setDeck] = useState({})

    useEffect(() => {
        setDeck({})
        async function loadDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
        }
        loadDeck();
    }, [deckId])

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>{Deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
            <h2>{Deck.name}: Add Card</h2>
            <CardForm deckId={deckId} />
        </div>
    )
}

export default AddCard;