import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recipes from "./components/Recipes";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <h1>Home page</h1>
          </Route>
          <Route exact component={Recipes} path="/recipes" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
