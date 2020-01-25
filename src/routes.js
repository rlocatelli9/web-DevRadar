import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dev from "./pages/Dev";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/dev/:id" component={Dev} />
      </Switch>
    </BrowserRouter>
  );
}
