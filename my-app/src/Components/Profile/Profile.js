import React, { useEffect, useState } from "react";
import { getUserInfo, getLeagueByUser, deleteLeague, getTeamsByLeague, deleteTeam } from "../../Common/Services/Service";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Parse from "parse";

export default function Profile() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [favoriteTeam, setFavoriteTeam] = useState();
  const [leagues, setLeagues] = useState([]);
  const [teams, showTeams] = useState([]);
  const [shownId, shownIdChange] = useState();

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

  const deleteTeamHandler = async function (id) {
    deleteTeam(id).then((team) => {
      getTeamsByLeague(team.get("league").id).then((teams) => {
        showTeams(teams);
        console.log("team deleted");
      });
    });
    console.log(id);
  };

  const seeTeamsHandler = async function (id) {
    getTeamsByLeague(id).then((retrievedTeams) => {
      showTeams(retrievedTeams);
      shownIdChange(id);
      console.log("seeTeamsHandler");
      console.log(retrievedTeams);
      console.log(id);
    });
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
                      {shownId != league.id && (
                        <div>
                          <Button variant="secondary" onClick={() => {seeTeamsHandler(league.id);}}>See More</Button>
                          <Button variant="secondary" onClick={() => {deleteLeagueHandler(league.id);}}>Delete</Button>
                        </div>
                        
                      )}
                      {shownId == league.id && teams.length <= 0 && (
                        <div>
                          <li>No teams in this league!</li>
                          <Button variant="secondary" onClick={() => {deleteLeagueHandler(league.id);}}>Delete</Button>
                        </div>
                      )}
                      {shownId == league.id && teams.length > 0 && (
                        <div>
                          <ul>
                            {teams.map((team) => (
                              <li key={team.id}>
                                Team name: {team.get("name")} | Owner: {team.get("user").get("firstName")} {team.get("user").get("lastName")}{" "}
                                <Button variant="secondary" onClick={() => {deleteTeamHandler(team.id);}}>Delete</Button>
                              </li>
                            ))}
                          </ul>
                          <Button variant="secondary" onClick={() => {deleteLeagueHandler(league.id);}}>Delete</Button>
                        </div>
                      )}
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