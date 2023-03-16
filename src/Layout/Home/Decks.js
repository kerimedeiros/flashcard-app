// DONE
import React, { useState, useEffect } from "react";
import DeckView from "./DeckView";
import { listDecks } from "../../utils/api/index";

function Decks() {
  const [Decks, setDecks] = useState([]);

  useEffect(() => {
    setDecks([]);
    const abortController = new AbortController();

    async function loadDecks() {
      try {
        const response = await listDecks(abortController.signal);
        setDecks(response);
      } catch (error) {
        console.log(error);
      }
    }

    loadDecks();
    return () => abortController.abort();
  }, []);

  return (
    <ul>
      {Decks.map((deck, index) => (
        <DeckView deck={deck} key={index} />
      ))}
    </ul>
  );
}

export default Decks;