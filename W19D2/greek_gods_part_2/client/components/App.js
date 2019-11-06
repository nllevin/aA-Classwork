import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import GodsList from "./gods/GodsList";
import GodDetail from "./gods/GodDetail";
import Create from "./create/CreateIndex";
import Nav from "./nav/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/gods/:id" component={GodDetail} />
        <Route exact path="/new" component={Create} />
        <Route exact path="/" component={GodsList} />
      </Switch>
    </div>
  );
};


export default App;