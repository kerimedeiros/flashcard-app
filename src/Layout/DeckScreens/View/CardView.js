import React from "react";
import { useHistory } from "react-router-dom"
import {deleteCard} from "../../../utils/api/index";

function CardView({card, url}) {
    const history = useHistory();

    const handleDelete = async (id) => {
        const result = window.confirm("Delete this card? You will not be able to recover it.");
        if (result) {
            await deleteCard(id)
            history.go(0)
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-text">{card.front}</h5>
                <p className="card-text">{card.back}</p>
                <button className="btn btn-secondary mr-2" onClick={() => history.push(`${url}/cards/${card.id}/edit`)}>Edit</button>
                <button className="btn btn-danger mr-2" onClick={() => handleDelete(card.id)}>Delete</button>
            </div>
        </div>
    )
}

export default CardView;