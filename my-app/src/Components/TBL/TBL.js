import React, { useEffect, useState } from "react";
import { getTeamsByLeague } from "../../Common/Services/Service";

export default function TBL() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeamsByLeague("gCl5I8wiVO").then((teams) => {
      setTeams(teams);
    });
  }, []);

    return (
      <section>
        <h1>Teams by League</h1>
        <p>The current teams in a specified league are listed below:</p>
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