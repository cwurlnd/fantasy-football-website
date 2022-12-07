// import { Link } from "react-router-dom";

// export default function NavBar() {
//     return (
//         <div>
//           <ul className="navigation">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/create">Create a League</Link></li>
//             <li><Link to="/leagues">Current Leagues</Link></li>
//             <li><Link to="/tbl">Teams by League</Link></li>
//           </ul>
//         </div>
//     );
// }


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create">
                <Nav.Link>Create a League</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/leagues">
                <Nav.Link>Current Leagues</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tbl">
                <Nav.Link>Teams by League</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/users">
                <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chat">
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
                <Nav.Link>My Profile</Nav.Link>
            </LinkContainer>

          </Nav>
          <Nav>
            <LinkContainer to="/auth">
                <Nav.Link>Register/Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;