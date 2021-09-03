import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Recipes from "./components/Pages/Recipes/Recipes";
import HealthLabels from "./components/Pages/HealthLabels/HealthLabels";
import Home from "./components/Pages/Home"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Recipes} path="/recipes" />
          <Route exact component={HealthLabels} path="/health-labels" />
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
