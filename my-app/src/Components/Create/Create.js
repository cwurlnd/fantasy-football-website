import React, { useEffect, useState } from "react";
import { createLeague } from "../../Common/Services/Service";
import Form from "../Form/Form";

export default function Create() {
  const [league, setLeague] = useState();
  const [size, setSize] = useState("8");
  const [scoring, setScoring] = useState("Standard");
  const [add, setAdd] = useState(false);

  // Actually add the league to the database
  useEffect(() => {
    if (league && add && size && scoring) {
      createLeague(league, size, scoring).then((newLeague) => {
        setAdd(false);
      });
    }
  }, [league, add, size, scoring]);

  // Handle clicking submit to add the actual league
  const onClickHandler = (e) => {
    alert("League created!")
    e.preventDefault();
    setAdd(true);
  };

  // Handle any changes in league name
  const onChangeHandlerLeague = (e) => {
    e.preventDefault();
    setLeague(e.target.value);
  };

  // Handle any changes in league size
  const onChangeHandlerSize = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };

  // Handle any changes in league scoring
  const onChangeHandlerScoring = (e) => {
    e.preventDefault();
    setScoring(e.target.value);
  };

    return (
      <div id="temp">
      <section>
        <h1>Create a League</h1>
      </section>
      <Form onClick={onClickHandler} onChangeLeague={onChangeHandlerLeague} onChangeSize={onChangeHandlerSize} onChangeScoring={onChangeHandlerScoring}/>
      </div>
    );
  }