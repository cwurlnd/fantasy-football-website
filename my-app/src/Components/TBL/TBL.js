import React, { useEffect, useState } from "react";
import { getTeamsByLeague, getAllLeagues, getLeagueByName, getAllUsers } from "../../Common/Services/Service";
import TeamForm from "./TeamForm";
import { addTeam } from "../../Common/Services/Service";

export default function TBL() {
    const [leagues, setLeagues] = useState([]);
    const [value, setValue] = useState("Wicks Fantasy");
    const [league, setLeague] = useState("gCl5I8wiVO");
    const [teams, setTeams] = useState([]);
    const [add, setAdd] = useState(false);
    const [size, setSize] = useState(0);
    const [name, setName] = useState();
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getAllUsers().then((users) => {
          setUsers(users);
      });
    }, []);

    // Get all of the leagues for the dropdown
    useEffect(() => {
        getAllLeagues().then((leagues) => {
        setLeagues(leagues);
        });
    }, []);

    // Get a specific league by its name
    useEffect(() => {
        getLeagueByName(value).then((league) => {
            setLeague(league[0].id);
            setSize(league[0].get("size"));
        });
    }, [value]);

    // Gets list of all teams in a league
    useEffect(() => {
        getTeamsByLeague(league).then((teams) => {
            setTeams(teams);
        });
    }, [league, add]);

    // Handle the changes and selections in the dropdown
    const handleChange = (e) => {
        setValue(e.target.value);
        setAdd(false);
    };

  // Actually add the league to the database
  useEffect(() => {
    if (league && add && (teams.length < size)) {
      addTeam(name, league).then((newTeam) => {
        alert("Added a team!");
        setAdd(false);
      });
    }
    if (teams.length === size && league && add) {
      alert("League has reached maximum capacity!");
    }
  }, [league, add, name, size, teams.length]);

  // Handle clicking submit to add the actual league
  const onClickHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  // Handle any changes in league name
  const onChangeHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

    return (
      <section id="temp">
        <h1>Teams by League</h1>
        <p>The current teams in a specified league are listed below:</p>


        {/* Create dropdown of all the leagues */}
        <div>
        <select class="form-select" value={value} onChange={handleChange}>
        {leagues.map((league) => (
                <option value={league.get("name")}>{league.get("name")}</option>
        ))}
        </select>
        </div>

        {/* List the teams */}
        <div>
          {teams.length > 0 && (
            <ul>
              {teams.map((team) => (
                <div>
                  <span>
                    <li key={team.id}>{team.get("name")}</li>{" "}
                    <ul>
                      <li key={users}>Owner: {team.get("user").get("firstName")} {team.get("user").get("lastName")}</li>{" "}
                    </ul>
                  </span>
                </div>
              ))}
            </ul>
          )}
        </div>

        <h1>Add a new team to the selected league:</h1>
        <TeamForm onClick={onClickHandler} onChange={onChangeHandler} />
      </section>
    );
}