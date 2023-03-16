import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CardForm from "./CardForm";
import { readDeck, readCard } from "../../utils/api/index"

function EditCard() {
    const { deckId, cardId } = useParams();
    const [Deck, setDeck] = useState({})
    const [Card, setCard] = useState({})

    useEffect(() => {
        setDeck({})
        async function loadDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
        }
        loadDeck();
    }, [deckId])

    useEffect(() => {
        setCard({})
        async function loadCard() {
            const response = await readCard(cardId)
            setCard(response)
        }
        loadCard();

    }, [cardId])


    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>{Deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
                </ol>
            </nav>
            <h2>Edit Card</h2>
            <CardForm deckId={deckId} card={Card} cardId={cardId}/>
        </div>
    )
}

export default EditCard;