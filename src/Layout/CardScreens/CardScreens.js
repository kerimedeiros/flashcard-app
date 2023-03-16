import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom"
import AddCard from "./AddCard"
import EditCard from "./EditCard"

function CardScreens() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/:cardId/edit`}>
                <EditCard />
            </Route>
            <Route path={`${path}/new`}>
                <AddCard />
            </Route>
        </Switch>
    )
}

export default CardScreens;