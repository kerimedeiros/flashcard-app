//DONE
import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api/index";

function DeckView({ deck }) {
  const history = useHistory();

  const handleDelete = async (id) => {
    const result = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (result) {
      await deleteDeck(id);
      history.go(0);
    }
  };

  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{deck.name}</h5>
        <h6 className="card-subtitle">{deck.cards.length} cards</h6>
        <p className="card-text">{deck.description}</p>
        <button
          className="btn btn-secondary mr-2"
          onClick={() => history.push(`/decks/${deck.id}`)}
        >
          View
        </button>
        <button
          className="btn btn-primary mr-2"
          onClick={() => history.push(`/decks/${deck.id}/study`)}
        >
          Study
        </button>
        <button
          className="btn btn-danger mr-2"
          onClick={() => handleDelete(deck.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeckView;
