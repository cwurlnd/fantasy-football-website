import React, { useEffect, useState } from "react";
import { createLeague } from "../../Common/Services/Service";
import Form from "../Form/Form";

export default function Create() {
  const [league, setLeague] = useState();
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (league && add) {
      createLeague(league).then((newLeague) => {
        setAdd(false);
      });
    }

  }, [league, add]);

  const onClickHandler = (e) => {
    alert("League created!")
    e.preventDefault();
    setAdd(true);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setLeague(e.target.value);
  };

    return (
      <div>
      <section>
        <h1>Create a League</h1>
      </section>
      <Form onClick={onClickHandler} onChange={onChangeHandler}/>
      </div>
    );
  }