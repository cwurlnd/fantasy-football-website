import Home from "./Home/Home";
import Create from "./Create/Create";
import Leagues from "./Leagues/Leagues";
import TBL from "./TBL/TBL";
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
        <Route path="/create" component={Create} />
        <Route path="/leagues" component={Leagues} />
        <Route path="/tbl" component={TBL} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}