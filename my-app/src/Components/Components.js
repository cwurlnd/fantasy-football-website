import Home from "./Home/Home";
import Create from "./Create/Create";
import Leagues from "./Leagues/Leagues";
import TBL from "./TBL/TBL";
import NavBar from "./NavBar/NavBar";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "../Common/ProtectedRoute/ProtectedRoute.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

export default function Components() {
  return (
    // Routing to certain pages
    <Router>
      <NavBar />  
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route
          path="/create"
          element={<ProtectedRoute path="/create" element={Create} />}
        />
        <Route
          path="/leagues"
          element={<ProtectedRoute path="/leagues" element={Leagues} />}
        />
        <Route
          path="/tbl"
          element={<ProtectedRoute path="/tbl" element={TBL} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}