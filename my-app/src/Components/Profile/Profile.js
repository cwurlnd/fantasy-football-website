import React, { useEffect, useState } from "react";
import { getUserInfo, getLeagueByUser, deleteLeague } from "../../Common/Services/Service";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Parse from "parse";

export default function Profile() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [favoriteTeam, setFavoriteTeam] = useState();
  const [leagues, setLeagues] = useState([]);

  // Use service to get all the leagues
  useEffect(() => {
    getLeagueByUser().then((leagues) => {
      setLeagues(leagues);
    });
  }, []);

  // Use service to get the user
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
      console.log("logged out");
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const deleteLeagueHandler = async function (id) {
    deleteLeague(id).then(() => {
      getLeagueByUser().then((leagues) => {
        setLeagues(leagues);
        console.log("leagues set");
      });
    });
    console.log(id);

  };

    return (
      <section id="temp">
        <h1>Profile Page</h1>
        <br></br>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Favorite Football Team: {favoriteTeam}</p>
        <h2>Leagues: </h2>
        <div>
          {leagues.length > 0 && (
              <ul>
                {leagues.map((league) => (
                  <div>
                    <span>
                      <li key={league.id}>{league.get("name")} | {league.get("size")} | {league.get("scoring")}</li>{" "}
                      <Button variant="secondary" onClick={() => {deleteLeagueHandler(league.id);}}>Delete</Button>
                    </span>
                  </div>
                ))}
              </ul>
            )}
          {leagues.length == 0 && (
            <h5>You do not run any leagues</h5>
          )}
        </div>
        <br></br>
        <Link to="/edit">
            <Button variant="primary">Edit Your Profile</Button>{' '}
        </Link>

        {/* May need to bug check these lines */}
        <Link to="/"> 
          <Button variant="secondary" onClick={doUserLogOut}>Logout</Button>
        </Link>
      </section>
    );
  }