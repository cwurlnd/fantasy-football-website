import { Link } from "react-router-dom";

export default function Home() {
    return (
      <section>
        <h1>Welcome to the Fantasy Football</h1>
        <p>This is the home page</p>
        <p>Use the other pages to do some fun stuff</p>
        <hr />
        <Link to="/auth">
          <button>Log In/Sign Up</button>
        </Link>
      </section>
    );
  }