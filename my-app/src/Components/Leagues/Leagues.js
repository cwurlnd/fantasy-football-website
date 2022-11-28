import React, { useEffect, useState } from "react";
import { getAllLeagues } from "../../Common/Services/Service";

export default function Leagues() {
  const [leagues, setLeagues] = useState([]);

  // Use service to get all the leagues
  useEffect(() => {
    getAllLeagues().then((leagues) => {
      setLeagues(leagues);
      for (var i = 0; i < 3; i++) {
        console.log(leagues[i]);
        console.log(leagues[i].get("name"));
    }
    });
  }, []);

    return (
      <section id="temp">
        <h1>Current Leagues</h1>
        <p>The current leagues created are listed below:</p>
        <div>
          {/* List the leagues */}
          {leagues.length > 0 && (
            <ul>
              {leagues.map((league) => (
                <div>
                  <span>
                    <li key={league.id}>{league.get("name")} | {league.get("size")} | {league.get("scoring")}</li>{" "}
                  </span>
                </div>
              ))}
            </ul>
          )}
        </div>
      </section>
    );
  }