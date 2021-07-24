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
          <Route exact path="/home">
            <h1>Home page</h1>
          </Route>
          <Route exact component={Recipes} path="/recipes" />
          <Route exact path="/nutrition-labels">
            <h1>Nutrition Labels page</h1>
          </Route>
          <Route exact path="/about">
            <h1>About Us page</h1>
          </Route>
          <Route>
            <h1>Error 404</h1>
            <h3>Go to home page</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
