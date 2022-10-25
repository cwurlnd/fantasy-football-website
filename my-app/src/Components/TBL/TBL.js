import React, { useEffect, useState } from "react";
import { getTeamsByLeague, getAllLeagues, getLeagueByName } from "../../Common/Services/Service";

export default function TBL() {
    const [leagues, setLeagues] = useState([]);
    const [value, setValue] = useState("Wicks Fantasy");
    const [league, setLeague] = useState("gCl5I8wiVO");
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getAllLeagues().then((leagues) => {
        setLeagues(leagues);
        });
    }, []);

    useEffect(() => {
        getLeagueByName(value).then((league) => {
            setLeague(league[0].id);
        });
    }, [value]);

    useEffect(() => {
        getTeamsByLeague(league).then((teams) => {
            setTeams(teams);
        });
    }, [league]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
      <section>
        <h1>Teams by League</h1>
        <p>The current teams in a specified league are listed below:</p>

        <div>
        <select value={value} onChange={handleChange}>
        {leagues.map((league) => (
                <option value={league.get("name")}>{league.get("name")}</option>
        ))}
        </select>
        </div>

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