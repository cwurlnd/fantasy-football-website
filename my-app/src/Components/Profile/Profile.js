import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../Common/Services/Service";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Profile() {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [favoriteTeam, setFavoriteTeam] = useState([]);

  // Use service to get all the leagues
  useEffect(() => {
    getUserInfo().then((user) => {
      setFirstName(user.get("firstName"));
      setLastName(user.get("lastName"));
      setEmail(user.get("email"));
      setFavoriteTeam(user.get("favoriteTeam"));
    });
  }, []);

    return (
      <section id="temp">
        <h1>Profile Page</h1>
        <br></br>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email Address: {email}</p>
        <p>Favorite Football Team: {favoriteTeam}</p>
        <br></br>
        <Link to="/edit">
            <Button variant="primary">Edit Your Profile</Button>{' '}
        </Link>
      </section>
    );
  }