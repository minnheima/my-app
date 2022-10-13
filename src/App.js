import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/:id" component={Detail}></Route>
      </Switch>
    </Router>
  );
};
export default App;
