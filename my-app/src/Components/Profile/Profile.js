import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../Common/Services/Service";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Parse from "parse";

export default function Profile() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [favoriteTeam, setFavoriteTeam] = useState();


  // Use service to get all the leagues
  useEffect(() => {
    getUserInfo().then((user) => {
      setFirstName(user.get("firstName"));
      setLastName(user.get("lastName"));
      setFavoriteTeam(user.get("favoriteTeam"));
    });
  }, []);

  // function to log out
  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!');
      }
      // Update state variable holding current user
      // getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };


    return (
      <section id="temp">
        <h1>Profile Page</h1>
        <br></br>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Favorite Football Team: {favoriteTeam}</p>
        <br></br>
        <Link to="/edit">
            <Button variant="primary">Edit Your Profile</Button>{' '}
        </Link>

        {/* May need to bug check these lines */}
        <Link to="/"> 
          <Button variant="primary" onClick={doUserLogOut}>Logout</Button>
        </Link>
      </section>
    );
  }