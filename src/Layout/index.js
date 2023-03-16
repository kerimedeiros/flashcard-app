import React from "react";
import Header from "./Header";
import Home from "./Home/Home";
import CreateDeck from "./DeckScreens/CreateDeck"
import CardScreens from "./CardScreens/CardScreens"
import NotFound from "./NotFound";
import DeckScreens from "./DeckScreens/DeckScreens"
import { Switch, Route } from "react-router-dom"

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/decks/new">
                <CreateDeck />
              </Route>
              <Route path="/decks/:deckId/cards">
                <CardScreens />
              </Route>
              <Route path="/decks/:deckId">
                <DeckScreens />
              </Route>
              <Route>
                <NotFound />
              </Route>
          </Switch>
      </div>
    </div>
  );
}

export default Layout;
