import Home from "./Home/Home";
import Create from "./Create/Create";
import Leagues from "./Leagues/Leagues";
import NavBar from "./NavBar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <NavBar />  
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/leagues" component={Leagues} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}