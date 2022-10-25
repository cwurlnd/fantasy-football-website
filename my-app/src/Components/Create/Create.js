import React, { useEffect, useState } from "react";
import { createLeague } from "../../Common/Services/Service";
import Form from "../Form/Form";

export default function Create() {
  const [league, setLeague] = useState();
  const [size, setSize] = useState("8");
  const [scoring, setScoring] = useState("Standard");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    console.log(size);
    if (league && add && size && scoring) {
      createLeague(league, size, scoring).then((newLeague) => {
        setAdd(false);
      });
    }
  }, [league, add, size, scoring]);

  const onClickHandler = (e) => {
    alert("League created!")
    e.preventDefault();
    setAdd(true);
  };

  const onChangeHandlerLeague = (e) => {
    e.preventDefault();
    setLeague(e.target.value);
  };

  const onChangeHandlerSize = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };

  const onChangeHandlerScoring = (e) => {
    e.preventDefault();
    setScoring(e.target.value);
  };

    return (
      <div>
      <section>
        <h1>Create a League</h1>
      </section>
      <Form onClick={onClickHandler} onChangeLeague={onChangeHandlerLeague} onChangeSize={onChangeHandlerSize} onChangeScoring={onChangeHandlerScoring}/>
      </div>
    );
  }