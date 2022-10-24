import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
          <ul class="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create a League</Link></li>
            <li><Link to="/leagues">Current Leagues</Link></li>
          </ul>
        </div>
    );
}