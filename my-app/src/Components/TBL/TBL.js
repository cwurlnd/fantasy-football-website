import React, { useEffect, useState } from "react";
import { getTeamsByLeague, getAllLeagues, getLeagueByName } from "../../Common/Services/Service";

export default function TBL() {
    const [leagues, setLeagues] = useState([]);
    const [value, setValue] = useState("Wicks Fantasy");
    const [league, setLeague] = useState("gCl5I8wiVO");
    const [teams, setTeams] = useState([]);

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
        });
    }, [value]);

    // Gets list of all teams in a league
    useEffect(() => {
        getTeamsByLeague(league).then((teams) => {
            setTeams(teams);
        });
    }, [league]);

    // Handle the changes and selections in the dropdown
    const handleChange = (e) => {
        setValue(e.target.value);
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
                  </span>
                </div>
              ))}
            </ul>
          )}
        </div>
      </section>
    );
}