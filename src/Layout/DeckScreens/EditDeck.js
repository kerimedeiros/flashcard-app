import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api/index";

function EditDeck() {
  const { deckId } = useParams();
  const history = useHistory();
  const initialDeckState = {
    id: "",
    name: "",
    description: "",
  };
  const [Deck, setDeck] = useState(initialDeckState);

  useEffect(() => {
    setDeck({});
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    loadDeck();
  }, [deckId]);

  const handleChange = ({ target }) => {
    setDeck({ ...Deck, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateDeck(Deck);
    history.push(`/decks/${response.id}`);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{Deck.name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h2>Edit Deck</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={handleChange}
              value={Deck.name || ""}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
            <textarea
              id="description"
              name="description"
              className="form-control"
              onChange={handleChange}
              value={Deck.description || ""}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditDeck;
