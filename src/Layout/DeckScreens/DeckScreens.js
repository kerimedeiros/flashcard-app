import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom"
import Study from "./Study/Study";
import View from "./View/View";
import EditDeck from "./EditDeck"

function DeckScreens() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/edit`}>
                <EditDeck />
            </Route>
            <Route path={`${path}/study`}>
                <Study />
            </Route>
            <Route>
                <View />
            </Route>
        </Switch>
    )
}

export default DeckScreens;