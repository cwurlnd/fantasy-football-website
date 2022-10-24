import Child from "../Child/Child";
import React, { useEffect, useState } from "react";
import { getAllPeople } from "../../Common/Services/Service";

export default function Parent() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getAllPeople().then((people) => {
      setPeople(people);
    });
  }, []);

  return <Child people={people} />;
}
