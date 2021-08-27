import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Recipes from "./components/Recipes";
import HealthLabels from "./components/HealthLabels";

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
          <Route exact component={HealthLabels} path="/nutrition-labels" />
          <Route exact path="/contact">
            <h1>Contact page</h1>
          </Route>
          <Route>
            <h1>Error 404</h1>
            <Link to="/">Go to home page?</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
