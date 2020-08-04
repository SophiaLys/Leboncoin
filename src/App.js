import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Login from "./containers/Login";
import Header from "./components/Header";
import Signup from "./containers/Signup";
import Publish from "./containers/Publish";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/offer/:id/">
            <Offer />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/publish">
            <Publish />
          </Route>

          <Route exact path="/">
            <Offers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
