import React, { useEffect, useState } from "react";
import EditForm from "./EditForm";
import { editUser } from "../../Common/Services/Service";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [favoriteTeam, setFavoriteTeam] = useState("Arizona Cardinals");
  const [edit, setEdit] = useState(false);

  // Actually add the league to the database
  useEffect(() => {
    if (firstName && edit && lastName) {
      editUser(firstName, lastName, favoriteTeam).then((newLeague) => {
        alert(
            "Profile successfully edited!"
        );
        navigate("/profile");
      });
    }
  }, [firstName, lastName, favoriteTeam, edit, navigate]);

  // Handle clicking submit to add the actual league
  const onClickHandler = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  // Handle any changes in league name
  const onChangeFirstHandler = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };

  // Handle any changes in league size
  const onChangeLastHandler = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  const onChangeTeamHandler = (e) => {
    e.preventDefault();
    setFavoriteTeam(e.target.value);
  };

    return (
      <div id="temp">
      <section>
        <h1>Edit Your Profile</h1>
      </section>
      <EditForm onChangeFirst={onChangeFirstHandler} onChangeLast={onChangeLastHandler} onChangeTeam={onChangeTeamHandler} onClick={onClickHandler}/>
      </div>
    );
  }