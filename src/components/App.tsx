import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
